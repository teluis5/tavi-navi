import json
import os
import sys
import time
from datetime import datetime, timedelta, timezone
from pathlib import Path
from urllib.error import HTTPError
from urllib.parse import urlencode
from urllib.request import urlopen

ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT / 'public/data/hotel-prices/rakuten.json'
HOTEL_LIST = ROOT / 'src/data/rakuten-hotels.json'
JST = timezone(timedelta(hours=9))
app_id = os.environ.get('RAKUTEN_APP_ID')
access_key = os.environ.get('RAKUTEN_ACCESS_KEY')
if not app_id or not access_key:
    sys.exit('RAKUTEN_APP_ID and RAKUTEN_ACCESS_KEY are required')

hotel_list = json.loads(HOTEL_LIST.read_text(encoding='utf-8'))
hotel_ids = []
for hotel in hotel_list:
    hotel_id = str(hotel['hotelNo'])
    if not hotel_id.isdigit() or hotel_id in hotel_ids or not hotel.get('name'):
        sys.exit('ホテル一覧の施設番号・施設名が不正、または重複しています')
    hotel_ids.append(hotel_id)

now = datetime.now(JST)
base_date = now.date()

# 直近3ヶ月（向こう12週）の水曜（平日）と土曜（休前日）をサンプリング
sample_dates = []
for week in range(12):
    week_start = base_date + timedelta(days=week * 7)
    wed = week_start + timedelta(days=(2 - week_start.weekday()) % 7)
    sat = week_start + timedelta(days=(5 - week_start.weekday()) % 7)
    if wed >= base_date and wed not in [d for d, is_we in sample_dates if not is_we]:
        sample_dates.append((wed, False))
    if sat >= base_date and sat not in [d for d, is_we in sample_dates if is_we]:
        sample_dates.append((sat, True))

# 日付順にソート
sample_dates.sort(key=lambda item: item[0])

hotels = {}
for hotel_id in sorted(hotel_ids):
    two_meals_weekday = []
    two_meals_weekend = []
    no_meals_weekday = []
    no_meals_weekend = []

    for checkin, is_weekend in sample_dates:
        params = {
            'applicationId': app_id,
            'accessKey': access_key,
            'format': 'json',
            'formatVersion': '2',
            'hotelNo': hotel_id,
            'checkinDate': checkin.isoformat(),
            'checkoutDate': (checkin + timedelta(days=1)).isoformat(),
            'adultNum': 2,
            'roomNum': 1,
            'searchPattern': 1,
            'sort': '+roomCharge',
            'hits': 30
        }
        url = 'https://openapi.rakuten.co.jp/engine/api/Travel/VacantHotelSearch/20170426?' + urlencode(params)
        try:
            with urlopen(url, timeout=30) as response:
                data = json.load(response)
        except HTTPError as error:
            if error.code == 404:
                data = {}
            else:
                raise RuntimeError(f'楽天APIの取得に失敗しました: {hotel_id} HTTP {error.code}') from None
        except Exception:
            raise RuntimeError(f'楽天APIの取得に失敗しました: {hotel_id}') from None

        for hotel_entry in data.get('hotels', []):
            for section in hotel_entry:
                for part in section.get('roomInfo', []):
                    basic_info = part.get('roomBasicInfo', {})
                    dinner_flag = basic_info.get('withDinnerFlag')
                    breakfast_flag = basic_info.get('withBreakfastFlag')

                    daily = part.get('dailyCharge', {})
                    rakuten_charge = daily.get('rakutenCharge')
                    charge_flag = daily.get('chargeFlag')
                    total = daily.get('total')

                    # 1名あたり料金の算出
                    charge_per_person = None
                    if charge_flag == 0 and rakuten_charge is not None:
                        charge_per_person = rakuten_charge
                    elif total is not None:
                        # adultNum=2 のため部屋合計を2人で等分（四捨五入）
                        charge_per_person = round(total / 2)

                    if charge_per_person is None:
                        continue

                    # 食事条件判定（1泊2食付 or 素泊まり）
                    if dinner_flag == 1 and breakfast_flag == 1:
                        if is_weekend:
                            two_meals_weekend.append(charge_per_person)
                        else:
                            two_meals_weekday.append(charge_per_person)
                    elif dinner_flag == 0 and breakfast_flag == 0:
                        if is_weekend:
                            no_meals_weekend.append(charge_per_person)
                        else:
                            no_meals_weekday.append(charge_per_person)

        time.sleep(1.1)

    hotels[hotel_id] = {
        'twoMeals': {
            'weekday': min(two_meals_weekday) if two_meals_weekday else None,
            'weekend': min(two_meals_weekend) if two_meals_weekend else None,
        },
        'noMeals': {
            'weekday': min(no_meals_weekday) if no_meals_weekday else None,
            'weekend': min(no_meals_weekend) if no_meals_weekend else None,
        }
    }

OUTPUT.parent.mkdir(parents=True, exist_ok=True)
payload = {
    'checkedAt': now.isoformat(),
    'period': {
        'start': base_date.isoformat(),
        'end': (base_date + timedelta(days=84)).isoformat()
    },
    'adults': 2,
    'rooms': 1,
    'nights': 1,
    'hotels': hotels
}
temporary = OUTPUT.with_suffix('.tmp')
temporary.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
temporary.replace(OUTPUT)
print(f'Updated {len(hotels)} hotels with 3-month sampling (twoMeals & noMeals)')

import json
import os
import re
import sys
import time
from datetime import datetime, timedelta, timezone
from pathlib import Path
from urllib.error import HTTPError
from urllib.parse import urlencode
from urllib.request import urlopen

ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT / 'public/data/hotel-prices/rakuten.json'
JST = timezone(timedelta(hours=9))
app_id = os.environ.get('RAKUTEN_APP_ID')
access_key = os.environ.get('RAKUTEN_ACCESS_KEY')
if not app_id or not access_key:
    sys.exit('RAKUTEN_APP_ID and RAKUTEN_ACCESS_KEY are required')

hotel_ids = set()
for article in (ROOT / 'src/content/articles').rglob('*.mdx'):
    hotel_ids.update(re.findall(r'hotelNo\s*:\s*["\']?(\d+)', article.read_text(encoding='utf-8')))

now = datetime.now(JST)
start = now.date() + timedelta(days=21)
dates = {label: start + timedelta(days=(weekday - start.weekday()) % 7)
         for label, weekday in [('weekday', 2), ('weekend', 5)]}
hotels = {}
for hotel_id in sorted(hotel_ids):
    prices = {}
    for label, checkin in dates.items():
        params = {'applicationId': app_id, 'accessKey': access_key, 'format': 'json',
                  'formatVersion': '2', 'hotelNo': hotel_id, 'checkinDate': checkin.isoformat(),
                  'checkoutDate': (checkin + timedelta(days=1)).isoformat(), 'adultNum': 2,
                  'roomNum': 1, 'searchPattern': 1, 'sort': '+roomCharge', 'hits': 1}
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
        charges = [(part['dailyCharge']['total'] + 1) // 2
                   for hotel in data.get('hotels', []) for section in hotel
                   for part in section.get('roomInfo', [])
                   if part.get('dailyCharge', {}).get('total') is not None]
        prices[label] = min(charges) if charges else None
        time.sleep(1.1)
    hotels[hotel_id] = prices

OUTPUT.parent.mkdir(parents=True, exist_ok=True)
payload = {'checkedAt': now.isoformat(), 'dates': {k: v.isoformat() for k, v in dates.items()},
           'adults': 2, 'rooms': 1, 'nights': 1, 'hotels': hotels}
temporary = OUTPUT.with_suffix('.tmp')
temporary.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
temporary.replace(OUTPUT)
print(f'Updated {len(hotels)} hotels')

#!/usr/bin/env python3
"""Refresh published store hours from their official store pages."""
import json
import os
import tempfile
import urllib.request
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path

STORES = [{
    'id': 'newdays-tazawako',
    'name': 'NewDays KIOSK 田沢湖駅店',
    'url': 'https://shop.jr-cross.co.jp/eki/spot/detail?code=1552496',
}]
OUTPUT = Path('public/data/store-hours')


class TableParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.cell = None
        self.text = []
        self.label = ''
        self.values = {}
        self.page_text = []

    def handle_starttag(self, tag, attrs):
        if tag in ('th', 'td'):
            self.cell = tag
            self.text = []

    def handle_data(self, data):
        self.page_text.append(data)
        if self.cell:
            self.text.append(data)

    def handle_endtag(self, tag):
        if tag != self.cell:
            return
        value = ' '.join(''.join(self.text).split())
        if tag == 'th':
            self.label = value
        elif self.label.startswith('営業時間（'):
            self.values[self.label] = value
            self.label = ''
        self.cell = None


def main():
    OUTPUT.mkdir(parents=True, exist_ok=True)
    for store in STORES:
        request = urllib.request.Request(store['url'], headers={'User-Agent': 'Mozilla/5.0 (compatible; tavi-navi-hours/1.0)'})
        with urllib.request.urlopen(request, timeout=30) as response:
            html = response.read(5_000_001)
        if len(html) > 5_000_000:
            raise ValueError('Store page exceeds size limit')
        parser = TableParser()
        parser.feed(html.decode('utf-8-sig'))
        expected = ['営業時間（平日）', '営業時間（土曜）', '営業時間（日祝）']
        if store['name'] not in ''.join(parser.page_text) or any(not parser.values.get(key) for key in expected):
            raise ValueError(f"Store page or hours could not be verified: {store['id']}")
        result = {'id': store['id'], 'name': store['name'], 'sourceUrl': store['url'], 'checkedAt': datetime.now(timezone.utc).isoformat(), 'hours': {key: parser.values[key] for key in expected}}
        if parser.values.get('営業時間（備考）'):
            result['note'] = parser.values['営業時間（備考）']
        destination = OUTPUT / f"{store['id']}.json"
        with tempfile.NamedTemporaryFile('w', encoding='utf-8', dir=OUTPUT, delete=False) as output:
            json.dump(result, output, ensure_ascii=False, separators=(',', ':'))
            output.write('\n')
            temporary = output.name
        os.replace(temporary, destination)
        print(f'Updated {destination}')


if __name__ == '__main__':
    main()

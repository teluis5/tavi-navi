#!/usr/bin/env python3
"""Fetch and normalize public GTFS feeds for the site's timetable widget."""
import csv
import hashlib
import io
import json
import os
import tempfile
import urllib.request
import zipfile
from datetime import datetime, timezone
from pathlib import Path

FEEDS = [{
    'id': 'ugokotsu-tazawako',
    'url': 'https://api.gtfs-data.jp/v2/organizations/ugokotsu/feeds/ugokotsu_tazawako/files/feed.zip',
    'publisher': '羽後交通株式会社',
    'license': 'CC BY 4.0',
    'license_url': 'https://creativecommons.org/licenses/by/4.0/',
    'selectors': ['current', 'next_1'],
}]
OUTPUT = Path('public/data/transit')


def rows(archive, name, required=True):
    try:
        with archive.open(name) as stream:
            return list(csv.DictReader(io.TextIOWrapper(stream, encoding='utf-8-sig', newline='')))
    except KeyError:
        if required:
            raise ValueError(f'GTFS file missing: {name}')
        return []


def fetch_feed(config):
    versions = []
    for selector in config['selectors']:
        url = f"{config['url']}?rid={selector}"
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'tavi-navi timetable updater/1.0'}), timeout=30) as response:
                data = response.read(20_000_001)
        except urllib.error.HTTPError as exc:
            if selector != 'current' and exc.code == 404:
                continue
            raise
        if len(data) > 20_000_000:
            raise ValueError('GTFS download exceeds size limit')
        with zipfile.ZipFile(io.BytesIO(data)) as archive:
            info = rows(archive, 'feed_info.txt')[0]
            stops = rows(archive, 'stops.txt')
            routes = rows(archive, 'routes.txt')
            trips = rows(archive, 'trips.txt')
            times = rows(archive, 'stop_times.txt')
            calendar = rows(archive, 'calendar.txt', required=False)
            exceptions = rows(archive, 'calendar_dates.txt', required=False)
            if not stops or not routes or not trips or not times or not (calendar or exceptions):
                raise ValueError('GTFS feed has incomplete timetable data')
            start, end = info.get('feed_start_date', ''), info.get('feed_end_date', '')
            if not (len(start) == len(end) == 8 and start.isdigit() and end.isdigit() and start <= end):
                raise ValueError('GTFS feed has no valid service period')
            versions.append({
                'start': start, 'end': end, 'sha256': hashlib.sha256(data).hexdigest(),
                'stops': [{'id': x['stop_id'], 'name': x['stop_name']} for x in stops],
                'routes': [{'id': x['route_id'], 'name': x.get('route_long_name') or x.get('route_short_name', '')} for x in routes],
                'trips': [{'id': x['trip_id'], 'route': x['route_id'], 'service': x['service_id'], 'headsign': x.get('trip_headsign', '')} for x in trips],
                'times': [{'trip': x['trip_id'], 'stop': x['stop_id'], 'sequence': int(x['stop_sequence']), 'arrival': x['arrival_time'], 'departure': x['departure_time'], 'pickup': x.get('pickup_type', '0') or '0', 'dropoff': x.get('drop_off_type', '0') or '0'} for x in times],
                'calendar': calendar, 'exceptions': exceptions,
            })
    return {'id': config['id'], 'publisher': config['publisher'], 'license': config['license'], 'licenseUrl': config['license_url'], 'sourceUrl': config['url'], 'checkedAt': datetime.now(timezone.utc).isoformat(), 'versions': versions}


def main():
    OUTPUT.mkdir(parents=True, exist_ok=True)
    for config in FEEDS:
        result = fetch_feed(config)
        destination = OUTPUT / f"{config['id']}.json"
        with tempfile.NamedTemporaryFile('w', encoding='utf-8', dir=OUTPUT, delete=False) as out:
            json.dump(result, out, ensure_ascii=False, separators=(',', ':'))
            out.write('\n')
            temporary = out.name
        os.replace(temporary, destination)
        print(f"Updated {destination}: " + ', '.join(f"{v['start']}-{v['end']}" for v in result['versions']))


if __name__ == '__main__':
    main()

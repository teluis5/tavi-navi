import { DOKOKANI_STATIONS } from './dokokanibyun';

// 東京方面からの順。未掲載駅は含まない。
export const DOKOKANI_LINES = [
  { id: 'tohoku', name: '東北', color: '#00746f', accent: '#00958f', tint: '#e7f5f3', stations: ['koriyama', 'fukushima', 'sendai', 'ichinoseki', 'shinhanamaki', 'morioka', 'hachinohe', 'shinaomori'] },
  { id: 'akita', name: '秋田', color: '#b3003b', accent: '#d10044', tint: '#fcecf1', stations: ['shizukuishi', 'tazawako', 'kakunodate', 'omagari', 'akita'] },
  { id: 'yamagata', name: '山形', color: '#3c2f81', accent: '#3c2f81', tint: '#f0eef9', stations: ['yonezawa', 'kaminoyama-onsen', 'yamagata', 'oishida', 'shinjo'] },
  { id: 'joetsu', name: '上越', color: '#805326', accent: '#ab743b', tint: '#f9f1e8', stations: ['jomorekogen', 'echigoyuzawa', 'tsubamesanjo', 'niigata'] },
  { id: 'hokuriku', name: '北陸', color: '#00299f', accent: '#00299f', tint: '#edf1fc', stations: ['karuizawa', 'sakudaira', 'ueda', 'nagano', 'iiyama', 'joetsumyoko'] },
].map((line) => ({
  ...line,
  items: line.stations.map((id) => {
    const station = DOKOKANI_STATIONS.find((item) => item.id === id);
    if (!station) throw new Error(`Unknown station: ${id}`);
    return station;
  }),
}));

export const stationUrl = (id: string) => `/special/dokokanibyun/station/${id}/`;

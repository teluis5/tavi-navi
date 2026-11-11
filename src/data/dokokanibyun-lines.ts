import { DOKOKANI_STATIONS } from './dokokanibyun';

// 東京方面からの順。未掲載駅は含まない。
export const DOKOKANI_LINES = [
  { id: 'tohoku', name: '東北', stations: ['koriyama', 'fukushima', 'sendai', 'ichinoseki', 'shinhanamaki', 'morioka', 'hachinohe', 'shinaomori'] },
  { id: 'akita', name: '秋田', stations: ['shizukuishi', 'tazawako', 'kakunodate', 'omagari', 'akita'] },
  { id: 'yamagata', name: '山形', stations: ['yonezawa', 'kaminoyama-onsen', 'yamagata', 'oishida', 'shinjo'] },
  { id: 'joetsu', name: '上越', stations: ['jomorekogen', 'echigoyuzawa', 'tsubamesanjo', 'niigata'] },
  { id: 'hokuriku', name: '北陸', stations: ['karuizawa', 'sakudaira', 'ueda', 'nagano', 'iiyama', 'joetsumyoko'] },
].map((line) => ({
  ...line,
  items: line.stations.map((id) => {
    const station = DOKOKANI_STATIONS.find((item) => item.id === id);
    if (!station) throw new Error(`Unknown station: ${id}`);
    return station;
  }),
}));

export const stationUrl = (id: string) => `/special/dokokanibyun/station/${id}/`;

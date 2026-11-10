// スポット & クラスタのデータ（SSOT）
// - スポット: 個別の案内ページ /spot/<id>/
// - クラスタ: 同種スポットのまとめページ /cluster/<id>/（例: 乳頭温泉郷の温泉宿）
// ※ status: 'preview' のデータは土台確認用。公開前に現地情報で必ず裏取りすること。

export interface SpotAmenity {
  icon: string;
  label: string;
  type?: 'safe' | 'info' | 'warning';
}

export interface SpotAccess {
  from: string;        // 起点（例: "JR田沢湖駅"）
  method: string;      // 手段と所要（例: "路線バス 約40分"）
  specs?: string[];    // 本数・運賃・注意点など実用ディテール
}

export interface Spot {
  id: string;
  title: string;
  prefId: string;               // prefectures.ts の id
  clusterId?: string;
  category: string;             // 例: "温泉宿"
  catchphrase: string;
  summary: string;
  points: string[];             // 厳選見どころ（最大3）
  amenities?: SpotAmenity[];
  access?: SpotAccess;
  caution?: string;
  mapQuery: string;             // Googleマップ検索クエリ（住所推奨）
  image?: string;
  courseUrl?: string;           // 関連モデルコース
  status?: 'preview' | 'published';
}

export interface Cluster {
  id: string;
  title: string;
  prefId: string;
  catchphrase: string;
  summary: string;
  mapQuery: string;
  spotIds: string[];            // 表示順
  tips?: string[];              // 選び方のコツ
  access?: SpotAccess;          // エリア共通アクセス
  image?: string;
  status?: 'preview' | 'published';
}

export const spots: Spot[] = [
  {
    id: 'tsurunoyu',
    title: '鶴の湯温泉',
    prefId: 'akita',
    clusterId: 'nyuto-onsen-inns',
    category: '温泉宿',
    catchphrase: '茅葺の本陣と乳白色の湯。乳頭温泉郷の代名詞',
    summary: '乳頭温泉郷を代表する一軒宿。乳白色の湯と茅葺屋根の建物が象徴的。',
    points: ['乳白色の混浴露天風呂（女性専用時間帯あり）', '茅葺の長屋風客室で湯治宿の雰囲気を味わえる', '日帰り入浴は時間・料金を事前に要確認'],
    amenities: [
      { icon: '♨', label: '乳白色の湯', type: 'info' },
      { icon: '🚌', label: 'バス＋送迎要確認', type: 'warning' },
    ],
    caution: '冬季は積雪が多く、アクセス手段と所要時間が変わる。事前に公式情報を確認。',
    mapQuery: '鶴の湯温泉 秋田県仙北市田沢湖田沢字先達沢国有林50',
    status: 'preview',
  },
  {
    id: 'kuroyu',
    title: '黒湯温泉',
    prefId: 'akita',
    clusterId: 'nyuto-onsen-inns',
    category: '温泉宿',
    catchphrase: '茅葺屋根の湯治宿。渓流沿いの静かな一軒',
    summary: '渓流沿いにたたずむ茅葺屋根の湯治宿。素朴で静かな滞在向き。',
    points: ['渓流沿いの露天風呂で自然に包まれる', '素朴な湯治宿の雰囲気', '混雑時間を避けて静かに入浴しやすい'],
    amenities: [{ icon: '♨', label: '湯治宿', type: 'info' }],
    mapQuery: '黒湯温泉 秋田県仙北市田沢湖田沢字先達沢国有林',
    status: 'preview',
  },
  {
    id: 'kanibaonsen',
    title: '蟹場温泉',
    prefId: 'akita',
    clusterId: 'nyuto-onsen-inns',
    category: '温泉宿',
    catchphrase: 'ブナ林に抱かれた露天風呂。散策と組み合わせやすい',
    summary: 'ブナ林の中にある温泉宿。自然散策と合わせて立ち寄りやすい。',
    points: ['ブナの森に囲まれた露天風呂', '郷内でも比較的バス停から近い', '日帰り入浴の可否・時間は要確認'],
    amenities: [{ icon: '♨', label: '露天風呂', type: 'info' }],
    mapQuery: '蟹場温泉 秋田県仙北市田沢湖田沢字先達沢国有林',
    status: 'preview',
  },
  {
    id: 'myounoyu',
    title: '妙乃湯',
    prefId: 'akita',
    clusterId: 'nyuto-onsen-inns',
    category: '温泉宿',
    catchphrase: '設備が整った、初めての乳頭温泉郷に選びやすい宿',
    summary: '館内設備が整い、初めての乳頭温泉郷で泊まりやすい宿。',
    points: ['落ち着いた和の館内で滞在しやすい', '温泉の個性が異なる宿を巡る拠点に', '予約は早めに（要確認）'],
    amenities: [{ icon: '🛏', label: '設備充実', type: 'safe' }],
    mapQuery: '妙乃湯 秋田県仙北市田沢湖田沢字先達沢国有林',
    status: 'preview',
  },
];

export const clusters: Cluster[] = [
  {
    id: 'nyuto-onsen-inns',
    title: '乳頭温泉郷の温泉宿',
    prefId: 'akita',
    catchphrase: '秘湯の宿が点在する、東北屈指の温泉郷。1軒ずつ違う湯を選ぶ',
    summary: '田沢湖の奥、乳頭山の麓に宿が点在する温泉郷。宿ごとに湯の色や雰囲気が異なるため、目的別に選ぶのがコツ。',
    mapQuery: '乳頭温泉郷 秋田県仙北市',
    spotIds: ['tsurunoyu', 'kuroyu', 'kanibaonsen', 'myounoyu'],
    tips: [
      '象徴的な景色を求めるなら茅葺の鶴の湯',
      '静けさ重視なら渓流沿いの黒湯',
      '設備や快適さ重視なら館内設備が整った宿',
      '宿同士は離れているため、移動手段（バス本数）を先に確認',
    ],
    access: {
      from: 'JR田沢湖駅',
      method: '路線バス 約40分',
      specs: ['本数は少ない。時刻表を必ず事前確認', '冬季は運行・所要が変わる場合あり'],
    },
    status: 'preview',
  },
];

export const spotMap = new Map(spots.map((s) => [s.id, s]));
export const clusterMap = new Map(clusters.map((c) => [c.id, c]));
export const getClusterSpots = (c: Cluster): Spot[] =>
  c.spotIds.map((id) => spotMap.get(id)).filter((s): s is Spot => !!s);

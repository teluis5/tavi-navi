export interface City {
  id: string; // e.g. "furano", "sapporo", "atami", "yokohama"
  nameJa: string;
  nameEn: string;
  prefId: string; // Matches Prefecture.id
  region: string;
  catchphraseJa: string;
  catchphraseEn: string;
  highlightsJa: string[];
  highlightsEn: string[];
  accessJa: string;
  accessEn: string;
  bestMonths: number[]; // 1..12
}

export const CITIES: City[] = [
  // 北海道 (Hokkaido)
  {
    id: 'furano',
    nameJa: '富良野',
    nameEn: 'Furano',
    prefId: 'hokkaido',
    region: 'hokkaido-tohoku',
    catchphraseJa: '紫のラベンダー畑とパッチワークの丘が広がる初夏の絶景の街',
    catchphraseEn: 'World-famous for rolling purple lavender fields and alpine countryside',
    highlightsJa: ['ファーム富田', '富良野チーズ工房', '富良野・美瑛ノロッコ号', 'ふらのワイン'],
    highlightsEn: ['Farm Tomita', 'Furano Cheese Factory', 'Norokko Scenic Train', 'Furano Wine'],
    accessJa: '旭川空港から直行バス「ふらの号」で約1時間。札幌駅からは特急ライラック＋富良野線（または夏季臨時特急フラノラベンダーエクスプレス）。',
    accessEn: '1 hr by Lavender Bus from Asahikawa Airport. Scenic JR express train from Sapporo during peak summer.',
    bestMonths: [6, 7, 8, 12, 1, 2],
  },
  {
    id: 'biei',
    nameJa: '美瑛',
    nameEn: 'Biei',
    prefId: 'hokkaido',
    region: 'hokkaido-tohoku',
    catchphraseJa: '四季彩の丘と青い池。息をのむ丘陵美が続く「日本で最も美しい村」',
    catchphraseEn: 'Dramatic rolling hills, Shikisai-no-Oka flower fields, and the magical Blue Pond',
    highlightsJa: ['白金青い池', '四季彩の丘', 'パッチワークの路', '白ひげの滝'],
    highlightsEn: ['Shirogane Blue Pond', 'Shikisai-no-Oka', 'Patchwork Road', 'Shirahige Waterfall'],
    accessJa: '旭川駅からJR富良野線で約35分。美瑛駅発着の美遊バス（定期観光バス）が車なし旅行に便利。',
    accessEn: '35 mins by JR Furano Line from Asahikawa Station. Sightseeing loop buses operate from Biei Station.',
    bestMonths: [6, 7, 8, 9, 10],
  },
  {
    id: 'sapporo',
    nameJa: '札幌',
    nameEn: 'Sapporo',
    prefId: 'hokkaido',
    region: 'hokkaido-tohoku',
    catchphraseJa: '時計台・大通公園・絶品味噌ラーメン。北の大地の活気あふれる美食の都',
    catchphraseEn: 'Vibrant capital featuring Sapporo Snow Festival, lively ramen alleys, and beer gardens',
    highlightsJa: ['さっぽろ雪まつり', '大通公園', 'すすきの・ラーメン横丁', 'モエレ沼公園'],
    highlightsEn: ['Sapporo Snow Festival', 'Odori Park', 'Susukino Ramen Alleys', 'Moerenuma Park'],
    accessJa: '新千歳空港からJR快速エアポートで最速33分。地下鉄3路線と市電で車なし観光が快適。',
    accessEn: '33 mins by JR Rapid Airport train from New Chitose Airport. Excellent subway and tram network.',
    bestMonths: [1, 2, 6, 7, 8, 10],
  },
  {
    id: 'otaru',
    nameJa: '小樽',
    nameEn: 'Otaru',
    prefId: 'hokkaido',
    region: 'hokkaido-tohoku',
    catchphraseJa: 'ガス灯揺れる小樽運河と硝子工芸。レトロな石造り倉庫街を歩くロマンの港町',
    catchphraseEn: 'Historic stone warehouse canal, glowing gas lamps, artisan glassworks, and pristine sushi',
    highlightsJa: ['小樽運河', '北一硝子', 'オルゴール堂', '小樽寿司屋通り'],
    highlightsEn: ['Otaru Canal', 'Kitaichi Glass', 'Otaru Music Box Museum', 'Sushiya-dori Avenue'],
    accessJa: '札幌駅からJR快速エアポートで約32分。小樽駅から運河まで徒歩10分。',
    accessEn: '32 mins by JR Rapid Airport from Sapporo Station. 10 mins walk from Otaru Station to the canal.',
    bestMonths: [2, 5, 6, 7, 8, 10, 12],
  },
  {
    id: 'shakotan',
    nameJa: '積丹',
    nameEn: 'Shakotan',
    prefId: 'hokkaido',
    region: 'hokkaido-tohoku',
    catchphraseJa: '「積丹ブルー」の断崖絶壁と、6月〜8月解禁の極上生ウニ丼',
    catchphraseEn: 'Breathtaking cobalt blue capes and world-famous seasonal sea urchin (uni) feasts',
    highlightsJa: ['神威岬', '島武意海岸', '積丹生ウニ丼', '水中展望船ニューしゃこたん号'],
    highlightsEn: ['Cape Kamui', 'Shimamui Coast', 'Shakotan Raw Uni Bowls', 'Glass-bottom Boat Cruise'],
    accessJa: '小樽駅から中央バス「積丹線・高速しゃこたん号」で約1時間40分〜2時間。',
    accessEn: 'Direct highway express bus from Otaru Station (approx. 1 hr 45 mins). Scenic coastal drive.',
    bestMonths: [6, 7, 8],
  },

  // 静岡県 (Shizuoka)
  {
    id: 'atami',
    nameJa: '熱海',
    nameEn: 'Atami',
    prefId: 'shizuoka',
    region: 'chubu',
    catchphraseJa: '東京から新幹線45分！海を望む名湯、熱海海上花火大会、MOA美術館の温泉リゾート',
    catchphraseEn: '45 mins from Tokyo by Shinkansen! Year-round coastal fireworks, hot spring onsen, and seaside cafes',
    highlightsJa: ['熱海温泉・露天風呂', '熱海海上花火大会', 'MOA美術館', '来宮神社大楠'],
    highlightsEn: ['Atami Seaside Onsen', 'Atami Coastal Fireworks', 'MOA Museum of Art', 'Kinomiya Shrine Camphor Tree'],
    accessJa: '東京駅から東海道新幹線「こだま」で約45分、「ひかり」で約35分。熱海駅から商店街直結。',
    accessEn: '45 mins from Tokyo Station via Tokaido Shinkansen Kodama. 35 mins on Hikari trains.',
    bestMonths: [1, 2, 7, 8, 11, 12],
  },
  {
    id: 'mishima',
    nameJa: '三島',
    nameEn: 'Mishima',
    prefId: 'shizuoka',
    region: 'chubu',
    catchphraseJa: '富士山伏流水のせせらぎ、三嶋大社、そして名物「三島うなぎ」と三島スカイウォーク',
    catchphraseEn: 'Crystal Mt. Fuji spring waters, Mishima Taisha Shrine, gourmet grilled eel, and Japan\'s longest suspension bridge',
    highlightsJa: ['三嶋大社', '源兵衛川せせらぎ散策', '三島スカイウォーク', '三島名物うなぎ'],
    highlightsEn: ['Mishima Taisha Shrine', 'Genbe River Boardwalk', 'Mishima Skywalk', 'Mishima Char-grilled Eel'],
    accessJa: '熱海駅からJR東海道本線で15分、東京駅から東海道新幹線で約50分。',
    accessEn: '15 mins by local train from Atami. Approx. 50 mins from Tokyo by Shinkansen.',
    bestMonths: [3, 4, 5, 10, 11],
  },
  {
    id: 'izu',
    nameJa: '伊豆',
    nameEn: 'Izu',
    prefId: 'shizuoka',
    region: 'chubu',
    catchphraseJa: '早咲きの河津桜、修善寺温泉の竹林の小径、城ヶ崎海岸の絶景吊り橋',
    catchphraseEn: 'Early pink Kawazu cherry blossoms, Shuzenji Onsen bamboo paths, and rugged coastal suspension bridges',
    highlightsJa: ['修善寺温泉・竹林の小径', '城ヶ崎海岸・門脇吊橋', '河津桜まつり', '堂ヶ島天窓洞'],
    highlightsEn: ['Shuzenji Bamboo Grove', 'Jogasaki Coast Suspension Bridge', 'Kawazu Cherry Blossom Festival', 'Dogashima Sea Caves'],
    accessJa: '東京駅から特急踊り子号で直通約2時間。伊豆急行線・伊豆箱根鉄道で周遊可能。',
    accessEn: 'Direct "Odoriko" Limited Express from Tokyo Station (approx. 2 hrs).',
    bestMonths: [2, 3, 5, 8, 11],
  },

  // 神奈川県 (Kanagawa)
  {
    id: 'yokohama',
    nameJa: '横浜',
    nameEn: 'Yokohama',
    prefId: 'kanagawa',
    region: 'kanto',
    catchphraseJa: 'みなとみらいの夜景・山下公園の海風・黄金イチョウ並木。車なしで快適に歩ける国際港町',
    catchphraseEn: 'Minato Mirai bay skyline, seaside strolls along Yamashita Park, and vibrant Chinatown',
    highlightsJa: ['日本大通りイチョウ並木', '山下公園', '横浜中華街', '赤レンガ倉庫'],
    highlightsEn: ['Nihon-odori Ginkgo Avenue', 'Yamashita Seaside Park', 'Yokohama Chinatown', 'Red Brick Warehouse'],
    accessJa: '渋谷駅から東急東横線・みなとみらい線特急で直通約30分。段差のないバリアフリールート完備。',
    accessEn: '30 mins direct from Shibuya Station via Tokyu Toyoko / Minatomirai Line.',
    bestMonths: [4, 5, 10, 11, 12],
  },
  {
    id: 'kamakura',
    nameJa: '鎌倉',
    nameEn: 'Kamakura',
    prefId: 'kanagawa',
    region: 'kanto',
    catchphraseJa: '高徳院の大仏・江ノ電の絶景・四季折々の古寺巡りと紅葉・アジサイの名所',
    catchphraseEn: 'Historic Great Buddha, vintage Enoden coastal train, and hidden temples blooming with hydrangeas & autumn maples',
    highlightsJa: ['鎌倉大仏（高徳院）', '長谷寺（アジサイ・紅葉）', '鶴岡八幡宮', '小町通り食べ歩き'],
    highlightsEn: ['Great Buddha of Kamakura', 'Hase-dera Temple', 'Tsurugaoka Hachimangu', 'Komachi-dori Street'],
    accessJa: '東京駅からJR横須賀線で約55分。江ノ電で湘南・江の島へ連絡。',
    accessEn: '55 mins from Tokyo Station on JR Yokosuka Line. Classic Enoden tram to Enoshima.',
    bestMonths: [3, 4, 6, 11, 12],
  },
  {
    id: 'hakone',
    nameJa: '箱根',
    nameEn: 'Hakone',
    prefId: 'kanagawa',
    region: 'kanto',
    catchphraseJa: 'ロマンスカーで新宿から約80分！大涌谷の黒たまご・芦ノ湖の海賊船・極上温泉旅館',
    catchphraseEn: '80 mins from Shinjuku by Romancecar! Volcanic Owakudani, Lake Ashi pirate ships, and world-class ryokans',
    highlightsJa: ['大涌谷・黒たまご', '芦ノ湖・箱根海賊船', '箱根神社水中鳥居', '箱根登山鉄道・ケーブルカー'],
    highlightsEn: ['Owakudani Volcanic Valley', 'Lake Ashi Pirate Sightseeing Cruise', 'Hakone Shrine Floating Torii', 'Hakone Tozan Mountain Railway'],
    accessJa: '新宿駅から小田急ロマンスカーで箱根湯本駅まで直通約85分。箱根フリーパスで乗り降り自由。',
    accessEn: '85 mins direct from Shinjuku Station via Odakyu Romancecar. Free Pass covers all transit.',
    bestMonths: [4, 5, 8, 10, 11],
  },

  // 東京都 (Tokyo)
  {
    id: 'shinjuku',
    nameJa: '新宿',
    nameEn: 'Shinjuku',
    prefId: 'tokyo',
    region: 'kanto',
    catchphraseJa: '巨大ターミナル・摩天楼・新宿御苑の四季の庭園美。都市と自然が融合する大歓楽街',
    catchphraseEn: 'Skyscraper views, vibrant entertainment districts, and the peaceful gardens of Shinjuku Gyoen',
    highlightsJa: ['新宿御苑', '東京都庁展望室', '新宿中央公園', '歌舞伎町'],
    highlightsEn: ['Shinjuku Gyoen National Garden', 'Tokyo Metropolitan Gov Building Observatories', 'Shinjuku Central Park', 'Kabukicho'],
    accessJa: 'JR山手線・中央線、東京メトロ丸ノ内線など多数の路線が乗り入れる世界最大のターミナル。',
    accessEn: 'World\'s busiest transit hub connecting JR Yamanote Line, Shinjuku Express buses, and subway lines.',
    bestMonths: [3, 4, 10, 11, 12],
  },
  {
    id: 'minato',
    nameJa: '港区・青山',
    nameEn: 'Minato & Aoyama',
    prefId: 'tokyo',
    region: 'kanto',
    catchphraseJa: '神宮外苑いちょう並木・東京タワー・六本木。都会の洗練と黄金の秋絶景',
    catchphraseEn: 'Iconic Meiji Jingu Gaien golden ginkgo avenue, Tokyo Tower, and Roppongi art scene',
    highlightsJa: ['明治神宮外苑いちょう並木', '東京タワー', '六本木ヒルズ展望台', '芝公園'],
    highlightsEn: ['Meiji Jingu Gaien Ginkgo Avenue', 'Tokyo Tower', 'Roppongi Hills Mori Tower', 'Shiba Park'],
    accessJa: '東京メトロ銀座線・半蔵門線「青山一丁目駅」または都営大江戸線「国立競技場駅」すぐ。',
    accessEn: 'Direct access via Tokyo Metro Ginza / Hanzomon Line (Aoyama-itchome Station).',
    bestMonths: [4, 5, 10, 11, 12],
  },

  // 京都府 (Kyoto)
  {
    id: 'kyoto-arashiyama',
    nameJa: '嵐山',
    nameEn: 'Arashiyama',
    prefId: 'kyoto',
    region: 'kansai',
    catchphraseJa: '渡月橋・竹林の小径・嵯峨野トロッコ列車。千年の歴史が息づく京都西郊の景勝地',
    catchphraseEn: 'Historic Togetsukyo Bridge, towering Sagano Bamboo Grove, and romantic scenic train rides along the river',
    highlightsJa: ['渡月橋', '嵯峨野竹林の小径', '天龍寺雲龍図', '嵯峨野トロッコ列車・保津川下り'],
    highlightsEn: ['Togetsukyo Bridge', 'Sagano Bamboo Forest', 'Tenryu-ji Temple World Heritage Garden', 'Sagano Romantic Train'],
    accessJa: '京都駅からJR山陰本線（嵯峨野線）快速で嵯峨嵐山駅まで約12分。阪急嵐山線・嵐電でも直結。',
    accessEn: '12 mins from Kyoto Station via JR Sagano Line to Saga-Arashiyama Station. Hankyu and Randen tram access.',
    bestMonths: [3, 4, 6, 11, 12],
  },
];

export function getCitiesByPrefecture(prefId: string): City[] {
  return CITIES.filter((c) => c.prefId === prefId);
}

export function getCityById(cityId: string): City | undefined {
  return CITIES.find((c) => c.id === cityId);
}

export interface PeriodHighlight {
  highlights: string[];
  tips: string;
}

export interface MonthTheme {
  month: number;
  monthNameEn: string;
  monthShortEn: string;
  nameJa: string;
  seasonType: 'spring' | 'summer' | 'autumn' | 'winter';
  icon: string;
  taglineJa: string;
  taglineEn: string;
  descriptionJa: string;
  descriptionEn: string;
  earlyPeriodJa: PeriodHighlight;
  midPeriodJa: PeriodHighlight;
  latePeriodJa: PeriodHighlight;
  earlyPeriodEn: PeriodHighlight;
  midPeriodEn: PeriodHighlight;
  latePeriodEn: PeriodHighlight;
  topPrefectures: string[]; // Prefecture IDs
}

export const MONTHLY_THEMES: MonthTheme[] = [
  {
    month: 1,
    monthNameEn: 'January',
    monthShortEn: 'Jan',
    nameJa: '1月',
    seasonType: 'winter',
    icon: '🎍',
    taglineJa: '初詣・白銀の雪景色・冬の味覚と湯治温泉',
    taglineEn: 'New Year Shrines, Powder Snow & Winter Onsen Retreats',
    descriptionJa: '1年は厳かな初詣と極上温泉からスタート。パウダースノーのスキーリゾートや冬の蟹・地酒が旬を迎えます。',
    descriptionEn: 'Start the year with historic shrine visits, world-class powder snow in the mountains, and steaming hot pot onsen feasts.',
    earlyPeriodJa: {
      highlights: ['全国名社寺の初詣・新春祭礼', '日本海側のズワイガニ・寒ブリ漁最盛期', 'スキー場パウダースノー本格シーズン'],
      tips: '三が日は寺社周辺の交通規制と新幹線・高速のUターンラッシュに注意。'
    },
    midPeriodJa: {
      highlights: ['蔵王・八甲田の樹氷（スノーモンスター）', '白川郷合掌造り雪景色ライトアップ', '冬の澄んだ夜空の星空観察'],
      tips: '寒波襲来時は防寒インナー・防水防滑ブーツ・カイロが必携。'
    },
    latePeriodJa: {
      highlights: ['沖縄の日本一早い桜（寒緋桜）開花', '支笏湖氷濤まつり開幕', '温泉街の雪見露天風呂めぐり'],
      tips: '山間部や豪雪地帯への移動はスタッドレスタイヤ必須。新幹線移動が最も安全。'
    },
    earlyPeriodEn: {
      highlights: ['New Year shrine visits (Hatsumode) across major temples', 'Peak winter snow crab and yellowtail feasts', 'Full opening of ski & snowboard powder resorts'],
      tips: 'Major shrines and transport hubs are crowded during the first 3 days of January.'
    },
    midPeriodEn: {
      highlights: ['Zao "Snow Monsters" (ice-covered frozen trees)', 'Shirakawa-go historic snow village illuminations', 'Crystal-clear winter stargazing in alpine valleys'],
      tips: 'Layered thermal clothing, slip-resistant snow boots, and windbreakers are mandatory.'
    },
    latePeriodEn: {
      highlights: ['Okinawa\'s earliest cherry blossom festival (Kanhi-zakura)', 'Lake Shikotsu Ice Festival opening in Hokkaido', 'Scenic open-air hot spring baths surrounded by snow'],
      tips: 'Rail travel via Shinkansen is vastly safer than winter highway driving in snowy regions.'
    },
    topPrefectures: ['hokkaido', 'nagano', 'yamagata', 'gifu', 'okinawa']
  },
  {
    month: 2,
    monthNameEn: 'February',
    monthShortEn: 'Feb',
    nameJa: '2月',
    seasonType: 'winter',
    icon: '❄️',
    taglineJa: 'さっぽろ雪まつり・早咲き河津桜・冬の絶景ピーク',
    taglineEn: 'Sapporo Snow Festival, Early Kawazu Cherry Blossoms & Ice Wonders',
    descriptionJa: '真冬の寒さが極まる2月は、大迫力の氷雪まつりと、一足早い春を告げるピンクの早咲き桜が共演するドラマチックな月。',
    descriptionEn: 'Midwinter brings magnificent ice sculptures in the north and charming pink early cherry blossoms along warm southern coasts.',
    earlyPeriodJa: {
      highlights: ['さっぽろ雪まつり（大通公園大雪像）', '伊豆・河津桜まつり開幕（早咲きの濃いピンク桜）', '知床半島の流氷接岸'],
      tips: '札幌雪まつり期間中は市内ホテルが早期満室。予約はお早めに。'
    },
    midPeriodJa: {
      highlights: ['熱海梅園梅まつり見頃ピーク', '十和田湖冬物語', '越前ガニ・松葉ガニの最終旬期'],
      tips: '伊豆の河津桜まつり周辺は国道135号線が渋滞。伊豆急行線の電車アクセスが吉。'
    },
    latePeriodJa: {
      highlights: ['水戸偕楽園梅まつり開幕', '秋田・角館の火振りかまくら', '残雪富士山と青空の絶景ドライブ'],
      tips: '日差しが少しずつ春めくものの、朝晩の冷え込みは厳しいので防寒コートを。'
    },
    earlyPeriodEn: {
      highlights: ['Sapporo Snow Festival giant snow sculptures', 'Kawazu Cherry Blossom Festival opening in Izu', 'Drift ice approaching the Shiretoko Peninsula coast'],
      tips: 'Book Sapporo hotels months in advance during the Snow Festival.'
    },
    midPeriodEn: {
      highlights: ['Atami Plum Garden blossoms peak', 'Lake Towada Winter Story celebrations', 'Final prime season for Echizen and Matsuba snow crabs'],
      tips: 'Take scenic Izu Kyuko trains to Kawazu to avoid heavy coastal road jams.'
    },
    latePeriodEn: {
      highlights: ['Mito Kairakuen Plum Festival opening', 'Akita Kakunodate snow lantern festivals', 'Clear winter panoramas of snow-capped Mount Fuji'],
      tips: 'Days feel slightly warmer, but temperatures still drop near freezing after sunset.'
    },
    topPrefectures: ['hokkaido', 'shizuoka', 'aomori', 'kanagawa', 'ibaraki']
  },
  {
    month: 3,
    monthNameEn: 'March',
    monthShortEn: 'Mar',
    nameJa: '3月',
    seasonType: 'spring',
    icon: '🌸',
    taglineJa: '春の息吹・桜前線北上スタート・菜の花畑と卒業旅行',
    taglineEn: 'Spring Blossoms, Cherry Blossom Front & Golden Rapeseed Fields',
    descriptionJa: '南から桜前線がスタート！黄色い菜の花畑と淡い桜のコントラスト、春の味覚（山菜・初カツオ・イチゴ狩り）が楽しめます。',
    descriptionEn: 'The cherry blossom front sweeps north across Japan. Celebrate spring with fresh strawberries, coastal seafood, and blooming flower fields.',
    earlyPeriodJa: {
      highlights: ['房総半島・伊豆の菜の花畑満開', '旬のいちご狩り食べ比べツアー', '東大寺お水取り（春を告げる修二会）'],
      tips: '三寒四温で気温差が激しい時期。脱ぎ着しやすいスプリングコートを。'
    },
    midPeriodJa: {
      highlights: ['九州・四国・東京の桜開花宣言', '春分の日連休の温泉旅行', '富山湾のホタルイカ漁解禁'],
      tips: '春休みの旅行シーズン突入。新幹線・飛行機の指定席予約を早めに。'
    },
    latePeriodJa: {
      highlights: ['東京・京都・大阪の桜（ソメイヨシノ）満開ピーク', '目黒川・千鳥ヶ淵のお花見散策', '嵐山・清水寺の春の夜間特別拝観'],
      tips: '花見名所は人出がピーク。朝9時前の散策がゆったり撮影できておすすめ。'
    },
    earlyPeriodEn: {
      highlights: ['Boso and Izu Peninsula vibrant yellow rapeseed fields', 'Spring strawberry picking experiences', 'Nara Todai-ji "Omizutori" sacred fire ritual'],
      tips: 'Weather fluctuates between sunny warmth and chilly winds; dress in layers.'
    },
    midPeriodEn: {
      highlights: ['Cherry blossom opening announcements in Tokyo & Kyoto', 'Spring equinox weekend retreats', 'Toyama Bay bioluminescent firefly squid season'],
      tips: 'Spring school break begins; book bullet train tickets early.'
    },
    latePeriodEn: {
      highlights: ['Peak Sakura bloom across Tokyo, Kyoto & Osaka', 'Meguro River & Chidorigafuchi cherry blossom walks', 'Illuminated evening cherry blossom viewings at Kyoto temples'],
      tips: 'Popular blossom spots get crowded; early morning walks before 9 AM are magical.'
    },
    topPrefectures: ['tokyo', 'kyoto', 'shizuoka', 'nara', 'toyama']
  },
  {
    month: 4,
    monthNameEn: 'April',
    monthShortEn: 'Apr',
    nameJa: '4月',
    seasonType: 'spring',
    icon: '🌿',
    taglineJa: '東北の桜満開・立山黒部アルペンルート雪の大谷・新緑',
    taglineEn: 'Tohoku Cherry Blossom Peaks, Tateyama Snow Walls & Fresh Greenery',
    descriptionJa: '桜前線は東北・北海道へ！立山黒部アルペンルートの巨大雪壁が開通し、爽やかな新緑と春の絶景が日本中を彩ります。',
    descriptionEn: 'Sakura reaches northern Tohoku and Hokkaido while the Tateyama Kurobe Alpine Route opens with towering 20-meter snow walls.',
    earlyPeriodJa: {
      highlights: ['京都・嵐山と吉野山（奈良）の千本桜', '東京・近郊の新緑とつつじ祭り', '春の京都・鴨川沿いのお散歩'],
      tips: '新年度スタートで平日観光地は比較的落ち着いた穴場タイミング。'
    },
    midPeriodJa: {
      highlights: ['立山黒部アルペンルート「雪の大谷」開通（高さ20mの雪壁）', '弘前公園・角館の桜満開ピーク', 'あしかがフラワーパークの大藤まつり開幕'],
      tips: '雪の大谷は標高2,400mの極寒。真冬のダウンジャケット・サングラスが必須。'
    },
    latePeriodJa: {
      highlights: ['ゴールデンウィーク（GW）スタート', '北海道（函館・松前・札幌）の桜開花・満開', '国営ひたち海浜公園のネモフィラブルーの丘'],
      tips: 'GW期間中は高速道路・新幹線が年間最大の混雑。公共交通機関利用推奨。'
    },
    earlyPeriodEn: {
      highlights: ['Mount Yoshino (Nara) 30,000 mountain cherry blossoms', 'Tokyo Azalea festivals & fresh emerald leaves', 'Kyoto Kamogawa riverside strolls'],
      tips: 'Early April weekdays offer tranquil travel after the peak school holiday week.'
    },
    midPeriodEn: {
      highlights: ['Tateyama Kurobe Alpine Route "Snow Wall" grand opening (20m ice canyon)', 'Hirosaki Castle & Kakunodate cherry blossoms in full peak', 'Ashikaga Flower Park legendary Great Wisteria Festival opening'],
      tips: 'The Snow Wall sits above 2,400 meters; bring a winter down coat and sunglasses.'
    },
    latePeriodEn: {
      highlights: ['Golden Week holidays begin', 'Hokkaido (Hakodate & Sapporo) cherry blossom peaks', 'Hitachi Seaside Park breathtaking blue nemophila flower hills'],
      tips: 'Golden Week is one of Japan\'s busiest transit periods; reserve all transport early.'
    },
    topPrefectures: ['toyama', 'aomori', 'ibaraki', 'tochigi', 'nara']
  },
  {
    month: 5,
    monthNameEn: 'May',
    monthShortEn: 'May',
    nameJa: '5月',
    seasonType: 'spring',
    icon: '🌱',
    taglineJa: '爽快な五月晴れ・新緑ハイキング・新茶と初夏の味覚',
    taglineEn: 'Clear May Skies, Lush Forest Hikes & Fresh Green Tea Harvests',
    descriptionJa: '1年で最も過ごしやすい行楽シーズン。みずみずしい新緑、静岡や京都の新茶摘み、爽やかな上高地ハイキングが最高潮を迎えます。',
    descriptionEn: 'Arguably Japan\'s most comfortable month. Enjoy vibrant fresh foliage, fragrant first green tea harvests, and alpine hiking in Kamikochi.',
    earlyPeriodJa: {
      highlights: ['GW後半のレジャー・BBQ・グランピング', '弘前城の桜の花筏（ピンクの絨毯）', '静岡・宇治の新茶摘み体験'],
      tips: 'GW最終日付近は帰省ラッシュ。午前移動または連休明けの平日が狙い目。'
    },
    midPeriodJa: {
      highlights: ['長野・上高地の新緑と穂高連峰の残雪絶景', '京都・葵祭（平安絵巻の雅な行列）', '富士芝桜まつり（ピンクの絨毯と富士山）'],
      tips: '上高地はマイカー規制エリア。松本や沢渡からのシャトルバスを利用。'
    },
    latePeriodJa: {
      highlights: ['日光・中禅寺湖のツツジと新緑クルーズ', '黒部峡谷トロッコ電車の爽快運行', '東京・浅草三社祭の熱気'],
      tips: '日中は初夏の陽気ですが紫外線が強め。帽子・日傘・水分補給を。'
    },
    earlyPeriodEn: {
      highlights: ['Golden Week spring outdoor adventures', 'Hirosaki Castle "Hanaikada" floating petal moat', 'Shizuoka & Uji first green tea picking season'],
      tips: 'Traffic peaks on the last 2 days of Golden Week; travel early in the morning.'
    },
    midPeriodEn: {
      highlights: ['Kamikochi alpine valley fresh greenery framed by snow peaks', 'Kyoto Aoi Matsuri classical imperial procession', 'Fuji Shibazakura pink moss festival with Mount Fuji'],
      tips: 'Kamikochi is strictly car-free; take designated shuttle buses from Matsumoto/Sawando.'
    },
    latePeriodEn: {
      highlights: ['Nikko Lake Chuzenji azaleas & lake cruises', 'Kurobe Gorge open-air scenic trolley trains', 'Tokyo Asakusa Sanja Matsuri dynamic shrine festival'],
      tips: 'Daytime temperatures are mild and sunny; bring sun protection.'
    },
    topPrefectures: ['nagano', 'kyoto', 'shizuoka', 'yamanashi', 'tochigi']
  },
  {
    month: 6,
    monthNameEn: 'June',
    monthShortEn: 'Jun',
    nameJa: '6月',
    seasonType: 'summer',
    icon: '🌻',
    taglineJa: '梅雨なし北海道・積丹ウニ解禁・雨が似合う紫陽花めぐり',
    taglineEn: 'Rain-Free Hokkaido, Fresh Sea Urchin Season & Hydrangea Temples',
    descriptionJa: '本州が梅雨に入る中、北海道は梅雨なしの爽快な初夏！積丹の生ウニ解禁や富良野新緑、鎌倉・箱根の紫陽花が美しく咲き誇ります。',
    descriptionEn: 'Escape mainland Japan\'s rainy season! Hokkaido boasts crystal dry skies, blooming Furano fields, and fresh raw sea urchin along Shakotan.',
    earlyPeriodJa: {
      highlights: ['積丹半島：生ウニ漁解禁！極上の無添加生ウニ丼', '富良野・美瑛：梅雨なし爽快な初夏！パッチワークの丘', '札幌：初夏の風物詩 YOSAKOIソーラン祭り'],
      tips: '本州から北海道への旅行が最も快適な時期。朝晩の冷え込み対策に薄手羽織りものを。'
    },
    midPeriodJa: {
      highlights: ['鎌倉（長谷寺・明月院）の紫陽花（あじさい）見頃', '美瑛「白金青い池」のコバルトブルー絶景', '箱根あじさい電車（ライトアップ夜間運行）'],
      tips: '鎌倉のあじさい寺は週末午前9時前から行列。平日朝活参拝がおすすめ。'
    },
    latePeriodJa: {
      highlights: ['沖縄：日本一早い梅雨明け！真夏のケラマブルー開幕', '富良野：早咲きラベンダー満開へ', '利尻島・礼文島のエゾカンゾウ高山植物シーズン'],
      tips: '6月下旬の沖縄は台風が少なく晴天率が極めて高い穴場ベストシーズン！'
    },
    earlyPeriodEn: {
      highlights: ['Shakotan Peninsula: Opening of the raw sea urchin (Uni) season', 'Furano & Biei: Escape the rainy season with crisp, dry summer breezes', 'Sapporo Odori Park: YOSAKOI Soran Festival celebrations'],
      tips: 'Hokkaido has zero rainy season; pack a light jacket for cool 12°C mornings.'
    },
    midPeriodEn: {
      highlights: ['Kamakura (Hase-dera & Meigetsu-in) vibrant blue hydrangea blooms', 'Biei Shirogane Blue Pond cobalt blue peak clarity', 'Hakone Hydrangea Train scenic mountain rail rides'],
      tips: 'Kamakura temples are busy on weekends; arrive before 9:00 AM for peaceful photos.'
    },
    latePeriodEn: {
      highlights: ['Okinawa: Earliest end of rainy season & summer beach opening', 'Furano purple lavender fields bursting into bloom', 'Rebun & Rishiri Islands alpine wildflower blooms'],
      tips: 'Late June in Okinawa offers guaranteed tropical sunshine with low typhoon risk.'
    },
    topPrefectures: ['hokkaido', 'kanagawa', 'okinawa', 'nagano', 'aomori']
  },
  {
    month: 7,
    monthNameEn: 'July',
    monthShortEn: 'Jul',
    nameJa: '7月',
    seasonType: 'summer',
    icon: '☀️',
    taglineJa: '富良野ラベンダー満開・日本三大祭り・夏山登山とビーチ',
    taglineEn: 'Furano Lavender Peak, Grand Summer Festivals & Coastal Beaches',
    descriptionJa: '夏本番！富良野一面の紫ラベンダー絨毯、京都祇園祭や大阪天神祭の大熱気、富士山山開きと高原避暑リゾートが賑わいます。',
    descriptionEn: 'Full summer arrival! Witness vast purple lavender oceans in Furano, legendary Kyoto Gion Festival floats, and Mount Fuji climbing trails.',
    earlyPeriodJa: {
      highlights: ['富良野ファーム富田：ラベンダー満開絶頂期', '富士山山開き（吉田ルート開通）', '京都・祇園祭開幕（1ヶ月に及ぶ雅な神事）'],
      tips: 'ファーム富田は早朝8:00前の到着で渋滞と猛暑を回避。'
    },
    midPeriodJa: {
      highlights: ['京都・祇園祭「山鉾巡行」（前祭・ハイライト）', '海の日連休の海水浴＆マリンスポーツ', '軽井沢・那須高原の爽やかな避暑ステイ'],
      tips: '京都の夏は非常に蒸し暑いため、日傘・扇風機・こまめな冷房休憩を。'
    },
    latePeriodJa: {
      highlights: ['大阪・天神祭（大川を行き交う船渡御と奉納花火）', '隅田川花火大会など全国各地の花火大会スタート', '北アルプス・白馬・立山での高山植物トレッキング'],
      tips: '花火大会当日は帰宅ラッシュで駅が入場規制に。周辺ホテル予約が圧倒的に快適。'
    },
    earlyPeriodEn: {
      highlights: ['Furano Farm Tomita: Peak vibrant purple lavender fields', 'Mount Fuji official trail climbing season opening', 'Kyoto Gion Festival month-long cultural opening'],
      tips: 'Visit Furano flower farms before 8:00 AM for crowd-free morning light.'
    },
    midPeriodEn: {
      highlights: ['Kyoto Gion Matsuri Grand Yamaboko float parade', 'Marine Day holiday beach escapes', 'Karuizawa & Nasu Highland breezy forest retreats'],
      tips: 'Kyoto summer humidity is intense; stay hydrated and carry sun umbrellas.'
    },
    latePeriodEn: {
      highlights: ['Osaka Tenjin Matsuri river boat processions and fireworks', 'Sumida River Fireworks Festival in Tokyo', 'Alpine hiking among wildflowers in Hakuba & Tateyama'],
      tips: 'Train stations near major fireworks festivals get extremely congested; consider booking local stays.'
    },
    topPrefectures: ['hokkaido', 'kyoto', 'osaka', 'tokyo', 'shizuoka']
  },
  {
    month: 8,
    monthNameEn: 'August',
    monthShortEn: 'Aug',
    nameJa: '8月',
    seasonType: 'summer',
    icon: '🎆',
    taglineJa: '東北三大祭り・長岡花火・阿波おどり・お盆の夏休み',
    taglineEn: 'Tohoku Grand Pageants, Nagaoka Fireworks & Vibrant Awa Odori',
    descriptionJa: '日本の夏が最も燃え上がる8月！青森ねぶた、長岡の大花火、徳島阿波おどり、そして涼を求める北海道や信州高原が人気を集めます。',
    descriptionEn: 'Experience Japan\'s most energetic month with illuminated Nebuta floats, giant Nagaoka fireworks, and rhythmic Awa Odori street dancing.',
    earlyPeriodJa: {
      highlights: ['東北三大祭り（青森ねぶた・秋田竿燈・仙台七夕）', '新潟・長岡まつり大花火大会（日本一のフェニックス花火）', '北海道・ひまわりの里（北竜町200万本）'],
      tips: '東北祭りと長岡花火は新幹線・ホテルが半年前に満室になる超人気行事。'
    },
    midPeriodJa: {
      highlights: ['徳島・阿波おどり（街中が熱気に包まれる伝統演舞）', '京都・五山送り火（大文字焼きと精霊送り）', '軽井沢・上高地・富良野の高原避暑'],
      tips: 'お盆休み期間は交通機関・高速道路のピーク。移動は早朝や夜間が吉。'
    },
    latePeriodJa: {
      highlights: ['大曲の花火（全国花火競技大会・秋田）', '富士山頂でのご来光登山ピーク', '沖縄・宮古島・八重山諸島の透き通る夏海ダイビング'],
      tips: '台風の発生が増える時期。フライトのキャンセル規定と天気図を事前確認。'
    },
    earlyPeriodEn: {
      highlights: ['Tohoku Big Three Festivals (Aomori Nebuta, Akita Kanto, Sendai Tanabata)', 'Nagaoka Grand Fireworks Festival over the Shinano River', 'Hokuryu Sunflower Village (2 million blooming sunflowers)'],
      tips: 'Book transport and lodging months in advance for Tohoku festivals.'
    },
    midPeriodEn: {
      highlights: ['Tokushima Awa Odori dynamic street dance festival', 'Kyoto Gozan Okuribi (giant bonfire kanji on mountains)', 'Highland retreats in Karuizawa, Kamikochi and Furano'],
      tips: 'Mid-August Obon week is Japan\'s peak holiday rush; plan buffer times.'
    },
    latePeriodEn: {
      highlights: ['Omagari National Fireworks Competition (Akita)', 'Mount Fuji sunrise climbing expeditions', 'Miyako & Yaeyama Islands crystal clear snorkeling'],
      tips: 'Monitor typhoon paths when booking late August flights to subtropical islands.'
    },
    topPrefectures: ['aomori', 'niigata', 'tokushima', 'nagano', 'okinawa']
  },
  {
    month: 9,
    monthNameEn: 'September',
    monthShortEn: 'Sep',
    nameJa: '9月',
    seasonType: 'autumn',
    icon: '🎑',
    taglineJa: '日本一早い大雪山紅葉・中秋の名月・秋の味覚とシルバーウィーク',
    taglineEn: 'Earliest Autumn Foliage in Daisetsuzan, Harvest Moon & Silver Week',
    descriptionJa: '北海道大雪山から紅葉がスタート！朝晩の風が心地よく、中秋の名月、秋刀魚や新米、ぶどう・梨狩りなど豊かな秋の実りを味わえます。',
    descriptionEn: 'Autumn foliage makes its first appearance on Hokkaido\'s highest peaks while the rest of Japan enjoys comfortable breezes, harvest moons, and fresh fruits.',
    earlyPeriodJa: {
      highlights: ['富山・越中おわら風の盆（優美で幻想的な胡弓の調べ）', '山梨・長野のシャインマスカット・ぶどう狩り', '北海道大雪山（黒岳・旭岳）の紅葉色づき始め'],
      tips: '日中はまだ暑さが残る日も。朝晩との気温差に注意して羽織りものを。'
    },
    midPeriodJa: {
      highlights: ['大雪山系（旭岳・銀泉台）紅葉見頃ピーク（日本一早い紅葉）', 'シルバーウィークの連休旅行', '中秋の名月（京都寺社でのお月見行事）'],
      tips: '大雪山の紅葉登山はすでに初冬の気温。防寒着・登山靴が必須。'
    },
    latePeriodJa: {
      highlights: ['巾着田（埼玉）の500万本曼珠沙華（彼岸花）', '栃木・那須連山の紅葉スタート', '北海道・秋鮭イクラと新米グルメフェア'],
      tips: '彼岸花の見頃は週末道路が混み合うため、西武線電車利用が快適。'
    },
    earlyPeriodEn: {
      highlights: ['Toyama "Owara Kaze-no-Bon" ethereal folk dance festival', 'Yamanashi Shine Muscat grape picking tours', 'Daisetsuzan National Park early foliage tinting'],
      tips: 'Comfortable weather returning; pack light layers for evening cool-downs.'
    },
    midPeriodEn: {
      highlights: ['Mount Asahidake peak fiery red & yellow autumn foliage', 'Silver Week national holiday getaways', 'Harvest Moon viewings at historic Kyoto temples'],
      tips: 'Alpine foliage areas in Hokkaido can drop below 5°C; bring insulated coats.'
    },
    latePeriodEn: {
      highlights: ['Kinchakuda (Saitama) 5 million crimson spider lilies', 'Nasu mountain range early foliage walks', 'Fresh autumn salmon, red roe, and newly harvested rice'],
      tips: 'Take direct trains to Kinchakuda to bypass heavy autumn flower traffic.'
    },
    topPrefectures: ['hokkaido', 'toyama', 'yamanashi', 'saitama', 'nagano']
  },
  {
    month: 10,
    monthNameEn: 'October',
    monthShortEn: 'Oct',
    nameJa: '10月',
    seasonType: 'autumn',
    icon: '🎃',
    taglineJa: '日光・八幡平の紅葉絶景・秋の味覚狩り・爽快な秋晴れ行楽',
    taglineEn: 'Nikko Autumn Foliage Peaks, Fruit Picking & Crisp Blue Skies',
    descriptionJa: '1年で最も秋晴れが続く絶好の観光シーズン。日光いろは坂、八幡平、磐梯吾妻スカイラインなど名だたる紅葉ロードが見頃を迎えます。',
    descriptionEn: 'Brilliant clear weather nationwide. Famous mountain passes like Nikko\'s Irohazaka and Hachimantai glow in red and gold maple leaves.',
    earlyPeriodJa: {
      highlights: ['八幡平アスピーテライン・十和田湖の紅葉', '長野・志賀高原や上高地の黄葉', '栗拾い・松茸料理と秋の味覚まつり'],
      tips: '山岳道路の紅葉ドライブは朝8時前スタートで渋滞回避を。'
    },
    midPeriodJa: {
      highlights: ['日光・中禅寺湖＆いろは坂の紅葉ピーク', '福島・磐梯吾妻スカイラインの錦秋ドライブ', '京都・時代祭（平安神宮の大絵巻行列）'],
      tips: '日光いろは坂は週末大渋滞。東武特急＋中禅寺湖方面は平日利用が賢明。'
    },
    latePeriodJa: {
      highlights: ['軽井沢・雲場池の紅葉水鏡', '富士五湖（河口湖・山中湖）の紅葉まつり開幕', 'テーマパークのハロウィンフェスティバル'],
      tips: '標高の高い観光地は日没後に一気に冷え込みます。ウールコートやインナーダウンを。'
    },
    earlyPeriodEn: {
      highlights: ['Hachimantai Aspite Line & Lake Towada vibrant foliage', 'Kamikochi golden larch tree transitions', 'Chestnut & Matsutake mushroom harvest feasts'],
      tips: 'Start mountain foliage scenic drives before 8:00 AM to beat tour buses.'
    },
    midPeriodEn: {
      highlights: ['Nikko Lake Chuzenji & Irohazaka Pass peak foliage', 'Bandai-Azuma Skyline panoramic autumn road trip', 'Kyoto Jidai Matsuri grand historic pageant parade'],
      tips: 'Nikko roads experience heavy weekend jams; take Tobu Spacia express trains.'
    },
    latePeriodEn: {
      highlights: ['Karuizawa Kumoba Pond mirror maple foliage reflections', 'Fuji Five Lakes Autumn Leaves Festival opening', 'Halloween celebrations across major theme parks'],
      tips: 'Highland areas drop below 10°C at dusk; pack a warm coat or insulated jacket.'
    },
    topPrefectures: ['tochigi', 'nagano', 'fukushima', 'iwate', 'kyoto']
  },
  {
    month: 11,
    monthNameEn: 'November',
    monthShortEn: 'Nov',
    nameJa: '11月',
    seasonType: 'autumn',
    icon: '🍁',
    taglineJa: '京都・関東の紅葉満開・夜間ライトアップ・新そばと温泉',
    taglineEn: 'Kyoto & Kanto Autumn Maple Peaks, Night Illuminations & Onsen',
    descriptionJa: '古都京都や東京・横浜、鎌倉の紅葉が最高潮に。神社仏閣の夜間ライトアップ、イチョウ並木の黄金アーチ、名湯の温もりが心に染み渡ります。',
    descriptionEn: 'The cultural foliage peak in Kyoto, Kamakura, and Tokyo. Illuminated temple gardens, golden ginkgo boulevards, and hot spring soaks.',
    earlyPeriodJa: {
      highlights: ['山下公園の秋バラ＆横浜ベイエリア散策', '箱根・強羅温泉の紅葉ライトアップ', '各地の新そば解禁・新米まつり'],
      tips: '爽やかな秋晴れ。海沿いや山間部は海風・山風で体感が下がるためストール持参を。'
    },
    midPeriodJa: {
      highlights: ['横浜・日本大通りの黄金イチョウ並木ピーク', '三島スカイウォークから望む雪化粧富士山絶景', '大山寺・大山阿夫利神社の紅葉ライトアップ'],
      tips: '富士山が最もくっきり撮れる午前9〜10時台の観光が圧倒的におすすめ。'
    },
    latePeriodJa: {
      highlights: ['京都・東福寺・永観堂・清水寺の紅葉絶頂期', '三溪園（横浜）の古建築とカエデの調和', '江の島「湘南の宝石」イルミネーション開幕'],
      tips: '京都の紅葉ライトアップは週末大混雑。公共交通機関（地下鉄・徒歩）の移動が鉄則。'
    },
    earlyPeriodEn: {
      highlights: ['Yokohama Yamashita Park seaside autumn rose gardens', 'Hakone Gora onsen autumn maple light-ups', 'Fresh harvest soba noodles and regional sake releases'],
      tips: 'Sunny daytime conditions; coastal sea breezes feel 2–3°C cooler.'
    },
    midPeriodEn: {
      highlights: ['Yokohama Nihon-odori monumental golden ginkgo boulevard', 'Mishima Skywalk snow-dusted Mount Fuji panoramic vistas', 'Oyama Afuri Shrine dynamic illuminated maple valley'],
      tips: 'Photograph Mount Fuji between 9:00 AM and 10:30 AM before afternoon haze.'
    },
    latePeriodEn: {
      highlights: ['Kyoto Tofuku-ji & Eikando ultimate autumn foliage peak', 'Sankeien Garden historic pagoda and fiery maple views', 'Enoshima Sea Candle "Jewel of Shonan" winter illuminations'],
      tips: 'Kyoto city buses get gridlocked; rely strictly on municipal subways and walking.'
    },
    topPrefectures: ['kanagawa', 'shizuoka', 'kyoto', 'tokyo', 'shiga']
  },
  {
    month: 12,
    monthNameEn: 'December',
    monthShortEn: 'Dec',
    nameJa: '12月',
    seasonType: 'winter',
    icon: '🎄',
    taglineJa: '街中が輝くクリスマス・冬花火・雪見露天風呂と年末年始',
    taglineEn: 'Christmas Markets, Winter Marine Fireworks & Snowy Onsens',
    descriptionJa: '冬の澄み渡る夜空を彩る全国のイルミネーションと冬花火。1年を締めくくる贅沢な温泉宿での湯治と海の幸で心身を癒やします。',
    descriptionEn: 'The crispest night skies of the year showcase world-class holiday illuminations, winter fireworks over bays, and serene onsen ryokans.',
    earlyPeriodJa: {
      highlights: ['横浜赤レンガ倉庫クリスマスマーケット開幕', 'みなとみらい光のアート「ヨルノヨ」', '熱海海上花火大会（澄んだ冬空の大迫力花火）'],
      tips: '海沿い・展望台は北風が強く吹き抜けます。防風性のあるダウンジャケットを。'
    },
    midPeriodJa: {
      highlights: ['みなとみらい全館点灯「タワーズミライト」', '神戸ルミナリエ・光の回廊', '伊豆シャボテン動物公園の元祖カピバラ露天風呂'],
      tips: '日没が16:30頃と早い時期。夕暮れのイルミネーション点灯直後の鑑賞が温かくて快適。'
    },
    latePeriodJa: {
      highlights: ['全国スキー場の年末年始パウダースノー滑走', '名湯温泉宿での年越しステイと年越しそば', '除夜の鐘・神社仏閣の初詣準備'],
      tips: '年末年始は宿泊料金がピーク。早割プランや年明け直後の平日旅行もおすすめ。'
    },
    earlyPeriodEn: {
      highlights: ['Yokohama Red Brick Warehouse authentic Christmas Market', 'Minatomirai "YORUNOYO" city-wide light & sound installation', 'Atami Marine Fireworks exploding across coastal cliffs'],
      tips: 'Gusty winter winds along the bays; thick down coats, scarves, and gloves required.'
    },
    midPeriodEn: {
      highlights: ['TOWERS Milight: All Yokohama skyscrapers illuminated together', 'Kobe Luminarie historic memorial light festival', 'Izu Shaboten Zoo "Original Capybara Onsen" winter bathing'],
      tips: 'Sun sets around 4:30 PM; view illuminations early and dine indoors comfortably.'
    },
    latePeriodEn: {
      highlights: ['New Year ski & powder snow holidays across mountain lodges', 'Traditional Japanese Ryokan year-end hot spring retreats', 'Joya-no-Kane temple bells ringing 108 times at midnight'],
      tips: 'Year-end holiday rates are premium; book well in advance or look at early January.'
    },
    topPrefectures: ['kanagawa', 'shizuoka', 'hyogo', 'hokkaido', 'nagano']
  }
];

export function getMonthTheme(month: number): MonthTheme {
  const found = MONTHLY_THEMES.find((m) => m.month === month);
  return found || MONTHLY_THEMES[0];
}

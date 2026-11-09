import { type SeasonPeriod } from '../utils/seasons';

export interface SeasonalInfo {
  highlightsJa: string[];
  highlightsEn: string[];
  climateJa: string;
  climateEn: string;
  clothingJa: string;
  clothingEn: string;
  noCarTipJa: string;
  noCarTipEn: string;
  familyTipJa: string;
  familyTipEn: string;
  driveTipJa: string;
  driveTipEn: string;
}

// 都道府県固有のシーズン別特化データ（神奈川県）
const KANAGAWA_SEASONS: Record<string, Partial<SeasonalInfo>> = {
  '11-mid': {
    highlightsJa: [
      '日本大通り：黄金色に輝くイチョウ並木のアーチ（見頃ピーク）',
      '山下公園「未来のバラ園」：海風に香る濃厚な秋バラ（約160種）',
      '大山寺・大山阿夫利神社：鮮烈な紅葉ライトアップ（もみじ狩り）',
      '三溪園：外苑のモミジ・カエデの色づき始めと歴史的古建築'
    ],
    highlightsEn: [
      'Nihon-odori Avenue: Golden ginkgo arch in full foliage peak',
      'Yamashita Park Rose Garden: Fragrant autumn roses (160 varieties)',
      'Oyama Afuri Shrine: Dynamic autumn foliage illuminations',
      'Sankeien Garden: Historic architectural harmony with early maples'
    ],
    climateJa: '最高16〜18℃ / 最低9〜11℃。日中は過ごしやすい秋晴れですが、海沿いは海風で体感2〜3℃低くなります。',
    climateEn: 'High 16–18°C / Low 9–11°C. Pleasant daytime sunshine, but coastal ocean breezes make it feel 2–3°C cooler.',
    clothingJa: '脱ぎ着しやすいカーディガンや秋用ジャケット。夕方まで滞在する場合は薄手のストールがあると安心です。',
    clothingEn: 'Layered light jacket or cardigan. A light scarf is recommended for late afternoon ocean breezes.',
    noCarTipJa: 'みなとみらい線「日本大通り駅」は地上直結エレベーター完備。駅から段差ゼロで山下公園まで徒歩散策可能。',
    noCarTipEn: 'Direct elevator access from Minatomirai Line Nihon-odori Station. 100% flat walk to seaside parks.',
    familyTipJa: '象の鼻テラス（オムツ替え・授乳室）が中間地点の神オアシス。名物ゾウノハナソフトクリームも大人気。',
    familyTipEn: 'Zou-no-hana Terrace offers modern nursery rooms and delicious elephant-shaped soft-serve.',
    driveTipJa: '山下公園地下駐車場は午前10時前ならスムーズ。午後は首都高横羽線の横浜公園出口周辺で渋滞あり。',
    driveTipEn: 'Yamashita Park underground parking is easy before 10 AM. Expect afternoon queues along coastal highways.'
  },
  '11-late': {
    highlightsJa: [
      '三溪園：モミジ・イチョウの紅葉絶頂期（重要文化財「聴秋閣」奥の遊歩道開放）',
      '鎌倉長谷寺・円覚寺：古都鎌倉の紅葉ライトアップ＆夜間特別拝観',
      '江の島シーキャンドル：関東三大イルミネーション「湘南の宝石」点灯スタート',
      '宮ヶ瀬ダム：高さ30m超の自生モミの木巨大クリスマスツリー点灯'
    ],
    highlightsEn: [
      'Sankeien Garden: Peak maple foliage & special access to historic Choshukaku',
      'Kamakura Temples (Hase-dera & Engaku-ji): Evening illuminated maple viewings',
      'Enoshima Sea Candle: "Jewel of Shonan" winter illuminations grand opening',
      'Miyagase Dam: Giant natural 30-meter Christmas fir tree illumination'
    ],
    climateJa: '最高13〜15℃ / 最低6〜8℃。朝晩の冷え込みが本格化し、冬の気配が強まります。空気は澄み渡り富士山が見えやすい季節。',
    climateEn: 'High 13–15°C / Low 6–8°C. Crisp winter chill begins. Clear skies offer stunning panoramic Mount Fuji views.',
    clothingJa: 'ウールコートやトレンチコート＋インナーダウン。夜間ライトアップを見学するなら手袋やマフラーを。',
    clothingEn: 'Wool coat or trench with light insulated layer. Gloves and scarf recommended for night illuminations.',
    noCarTipJa: '鎌倉方面の江ノ電は週末大変混雑します。午前9時前に行動開始するか、横浜シーサイドライン・地下鉄の活用が快適。',
    noCarTipEn: 'Kamakura Enoden trains are busy on weekends. Start before 9 AM or rely on Yokohama municipal subways.',
    familyTipJa: '三溪園は敷地が広く砂利道もあるため、抱っこ紐との併用がおすすめ。横浜港大さん橋はスロープ完備でベビーカー快適。',
    familyTipEn: 'Osanbashi Pier has 100% gentle ramps ideal for strollers; Sankeien paths are best paired with baby carriers.',
    driveTipJa: '江の島・鎌倉周辺は国道134号線の夕方上り渋滞が激化。パーク＆ライドの活用が賢明です。',
    driveTipEn: 'Heavy sunset congestion on Route 134 along Shonan coast. Park-and-ride is strongly recommended.'
  },
  '12-early': {
    highlightsJa: [
      '横浜赤レンガ倉庫：「Christmas Market in 横浜赤レンガ倉庫」本格開幕',
      '横浜みなとみらい：街全体が光に包まれるアートイルミネーション「夜にあらわれる光の横浜〈ヨルノヨ〉」',
      '大さん橋：冬の澄んだ夕景と富士山のシルエット＆みなとみらい夜景',
      '箱根温泉：露天風呂から望む冬枯れの山々と早川渓谷の湯けむり'
    ],
    highlightsEn: [
      'Yokohama Red Brick Warehouse: Traditional European Christmas Market opening',
      'Minatomirai Bayside: "YORUNOYO" city-wide immersive light & sound spectacle',
      'Osanbashi Pier: Crisp twilight silhouettes of Mount Fuji against glowing skyline',
      'Hakone Onsen: Soothing hot spring open-air baths amidst crisp mountain air'
    ],
    climateJa: '最高11〜13℃ / 最低4〜6℃。海沿いは北風が強く吹き抜けるため、防寒対策が必須です。',
    climateEn: 'High 11–13°C / Low 4–6°C. Gusty northern winds along the bay. Solid thermal winter gear is essential.',
    clothingJa: '防風性のあるダウンジャケット、厚手のニット、裏起毛パンツ。首元・手首・足首をしっかり温めましょう。',
    clothingEn: 'Windproof down parka, heavy knit sweaters, thermal pants, warm scarf, and gloves.',
    noCarTipJa: 'みなとみらい線「馬車道駅」または「日本大通り駅」から赤レンガ倉庫へ徒歩6〜8分。海風を避ける地下通路をフル活用。',
    noCarTipEn: 'Take Bashamichi or Nihon-odori station; use covered underground connections to avoid coastal cold winds.',
    familyTipJa: '赤レンガ倉庫のクリスマスマーケットは週末夕方に混雑。子連れなら平日15:00〜17:00の点灯直後が狙い目。',
    familyTipEn: 'Visit the Christmas Market on weekday afternoons (3–5 PM) right as lights turn on for stress-free family space.',
    driveTipJa: 'みなとみらい地区の駐車場は夕方から満車続出。クイーンズスクエアやマークイズ地下が収容台数多く安心。',
    driveTipEn: 'Minatomirai lots fill fast after 4 PM. Large underground garages at Queen\'s Square offer best availability.'
  },
  '12-mid': {
    highlightsJa: [
      'みなとみらい全館点灯：「TOWERS Milight（タワーズミライト）」オフィス群が一斉点灯',
      '元町ショッピングストリート：元町トゥインクルクリスマス＆イルミネーション',
      '八景島シーパラダイス：冬のナイトアクアリウム＆ペンギンパレード',
      '三浦半島：三浦大根・寒ブリ・冬野菜の収穫旬シーズン'
    ],
    highlightsEn: [
      'TOWERS Milight: Spectacular annual illumination where all skyscrapers stay lit',
      'Motomachi Shopping Street: Twinkle Christmas boutique holiday lights',
      'Hakkeijima Sea Paradise: Winter night aquarium & festive penguin walks',
      'Miura Peninsula: Peak harvest of giant Miura radishes & winter yellowtail feasts'
    ],
    climateJa: '最高9〜11℃ / 最低2〜4℃。冬本番の寒さ。日没が16:30頃と早いため、夕方以降は急激に冷え込みます。',
    climateEn: 'High 9–11°C / Low 2–4°C. Deep winter chill. Sunset is around 4:30 PM, after which temperatures plunge rapidly.',
    clothingJa: 'ロングダウンコート、ヒートテック等の保温インナー、マフラー、手袋、使い捨てカイロ。',
    clothingEn: 'Long down coat, thermal undergarments, thick scarf, insulated gloves, and pocket warmers.',
    noCarTipJa: '全館点灯日の桜木町駅・みなとみらい駅は帰宅ラッシュと観光客で混み合います。時間をずらしてディナー後の移動が快適。',
    noCarTipEn: 'High transit crowds around Sakuragicho after full-building lightups. Dine locally before taking trains.',
    familyTipJa: '寒さ対策にマークイズみなとみらい等の大型屋内商業施設を拠点に。授乳室・キッズスペース充実。',
    familyTipEn: 'Anchor your trip at MARK IS Minatomirai for warm indoor dining, spacious rest areas, and play corners.',
    driveTipJa: 'クリスマス前の週末はベイブリッジ・大黒ふ頭周辺も含めて夜景渋滞が発生。日没前の早め移動を。',
    driveTipEn: 'Pre-Christmas weekend gridlock near Bay Bridge overlooks. Position your vehicle before 4 PM.'
  }
};

// 地域（地方）ごとの標準気候・服装・旬の傾向（フォールバック）
function getDefaultSeasonalInfo(region: string, period: SeasonPeriod): SeasonalInfo {
  const { month, labelJa, labelEn } = period;

  // 11月・12月の季節感
  if (month === 11) {
    if (region === 'hokkaido-tohoku') {
      return {
        highlightsJa: [
          '初雪・冠雪の山々と晩秋の絶景コントラスト',
          '地元温泉郷で楽しむ初冬の雪見露天風呂',
          '新米、秋鮭・イクラ、新酒の解禁グルメ',
          '市街地の冬のイルミネーション点灯'
        ],
        highlightsEn: [
          'Early powder snow dusting high peaks & late autumn contrasts',
          'Serene outdoor hot spring baths with scenic mountain vistas',
          'Fresh autumn salmon, salmon roe, and newly brewed local sake',
          'City center winter illumination kick-offs'
        ],
        climateJa: '最高5〜10℃ / 最低0〜3℃。すでに初雪が舞う初冬の寒さ。氷点下近くまで冷え込みます。',
        climateEn: 'High 5–10°C / Low 0–3°C. Early winter weather with chance of light snow. Freezing mornings.',
        clothingJa: '冬用厚手ダウンジャケット、ニット帽、手袋、滑り止め付きスニーカー・ブーツ。',
        clothingEn: 'Heavy winter down parka, knit beanie, insulated gloves, and slip-resistant boots.',
        noCarTipJa: '駅直結のバスターミナルや新幹線利用が確実。積雪によるダイヤ乱れに余裕を持った計画を。',
        noCarTipEn: 'Rely on Shinkansen and covered bus terminals. Allow extra buffer for winter rail schedules.',
        familyTipJa: '屋内キッズパークや温水プール付きリゾートホテルを拠点にすると寒さ知らずで安心。',
        familyTipEn: 'Book resort hotels with indoor heated pools and family play centers to avoid sub-zero cold.',
        driveTipJa: '峠越えや山間部はスタッドレスタイヤ（冬用タイヤ）の装着が必須です。',
        driveTipEn: 'Winter studless tires are strictly required on mountain passes and rural expressways.'
      };
    }

    return {
      highlightsJa: [
        `${labelJa}のモミジ・イチョウの紅葉見頃ピーク`,
        '歴史ある神社仏閣や日本庭園の夜間ライトアップ',
        '秋の味覚（新そば、松茸、ジビエ、地酒）フェア',
        '街の広場や商業施設で始まるクリスマス装飾'
      ],
      highlightsEn: [
        `${labelEn} peak vibrant autumn foliage & golden avenues`,
        'Evening illuminations at historic shrines and traditional gardens',
        'Seasonal harvests: freshly made soba, mushrooms, and regional sake',
        'Holiday displays and sparkling lights lighting up central boulevards'
      ],
      climateJa: '最高14〜17℃ / 最低7〜10℃。爽やかな秋晴れと朝晩の冷え込みの寒暖差が大きい時期。',
      climateEn: 'High 14–17°C / Low 7–10°C. Crisp daytime sunshine with sharp temperature drops at sunset.',
      clothingJa: '脱ぎ着しやすいトレンチコートやウールジャケット。夜間散策には薄手ストールやカーディガン。',
      clothingEn: 'Layered trench coat, wool jacket, and a lightweight scarf for chilly evenings.',
      noCarTipJa: '主要観光地へは直通バスや急行電車が便利。秋の観光シーズンは午前中の早め移動が鉄則。',
      noCarTipEn: 'Use express trains to reach major spots. Start in the early morning to beat peak tour buses.',
      familyTipJa: '落ち葉拾いや芝生広場のある大規模公園が快適。近隣の授乳室・オムツ替え場所を事前チェック。',
      familyTipEn: 'Choose spacious botanical or castle parks with wide lawns and clean nearby nursery facilities.',
      driveTipJa: '紅葉名所周辺の駐車場は午前中で満車になりがち。パーク＆ライドや予約制駐車場の利用を。',
      driveTipEn: 'Tourist parking fills by 10 AM. Look for perimeter park-and-ride train connections.'
    };
  }

  // 12月
  if (region === 'hokkaido-tohoku') {
    return {
      highlightsJa: [
        '白銀の世界とパウダースキー場の本格オープン',
        '街中が光り輝くホワイトクリスマス・イルミネーション',
        '真冬のあったか郷土鍋・海鮮鍋（タラ・毛ガニ・アンコウ）',
        '凍てつく夜空に輝く満天の星空鑑賞'
      ],
      highlightsEn: [
        'Pristine powder snow resorts fully opening for ski season',
        'White Christmas illumination festivals across downtowns',
        'Steaming winter seafood hot pots (snow crab, cod, and monkfish)',
        'Crystal clear starry winter night sky viewing'
      ],
      climateJa: '最高0〜4℃ / 最低-5〜-2℃。本格的な真冬日。積雪と路面凍結に備えが必要です。',
      climateEn: 'High 0–4°C / Low -5 to -2°C. True sub-zero winter conditions with snow and ice.',
      clothingJa: '高性能防寒ダウン、厚手のインナー、ネックウォーマー、防寒・防水の冬靴。',
      clothingEn: 'Heavy insulated thermal coat, thermal base layers, warm neck gaiter, and waterproof winter boots.',
      noCarTipJa: 'JR新幹線・特急と主要駅前ホテルを組み合わせることで雪道歩行を最小限に抑えられます。',
      noCarTipEn: 'Stay at hotels directly linked to Shinkansen stations to minimize walking on icy streets.',
      familyTipJa: 'ホテル内の温泉や室内アクティビティが充実した大型宿泊施設がファミリーに最適。',
      familyTipEn: 'Resorts with indoor game rooms and family hot spring baths ensure cozy toddler warmth.',
      driveTipJa: '完全な雪道運転。4WD車とスタッドレスタイヤ必須。吹雪時の急な速度超過は厳禁。',
      driveTipEn: '4WD with winter tires is mandatory. Drive slowly and watch for black ice.'
    };
  }

  // 12月の関東・中部・関西・西日本
  return {
    highlightsJa: [
      `${labelJa}の街を彩るクリスマスイルミネーション＆マーケット`,
      '冬の澄んだ空気で楽しむ高台・展望台からの夕景と富士山・夜景',
      '年末の活気あふれる商店街・朝市での旬の食材買い出し',
      '寒さを忘れさせる名湯・露天風呂めぐり'
    ],
    highlightsEn: [
      `${labelEn} sparkling holiday illuminations & festive European markets`,
      'Breathtaking clear sunset vistas of mountains and shimmering skylines',
      'Vibrant local market shopping for fresh year-end seasonal delicacies',
      'Rejuvenating hot spring onsen soaks in scenic open-air baths'
    ],
    climateJa: '最高10〜12℃ / 最低3〜5℃。冬晴れの日が多いですが、冷たい季節風で体感温度が下がります。',
    climateEn: 'High 10–12°C / Low 3–5°C. Crisp sunny winter days accompanied by chilly seasonal winds.',
    clothingJa: 'ダウンコート、厚手ニット、マフラー、手袋。防寒性重視の冬スタイル。',
    clothingEn: 'Down parka, thick wool sweater, scarf, and warm gloves. Focus on wind resistance.',
    noCarTipJa: '夜のイルミネーション鑑賞時は地下街や屋内デッキをうまく中継して防寒移動を。',
    noCarTipEn: 'Use connected underground concourses to hop between light-up displays without freezing.',
    familyTipJa: '夕方以降の冷え込みに注意。16時台の点灯直後にサクッと見て屋内レストランへ退避が吉。',
    familyTipEn: 'Catch the light-up right at dusk (around 4:30 PM), then head inside for an early warm dinner.',
    driveTipJa: 'クリスマス前後の週末は商業施設やテーマパーク周辺の駐車場が大変混雑します。早めの入場を。',
    driveTipEn: 'Heavy traffic around shopping malls and landmarks on weekends. Arrive early afternoon.'
  };
}

/**
 * 都道府県IDとシーズン情報から、リッチな旬情報を取得する
 */
// 都道府県固有のシーズン別特化データ（静岡県）
const SHIZUOKA_SEASONS: Record<string, Partial<SeasonalInfo>> = {
  '11-mid': {
    highlightsJa: [
      '三島スカイウォーク：日本最長400mの吊橋から望む雪化粧の富士山＆駿河湾',
      '修善寺温泉：伊豆の小京都「竹林の小径」と修善寺もみじまつりの紅葉散策',
      '熱海温泉街：熱海駅前平和通り商店街の温泉まんじゅう＆海鮮浜焼き食べ歩き',
      '伊豆パノラマパーク：ロープウェイ山頂「碧テラス」の水盤に映る秋の富士山'
    ],
    highlightsEn: [
      'Mishima Skywalk: Japan\'s longest 400m pedestrian bridge with snow-capped Fuji vistas',
      'Shuzenji Onsen: Romantic bamboo paths & vibrant autumn maple festival in Izu',
      'Atami Onsen Bayside: Steaming onsen buns & fresh grilled seafood street food',
      'Izu Panorama Park: Panoramic reflection of Mount Fuji from Ao Terrace mountain water basins'
    ],
    climateJa: '最高17〜19℃ / 最低9〜11℃。平野部は温暖ですが、スカイウォークや山頂テラスは吹き抜ける風で体感が一気に下がります。',
    climateEn: 'High 17–19°C / Low 9–11°C. Mild coastal weather, but high suspension bridges and mountain summits experience gusty chills.',
    clothingJa: '脱ぎ着しやすいウインドブレーカーや秋ジャケット。吊橋を渡る際は風で飛ばされない帽子止めや防風着を。',
    clothingEn: 'Windbreaker or medium jacket. Secure lightweight hats when crossing high bridges.',
    noCarTipJa: '東海道新幹線「こだま」で東京〜熱海わずか45分、三島50分！三島駅南口から特急路線バスで三島スカイウォーク直行。',
    noCarTipEn: 'Tokaido Shinkansen (Kodama) reaches Atami in 45 mins, Mishima in 50 mins from Tokyo! Direct buses link to attractions.',
    familyTipJa: '三島スカイウォークはベビーカー無料貸出（幅広専用車）あり。歩道が広くファミリー・3世代旅行に最適。',
    familyTipEn: 'Mishima Skywalk provides free rental of wide off-road strollers. Completely flat wooden boardwalks.',
    driveTipJa: '東名・新東名高速ともに週末午前は海老名SA付近で自然渋滞あり。東京を午前7:00台に出発すると快適。',
    driveTipEn: 'Tomei Expressway suffers morning queues near Ebina. Departing Tokyo around 7:00 AM avoids major jams.'
  },
  '11-late': {
    highlightsJa: [
      '熱海梅園もみじまつり：日本一遅い紅葉と謳われる早咲きの梅とモミジの共演',
      '伊豆ぐらんぱる公園：約600万球が輝く体験型イルミネーション「グランイルミ」開幕',
      '寸又峡「夢の吊橋」：南アルプスの山奥に現れるエメラルドグリーンの湖と紅葉',
      '熱海・伊東：旬を迎える脂の乗った「地金目鯛の煮付け」と海鮮丼'
    ],
    highlightsEn: [
      'Atami Plum Garden: Famous as Japan\'s latest autumn foliage alongside early plum buds',
      'Izu Granpal Park: "Granillumi" 6-million-light interactive winter illumination spectacle',
      'Sumatakyo Dream Suspension Bridge: Emerald lake crossing framed by deep autumn foliage',
      'Atami & Ito: Peak season for simmered local golden-eye snapper (Kinmedai) seafood'
    ],
    climateJa: '最高14〜16℃ / 最低6〜8℃。朝晩の冷え込みが深まりますが、日中の伊豆半島海沿いは暖かな日差しに恵まれます。',
    climateEn: 'High 14–16°C / Low 6–8°C. Crisper mornings and evenings, but coastal Izu enjoys warm daytime sunshine.',
    clothingJa: '裏地付きコートやライトダウン。夜のグランイルミ鑑賞には手袋・マフラー・カイロが必須です。',
    clothingEn: 'Lined winter coat or light down. Warm gloves and scarves are vital for outdoor night illuminations.',
    noCarTipJa: '伊豆急行線のリゾート21（展望列車）を利用すれば、普通運賃のみで海側パノラマ座席から絶景車窓が楽しめます。',
    noCarTipEn: 'Ride Izu Kyuko\'s "Resort 21" scenic trains at standard fare for ocean-facing panoramic window seating.',
    familyTipJa: 'グランイルミは夜間冷え込むため防寒着を万全に。昼の伊豆高原旅なら「大室山リフト」も子どもに大人気。',
    familyTipEn: 'Dress toddlers warmly for night illuminations. Omuroyama chairlift offers safe, thrilling fun by day.',
    driveTipJa: '熱海〜伊東の国道135号線は夕方に渋滞しやすいので、伊豆スカイライン（有料山道）への迂回がスムーズ。',
    driveTipEn: 'Route 135 gets congested at dusk; bypass via scenic Izu Skyline toll road for open cruising.'
  },
  '12-early': {
    highlightsJa: [
      '熱海海上花火大会：冬の澄んだ夜空とすり鉢状の熱海湾に大音響で轟く特大花火',
      '御殿場プレミアム・アウトレット：雄大な富士山をバックに楽しむ冬のウインターセール',
      '富士山本宮浅間大社：世界遺産・富士山の湧水「湧玉池」と冬晴れの霊峰参拝',
      '静岡おでん街：青葉横丁・青葉おでん街で味わう黒はんぺんと出汁粉の熱々おでん'
    ],
    highlightsEn: [
      'Atami Marine Fireworks: Winter firework explosions echoing powerfully across the natural bay',
      'Gotemba Premium Outlets: Winter holiday shopping paired with majestic sunset Fuji views',
      'Fujisan Hongu Sengen Taisha: Sacred natural spring ponds & clear winter shrine grounds',
      'Shizuoka Oden Alley: Steaming black broth skewers dusted with sardine powder and dashi'
    ],
    climateJa: '最高11〜13℃ / 最低3〜5℃。富士山麓（御殿場・富士宮）はさらに3〜5℃低く、本格的な防寒が必要です。',
    climateEn: 'High 11–13°C / Low 3–5°C. Foothill areas around Gotemba/Fujinomiya run 3–5°C colder with icy winds.',
    clothingJa: '厚手ダウンコート、タートルネック、防寒シューズ。花火鑑賞時はベンチ用ブランケットがあると快適。',
    clothingEn: 'Heavy winter parka, thermal layers, and warm boots. Seat pads or blankets ideal for seaside fireworks.',
    noCarTipJa: '熱海花火大会は駅から親水公園まで徒歩15分。花火終了後の上り新幹線・東海道線は混み合うため宿宿泊が正解。',
    noCarTipEn: 'Atami Fireworks are a 15-min walk from station. Staying overnight is vastly superior to post-event transit queues.',
    familyTipJa: 'アウトレットは授乳室やキッズエリアが完備。熱海海上花火は混雑を避け客室から鑑賞できる温泉宿がベスト。',
    familyTipEn: 'Gotemba Outlets offer full baby nursery stations. Ocean-view ryokans let families watch fireworks from warm rooms.',
    driveTipJa: '御殿場IC周辺はセール期間中の週末に高速出口渋滞が発生。東名「足柄スマートIC」の利用が裏ワザ。',
    driveTipEn: 'Gotemba IC exit jams on sale weekends; use Ashigara Smart IC as an effortless local shortcut.'
  },
  '12-mid': {
    highlightsJa: [
      '伊豆シャボテン動物公園：名物「元祖カピバラの露天風呂」で温まるカピバラの愛らしい姿',
      '日本平夢テラス：隈研吾設計の展望施設から望む富士山・駿河湾・清水港の360度大パノラマ',
      '由比港：冬に旬を迎える「生桜えび」と獲れたて桜えびかき揚げ',
      '熱海・湯河原・修善寺：1年を締めくくる極上温泉宿での露天風呂と湯治ステイ'
    ],
    highlightsEn: [
      'Izu Shaboten Zoo: World-famous "Original Capybara Open-Air Onsen" winter bathing',
      'Nihondaira Yume Terrace: Kengo Kuma panoramic wood observatory over Suruga Bay & Mount Fuji',
      'Yui Port: Peak winter season for pristine fresh and crisp Sakura Shrimp tempura',
      'Atami & Shuzenji Ryokan: Year-end rejuvenating hot spring baths and luxury kaiseki dining'
    ],
    climateJa: '最高9〜11℃ / 最低2〜4℃。空気中の水蒸気が減り、1年で最も富士山が美しくくっきり見える季節。',
    climateEn: 'High 9–11°C / Low 2–4°C. Lowest humidity of the year guarantees the sharpest Mount Fuji clarity.',
    clothingJa: 'ロング丈の防寒アウター、手袋、マフラー。屋外展望台では耳当てやニット帽があると快適。',
    clothingEn: 'Long thermal coat, warm gloves, neck scarf, and knit beanie for scenic outdoor lookouts.',
    noCarTipJa: '静岡駅から日本平ロープウェイ直通バス運行中。新幹線「ひかり」なら東京〜静岡もわずか58分。',
    noCarTipEn: 'Direct city buses connect Shizuoka Shinkansen Station to Nihondaira ropeways in 35 minutes.',
    familyTipJa: 'シャボテン動物公園は動物との距離が近く放し飼いエリア多数。園内レストランもキッズメニュー豊富。',
    familyTipEn: 'Izu Shaboten Zoo allows close tactile animal encounters and features full kid-friendly dining facilities.',
    driveTipJa: '箱根峠や天城峠を越えるルートは路面凍結の可能性あり。海沿い（熱海〜伊東ルート）の走行が安全。',
    driveTipEn: 'Mountain passes around Hakone/Amagi risk black ice; adhere to lower coastal highway routes for safety.'
  }
};

export function getSeasonalInfoForPrefecture(prefId: string, region: string, period: SeasonPeriod): SeasonalInfo {
  // 神奈川県の特化データ
  if (prefId === 'kanagawa' && KANAGAWA_SEASONS[period.key]) {
    const specific = KANAGAWA_SEASONS[period.key];
    const fallback = getDefaultSeasonalInfo(region, period);
    return {
      highlightsJa: specific.highlightsJa || fallback.highlightsJa,
      highlightsEn: specific.highlightsEn || fallback.highlightsEn,
      climateJa: specific.climateJa || fallback.climateJa,
      climateEn: specific.climateEn || fallback.climateEn,
      clothingJa: specific.clothingJa || fallback.clothingJa,
      clothingEn: specific.clothingEn || fallback.clothingEn,
      noCarTipJa: specific.noCarTipJa || fallback.noCarTipJa,
      noCarTipEn: specific.noCarTipEn || fallback.noCarTipEn,
      familyTipJa: specific.familyTipJa || fallback.familyTipJa,
      familyTipEn: specific.familyTipEn || fallback.familyTipEn,
      driveTipJa: specific.driveTipJa || fallback.driveTipJa,
      driveTipEn: specific.driveTipEn || fallback.driveTipEn,
    };
  }

  // 静岡県の特化データ
  if (prefId === 'shizuoka' && SHIZUOKA_SEASONS[period.key]) {
    const specific = SHIZUOKA_SEASONS[period.key];
    const fallback = getDefaultSeasonalInfo(region, period);
    return {
      highlightsJa: specific.highlightsJa || fallback.highlightsJa,
      highlightsEn: specific.highlightsEn || fallback.highlightsEn,
      climateJa: specific.climateJa || fallback.climateJa,
      climateEn: specific.climateEn || fallback.climateEn,
      clothingJa: specific.clothingJa || fallback.clothingJa,
      clothingEn: specific.clothingEn || fallback.clothingEn,
      noCarTipJa: specific.noCarTipJa || fallback.noCarTipJa,
      noCarTipEn: specific.noCarTipEn || fallback.noCarTipEn,
      familyTipJa: specific.familyTipJa || fallback.familyTipJa,
      familyTipEn: specific.familyTipEn || fallback.familyTipEn,
      driveTipJa: specific.driveTipJa || fallback.driveTipJa,
      driveTipEn: specific.driveTipEn || fallback.driveTipEn,
    };
  }

  // その他の都道府県は地方別スマートフォールバック
  return getDefaultSeasonalInfo(region, period);
}

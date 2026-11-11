/**
 * 楽天アフィリエイト / 楽天トラベルリンク生成ユーティリティ
 */

export const RAKUTEN_AFFILIATE_ID = '5953a273.5cc8e490.5953a274.81eca08c';

/**
 * 楽天トラベルの正規アフィリエイトリンクを生成
 * @param options
 *   - hotelNo: 楽天トラベルの施設番号（例: 67295, 1459）※施設直リンク（最重要）
 *   - areaUrl: エリア検索URL（例: "https://search.travel.rakuten.co.jp/ds/hotellist/Japan-Akita-Semboku-Tazawako"）
 *   - keyword: 検索キーワード（施設番号やエリアURLがない場合のフォールバック）
 */
export function buildRakutenTravelUrl(options: { hotelNo?: string | number; areaUrl?: string; keyword?: string }): string {
  let targetUrl = '';

  if (options.hotelNo) {
    // 施設直リンク（https://travel.rakuten.co.jp/HOTEL/{hotelNo}/{hotelNo}.html）
    targetUrl = `https://travel.rakuten.co.jp/HOTEL/${options.hotelNo}/${options.hotelNo}.html`;
  } else if (options.areaUrl) {
    // 最新のエリア絞り込みURL（search.travel.rakuten.co.jp/ds/hotellist/...）
    targetUrl = options.areaUrl;
  } else if (options.keyword) {
    // キーワード検索正規URL
    targetUrl = `https://kw.travel.rakuten.co.jp/keyword/Search.do?f_keyword=${encodeURIComponent(options.keyword)}`;
  } else {
    targetUrl = 'https://travel.rakuten.co.jp/';
  }

  // 楽天アフィリエイト公式ゲートウェイ経由のURL
  return `https://hb.afl.rakuten.co.jp/hgc/${RAKUTEN_AFFILIATE_ID}/?pc=${encodeURIComponent(targetUrl)}`;
}

/**
 * 楽天トラベル公式の高画質施設画像URLを取得
 */
export function getRakutenHotelImageUrl(hotelNo: string | number): string {
  return `https://img.travel.rakuten.co.jp/share/HOTEL/${hotelNo}/${hotelNo}.jpg`;
}

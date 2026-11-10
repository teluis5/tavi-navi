/**
 * 楽天アフィリエイト / 楽天トラベルリンク生成ユーティリティ
 */

export const RAKUTEN_AFFILIATE_ID = '52513ff1.59ebf487.52513ff2.71d0e9e4';

/**
 * 楽天トラベルの正規アフィリエイトリンクを生成
 * @param options
 *   - hotelNo: 楽天トラベルのホテル番号（例: 67295）※指定時は個別宿ページへ直行
 *   - keyword: 検索キーワード（例: "熱海温泉 ホテルミクラス"）
 */
export function buildRakutenTravelUrl(options: { hotelNo?: string | number; keyword?: string }): string {
  let targetUrl = '';

  if (options.hotelNo) {
    // 個別宿の正規URL（一番CVRが高い）
    targetUrl = `https://travel.rakuten.co.jp/HOTEL/${options.hotelNo}/${options.hotelNo}.html`;
  } else if (options.keyword) {
    // 楽天トラベルの正規キーワード検索URL
    targetUrl = `https://kw.travel.rakuten.co.jp/keyword/Search.do?f_keyword=${encodeURIComponent(options.keyword)}`;
  } else {
    // デフォルトトップ
    targetUrl = 'https://travel.rakuten.co.jp/';
  }

  // 楽天アフィリエイト公式ゲートウェイ経由のURL
  return `https://hb.afl.rakuten.co.jp/hgc/${RAKUTEN_AFFILIATE_ID}/?pc=${encodeURIComponent(targetUrl)}`;
}

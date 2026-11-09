/**
 * Extract clean, unified article slug from article ID and prefecture.
 * Strips file extensions, prefecture prefix, and language suffix (-en).
 * e.g., "kanagawa-yokohama-autumn-kids-no-car-en.mdx" -> "yokohama-autumn-kids-no-car"
 */
export function getArticleSlug(id: string, pref: string): string {
  return id
    .replace(/\.(md|mdx)$/, '')
    .replace(new RegExp(`^${pref}-`), '')
    .replace(/-en$/, '');
}

import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const image = await readFile(resolve(process.cwd(), 'src/content/blog/dokokani-kakunodate-bukeyashiki-daytrip/hero.webp'));
  return new Response(image, { headers: { 'Content-Type': 'image/webp' } });
};

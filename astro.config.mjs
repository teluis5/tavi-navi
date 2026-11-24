// @ts-check

import fs from 'node:fs';
import path from 'node:path';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import { defineConfig, fontProviders } from 'astro/config';

// 公開済み日本語記事が存在する都道府県・月を自動集計（サイトマップの薄いページ除外用）
const activePrefs = new Set();
const activeMonths = new Set();
const allPrefIds = new Set();

try {
	const prefFile = fs.readFileSync(path.resolve('./src/data/prefectures.ts'), 'utf8');
	for (const m of prefFile.matchAll(/id:\s*['"]([a-z-]+)['"]/g)) {
		allPrefIds.add(m[1]);
	}

	const articlesDir = path.resolve('./src/content/articles');
	for (const file of fs.readdirSync(articlesDir)) {
		if (!file.endsWith('.mdx')) continue;
		const content = fs.readFileSync(path.join(articlesDir, file), 'utf8');
		const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
		if (!fmMatch) continue;
		const fm = fmMatch[1];
		if (/^draft:\s*true\b/m.test(fm)) continue;
		if (/^lang:\s*['"]?en['"]?/m.test(fm)) continue;

		const prefMatch = fm.match(/^pref:\s*['"]?([a-z-]+)['"]?/m);
		if (prefMatch) activePrefs.add(prefMatch[1]);

		const seasonMatch = fm.match(/^season:\s*['"]?([^\r\n'"]+)['"]?/m);
		if (seasonMatch) {
			for (const mm of seasonMatch[1].matchAll(/(\d{1,2})月/g)) {
				activeMonths.add(mm[1]);
			}
		}
	}
} catch (err) {
	console.warn('[sitemap-filter] Failed to scan articles:', err);
}

const EXCLUDED_EXACT_PATHS = new Set([
	'/404/',
	'/preview-timeline/',
	'/preview-timeline-wide/',
	'/preview-headings/',
	'/tokyo/dokokani-nannichimae/',
	'/special/spot-editorial-sample/',
]);

// https://astro.build/config
export default defineConfig({
	site: 'https://tavi-navi.net',
	trailingSlash: 'always',
	i18n: {
		defaultLocale: 'ja',
		locales: ['ja', 'en'],
		routing: {
			prefixDefault: false,
		},
	},
	build: {
		inlineStylesheets: 'always',
	},
	integrations: [
		mdx(),
		sitemap({
			filter: (page) => {
				const pathname = new URL(page).pathname;
				if (/^\/en(?:\/|$)/.test(pathname) || EXCLUDED_EXACT_PATHS.has(pathname)) {
					return false;
				}
				if (/^\/[^/]+\/[^/]+\/\d+\/$/.test(pathname)) {
					return false;
				}
				const prefMatch = pathname.match(/^\/([a-z-]+)\/$/);
				if (prefMatch && allPrefIds.has(prefMatch[1]) && !activePrefs.has(prefMatch[1])) {
					return false;
				}
				const seasonMatch = pathname.match(/^\/season\/(\d{1,2})\/$/);
				if (seasonMatch && !activeMonths.has(seasonMatch[1])) {
					return false;
				}
				const stationMatch = pathname.match(/^\/special\/dokokanibyun\/station\/([^/]+)\/$/);
				if (stationMatch && stationMatch[1] !== 'akita' && stationMatch[1] !== 'tazawako') {
					return false;
				}
				return true;
			},
		}),
		icon(),
	],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});

// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import { defineConfig, fontProviders } from 'astro/config';

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
	integrations: [mdx(), sitemap({ filter: (page) => {
		const pathname = new URL(page).pathname;
		return !/^\/en(?:\/|$)/.test(pathname) && pathname !== '/tokyo/dokokani-nannichimae/';
	} }), icon()],
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

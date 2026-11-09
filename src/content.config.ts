import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      lang: z.enum(['ja', 'en']).default('ja'),
      pref: z.string(), // e.g. "tokyo", "kyoto"
      category: z.string().default('観光'),
      season: z.string().optional(), // e.g. "秋", "autumn", "通年", "11月中旬"
      departure: z.string().optional(), // e.g. "tokyo", "東京発"
      duration: z.string().optional(),  // e.g. "1泊2日", "日帰り"
      heroImage: z.string().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { articles };

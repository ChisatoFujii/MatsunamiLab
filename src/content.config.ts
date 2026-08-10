import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({
    base: './src/content/blog',
    pattern: '**/*.md',
  }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    category: z.string(),
    updatedDate: z.coerce.date().optional(),
    level: z.enum(['初級', '中級', '上級']),
    subcategories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    color: z.enum(['blue', 'green', 'purple']),
    thumbnail: z.string().optional(),
  }),
});

export const collections = { blog };

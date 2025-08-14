import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			category: z.string().optional(),
			series: z.string().optional(),
			tags: z.array(z.string()).optional(),
		}),
});

const diary = defineCollection({
	// Load Markdown files in the `src/content/diary/` directory.
	loader: glob({ base: './src/content/diary', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			pubDate: z.coerce.date(),
			mood: z.string().optional(), // 心情状态
			weather: z.string().optional(), // 天气
			location: z.string().optional(), // 地点
			tags: z.array(z.string()).optional(),
			heroImage: image().optional(),
			private: z.boolean().optional(), // 是否私密
		}),
});

const zueg = defineCollection({
	// Load Markdown files in the `src/content/zueg/` directory.
	loader: glob({ base: './src/content/zueg', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			category: z.string(), // 随笔分类：技术、生活、思考等
			tags: z.array(z.string()).optional(),
			heroImage: image().optional(),
			readingTime: z.number().optional(), // 预估阅读时间（分钟）
		}),
});

export const collections = { blog, diary, zueg };

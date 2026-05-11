import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const contenidoSchema = z.object({
	title: z.string()
});

const biografia = defineCollection({
	loader: glob({ base: './src/content/biografia', pattern: '**/*.{md,mdx}' }),
	schema: contenidoSchema
});

const proyectos = defineCollection({
	loader: glob({ base: './src/content/proyectos', pattern: '**/*.{md,mdx}' }),
	schema: contenidoSchema
});

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: contenidoSchema
});

export const collections = {
	biografia,
	proyectos,
	blog
};

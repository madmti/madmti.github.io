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

const academico = defineCollection({
	loader: glob({ base: './src/content/academico', pattern: '**/*.json' }),
	schema: z.object({
		titulo: z.string(),
		semestres: z.array(
			z.object({
				label: z.string(),
				ramos: z.array(
					z.object({
						sigla: z.string(),
						nombre: z.string(),
						creditos: z.number(),
						categoria: z.string(),
						estado: z.enum(['aprobado', 'cursando', 'pendiente']).optional()
					})
				)
			})
		),
		categorias: z
			.array(
				z.object({
					nombre: z.string(),
					descripcion: z.string().optional()
				})
			)
			.optional()
	})
});

export const collections = {
	biografia,
	proyectos,
	blog,
	academico
};

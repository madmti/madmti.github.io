// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	image: {
		domains: ['avatars.githubusercontent.com', 'github.com']
	},

	output: 'static',
	site: 'https://madmti.github.io',
	compressHTML: true,
	integrations: [sitemap()],

	vite: {
		plugins: [tailwindcss()]
	}
});

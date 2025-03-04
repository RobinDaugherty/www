// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import imgAttr from 'remark-imgattr';
import icon from 'astro-icon';

const injectScss = `
@use "astro-breakpoints/use-breakpoints.scss" as * with (
$breakpoints: (
    "xs": "320px",
    "sm": "640px",
    "md": "768px",
    "lg": "1024px",
    "xl": "1281px",
    "xxl": "1920px",
    )
);
`;

// https://astro.build/config
export default defineConfig({
	site: 'https://www.robindaugherty.net',
	prefetch: true,
	trailingSlash: 'never',
	integrations: [mdx(), sitemap(), icon()],
	markdown: {
		remarkPlugins: [imgAttr],
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					// This injects the above breakpoints into every <style lang="scss"> block
					additionalData(source, filePath) {
						if (filePath.includes('use-')) return source;
						return `${injectScss}\n${source}`;
					},
				},
			},
		},
	},
});

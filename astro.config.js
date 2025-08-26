import sitemap from "@astrojs/sitemap"
import { getProjectRoot } from "@firefoxic/utils"
import { defineConfig } from "astro/config"
import browserslistToEsbuild from "browserslist-to-esbuild"

// https://astro.build/config
export default defineConfig({
	base: getProjectRoot(),
	build: {
		assets: `assets`,
	},
	integrations: [sitemap()],
	scopedStyleStrategy: `class`,
	server: {
		host: true,
	},
	site: `https://firefoxic.github.io/project-template-astro/`,
	vite: {
		build: {
			assetsInlineLimit: 0,
			cssMinify: undefined,
			emptyOutDir: true,
			target: browserslistToEsbuild(),
		},
		css: {
			transformer: `postcss`,
		},
	},
})

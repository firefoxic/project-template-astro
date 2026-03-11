import { readFileSync } from "node:fs"
import { fileURLToPath, URL } from "node:url"

import sitemap from "@astrojs/sitemap"
import { getProjectRoot } from "@firefoxic/utils"
import { defineConfig } from "astro/config"
import browserslist from "browserslist"
import browserslistToEsbuild from "browserslist-to-esbuild"
import { browserslistToTargets } from "lightningcss"

let queries = readFileSync(`./.browserslistrc`, `utf8`)
	.split(`\n`)
	.filter((line) => line !== `` || line.startsWith(`#`))
	.join(`,`)
let targets = browserslistToTargets(browserslist(queries))

// https://astro.build/config
export default defineConfig({
	base: getProjectRoot(),
	build: {
		assets: `assets`,
	},
	integrations: [sitemap()],
	server: {
		host: true,
		open: true,
		// port: 3000,
	},
	site: `https://firefoxic.github.io/project-template-astro/`,
	vite: {
		build: {
			cssMinify: `lightningcss`,
			emptyOutDir: true,
			target: browserslistToEsbuild(),
		},
		resolve: {
			alias: {
				"@/": fileURLToPath(new URL(`./src/`, import.meta.url)),
			},
		},
		css: {
			lightningcss: {
				targets,
			},
			transformer: `lightningcss`,
		},
	},
})

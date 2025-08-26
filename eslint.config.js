import { default as firefoxicEslintConfig, globals } from "@firefoxic/eslint-config"
import eslintPluginAstro from "eslint-plugin-astro"

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		ignores: [
			`.astro/`,
			`dist/`,
			`src/shared/vendor/`,
			`index.js`,
		],
	},
	{
		ignores: [`src/`],
		languageOptions: {
			globals: {
				...globals.nodeBuiltin,
			},
		},
	},
	{
		files: [`src/**/*.{astro,js}`],
		languageOptions: {
			globals: {
				...globals.browser,
			},
		},
	},
	{
		files: [`src/**/*.astro`],
		languageOptions: {
			globals: {
				...globals.nodeBuiltin,
			},
		},
	},
	...firefoxicEslintConfig,
	...eslintPluginAstro.configs.recommended,
	{
		rules: {
			"@stylistic/js/semi": [
				`error`,
				`never`,
				{ beforeStatementContinuationChars: `any` },
			],
			"astro/no-set-text-directive": `error`,
			"astro/no-unused-css-selector": `error`,
			"astro/prefer-class-list-directive": `error`,
			"astro/prefer-object-class-list": `error`,
			"astro/prefer-split-class-list": `error`,
			"astro/semi": [
				`error`,
				`never`,
				{ beforeStatementContinuationChars: `always` },
			],
		},
	},
]

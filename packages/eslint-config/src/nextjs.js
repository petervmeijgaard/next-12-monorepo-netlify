import { fixupPluginRules } from "@eslint/compat";
import nextPlugin from "@next/eslint-plugin-next";

export default [
	{
		files: ["**/*.{ts,tsx,cts,mts,js,jsx,cjs,mjs}"],
		plugins: {
			"@next/next": fixupPluginRules(nextPlugin),
		},
		rules: {
			...nextPlugin.configs["core-web-vitals"].rules,
		},
	},
];

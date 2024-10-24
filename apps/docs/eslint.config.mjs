import { base, nextjs, react } from "@acme/eslint-config";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
	...base,
	...react,
	...nextjs,
	{
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			parserOptions: {
				project: "./tsconfig.json",
			},
		},
	},
	{
		ignores: [".next", ".turbo", "node_modules"],
	},
];

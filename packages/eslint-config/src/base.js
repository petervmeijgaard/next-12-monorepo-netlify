import js from "@eslint/js";
import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import prettierConfig from "eslint-config-prettier";
import importX from "eslint-plugin-import-x";
import perfectionist from "eslint-plugin-perfectionist";
import globals from "globals";
import ts from "typescript-eslint";

/* eslint-disable perfectionist/sort-objects */
export default ts.config(
	prettierConfig,
	perfectionist.configs["recommended-natural"],
	comments.recommended,
	js.configs.recommended,
	importX.flatConfigs.recommended,
	importX.flatConfigs.typescript,
	{
		linterOptions: {
			reportUnusedDisableDirectives: "error",
		},
	},
	{
		files: ["**/*.{ts,tsx,cts,mts,js,jsx,cjs,mjs}"],
		languageOptions: {
			parser: ts.parser,
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				...globals.node,
				...globals.builtin,
				...globals.es2021,
			},
		},
		rules: {
			"import-x/no-cycle": "error",
			"import-x/no-extraneous-dependencies": "error",
		},
	},
	{
		files: ["**/*.{ts,tsx,cts,mts}"],
		extends: [
			...ts.configs.strictTypeChecked,
			...ts.configs.stylisticTypeChecked,
		],
		rules: {
			"@typescript-eslint/array-type": ["error", { default: "generic" }],
			"@typescript-eslint/consistent-type-definitions": ["error", "type"],
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					argsIgnorePattern: "^_",
					caughtErrorsIgnorePattern: "^_",
					varsIgnorePattern: "^_",
				},
			],
			"@typescript-eslint/prefer-nullish-coalescing": [
				"error",
				{
					ignorePrimitives: {
						bigint: false,
						boolean: false,
						number: false,
						string: true,
					},
				},
			],
			"@typescript-eslint/switch-exhaustiveness-check": "error",
		},
	},
);
/* eslint-enable perfectionist/sort-objects */

import base from "./src/base.js";

/** @type {import("eslint").Linter.Config[]} */
export default [
	...base,
	{
		ignores: [".turbo", "node_modules"],
	},
];

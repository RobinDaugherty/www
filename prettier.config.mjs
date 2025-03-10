/** @type {import("prettier").Config} */
export default {
	singleQuote: true,
	trailingComma: 'all',
	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: '**/*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};

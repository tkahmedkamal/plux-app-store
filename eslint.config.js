// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
	expoConfig,
	{
		plugins: {
			'unused-imports': require('eslint-plugin-unused-imports'),
			'@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
		},

		rules: {
			'no-console': 'warn',
			'unused-imports/no-unused-imports': 'error',
			'import/order': [
				'error',
				{
					groups: [
						'type',
						'builtin',
						'object',
						'external',
						'internal',
						'parent',
						'sibling',
						'index',
					],
					pathGroups: [
						{
							pattern: '~/**',
							group: 'external',
							position: 'after',
						},
					],
					'newlines-between': 'always',
					alphabetize: { order: 'asc', caseInsensitive: true },
				},
			],

			'@typescript-eslint/consistent-type-imports': [
				'error',
				{
					prefer: 'type-imports',
					disallowTypeAnnotations: false,
				},
			],
			'@typescript-eslint/no-require-imports': 'off',
		},

		ignores: ['dist/*', 'eslint.config.js'],
	},
]);

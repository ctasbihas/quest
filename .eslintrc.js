module.exports = {
	root: true,
	extends: '@react-native',
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
				singleQuote: true,
				trailingComma: 'es5',
				tabWidth: 4,
				useTabs: true,
				bracketSpacing: true,
			},
		],
	},
};

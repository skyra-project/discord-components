const sapphirePrettierConfig = require('@sapphire/prettier-config');

module.exports = {
	...sapphirePrettierConfig,
	overrides: [
		...sapphirePrettierConfig.overrides,
		{
			files: ['*.md'],
			options: {
				tabWidth: 2,
				useTabs: false,
				printWidth: 80,
				proseWrap: 'always'
			}
		}
	]
};

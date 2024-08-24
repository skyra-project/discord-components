import sapphirePrettierConfig from '@sapphire/prettier-config';

export default {
	...sapphirePrettierConfig,
	plugins: ['prettier-plugin-astro'],
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
		},
		{
			files: ['*.svg'],
			options: {
				parser: 'html'
			}
		}
	]
};

// eslint-disable-next-line @typescript-eslint/unbound-method, @typescript-eslint/no-var-requires
const { resolve } = require('path');

module.exports = {
	from: /import\(/g,
	to: 'import(\n/* @vite-ignore */\n',
	files: [
		resolve(__dirname, '../dist/esm/index*.js'),
		resolve(__dirname, '../dist/esm/polyfills/index.js'),
		resolve(__dirname, '../dist/esm/polyfills/system.js'),
		resolve(__dirname, '../dist/skyra-discord-components-core/p*.js')
	],
	quiet: true
};

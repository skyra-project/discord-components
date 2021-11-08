const { resolve } = require('path');

module.exports = {
	from: 'export default mod;\n',
	to: '',
	files: [resolve(__dirname, '../dist/index.mjs')],
	quiet: true
};

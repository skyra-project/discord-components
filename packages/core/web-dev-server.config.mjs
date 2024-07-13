import { fileURLToPath, URL } from 'node:url';
import { esbuildPlugin } from '@web/dev-server-esbuild';

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
	plugins: [
		esbuildPlugin({
			ts: true,
			target: 'es2020',
			tsconfig: fileURLToPath(new URL('src/tsconfig.json', import.meta.url))
		})
	],

	open: '/demo/',
	watch: true,

	nodeResolve: {
		exportConditions: ['browser', 'development']
	},

	appIndex: 'demo/index.html'
});

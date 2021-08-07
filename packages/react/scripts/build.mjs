import esbuild from 'esbuild';
import { join } from 'node:path';
import { fileURLToPath, URL } from 'node:url';

const rootFolder = new URL('../', import.meta.url);
const distFolder = new URL('dist/', rootFolder);
const srcFolder = new URL('src/', rootFolder);

await esbuild.build({
	logLevel: 'info',
	entryPoints: [fileURLToPath(new URL('index.ts', srcFolder))],
	format: 'esm',
	bundle: true,
	resolveExtensions: ['.ts', '.tsx'],
	write: true,
	outfile: fileURLToPath(new URL('index.mjs', distFolder)),
	platform: 'browser',
	tsconfig: join(fileURLToPath(rootFolder), 'tsconfig.json'),
	sourcemap: true,
	external: ['react', 'react-dom', '@skyra/discord-components-core', '@skyra/discord-components-core/loader'],
	minify: true
});

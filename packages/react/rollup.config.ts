import commonjs from '@rollup/plugin-commonjs';
import resolveNode from '@rollup/plugin-node-resolve';
import cleaner from 'rollup-plugin-cleaner';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default {
	input: 'src/index.ts',
	inlineDynamicImports: true,
	output: [
		{
			file: './dist/index.js',
			format: 'cjs',
			exports: 'named',
			sourcemap: true
		},
		{
			file: './dist/index.es.js',
			format: 'es',
			exports: 'named',
			sourcemap: true
		}
	],
	plugins: [
		cleaner({
			targets: ['./dist/']
		}),
		external(),
		typescript(),
		resolveNode({ preferBuiltins: true }),
		commonjs({ extensions: ['ts', '.tsx'] }),
		terser({
			ecma: 6,
			// This will ensure that whenever Rollup is in watch (dev) mode, console logs will not be removed
			compress: { drop_console: !Reflect.has(process.env, 'ROLLUP_WATCH') }, // eslint-disable-line @typescript-eslint/camelcase
			output: { comments: false }
		})
	]
};

import dts from 'rollup-plugin-dts';

export default {
	input: 'build/index.d.ts',
	output: [
		{
			file: './dist/index.d.ts',
			format: 'es'
		}
	],
	external: ['react', 'react-dom', '@skyra/discord-components-core'],
	plugins: [dts()]
};

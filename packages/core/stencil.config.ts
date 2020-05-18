import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
	namespace: 'skyra-discord-components-core',
	buildEs5: false,
	outputTargets: [
		reactOutputTarget({
			componentCorePackage: '@skyra/discord-components-core',
			proxiesFile: '../react/src/index.ts'
		}),
		{
			type: 'dist',
			empty: true,
			esmLoaderPath: '../loader'
		},
		{
			type: 'docs-readme',
			strict: true
		},
		{
			type: 'www',
			serviceWorker: null,
			copy: [{ src: '../static', dest: 'static/' }]
		}
	]
};

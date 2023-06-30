import { vitePlugin } from '@remcovaes/web-test-runner-vite-plugin';
import { playwrightLauncher } from '@web/test-runner-playwright';

const filteredLogs = [
	//
	'Running in dev mode',
	'lit-html is in dev mode',
	'[vite] connecting...',
	'[vite] connected.'
];

export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
	files: 'test/**/*.test.ts',
	nodeResolve: {
		exportConditions: ['browser', 'development']
	},
	filterBrowserLogs(log) {
		for (const arg of log.args) {
			if (typeof arg === 'string' && filteredLogs.some((l) => arg.includes(l))) {
				return false;
			}
		}
		return true;
	},
	plugins: [vitePlugin()],
	concurrentBrowsers: 2,
	concurrency: 1,
	browsers: [
		//
		playwrightLauncher({ product: 'chromium' }),
		playwrightLauncher({ product: 'firefox' }),
		playwrightLauncher({ product: 'webkit' })
	]
});

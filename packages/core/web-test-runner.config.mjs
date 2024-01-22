import { playwrightLauncher } from '@web/test-runner-playwright';

const filteredLogs = [
	//
	'Running in dev mode',
	'lit-html is in dev mode',
	'Lit is in dev mode.',
	'[vite] connecting...',
	'[vite] connected.'
];

const manual = process.argv.includes('--manual');

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
	coverageConfig: {
		// See https://github.com/modernweb-dev/web/issues/1400#issuecomment-1543733840 for more info on this wacky inclusion pattern
		include: ['**'],
		exclude: ['**/node_modules/**'],
		reporters: ['text', 'lcov', 'clover']
	},
	manual,
	plugins: [],
	concurrentBrowsers: 3,
	concurrency: 1,
	browsers: [
		//
		playwrightLauncher({ product: 'chromium' }),
		playwrightLauncher({ product: 'firefox' }),
		playwrightLauncher({ product: 'webkit' })
	]
});

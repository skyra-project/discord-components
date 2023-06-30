export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
	open: '/demo/',

	nodeResolve: {
		exportConditions: ['browser', 'development']
	},

	appIndex: 'demo/index.html'
});

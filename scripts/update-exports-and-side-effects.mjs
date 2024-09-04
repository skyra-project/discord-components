import { readdir, readFile, writeFile } from 'node:fs/promises';

const corePackageJsonPath = new URL('../packages/core/package.json', import.meta.url);
const corePackageJson = JSON.parse(await readFile(corePackageJsonPath, 'utf-8'));

const coreComponentsDirectoryPath = new URL('../packages/core/src/components/', import.meta.url);
const coreComponentsDirectory = await readdir(coreComponentsDirectoryPath);

const paths = {
	'.': './dist/index.js',
	'./i18n': './dist/i18n/init.js',
	'./i18n/utils': './dist/i18n/utils.js'
};

for (const item of coreComponentsDirectory) {
	if (item.startsWith('discord-')) {
		const filesInDirectory = await readdir(new URL(`${item}/`, coreComponentsDirectoryPath));
		if (filesInDirectory.length) {
			paths[`./${item}.js`] = `./dist/components/${item}/${filesInDirectory[0].replace(/\.ts$/, '.js')}`;
		}
	}
}

corePackageJson.exports = paths;
corePackageJson.sideEffects = Object.values(paths);

await writeFile(corePackageJsonPath, JSON.stringify(corePackageJson, null, '\t'));

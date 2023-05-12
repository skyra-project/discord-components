import { readdir, readFile, writeFile } from 'node:fs/promises';

const coreIndexTsPath = new URL('../packages/core/src/index.ts', import.meta.url);
let coreIndexTs = await readFile(coreIndexTsPath, 'utf-8');

const coreComponentsDirectoryPath = new URL('../packages/core/src/components/', import.meta.url);
const coreComponentsDirectory = await readdir(coreComponentsDirectoryPath);

const paths = [];

for (const item of coreComponentsDirectory) {
	if (item.startsWith('discord-')) {
		const filesInDirectory = await readdir(new URL(`${item}/`, coreComponentsDirectoryPath));
		if (filesInDirectory.length) {
			const className = filesInDirectory[0].replace(/\.ts$/, '');
			const fileName = `${className}.js`;
			paths.push(`export { ${className} } from './components/${item}/${fileName}';`);
		}
	}
}

const exportsStartMarker = '/* EXPORTS START */';
const exportsEndMarker = '/* EXPORTS END */';

const startIndex = coreIndexTs.indexOf(exportsStartMarker);
const endIndex = coreIndexTs.indexOf(exportsEndMarker);

if (startIndex !== -1 && endIndex !== -1) {
	const replaceableContent = coreIndexTs.substring(startIndex, endIndex + exportsEndMarker.length);
	const contentToInject = [
		//
		exportsStartMarker,
		'',
		paths.join('\n'),
		'',
		exportsEndMarker
	].join('\n');

	coreIndexTs = coreIndexTs.replace(replaceableContent, contentToInject);
}

await writeFile(coreIndexTsPath, coreIndexTs);

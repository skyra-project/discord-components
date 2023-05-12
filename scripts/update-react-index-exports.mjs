import { readdir, readFile, writeFile } from 'node:fs/promises';

const reactIndexTsPath = new URL('../packages/react/src/index.ts', import.meta.url);
let reactIndexTs = await readFile(reactIndexTsPath, 'utf-8');

const coreComponentsDirectoryPath = new URL('../packages/core/src/components/', import.meta.url);
const coreComponentsDirectory = await readdir(coreComponentsDirectoryPath);

const paths = [];

for (const item of coreComponentsDirectory) {
	if (item.startsWith('discord-')) {
		const filesInDirectory = await readdir(new URL(`${item}/`, coreComponentsDirectoryPath));
		if (filesInDirectory.length) {
			const className = filesInDirectory[0].replace(/\.ts$/, '');
			paths.push(`export const ${className} = createReactComponent('${item}', ReactComponents.${className});`);
		}
	}
}

const importsStartMarker = '/* IMPORTS START */';
const importsEndMarker = '/* IMPORTS END */';

const startIndex = reactIndexTs.indexOf(importsStartMarker);
const endIndex = reactIndexTs.indexOf(importsEndMarker);

if (startIndex !== -1 && endIndex !== -1) {
	const replaceableContent = reactIndexTs.substring(startIndex, endIndex + importsEndMarker.length);
	const contentToInject = [
		//
		importsStartMarker,
		'',
		paths.join('\n'),
		'',
		importsEndMarker
	].join('\n');

	reactIndexTs = reactIndexTs.replace(replaceableContent, contentToInject);
}

await writeFile(reactIndexTsPath, reactIndexTs);

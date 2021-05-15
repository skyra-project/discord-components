import { rm } from 'node:fs/promises';

const distFolder = new URL('../dist', import.meta.url);
const buildFolder = new URL('../build', import.meta.url);

const options = { recursive: true, force: true };

await Promise.all([
	rm(distFolder, options), //
	rm(buildFolder, options) //
]);

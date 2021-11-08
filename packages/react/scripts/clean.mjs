import { rm } from 'node:fs/promises';

const distFolder = new URL('../dist', import.meta.url);

const options = { recursive: true, force: true };

await Promise.all([
	rm(distFolder, options) //
]);

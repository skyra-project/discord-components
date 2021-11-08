import { rm } from 'node:fs/promises';

const coreDirectory = new URL('../packages/core/', import.meta.url);
const reactDirectory = new URL('../packages/react/', import.meta.url);

const coreDistDirectory = new URL('dist/', coreDirectory);
const coreLoaderDirectory = new URL('loader/', coreDirectory);
const coreWwwDirectory = new URL('www/', coreDirectory);

const reactSrcDirectory = new URL('src/', reactDirectory);
const reactDistDirectory = new URL('dist/', reactDirectory);

const options = { recursive: true, force: true };

await Promise.all([
	rm(coreDistDirectory, options),
	rm(coreLoaderDirectory, options),
	rm(coreWwwDirectory, options),
	rm(reactSrcDirectory, options),
	rm(reactDistDirectory, options)
]);

import { rm } from 'node:fs/promises';

const coreDirectory = new URL('../packages/core/', import.meta.url);
const reactDirectory = new URL('../packages/react/', import.meta.url);

const coreDistDirectory = new URL('dist/', coreDirectory);
const coreCoverageDirectory = new URL('coverage/', coreDirectory);
const reactDistDirectory = new URL('dist/', reactDirectory);

const options = { recursive: true, force: true };

await Promise.all([
	//
	rm(coreDistDirectory, options),
	rm(coreCoverageDirectory, options),
	rm(reactDistDirectory, options)
]);

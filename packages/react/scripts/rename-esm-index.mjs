import { rename } from 'node:fs/promises';
import { join } from 'node:path';
import process from 'node:process';
import { green } from 'colorette';

const inputPath = 'dist/esm/index.d.ts';
const outputPath = 'dist/esm/index.d.mts';

const fullInputPathUrl = join(process.cwd(), inputPath);
const fullOutputPathUrl = join(process.cwd(), outputPath);

await rename(fullInputPathUrl, fullOutputPathUrl);

console.log(green(`✅ Renamed index.d.ts to index.d.mts`));

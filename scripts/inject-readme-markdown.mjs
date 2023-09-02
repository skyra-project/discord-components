import toc from 'markdown-toc';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { parse } from 'node:path';

const readmePath = new URL('../README.md', import.meta.url);
const readme = await readFile(readmePath, 'utf-8');

const coreReadmePath = new URL('../packages/core/README.md', import.meta.url);
const coreReadme = await readFile(coreReadmePath, 'utf-8');

const reactReadmePath = new URL('../packages/react/README.md', import.meta.url);
const reactReadme = await readFile(reactReadmePath, 'utf-8');

const readmeTemplatesPath = new URL('../assets/readme-templates/', import.meta.url);
const readmeTemplatesDirectory = await readdir(readmeTemplatesPath);

const readmeTemplates = new Map();
for await (const file of readmeTemplatesDirectory) {
	const fileContent = await readFile(new URL(file, readmeTemplatesPath), 'utf-8');
	readmeTemplates.set(parse(file).name, fileContent);
}

const headerStartMarker = '<!-- # HEADER START # -->';
const headerEndMarker = '<!-- # HEADER END # -->';

const tocStartMarker = '<!-- # TOC START # -->';
const tocEndMarker = '<!-- # TOC END # -->';

const descriptionStarMarker = '<!-- # DESCRIPTION START # -->';
const descriptionEndMarker = '<!-- # DESCRIPTION END # -->';

const featuresStartMarker = '<!-- # FEATURES START # -->';
const featuresEndMarker = '<!-- # FEATURES END # -->';

const coreUsageStartMarker = '<!-- # CORE_USAGE START # -->';
const coreUsageEndMarker = '<!-- # CORE_USAGE END # -->';

const coreNotesStartMarker = '<!-- # CORE_NOTES START # -->';
const coreNotesEndMarker = '<!-- # CORE_NOTES END # -->';

const reactUsageStartMarker = '<!-- # REACT_USAGE START # -->';
const reactUsageEndMarker = '<!-- # REACT_USAGE END # -->';

const reactNotesStartMarker = '<!-- # REACT_NOTES START # -->';
const reactNotesEndMarker = '<!-- # REACT_NOTES END # -->';

const screenshotsStartMarker = '<!-- # SCREENSHOTS START # -->';
const screenshotsEndMarker = '<!-- # SCREENSHOTS END # -->';

const contributingStartMarker = '<!-- # CONTRIBUTING START # -->';
const contributingEndMarker = '<!-- # CONTRIBUTING END # -->';

for (let [file, filePath] of [
	[readme, readmePath],
	[coreReadme, coreReadmePath],
	[reactReadme, reactReadmePath]
]) {
	for (const [startMarker, endMarker, templateFileName] of [
		[headerStartMarker, headerEndMarker, 'HEADER'],
		[descriptionStarMarker, descriptionEndMarker, 'DESCRIPTION'],
		[featuresStartMarker, featuresEndMarker, 'FEATURES'],
		[coreUsageStartMarker, coreUsageEndMarker, 'CORE_USAGE'],
		[coreNotesStartMarker, coreNotesEndMarker, 'CORE_NOTES'],
		[reactUsageStartMarker, reactUsageEndMarker, 'REACT_USAGE'],
		[reactNotesStartMarker, reactNotesEndMarker, 'REACT_NOTES'],
		[screenshotsStartMarker, screenshotsEndMarker, 'SCREENSHOTS'],
		[contributingStartMarker, contributingEndMarker, 'CONTRIBUTING'],
		[tocStartMarker, tocEndMarker, null]
	]) {
		const startIndex = file.indexOf(startMarker);
		const endIndex = file.indexOf(endMarker);

		if (startIndex !== -1 && endIndex !== -1) {
			const replaceableContent = file.substring(startIndex, endIndex + endMarker.length);

			if (templateFileName === null) {
				const generatedToc = toc(file).content;
				file = file.replace(replaceableContent, generatedToc);
			} else {
				file = file.replace(replaceableContent, readmeTemplates.get(templateFileName));
			}
		}
	}

	await writeFile(filePath, file, 'utf-8');
}

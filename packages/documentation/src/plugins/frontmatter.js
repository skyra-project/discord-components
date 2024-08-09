import { MarkdownPageEvent } from 'typedoc-plugin-markdown';

/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
	app.renderer.on(
		MarkdownPageEvent.BEGIN,
		/**
		 * @param {MarkdownPageEvent} page
		 */
		(page) => {
			if (page.url === 'README.md') {
				page.frontmatter.tableOfContents = {
					minHeadingLevel: 1,
					maxHeadingLevel: 4
				};
			}
		}
	);
}

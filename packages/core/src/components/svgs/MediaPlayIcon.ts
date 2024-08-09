import { html, svg } from 'lit';
import { spread } from '../../spread.js';

const svgContent = svg`
	<path fill="currentColor" d="M9.25 3.35C7.87 2.45 6 3.38 6 4.96v14.08c0 1.58 1.87 2.5 3.25 1.61l10.85-7.04a1.9 1.9 0 0 0 0-3.22L9.25 3.35Z"></path>
`;

export default function AudioVideoPlayIcon(props: Record<string, unknown> = {}) {
	return html`<svg ${spread(props)} aria-hidden="true" role="img" width="16" height="16" fill="none" viewBox="0 0 24 24">${svgContent}</svg>`;
}

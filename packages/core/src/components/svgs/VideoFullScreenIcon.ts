import { html, svg } from 'lit';
import { spread } from '../../spread.js';

const svgContent = svg`
	<path fill="currentColor" d="M4 6c0-1.1.9-2 2-2h3a1 1 0 0 0 0-2H6a4 4 0 0 0-4 4v3a1 1 0 0 0 2 0V6ZM4 18c0 1.1.9 2 2 2h3a1 1 0 1 1 0 2H6a4 4 0 0 1-4-4v-3a1 1 0 1 1 2 0v3ZM18 4a2 2 0 0 1 2 2v3a1 1 0 1 0 2 0V6a4 4 0 0 0-4-4h-3a1 1 0 1 0 0 2h3ZM20 18a2 2 0 0 1-2 2h-3a1 1 0 1 0 0 2h3a4 4 0 0 0 4-4v-3a1 1 0 1 0-2 0v3Z"></path>
`;

export default function VideoFullScreenIcon(props: Record<string, unknown> = {}) {
	return html`<svg ${spread(props)} aria-hidden="true" role="img" width="24" height="24" fill="none" viewBox="0 0 24 24">${svgContent}</svg>`;
}

import { html, svg } from 'lit';
import { spread } from '../../spread.js';

const svgContent = svg`
	<path fill="currentColor" d="M5.3 9.3a1 1 0 0 1 1.4 0l5.3 5.29 5.3-5.3a1 1 0 1 1 1.4 1.42l-6 6a1 1 0 0 1-1.4 0l-6-6a1 1 0 0 1 0-1.42Z"></path>
`;

export default function ExpandMore(props: Record<string, unknown> = {}) {
	return html`<svg ${spread(props)} aria-hidden="false" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		${svgContent}
	</svg>`;
}

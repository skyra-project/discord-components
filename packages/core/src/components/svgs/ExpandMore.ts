import { spread } from '@open-wc/lit-helpers';
import { html, svg } from 'lit';

const svgContent = svg`
	<svg xmlns="http://www.w3.org/2000/svg" style="color: currentColor;" fill="currentColor" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
`;

export default function ExpandMore(props: Record<string, unknown> = {}) {
	return html`<svg
		${spread(props)}
		class="discord-expand-more-icon"
		aria-hidden="false"
		width="18"
		height="18"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		${svgContent}
	</svg>`;
}

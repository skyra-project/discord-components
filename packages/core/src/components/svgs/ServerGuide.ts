import { spread } from '@open-wc/lit-helpers';
import { html, svg } from 'lit';

const svgContent = svg`
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M7 15H9V8H12.5L15 5.5L12.5 3H9V1H7V3H1L3.5 5.5L1 8H7V15Z"
		fill="currentColor"
	/>
	<path d="M5 14C5 12.8954 5.89543 12 7 12H9C10.1046 12 11 12.8954 11 14V15H5V14Z" fill="currentColor" />
`;

export default function ServerGuide(props: Record<string, unknown> = {}) {
	return html`<svg
		${spread(props)}
		class="discord-mention-icon"
		aria-label="Server Guide"
		aria-hidden="false"
		role="img"
		width="24"
		height="24"
		viewBox="0 0 16 16"
		xmlns="http://www.w3.org/2000/svg"
	>
		${svgContent}
	</svg>`;
}

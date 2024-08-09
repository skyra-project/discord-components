import { html, svg } from 'lit';
import { spread } from '../../spread.js';

const svgContent = svg`
	<path
		d="M11 3a1 1 0 1 1 2 0v2h5.75c.16 0 .3.07.4.2l2.63 3.5a.5.5 0 0 1 0 .6l-2.63 3.5a.5.5 0 0 1-.4.2H13v5h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1c0-1.1.9-2 2-2h2v-5H2.8a.5.5 0 0 1-.44-.72L3.9 9.22a.5.5 0 0 0 0-.44L2.36 5.72A.5.5 0 0 1 2.81 5H11V3Z"
		fill="currentColor"
	/>
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
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		${svgContent}
	</svg>`;
}

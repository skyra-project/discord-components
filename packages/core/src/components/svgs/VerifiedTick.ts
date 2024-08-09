import { html, svg } from 'lit';
import { spread } from '../../spread.js';

const svgContent = svg`
	<path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor" />
`;

export default function VerifiedTick(props: Record<string, unknown> = {}) {
	return html`<svg
		${spread(props)}
		class="discord-application-tag-verified"
		aria-label="Verified App"
		aria-hidden="false"
		width="16"
		height="16"
		viewBox="0 0 16 15.2"
		xmlns="http://www.w3.org/2000/svg"
	>
		${svgContent}
	</svg>`;
}

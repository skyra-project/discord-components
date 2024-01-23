import { spread } from '@open-wc/lit-helpers';
import { html, svg } from 'lit';

const svgContent = svg`
	<path
		fill="currentColor"
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M10.99 3.16A1 1 0 1 0 9 2.84L8.15 8H4a1 1 0 0 0 0 2h3.82l-.67 4H3a1 1 0 1 0 0 2h3.82l-.8 4.84a1 1 0 0 0 1.97.32L8.85 16h4.97l-.8 4.84a1 1 0 0 0 1.97.32l.86-5.16H20a1 1 0 1 0 0-2h-3.82l.67-4H21a1 1 0 1 0 0-2h-3.82l.8-4.84a1 1 0 1 0-1.97-.32L15.15 8h-4.97l.8-4.84ZM14.15 14l.67-4H9.85l-.67 4h4.97Z"
	/>
`;

export default function ChannelIcon(props: Record<string, unknown> = {}) {
	return html`<svg
		${spread(props)}
		class="discord-mention-icon"
		aria-hidden="false"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		${svgContent}
	</svg>`;
}

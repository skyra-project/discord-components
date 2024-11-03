import { html, svg } from 'lit';
import { spread } from '../../spread.js';

const svgContent = svg`
	<path
		fill="currentColor"
		d="M12 2a1 1 0 0 1 1 1v10.59l3.3-3.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42l3.3 3.3V3a1 1 0 0 1 1-1ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z"
	/>
`;

export default function AttachmentDownloadButton(props: Record<string, unknown> = {}) {
	return html`<svg
		${spread(props)}
		class="discord-icon-download"
		aria-hidden="true"
		role="img"
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		fill="none"
		viewBox="0 0 24 24"
	>
		${svgContent}
	</svg>`;
}

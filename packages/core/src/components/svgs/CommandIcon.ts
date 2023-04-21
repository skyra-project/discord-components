import { spread } from '@open-wc/lit-helpers';
import { html, svg } from 'lit';

const svgContent = svg`
	<path d="M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z" fill="currentColor" />
`;

export default function CommandIcon(props: Record<string, unknown> = {}) {
	return html`<svg ${spread(props)} class="discord-command-icon" aria-hidden="false" width="16" height="16" viewBox="0 0 24 24">
		${svgContent}
	</svg>`;
}

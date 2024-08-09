import { spread } from '@open-wc/lit-helpers';
import { html, svg } from 'lit';

const svgContent = svg`
	<path fill="currentColor" d="M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z"></path>
`;

export default function ModalClose(props: Record<string, unknown> = {}) {
	return html`<svg ${spread(props)} aria-hidden="false" aria-label="Close" role="img" width="24" height="24" fill="none" viewBox="0 0 24 24">
		${svgContent}
	</svg>`;
}

import { spread } from '@open-wc/lit-helpers';
import { html, svg } from 'lit';

const svgContent = svg`
	<circle cx="12" cy="12" r="10" fill="transparent"></circle>
	<path fill="color-mix(in oklab, hsl(215 calc(1 * 8.8%) 73.3% / 1) 100%, black 0%)" fill-rule="evenodd" d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm1.44-15.94L13.06 14a1.06 1.06 0 0 1-2.12 0l-.38-6.94a1 1 0 0 1 1-1.06h.88a1 1 0 0 1 1 1.06Zm-.19 10.69a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z" clip-rule="evenodd"></path>
`;

export default function ModalWarning(props: Record<string, unknown> = {}) {
	return html`<svg ${spread(props)} aria-hidden="false" aria-label="Warning" role="img" width="24" height="24" fill="none" viewBox="0 0 24 24">
		${svgContent}
	</svg>`;
}

import { html, svg } from 'lit';
import { spread } from '../../spread.js';

const svgContent = svg`
	<g fill="none" fill-rule="evenodd">
		<path
			fill="#99AAB5"
			d="M0 14.25V18h3.75L14.81 6.94l-3.75-3.75L0 14.25zM17.71 4.04c.39-.39.39-1.02 0-1.41L15.37.29c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
		/>
		<path d="M0 0h18v18H0" />
	</g>
`;

export default function DMEdit(props: Record<string, unknown> = {}) {
	return html`<svg ${spread(props)} aria-hidden="false" width="18" height="18" viewBox="0 0 18 18">${svgContent}</svg>`;
}

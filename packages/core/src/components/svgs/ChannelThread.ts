import { spread } from '@open-wc/lit-helpers';
import { html, svg } from 'lit';

const svgContent = svg`
	<path
		fill="currentColor" 
		d="M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72a1 1 0 0 1 .07 1.58l-1 1 .35.36ZM15.66 16.8a1 1 0 0 1-1.38.28l-8.49-5.66A1 1 0 1 1 6.9 9.76l8.49 5.65a1 1 0 0 1 .27 1.39ZM17.1 14.25a1 1 0 1 0 1.11-1.66L9.73 6.93a1 1 0 0 0-1.11 1.66l8.49 5.66Z"
	/>
`;

export default function ChannelThread(props: Record<string, unknown> = {}) {
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

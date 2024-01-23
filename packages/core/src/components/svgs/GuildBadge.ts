import { spread } from '@open-wc/lit-helpers';
import { html, svg } from 'lit';

const svgContent = svg`
<path
	fill="currentColor"
	fill-rule="evenodd"
	d="m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
/>
`;

export default function GuildBadge(props: Record<string, unknown>) {
	return html`<svg ${spread(props)} class="discord-guild-badge" aria-hidden="false" width="16" height="16" viewBox="0 0 16 15.2">
		${svgContent}
	</svg>`;
}

import { html, svg } from 'lit';
import { spread } from '../../spread.js';

const svgContent = svg`
	<path fill="color-mix( in oklab, hsl(215 calc(1 * 8.8%) 73.3% / 1) 100%, black 0%" d="M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z" class="">
    </path>
`;

export default function CommandIconName(props: Record<string, unknown> = {}) {
	return html`<svg ${spread(props)} aria-hidden="false" width="16" height="16" viewBox="0 0 24 24" fill="none">${svgContent}</svg>`;
}

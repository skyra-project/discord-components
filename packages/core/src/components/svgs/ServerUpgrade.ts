import { html, svg } from 'lit';
import { spread } from '../../spread.js';

const svgContent = svg`
	<path
		fill="#b9bbbe"
		fill-rule="evenodd"
		d="M1.575 9a2.25 2.25 0 0 0 0 3.18l.345.345c.128.128.323.15.488.075a2.25 2.25 0 0 1 3 3 .43.43 0 0 0 .06.48l.352.345a2.25 2.25 0 0 0 3.18 0l5.077-5.077a.75.75 0 0 1 1.02-1.02L16.425 9a2.25 2.25 0 0 0 0-3.18l-.345-.352a.42.42 0 0 0-.488-.06 2.25 2.25 0 0 1-3-3 .42.42 0 0 0-.068-.488l-.345-.345a2.25 2.25 0 0 0-3.18 0L7.671 2.903a.75.75 0 0 1-1.02 1.02zm7.508-4.725a.75.75 0 1 0-1.057 1.05l.517.525A.75.75 0 1 0 9.6 4.785l-.517-.525Zm2.063 2.063a.75.75 0 1 0-1.057 1.057l.517.525a.75.75 0 0 0 1.057-1.065l-.517-.525Zm2.063 2.063a.75.75 0 0 0-1.057 1.057l.517.525a.75.75 0 0 0 1.057-1.065l-.517-.525Z"
		clip-rule="evenodd"
	/>
`;

export default function ServerUpgrade(props: Record<string, unknown> = {}) {
	return html`<svg ${spread(props)} aria-hidden="false" width="18" height="18" viewBox="0 0 18 18">${svgContent}</svg>`;
}

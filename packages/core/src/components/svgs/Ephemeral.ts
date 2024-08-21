import { html, svg } from 'lit';
import { spread } from '../../spread.js';

const svgContent = svg`
 	<path 
		fill="currentColor" 
 		d="M15.56 11.77c.2-.1.44.02.44.23a4 4 0 1 1-4-4c.21 0 .33.25.23.44a2.5 2.5 0 0 0 3.32 3.32Z"
 	/>
  	<path 
		fill="currentColor" 
  		fill-rule="evenodd" 
  		d="M22.89 11.7q.105.3 0 .6C22.27 13.9 19.1 21 12 21c-7.11 0-10.27-7.11-10.89-8.7a.83.83 0 0 1 0-.6C1.73 10.1 4.9 3 12 3c7.11 0 10.27 7.11 10.89 8.7m-4.5-3.62A15.1 15.1 0 0 1 20.85 12c-.38.88-1.18 2.47-2.46 3.92C16.87 17.62 14.8 19 12 19s-4.87-1.38-6.39-3.08A15.1 15.1 0 0 1 3.15 12c.38-.88 1.18-2.47 2.46-3.92C7.13 6.38 9.2 5 12 5s4.87 1.38 6.39 3.08" 
  		clip-rule="evenodd"
  	/>
`;

export default function Ephemeral(props: Record<string, unknown> = {}) {
	return html`<svg
		${spread(props)}
		class="discord-message-ephemeral-icon"
		aria-hidden="false"
		width="16"
		height="16"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		${svgContent}
	</svg>`;
}

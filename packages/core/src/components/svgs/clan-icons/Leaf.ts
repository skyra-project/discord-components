import { html, svg } from 'lit';
import { spread } from '../../../spread.js';

const svgContent = svg`
<path d="M6.563 0.876V0.437H3.937v0.437H1.313v2.187H0.437v2.187h5.25v-2.186h0.876z" fill="#bcef42"/><path d="M4.813 5.687v-0.437H2.187v0.437z" fill="#7fb134"/><path d="M6.563 0.876V0.437H3.937v0.437zm-2.626 0.437V0.876H2.187v0.437z" fill="#fff"/><path d="M1.313 4.813v0.437h0.876v-0.437zm4.376 -0.437h-0.437v0.876h0.437zm0.876 -2.187h-0.437v0.876h0.437zm-0.437 0.876h-0.437v1.313h0.437z" fill="#7fb134"/><path d="M7 0.437h-0.437v2.626H7z" fill="#000"/><path d="M1.313 3.937H0.876v2.626h0.437z" fill="#4a8359"/><path d="M6.563 0H3.937v0.437h2.626zM4.813 5.687H2.187v0.437h2.626zM3.937 0.437H2.187v0.437h1.75zM2.187 0.876h-0.874v0.437h0.876zm-0.874 0.437H0.876v0.876h0.437zM0.437 3.063H0v2.187h0.437v1.313h0.437V5.25H0.437zh0.437v-0.876H0.437zm5.25 2.187h-0.876v0.437h0.876zm0.437 -0.876h-0.437v0.876h0.437zh0.437V3.063h-0.437zM1.75 5.687h0.437v-0.437h-0.874v1.313h0.437zm-0.437 0.876H0.876V7h0.437z" fill="#000"/><path d="M0.876 3.063h0.437v-0.876H0.876zm-0.438 0.874h0.437v-0.874H0.437zm1.75 -2.626h-0.874v0.876h0.437v-0.437h0.437z" fill="#fff"/><path d="M1.75 3.5h0.876v-0.437h-0.876zm0.876 -0.437h0.876v-0.437h-0.876zm0.876 -0.437h0.876v-0.438H3.5zm0.876 -0.437h0.437v-0.438h-0.437zm0.437 -0.437h0.437v-0.438H4.814z" fill="#4a8359"/><path d="M2.187 1.75v0.437h0.437v-0.437z" fill="#fff"/><path d="M1.313 3.5v0.437h0.437V3.5z" fill="#4a8359"/>`;

export default function Leaf(props: Record<string, unknown> = {}) {
	return html`<svg
		${spread(props)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${svgContent}
	</svg>`;
}

import { html, svg } from 'lit';
import { spread } from '../../../spread.js';

const svgContent = svg`
<path d="M3.063 0H1.75v.438h1.313zm1.75.438h-1.75v.438h1.75zm-.875 2.187H3.5v1.75h.438zm-3.5-.437H0v2.625h.438zM6.563.875h-1.75v.438h1.75z" fill="#000"/><path d="M3.063.438H1.75v.438h1.313zm1.75.438h-1.75v.438h1.75zm1.75.438h-1.75v.438h1.75z" fill="#f0f0f0"/><path d="M3.063 6.563H1.75v.438h1.313z" fill="#000"/><path d="M2.625 6.125v-.438h-.437v-.875H1.75V2.188h.438v-.875h.438V.875H1.75v.438H.875v1.75H.438v1.75h.438v.875h.438v.438h.438v.438h1.313v-.438z" fill="#ffe361"/><path d="M3.063 6.125H1.75v.438h1.313z" fill="#ffb84b"/><path d="M4.813 6.125h-1.75v.438h1.75z" fill="#000"/><path d="M4.375 5.688V5.25h-.437v-.875H3.5v-1.75h.438V1.75h.438v-.437H3.063v.438h-.438v1.313h-.437v1.75h.438v.875h.438v.438h1.75v-.438z" fill="#ffe361"/><path d="M6.563 5.688h-1.75v.438h1.75zM1.75.438h-.437v.438h.438zm-.437.437H.875v.438h.438zm-.438.438H.438v.875h.438zm6.125 0h-.438v.438H7zm-.438.438h-.438v.438h.438zm-.438.438h-.438v.875h.438zm.875 3.063h-.438v.438h.438zm-.438-.438h-.438v.438h.438zm-.438-.875h-.438v.875h.438zm-.438-.875h-.438v.875h.438zM1.747 6.127h-.434v.438h.438zm-.438-.438H.875v.438h.438zm-.438-.875H.438v.875h.438zm1.313-2.625H1.75v2.625h.438zM3.059.876h-.434v.438h.438zm-.434.437h-.437v.875h.438z" fill="#000"/><path d="M.875 2.188H.438v.875h.438zm1.75 0h-.437v.875h.438z" fill="#f0f0f0"/><path d="M2.188 1.313H1.75v.875h.438z" fill="#ffb84b"/><path d="M4.813 1.313h-.438v.438h.438z" fill="#000"/><path d="M1.75.875h-.437v.438h.438z" fill="#f0f0f0"/><path d="M2.625.875h-.437v.438h.438zm1.313.875H3.5v.875h.438zm.438-.438h-.438v.438h.438zm-2.188 3.5H1.75v.438h.438zm-.438.875h-.437v.438h.438zm-.438-.875H.875v.875h.438zm2.188.875v-.438h-.437v-.438h-.438v.875h.438v.438h1.75v-.438zm.438-1.313H3.5v.438h.438z" fill="#ffb84b"/><path d="M4.375 5.688V5.25h-.437v-.875H3.5v-1.75h.438V1.75h.438v-.437H3.063v.438h-.438v1.313h-.437v1.75h.438v.875h.438v.438h1.75v-.438z" fill="url(#a)"/><path d="M6.125 5.25v-.438h-.438v-.874h-.438v-.875h.438v-.875h.438V1.75H4.812v.438h-.438v.438h-.436v1.75h.438v.875h.438v.438h1.75v-.438z" fill="#ff2c52"/><path d="M5.688 2.188H5.25v.875h.438zm.438-.438h-.438v.438h.438zm-.438 2.188H5.25v.438h.438zM5.25 5.251v-.438h-.875v.438h.438v.438h1.75v-.438z" fill="#be0351"/><path d="M1.313 1.313H.875v.438h.438zm0 1.75H.875v.438h.438zm1.75-1.75h-.438v.438h.438zm1.75.438h-.438v.438h.438zm-.438.875h-.437v.438h.438z" fill="#f0f0f0"/><path d="M4.375 1.75h-.437v.875h.438zM3.062 5.688h-.437v.438h.438zm-.438-.875h-.436v.875h.438zm2.188.438h-.438v.438h.438zm-.438-.875h-.436v.875h.438z" fill="#000"/><defs><radialGradient id="a" cx=".75" cy=".5" r="1" fx=".75" fy=".5"><stop stop-color="#ff2c52" offset="30%"/><stop stop-color="#ffe361" offset="70%"/></radialGradient></defs>`;

export default function Sun(props: Record<string, unknown> = {}) {
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

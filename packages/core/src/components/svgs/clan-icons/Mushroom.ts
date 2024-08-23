import { html, svg } from 'lit';
import { spread } from '../../../spread.js';

const svgContent = svg`
<path d="M4.813 5.25v-.875h-.438v-.437h-1.75v.438h-.437v.875H1.75v1.313h3.5V5.251z" fill="#ffe361"/><path d="M6.125 1.313V.875H5.25V.438h-3.5v.438H.875v.438H.438v2.625h.438v.438h.875v-.439h3.5v.438h.875v-.438h.438V1.313z" fill="#ff2c52"/><path d="M5.25 0h-3.5v.438h3.5z" fill="#000"/><path d="M5.25.438h-3.5v.438h3.5zm-3.5.437H.875v.438h.875zm4.375 0H5.25v.438h.875z" fill="#fff"/><path d="M5.25 6.563h-3.5v.438h3.5zM.438 1.313H0v2.625h.438zM1.751.438H.875v.438h.875z" fill="#000"/><path d="M.875 3.063v-1.75H.438v2.625h.875v-.875z" fill="#fff"/><path d="M6.563 1.313h-.438v2.625h.438z" fill="#be0351"/><path d="M6.563 2.625h-.875V3.5h.875zM5.25.875h-.875v.875h.875z" fill="#fff"/><path opacity=".5" d="M6.563 2.625h-.438V3.5h.438z" fill="#be0351"/><path d="M4.375 3.063h-1.75v.438h1.75zm.875.438h-.875v.438h.875zM2.625 3.5H1.75v.438h.875z" fill="#be0351"/><path d="M2.625 4.375h-.437v.875h.438z" fill="#fff"/><path d="M4.813 4.375h-.438v.875h.438zm0 .875v.875H1.75v.438h3.5V5.25z" fill="#ffb84b"/><path d="M2.188 5.25H1.75v.875h.438z" fill="#fff"/><path d="M1.75 3.938H.875v.438h.875zm4.375 0H5.25v.438h.875z" fill="#be0351"/><path d="M3.5 2.625h-.875V3.5H3.5z" fill="#fff"/><path opacity=".5" d="M3.5 3.063h-.875v.438H3.5z" fill="#be0351"/><path d="M4.375 3.5h-1.75v.438h1.75z" fill="#000"/><path d="M4.375 3.938h-1.75v.438h1.75z" fill="#fff"/><path d="M.875.875H.438v.438h.438z" fill="#000"/><path d="M2.188 1.313H1.75v.438h.438z" fill="#fff"/><path d="M1.75 5.25h-.437v1.313h.438zm.438-.875h.438v-.437H1.75v.438H.875v.438h.875v.438h.438zM.875 3.938H.438v.438h.438zM7 1.313h-.438v2.625H7zM6.125.438H5.25v.438h.875zm.438.438h-.438v.438h.438zm-.438 3.5H5.25v-.438h-.875v.438h.438v.875h.438v1.313h.438V5.251h-.438v-.438h.875zh.438v-.438h-.438z" fill="#000"/>`;

export default function Mushroom(props: Record<string, unknown> = {}) {
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

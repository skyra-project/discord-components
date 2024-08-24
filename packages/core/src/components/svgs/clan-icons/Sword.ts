import { html, svg } from 'lit';
import { spread } from '../../../spread.js';

const svgContent = svg`
	<path d="M4.813.438v.438h-.438v.438h-.437v.438H3.5v.438h-.437v.875h-.438v.438H3.5v.875h.438v-.44h.875V3.5h.438v-.437h.438v-.438h.438v-.437h.438V.438z" fill="#d1cdd5"/>
	<path d="M1.313 3.938h.438v.438h.875v.875h.438v.438h.875v.438h.875v-.875h-.876v-.438H3.5v-.438h-.437v-.438h-.438V3.5h-.437v-.437H1.75v-.875H.875v.875h.438z" fill="#ffe361"/>
	<path d="M2.188 4.813h-.875v.875h.875zm-.875.875H.438v.875h.875z" fill="#ffe361"/>
	<path d="M4.813.438h-.438v.438h.438zm-.438.438h-.437v.438h.438zm-.437.437H3.5v.438h.438zM3.5 1.75h-.437v.438h.438zm-.437.438h-.438v.875h.438zm-.875 0H1.75v.875h.438zm-1.313 0H.438v.875h.438zm.438.875H.875v.875h.438zm3.5.875h-.875v.438h.875zm0 .875h-.875v.438h.875zm.438.438h-.438v.875h.438z" fill="#000"/>
	<path d="M6.563.438h-.438v1.75h.438z" fill="#847d8b"/>
	<path d="M.438 5.688H0v.875h.438zm4.375.438h-.875v.438h.875zm-.875-.438h-.875v.438h.875z" fill="#000"/>
	<path d="M2.188 5.25h-.875v.438h.875zm-.875.875H.438v.438h.875z" fill="#ffb84b"/>
	<path d="M1.313 6.125v.438h.438v-.438h.438v-.438h-.876zm1.313-.875v-.875H1.75v-.437h-.437v.875h.875v.875h.875V5.25zm-1.313 0v-.438H.875v.438H.438v.438h.875zm0 1.313H.438v.438h.875zM1.75 1.75H.875v.438h.875zm1.313 2.188v.438h.438V3.5h-.876v.438z" fill="#000"/>
	<path d="M5.688 1.313H5.25v.438h.438zm-.438.438h-.438v.438h.438zm-.438.438h-.438v.438h.438zm-.438.438h-.436v.438h.438zm-.436.436H3.5v.438h.438z" fill="#847d8b"/>
	<path d="M3.063 3.063h-.438v.438h.438z" fill="#f0f0f0"/>
	<path d="M1.75 3.5h-.437v.438h.438zm-.437-.875H.875v.438h.438zm.875 1.313H1.75v.438h.438zm.875.875h-.438v.438h.438zm.438.438h-.438v.438h.438zm.875.438h-.438v.438h.438z" fill="#ffb84b"/>
	<path d="M3.938 4.375H3.5v.438h.438zM2.625 3.063h-.437v.438h.438zm3.938-.875h-.438v.438h.438zm-.438.438h-.438v.438h.438zm-.438.438h-.438v.438h.438zm-.438.438h-.438v.438h.438zm-.438-3.5V.44h1.75v1.75h.438V0z" fill="#000"/>
	<path d="M4.813 5.25h-.438v.438h.438zm-.875-.438H3.5v.438h.438zM3.5 4.374h-.437v.438h.438zm-.437-.436h-.438v.438h.438zM2.625 3.5h-.437v.438h.438zm-.437-.437H1.75v.438h.438zM3.5 2.188h-.437v.438h1.313v-.438h-.438V1.75H3.5zM4.375.875v.438h-.437v.438h1.313v-.438h-.438V.875zm1.75-.438H4.812v.438h1.313z" fill="#f0f0f0"/>
	<path d="M6.125 2.188h-.438v.438h.438zm-.438.438h-.438v.438h.438zm-.438.438h-.438v.438h.438zm-.438.438h-.438v.438h.438zm-.873.436H3.5v.438h.438z" fill="#847d8b"/>
	<path d="M1.75 2.188h-.437v.438h.438zm0 2.625h-.437v.438h.438zm-.875.875H.438v.438h.438z" fill="#f0f0f0"/>
`;

export default function Sword(props: Record<string, unknown> = {}) {
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

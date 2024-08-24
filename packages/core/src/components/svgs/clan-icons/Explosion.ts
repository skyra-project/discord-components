import { html, svg } from 'lit';
import { spread } from '../../../spread.js';

const svgContent = svg`
	<path d="M6.125 3.063v-.438h-.438v.438H4.374v-.438h-.436V1.313h.438V.875H3.063v1.75h-.438v.438H.438v.875h.438v.438h.438v-.438h1.313v.438h.438v1.313h-.44v.438h.438v.438h.875v-.438h.438v-.438h-.438V4.376h.438v-.438h1.313v.438h.438v-.438h.438v-.875z" fill="#ffb84b"/>
	<path d="M3.938 0h-.875v.438h.875zM2.625.875H1.313v.438h1.313zm-1.312.438H.875v1.313h.438zm1.75 0h-.438v1.313h.438zm1.313 0h-.438v1.313h.438zm1.75 0h-.438v1.313h.438zM5.688.875H4.375v.438h1.313zm-3.063 1.75H1.313v.438h1.313zm3.063 0H4.375v.438h1.313zM3.063.438h-.438v.438h.438z" fill="#000"/>
	<path d="M2.625 1.313h-.437v.438h.438zm-.437.437H1.75v.438h.438zm3.5-.438H5.25v.438h.438zm-.438.438h-.438v.438h.438zm.438 2.625H5.25v.438h.438zm-.438.438h-.438v.438h.438zm-2.625-.438h-.437v.438h.438zm-.438.438H1.75v.438h.438z" fill="#57595f"/>
	<path d="M4.375.438h-.437v.438h.438zM.438 3.063H0v.875h.438z" fill="#000"/>
	<path d="M2.188 1.75v.438h-.875v.438h1.313V1.75zm3.063 0v.438h-.875v.438h1.313V1.75zM2.188 4.813v.438h-.875v.438h1.313v-.875zm3.063 0v.438h-.875v.438h1.313v-.875z" fill="#35363a"/>
	<path d="M.875 3.938H.438v.438h.438zm0-1.313H.438v.438h.438zM7 3.063h-.438v.875H7z" fill="#000"/>
	<path d="M6.563 3.063h-.438v.875h.438z" fill="#ba3500"/>
	<path d="M.875 3.063H.438v.875h.438z" fill="#f0f0f0"/>
	<path d="M6.563 2.625h-.438v.438h.438zm0 1.313h-.438v.438h.438z" fill="#000"/>
	<path d="M6.125 3.938h-.438v.438h.438zm-3.062 0h-.438v.438h.438zm-1.75 0H.875v.438h.438zm3.063 0h-.438v.438h.438z" fill="#ba3500"/>
	<path d="M3.938 6.563h-.875v.438h.875zm-1.313-.875H1.313v.438h1.313zM1.312 4.375H.875v1.313h.438zm1.75 0h-.437v1.313h.438zm1.313 0h-.437v1.313h.438zm1.75 0h-.438v1.313h.438zm-.438 1.313H4.374v.438h1.313zm-3.062-1.75H1.313v.438h1.313zm3.063 0H4.375v.438h1.313z" fill="#000"/>
	<path d="M2.625 3.5H1.313v.438h1.313zm3.063 0H4.375v.438h1.313z" fill="#ba3500"/>
	<path d="M3.063 6.125h-.438v.438h.438zm1.313 0h-.438v.438h.438z" fill="#000"/>
	<path d="M3.938 6.125h-.875v.438h.875z" fill="#ba3500"/>
	<path d="M3.938.438h-.875v.438h.875zm-.875.437h-.438v.438h.438V.438Z" fill="#f0f0f0"/>
	<path d="M4.375 5.688h-.437v.438h.438z" fill="#ba3500"/>
	<path d="M2.188 1.313h-.875v.875h.438V1.75h.438zm3.063 0h-.875v.875h.438V1.75h.438zM2.188 4.376h-.875v.875h.438v-.438h.438zm3.063 0h-.875v.875h.438v-.438h.438z" fill="#d8d8d8"/>
	<path d="M3.938 2.188V1.75H3.5V.875h-.437v1.313zm0 .438H3.5v.438h-.437v.438h-.438v.438h.438v.875h.438v1.313h.438v-1.75H3.5V3.5h.875v-.437h-.437zm2.188.438h-.438v.438h.438zm-3.063-.439h-.438v.438h.438zm-1.75.438H.875v.438h.438zm.875 0H1.75v.438h.438z" fill="#fd6214"/>
`;

export default function Explosion(props: Record<string, unknown> = {}) {
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
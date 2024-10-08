import { html, svg } from 'lit';
import { spread } from '../../../spread.js';

const svgContent = svg`
	<path d="M6.125 1.75v-.437H5.25V.438H3.5v.438h-.437v.438h-.438V.875H1.313v.438H.875v1.75H.438v1.313h.438v-.438h.438V3.5h2.188v-.875h.438v-.437h2.188v.438h.438V1.75z" fill="#b79cf8"/>
	<path d="M3.938 2.625v.438H3.5v.875h.438v.875h.875v.438h1.313v-.438h.438V2.625z" fill="#9af4dc"/>
	<path d="M1.75 4.375v1.75h.438v.438h1.313v-.438h.438v-1.75z" fill="#9af4dc"/>
	<path d="M3.5 6.125H2.188v.438h1.313zm2.625-1.313H4.812v.438h1.313zm.438-.438h-.438v.438h.438zM3.938 5.687H3.5v.438h.438z" fill="#6c9ca6"/>
	<path d="M3.938 3.063H3.5v.438h.438zm.875.438h-.438v.438h.438zm1.313-.875H3.938v.438h2.188z" fill="#f0f0f0"/>
	<path d="M3.5.438h-.437v.438h.438zm3.063.875h-.438v.438h.438zm-.438 2.188h-.438v.875h.438zm-2.187-.876H3.5v.438h.438z" fill="#000"/>
	<path d="M3.938 2.188H3.5v.438h.438z" fill="#816bee"/>
	<path d="M1.313 3.938H.875v.438h.438zm1.75 1.75h-.438v.438h.438zm-.438-.438h-.437v.438h.438z" fill="#000"/>
	<path d="M2.625 5.25h-.437v.438h.438zm3.063-.875H5.25v.438h.438zm-.438-.438h-.438v.438h.438zM2.187 6.125H1.75v.438h.438zm1.75 0H3.5v.438h.438zM.874 4.375H.438v.438h.438zm.438 1.75H.875v.438h.438zm-.438.438H.438v.438h.438zM6.563 1.75v.875h-.438v.438h.438v1.75h.438V1.75zM5.688.875V.438H5.25v.875h.875V.875zM2.625.438H1.313v.438h1.313zm3.063 2.625H4.375v.438h1.313zM3.063 4.376H1.75v.438h1.313zm.438 2.188H2.188v.438h1.313zM3.063.875h-.438v.438h.438zm-1.75 0H.875v.438h.438z" fill="#000"/>
	<path d="M2.625.875H1.313v.438h1.313zm.438.438h-.438v.438h.438zm-1.313.875h-.437v.438h.438zm-.875.875H.438v.438h.438zm.438-1.75H.875v.438h.438z" fill="#f0f0f0"/>
	<path d="M6.125 5.25H4.812v.438h1.313zm-1.75-.438V3.5h-.437v.438H3.5v.438h.438v1.75h.438v-.875h.438v-.438zm2.188 0h-.438v.438h.438zM.875 1.313H.438v1.75h.438zm-.437 1.75H0v1.313h.438zm1.313 1.75h-.438v1.313h.438zm1.75 0h-.438v.875h.438zm-3.063 0H0v1.75h.438zM5.25 0H3.5v.438h1.75z" fill="#000"/>
	<path d="M3.5.875h-.437v.438h.438zM5.25.437H3.5v.438h1.75z" fill="#f0f0f0"/>
	<path d="M6.125 2.188H3.938v.438h2.188z" fill="#000"/>
	<path d="M6.125 1.75v-.437h-.438v.438H3.938v.438h2.188v.438h.438V1.75z" fill="#816bee"/>
	<path d="M2.188 4.813H1.75v.438h.438z" fill="#f0f0f0"/>
	<path d="M3.063 2.625v.438h-1.75v.438h2.188v-.876z" fill="#816bee"/>
	<path d="M3.063 3.063v.438h-1.75v.438h2.188v-.876z" fill="#000"/>
	<path d="M1.313 3.5H.875v.438h.438zm-.438.438H.438v.438h.438z" fill="#816bee"/>
	<path d="M1.313 3.938v.438H.875v.438H.438v1.75h.438v-.438h.438V4.813h.438v-.438h1.75v-.437z" fill="#9af4dc"/>
	<path d="M1.313 4.375H.875v.438h.438zm-.438.438H.438v.438h.438z" fill="#f0f0f0"/>
	<path d="M1.313 5.688H.875v.438h.438zm-.438.438H.438v.438h.438z" fill="#6c9ca6"/>
	<path d="M3.5 3.938H1.313v.438h2.188z" fill="#f0f0f0"/>
`;

export default function Magic(props: Record<string, unknown> = {}) {
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

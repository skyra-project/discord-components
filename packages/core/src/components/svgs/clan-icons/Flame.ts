import { html, svg } from 'lit';
import { spread } from '../../../spread.js';

const svgContent = svg`<path d="M5.688 2.625V1.75H5.25V.438h-.438v.438h-.438v.438h-.436v.438H3.5v.438H1.313v.438H.875v.875H.438v1.75h.438v.438h.438v.438h.438v.438h3.5v-.438h.438v-.438h.438V2.625z" fill="#fd6214"/><path d="M0 3.5v1.75h.438V3.5zm6.563.438v1.313h.438V3.938zm-.438-1.313v1.313h.438V2.625zm-.438-.875v.875h.438V1.75z" fill="#000"/><path d="M6.125 3.938v1.313h.438V3.938zm-.438-1.313v1.313h.438V2.625zm-.438-.875v.875h.438V1.75z" fill="#ba3500"/><path d="M.438 2.625V3.5h.438v-.875zm2.625-1.313h-.438v.438h.438zm.875 0H3.5v.438h.438zM3.5 1.75h-.437v.438h.438zm-2.625.438v.438h.438v-.438zM.437 5.251v.438h.438v-.438zm.438.438v.438h.438v-.438zm.438.438v.438h.438v-.438zm4.813-.875v.438h.438v-.438zm-.438.438v.438h.438V5.69zm-.438.438v.438h.438v-.438zm-3.5.438v.438h3.5v-.438zM1.313 1.75v.438h.438V1.75zm.438-.438v.438h.438v-.437zm.438-.438v.438h.438V.875zm1.75 0v.438h.438V.875zm.438-.438v.438h.438V.438zm.438-.438v.438h.438V0z" fill="#000"/><path d="M4.813.438v.438h.438V.438zm-.438.438v.438h.438V.875zm-.437.437v.438h.438v-.438zM3.5 1.75v.438h.438V1.75zm-1.312-.437v.438h.438v-.438zm-.438.437v.438h.438V1.75zm.875 0v.438h.438V1.75z" fill="#f0f0f0"/><path d="M2.188 1.75v.438h.438V1.75z" fill="#fd6214"/><path opacity=".5" d="M4.813 1.75v.438h.438V1.75zm.438 2.188V3.5h-.438v-.875h-.438v.438h-.437v.438H2.625v-.438h-.437v.875h-.875v.875h.438v.875h.438v.438h2.625v-.438h.438v-.875h.438v-.875z" fill="#fff"/><path d="M1.313 2.188v.438h.438v-.438zm-.438.437V3.5h.438v-.875zm.875.875v.438h.438V3.5z" fill="#f0f0f0"/><path d="M.875 5.25v.438h.438V5.25zm.438.438v.438h.438v-.438zm3.938 0v.438h.438v-.438zm.438-.438v.438h.438V5.25zm-3.938.875v.438h3.5v-.438z" fill="#ba3500"/><path d="M.438 3.5v.875h.438V3.5zm4.375.875h-.438v-.437h-1.75v.438h-.437v.875h.438v.438h1.75v-.438h.438z" fill="#f0f0f0"/><path d="M5.25.438v1.313h.438V.438z" fill="#000"/>`;

export default function Flame(props: Record<string, unknown> = {}) {
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

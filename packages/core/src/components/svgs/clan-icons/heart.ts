import { html, svg } from 'lit';
import { spread } from '../../../spread.js';

const svgContent = svg`
<path d="M3.063.875v.438h.875V.875zm.875-.438v.438h1.75V.438zm1.75.438v.438h.438V.875zm.438.438v.438h.438v-.438zm.438.438v2.188h.438V1.75zm-.438 2.188v.875h.438v-.876zm-.438.875v.438h.438v-.438zm-.875.438v.438h.875v-.438zm-.875.438v.438h.875V5.69zm-.875.438v.438h.875v-.438z" fill="#000"/><path d="M6.563 1.75h-.438v-.437h-.438V.875H3.938v.438h-.875V.875h-1.75v.438H.875v.438H.438v2.188h.438v.875h.438v.438h.875v.438h.875v.438h.875V5.69h.875v-.438h.875v-.438h.438v-.876h.438z" fill="#ff7fc0"/><path d="M6.563 1.75h-.438v2.188h.438zm-.438 2.188h-.438v.875h.438zm-4.812 0H.875v.875h.438zm4.375.875h-.875v.438h.875zm-.875.438h-.875v.438h.875zm-.875.438h-.875v.438h.875zm-.875-.438h-.875v.438h.875zm-.875-.438h-.875v.438h.875z" fill="#ff1b90"/><path d="M1.313.438v.438h1.75V.438zM.875.875v.438h.438V.875zm-.437.438v.438h.438v-.438zM0 1.75v2.188h.438V1.75zm.438 2.188v.875h.438v-.875zm.438.875v.438h.438v-.438zm.438.438v.438h.875v-.438zm.875.438v.438h.875v-.438z" fill="#000"/><path d="M1.313.875v.438h1.75V.875zm2.625 0v.438h1.75V.875zm-.875.438v.438h.875v-.438z" fill="#f0f0f0"/><path opacity=".6" d="M4.813 2.625v-.437h-.875v.438h-.875v-.438h-.875v.438H1.75v1.313h.438v.438h.879v.438h.875v-.438h.871v-.439h.438V2.625z" fill="#fff"/><path d="M5.688 1.313v.438h.438v-.438zm-4.813 0v.438h.438v-.438zm.438.438v.438h.438V1.75zM.438 1.75v.875h.438V1.75z" fill="#f0f0f0"/>
`;

export default function Heart(props: Record<string, unknown> = {}) {
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

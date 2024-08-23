import { html, svg } from 'lit';
import { spread } from '../../../spread.js';

const svgContent = svg`<path d="M6.125 2.625v.438H4.812v-.438h-.438v-.437h-.436V.875h.438V.438H.438v.438h.875v.438h.438v.438h.875v.875h-.438v.438H1.75v.875h-.437v.875H.875v.875H.438v.875h1.313v-.438h.875v-.438h.438v-.438h.438v-.438h.875v-.438h.438v-.437h.438v.438h.438v.438h.438v.438h.438V2.625z" fill="#ffe361"/><path d="M6.125 0H4.812v.438h1.313zM1.75 6.563H.438v.438h1.313zm.875-.438H1.75v.438h.875zM1.313.875H.438v.438h.875zm.438.875v.438h.438v.438h.438V1.75zm0 1.313h-.438v.875h.438zm-.438.875H.875v.875h.438zm-.438.875H.438v.875h.438zm-.438.875H0v.875h.438zm3.938-.875H3.5v.438h.875zm0-4.813H.438v.438h3.938z" fill="#000"/><path d="M4.375.438H.438v.438h3.938z" fill="#f0f0f0"/><path d="M6.125 2.625H4.812v.438h1.313zM4.812.437h-.438v.438h.438z" fill="#000"/><path d="M4.813.875h-.438v.875h.438zM6.126.437H4.813v.438h1.313z" fill="#f0f0f0"/><path d="M6.125 2.188H4.812v.438h1.313z" fill="#ba3500"/><path d="M.438.438H0v.438h.438zm1.313.875h-.438v.438h.438zm.438 1.313H1.75v.438h.438zM6.564.438h-.438v.438h.438zm.438.438h-.438v1.313h.438z" fill="#000"/><path d="M6.563.875h-.438v1.313h.438z" fill="#ba3500"/><path d="M7 2.625h-.438V5.25H7z" fill="#000"/><path d="M6.563 2.625h-.438V5.25h.438z" fill="#ffb84b"/><path d="M6.563 2.188h-.438v.438h.438zM4.375.875h-.437v1.313h.438zm.438 1.313h-.438v.438h.438z" fill="#000"/><path d="M4.813 1.75h-.438v.438h.438z" fill="#ba3500"/><path d="M3.063 5.688h-.438v.438h.438z" fill="#000"/><path d="M4.375 3.063v.438h-.437v.438H3.5v.438h-.437v.438h-.438v.438h-.437v.438H1.75v.438h.875v-.438h.438v-.438h.438v-.438h.875v-.438h.438V3.063zM1.75 6.126h-.437v.438h.438z" fill="#ffb84b"/><path d="M3.5 5.25h-.437v.438h.438z" fill="#000"/><path d="M2.188 3.063H1.75v.438h.438zm.438-.438h-.438v.438h.438z" fill="#f0f0f0"/><path d="M3.063 2.188h-.438v.438h.438zm.438-.438h-.438v.438h.438z" fill="#ffb84b"/><path d="M2.625 3.5h-.437v.438h.438zm-.875.438h-.437v.438h.438zm-.438.875H.875v.438h.438zm-.438.875H.438v.438h.438z" fill="#f0f0f0"/><path d="M4.813 4.375h-.438v.438h.438zm.438-.438h-.438v.438h.438zm.438.438h-.438v.438h.438zm.438.438h-.438v.438h.438zm.438.438h-.438v.438h.438z" fill="#000"/><path d="M6.125.875H4.812v1.313h1.313z" fill="#fd6214"/>`;

export default function Key(props: Record<string, unknown> = {}) {
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

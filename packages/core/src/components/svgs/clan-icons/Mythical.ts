import { html, svg } from 'lit';
import { spread } from '../../../spread.js';

const svgContent = svg`
<svg aria-hidden="true" width="14" height="14" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.125 3.063v-.438H5.25v-.437h-.438V1.75h-.438V.875h-.436V.438h-.875v.438h-.438v.875h-.437v.438H1.75v.438H.875v.438H.438v.875h.438v.438h.875v.438h.438v.438h.438v.875h.438v.438h.875v-.438h.438v-.875h.438v-.438h.438v-.438h.875v-.44h.438v-.875z" fill="#47baff"/><path d="M4.813 3.063h-.875v-.438h-.875v.438h-.875v.875h.875v.438h.875v-.438h.875z" fill="#b5e3ff"/><path d="M1.313 0H.438v.438h.875zm.875.438h-.875v.438h.875zm-.438 1.75H.875v.438h.875zM.438.438H0v.875h.438z" fill="#000"/><path d="M1.313.438H.438v.875h.438V.875h.438z" fill="#f0f0f0"/><path d="M.438 3.063H0v.875h.438zM7.001.438h-.438v.875h.438zm-.438.875h-.438v.875h.438zm-5.688 0H.438v.875h.438zm1.75-.438h-.437v.875h.438zm2.188 0h-.438v.875h.438zM3.063.438h-.438v.438h.438z" fill="#000"/><path d="M3.063.875h-.438v.438h.438zm.438.438h-.438v.438h.438zm-1.313.875H1.75v.438h.438zm-.875.437H.875v.438h.438zm-.438.438H.438v.438h.438z" fill="#f0f0f0"/><path d="M1.313 6.563v-.438h.875V5.25H1.75v-.438H.875v.875H.438v.875z" fill="#b79cf8"/><path d="M.875 5.688H.438v.438h.438z" fill="#f0f0f0"/><path d="M2.188 1.75H1.75v.438h.438z" fill="#000"/><path d="M2.188.875H.875v1.313h.875V1.75h.438zm3.938 1.313V.875H4.813v.875h.438v.438z" fill="#b79cf8"/><path d="M2.188.875H1.75v.875h.438zm-.438.875h-.437v.438h.438zm4.375-.438h-.438v.875h.438zm.438-.438h-.438v.438h.438z" fill="#816bee"/><path d="M5.688 6.563v-.438h-.875V5.25h.438v-.438h.875v.875h.438v.875z" fill="#b79cf8"/><path d="M6.563 5.688h-.438v.438h.438zm-.438-.875h-.438v.438h.438z" fill="#816bee"/><path d="M.875 2.625H.438v.438h.438zM7 3.063h-.438v.875H7zm-.438-.438h-.438v.438h.438zM4.374.437h-.436v.438h.438zm.875 1.313h-.438v.438h.438zM3.938 0h-.875v.438h.875z" fill="#000"/><path d="M3.938.438h-.875v.438h.875zm0 2.625h-.875v.875h.875zM6.563.438h-.875v.438h.875zm-.875.438h-.875v.438h.875z" fill="#f0f0f0"/><path d="M3.938 2.188h-.875v.438h.875zm0 2.188h-.875v.438h.875zM6.563.001h-.875v.438h.875zm-.875.438h-.875v.438h.875zm.438 1.75h-.875v.438h.875zM1.313 6.563H.438v.438h.875zm.875-.438h-.875v.438h.875zm-.438-1.75H.875v.438h.875zM.437 5.688H0v.875h.438zm6.563 0h-.438v.875H7zm-.438-.875h-.438v.875h.438zm-5.687 0H.438v.875h.438zm1.75.438h-.437v.875h.438zm2.188 0h-.438v.875h.438zm-1.75.875h-.438v.438h.438zm-.875-1.313H1.75v.438h.438z" fill="#000"/><path d="M2.188 5.25H1.75v.875h.438zm-.438-.438h-.437v.438h.438z" fill="#816bee"/><path d="M.875 3.938H.438v.438h.438zm1.313-.875H1.75v.875h.438zm.875-.438h-.875v.438h.875zm0 1.313h-.875v.438h.875zm2.188-.875h-.438v.875h.438zm-.438-.438h-.875v.438h.875zm0 1.313h-.875v.438h.875zm1.75 0h-.438v.438h.438z" fill="#000"/><path d="M6.563 3.063h-.438v.875h.438zm-.438-.438h-.438v.438h.438zm0 1.313h-.438v.438h.438zm-.875 0h-.438v.438h.438zm-1.313.875h-.874v.438h.875zm.438-.438h-.437v.438h.438zm-1.313 0h-.437v.438h.438zm.875 1.75h-.874v.438h.875zm.438-.438h-.437v.438h.438zm-1.313 0h-.437v.438h.438zm-.874-1.749H1.75v.438h.438zM.875 3.5H.438v.438h.438zm.438.438H.875v.438h.438z" fill="#4282d8"/><path d="M4.375 6.125h-.437v.438h.438zm.875-1.313h-.438v.438h.438zm-1.313 1.75h-.874V7h.875zm2.625 0h-.875V7h.875zm-.875-.438h-.875v.438h.875zm.438-1.75H5.25v.438h.875z" fill="#000"/>`;

export default function Mythical(props: Record<string, unknown> = {}) {
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

import { html, svg } from 'lit';
import { spread } from '../../../spread.js';

const svgContent = svg`
<path d="M2.625.75v.375h.75V.75zm.75-.375V.75h1.5V.375zm1.5.375v.375h.375V.75zm.375.375V1.5h.375v-.375zm.375.375v1.875H6V1.5zM5.25 3.375v.75h.375v-.75zm-.375.75V4.5h.375v-.375zm-.75.375v.375h.75V4.5zm-.75.375v.375h.75v-.375zm-.75.375v.375h.75V5.25z" fill="#000"/><path d="M5.625 1.5H5.25v-.375h-.375V.75h-1.5v.375h-.75V.75h-1.5v.375H.75V1.5H.375v1.875H.75v.75h.375V4.5h.75v.375h.75v.375h.75v-.375h.75V4.5h.75v-.375h.375v-.75h.375z" fill="#ff7fc0"/><path d="M5.625 1.5H5.25v1.875h.375zM5.25 3.375h-.375v.75h.375zm-4.125 0H.75v.75h.375zm3.75.75h-.75V4.5h.75zm-.75.375h-.75v.375h.75zm-.75.375h-.75v.375h.75zm-.75-.375h-.75v.375h.75zm-.75-.375h-.75V4.5h.75z" fill="#ff1b90"/><path d="M1.125.375V.75h1.5V.375zM.75.75v.375h.375V.75zm-.375.375V1.5H.75v-.375zM0 1.5v1.875h.375V1.5zm.375 1.875v.75H.75v-.75zm.375.75V4.5h.375v-.375zm.375.375v.375h.75V4.5zm.75.375v.375h.75v-.375z" fill="#000"/><path d="M1.125.75v.375h1.5V.75zm2.25 0v.375h1.5V.75zm-.75.375V1.5h.75v-.375z" fill="#f0f0f0"/><path opacity=".6" d="M4.125 2.25v-.375h-.75v.375h-.75v-.375h-.75v.375H1.5v1.125h.375v.375h.754v.375h.75V3.75h.746v-.375H4.5V2.25z" fill="#fff"/><path d="M4.875 1.125V1.5h.375v-.375zm-4.125 0V1.5h.375v-.375zm.375.375v.375H1.5V1.5zm-.75 0v.75H.75V1.5z" fill="#f0f0f0"/>
`;

export default function Heart(props: Record<string, unknown> = {}) {
	return html`<svg
		${spread(props)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 6 6"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${svgContent}
	</svg>`;
}

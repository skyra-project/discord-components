import { h } from '@stencil/core';

export default function UserJoin<T>(props: T) {
	return (
		<svg {...props} aria-hidden="false" width="18" height="18" viewBox="0 0 18 18">
			<g fill="none" fill-rule="evenodd">
				<path d="M18 0H0v18h18z" />
				<path fill="#3ba55c" d="M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0" />
			</g>
		</svg>
	);
}

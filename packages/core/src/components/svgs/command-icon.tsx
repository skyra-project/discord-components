import { h } from '@stencil/core';

export default function CommandIcon<T>(props: T) {
	return (
		<svg {...props} width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z" fill="currentColor" />
		</svg>
	);
}

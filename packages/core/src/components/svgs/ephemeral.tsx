import { h } from '@stencil/core';

export default function Ephemeral<T>(props: T) {
	return (
		<svg {...props} aria-hidden="false" width="16" height="16" viewBox="0 0 24 24">
			<path
				fill="currentColor"
				d="M12 5C5.648 5 1 12 1 12C1 12 5.648 19 12 19C18.352 19 23 12 23 12C23 12 18.352 5 12 5ZM12 16C9.791 16 8 14.21 8 12C8 9.79 9.791 8 12 8C14.209 8 16 9.79 16 12C16 14.21 14.209 16 12 16Z"
			></path>
			<path
				fill="currentColor"
				d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
			></path>
		</svg>
	);
}

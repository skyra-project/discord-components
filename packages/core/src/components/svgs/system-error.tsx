import { h } from '@stencil/core';

export default function SystemError<T>(props: T) {
	return (
		<svg {...props} aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
			<path
				xmlns="http://www.w3.org/2000/svg"
				d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"
				fill="#ed4245"
			/>
		</svg>
	);
}

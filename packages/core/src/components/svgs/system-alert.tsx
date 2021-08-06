import { h } from '@stencil/core';

export default function SystemAlert<T>(props: T) {
	return (
		<svg {...props} aria-hidden="false" width="20" height="20" viewBox="0 0 20 20">
			<path
				d="M10 0C4.486 0 0 4.486 0 10C0 15.515 4.486 20 10 20C15.514 20 20 15.515 20 10C20 4.486 15.514 0 10 0ZM9 4H11V11H9V4ZM10 15.25C9.31 15.25 8.75 14.691 8.75 14C8.75 13.31 9.31 12.75 10 12.75C10.69 12.75 11.25 13.31 11.25 14C11.25 14.691 10.69 15.25 10 15.25Z"
				fill-rule="evenodd"
				clip-rule="evenodd"
				fill="currentColor"
			/>
		</svg>
	);
}

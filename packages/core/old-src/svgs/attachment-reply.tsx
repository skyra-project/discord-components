import { h } from '@stencil/core';

export default function AttachmentReply<T>(props: T) {
	return (
		<svg {...props} aria-hidden="false" width="64" height="64" viewBox="0 0 64 64">
			<path
				fill="currentColor"
				d="M56 50.6667V13.3333C56 10.4 53.6 8 50.6667 8H13.3333C10.4 8 8 10.4 8 13.3333V50.6667C8 53.6 10.4 56 13.3333 56H50.6667C53.6 56 56 53.6 56 50.6667ZM22.6667 36L29.3333 44.0267L38.6667 32L50.6667 48H13.3333L22.6667 36Z"
			/>
		</svg>
	);
}

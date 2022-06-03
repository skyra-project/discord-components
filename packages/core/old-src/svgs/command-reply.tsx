import { h } from '@stencil/core';

export default function CommandReply<T>(props: T) {
	return (
		<svg {...props} aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
			<path
				fill="currentColor"
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
			/>
		</svg>
	);
}

import { h } from '@stencil/core';

export default function Pin<T>(props: T) {
	return (
		<svg {...props} aria-hidden="false" height="18" viewBox="0 0 18 18" width="18">
			<path
				d="m16.908 8.39684-8.29587-8.295827-1.18584 1.184157 1.18584 1.18584-4.14834 4.1475v.00167l-1.18583-1.18583-1.185 1.18583 3.55583 3.55502-4.740831 4.74 1.185001 1.185 4.74083-4.74 3.55581 3.555 1.185-1.185-1.185-1.185 4.1475-4.14836h.0009l1.185 1.185z"
				fill="#b9bbbe"
			/>
		</svg>
	);
}

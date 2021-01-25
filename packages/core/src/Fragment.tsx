import type { VNode } from '@stencil/core';

export default function Fragment<T>(_props: T, children: VNode[]) {
	return [...children];
}

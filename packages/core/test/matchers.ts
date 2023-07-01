import { expect } from '@open-wc/testing';

export function getNotNullFirstChildElement<T = unknown>(el: Element) {
	const firstElementChild = el.firstElementChild as T;

	expect(firstElementChild).not.to.be.null;

	return firstElementChild;
}

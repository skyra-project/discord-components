import { expect } from '@open-wc/testing';

export function getNotNullFirstChildElement<T = unknown>(el: Element) {
	const firstElementChild = el.firstElementChild as T;

	expect(firstElementChild).not.to.be.null;

	return firstElementChild;
}

export function getNotNullQuerySelectedElement<T = unknown>(el: Element, selector: string) {
	const querySelectedElement = el.querySelector(selector) as T;

	expect(querySelectedElement).not.to.be.null;

	return querySelectedElement;
}

import { createComponent } from '@lit-labs/react';
import React from 'react';
import type { LitElement } from 'lit';

declare interface Constructor<T> {
	new (): T;
}

export function createReactComponent<T extends LitElement>(tagName: string, elementClass: Constructor<T>) {
	return createComponent({
		tagName,
		elementClass,
		react: React
	});
}

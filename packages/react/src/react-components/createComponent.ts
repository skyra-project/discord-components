import { createComponent } from '@lit/react';
import type { LitElement } from 'lit';
import React from 'react';

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

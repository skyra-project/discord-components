import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';
import type { LitElement } from 'lit';

declare interface Constructor<T> {
	new (): T;
}

declare type EventNames = Record<string, EventName | string>;

export function createReactComponent<T extends LitElement>(tagName: string, elementClass: Constructor<T>, events?: EventNames) {
	return createComponent({
		tagName,
		elementClass,
		react: React,
		events
	});
}

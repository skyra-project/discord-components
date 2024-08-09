// License of original file: https://github.com/open-wc/open-wc/blob/480509899d95c9fbc3f6913b1532a8b599df3002/packages/lit-helpers/LICENSE
// Retrieved at https://github.com/open-wc/open-wc/blob/480509899d95c9fbc3f6913b1532a8b599df3002/packages/lit-helpers/src/spread.ts

import type { ElementPart, Part } from 'lit';
import { AsyncDirective } from 'lit/async-directive.js';
import { directive } from 'lit/directive.js';
import { nothing } from 'lit/html.js';

type EventListenerWithOptions = EventListenerOrEventListenerObject & Partial<AddEventListenerOptions>;

/**
 * Spreads properties and attributes onto an element.
 *
 * @example
 * ```ts
 *    import { html, render } from 'lit';
 *    import { spread } from '../../spread.js';
 *
 *    render(
 *      html`
 *        <div
 *          ${spread({
 *            'my-attribute': 'foo',
 *            '?my-boolean-attribute': true,
 *            '.myProperty': { foo: 'bar' },
 *            '@my-event': () => console.log('my-event fired'),
 *          })}
 *        ></div>
 *      `,
 *      document.body,
 *    );
 * ```
 */
class SpreadDirective extends AsyncDirective {
	public host!: Element | EventTarget | object;

	public element!: Element;

	public prevData: { [key: string]: unknown } = {};

	protected eventData: { [key: string]: unknown } = {};

	public render(_spreadData: { [key: string]: unknown }) {
		return nothing;
	}

	public override update(part: Part, [spreadData]: Parameters<this['render']>) {
		if (this.element !== (part as ElementPart).element) {
			this.element = (part as ElementPart).element;
		}

		this.host = part.options?.host ?? this.element;
		this.apply(spreadData);
		this.groom(spreadData);
		this.prevData = { ...spreadData };
	}

	public apply(data: { [key: string]: unknown }) {
		if (!data) return;
		const { prevData, element } = this;
		for (const [key, value] of Object.entries(data)) {
			if (value === prevData[key]) {
				continue;
			}

			const name = key.slice(1);
			switch (key[0]) {
				case '@': // event listener
					this.eventData[name] = value;
					this.applyEvent(name, value as EventListenerWithOptions);
					break;
				case '.': // property
					// @ts-expect-error element[name] is valid
					element[name] = value;
					break;
				case '?': // boolean attribute
					if (value) {
						element.setAttribute(name, '');
					} else {
						element.removeAttribute(name);
					}

					break;
				default:
					// standard attribute
					if (value === null) {
						element.removeAttribute(key);
					} else {
						element.setAttribute(key, String(value));
					}

					break;
			}
		}
	}

	public groom(data: { [key: string]: unknown }) {
		const { prevData, element } = this;
		if (!prevData) return;
		for (const [key, value] of Object.entries(prevData)) {
			const name = key.slice(1);

			// @ts-expect-error element[name] is valid
			if (!data || (!(key in data) && element[name] === value)) {
				switch (key[0]) {
					case '@': // event listener
						this.groomEvent(name, value as EventListenerWithOptions);
						break;
					case '.': // property
						// @ts-expect-error element[name] is valid
						element[name] = undefined;
						break;
					case '?': // boolean attribute
						element.removeAttribute(name);
						break;
					default:
						// standard attribute
						element.removeAttribute(key);
						break;
				}
			}
		}
	}

	protected applyEvent(eventName: string, eventValue: EventListenerWithOptions) {
		const { prevData, element } = this;
		this.eventData[eventName] = eventValue;
		const prevHandler = prevData[eventName];
		if (prevHandler) {
			element.removeEventListener(eventName, this, eventValue);
		}

		element.addEventListener(eventName, this, eventValue);
	}

	protected groomEvent(eventName: string, eventValue: EventListenerWithOptions) {
		const { element } = this;
		Reflect.deleteProperty(this.eventData, eventName);
		element.removeEventListener(eventName, this, eventValue);
	}

	public handleEvent(event: Event) {
		const value: EventListenerObject | Function = this.eventData[event.type] as EventListenerObject | Function;
		if (typeof value === 'function') {
			value.call(this.host, event);
		} else {
			value.handleEvent(event);
		}
	}

	protected override disconnected() {
		const { eventData, element } = this;
		for (const [key, value] of Object.entries(eventData)) {
			const name = key.slice(1);
			element.removeEventListener(name, this, value as EventListenerWithOptions);
		}
	}

	protected override reconnected() {
		const { eventData, element } = this;
		for (const [key, value] of Object.entries(eventData)) {
			const name = key.slice(1);
			element.addEventListener(name, this, value as EventListenerWithOptions);
		}
	}
}

export const spread = directive(SpreadDirective);

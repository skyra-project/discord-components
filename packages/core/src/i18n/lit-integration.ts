// License of original file: https://github.com/colscott/lit-i18n/blob/33126ba0b4364a7e8aa7ec2fc47f53d5ee64b86f/package.json#L40
// Retrieved at https://github.com/colscott/lit-i18n/blob/33126ba0b4364a7e8aa7ec2fc47f53d5ee64b86f/src/lit-i18n.js

import type { i18n as i18next, ThirdPartyModule, TOptions } from 'i18next';
import { AsyncDirective, type Part, type PartInfo } from 'lit/async-directive.js';
import { directive, PartType } from 'lit/directive.js';
import { noChange } from 'lit/html.js';

let i18n: i18next | null = null;

let i18nResolver: (i18n: i18next) => void = () => {};

const i18Provider = new Promise((resolve) => {
	i18nResolver = resolve;
});

const initLitI18n: ThirdPartyModule = {
	type: '3rdParty',

	/**
	 * initialize the i18next instance to use
	 *
	 * @param i18nextInstance - to use
	 */
	init(i18nextInstance: i18next) {
		setI18n(i18nextInstance);
	}
};

/**
 * Sets the i18next instance to use for the translations.
 * Favour using the plugin
 *
 * @param i18nextInstance - The instance to use
 * @example
 * ```js
 * i18next.use(initLitI18n)
 * ```
 */
function setI18n(i18nextInstance: i18next) {
	i18n = i18nextInstance;
	i18nResolver(i18n);
}

/**
 * Used to keep track of Parts that need to be updated should the language change.
 */
const registry: Map<Translate, { keys?: string[] | string; options?: {} }> = new Map();

/**
 * Removes parts that are no longer connected.
 * Called internally on a timer but can also be called manually.
 */
function registryCleanup() {
	for (const [part] of registry.entries()) {
		if (part.isConnected === false || isConnected(part) === false) {
			registry.delete(part);
		}
	}
}

/**
 * lit-html does not seem to fire life cycle hook for part disconnected, we need to record and manage parts ourselves.
 */
globalThis.setInterval(registryCleanup, 10_000);

let initialized = false;

/**
 * Iterates all registered translate directives re-evaluating the translations
 */
const updateAll = () => {
	for (const [part, details] of registry.entries()) {
		if (part.isConnected && isConnected(part)) {
			const translation = translateAndInit(details.keys ?? [], details.options);
			part.setValue(translation);
		}
	}
};

/**
 * Lazily sets up i18next. In case this library is loaded before i18next has been loaded.
 * This defers i18next setup until the first translation is requested.
 */
function translateAndInit(keys: string[] | string, opts?: TOptions): string {
	if (!i18n) {
		return '';
	}

	if (initialized === false) {
		/**
		 * Handle language changes
		 */
		i18n.on('languageChanged', updateAll);
		i18n.store.on('added', updateAll);
		initialized = true;
	}

	const translation = i18n.t(keys, opts);

	if (typeof translation === 'string') {
		return translation;
	}

	// returnObjects not supported https://www.i18next.com/translation-function/objects-and-arrays#objects
	return '';
}

/**
 * @param translateDirective - the directive to check
 */
function isConnected(translateDirective: Translate): boolean {
	const part = translateDirective.part as Part;

	if (part.type === PartType.ATTRIBUTE) return part.element.isConnected;
	if (part.type === PartType.CHILD) return part.parentNode ? part.parentNode.isConnected : false;
	if (part.type === PartType.PROPERTY) return part.element.isConnected;
	if (part.type === PartType.BOOLEAN_ATTRIBUTE) return part.element.isConnected;
	if (part.type === PartType.EVENT) return part.element.isConnected;
	if (part.type === PartType.ELEMENT) return part.element.isConnected;

	throw new Error('Unsupported Part');
}

class Translate extends AsyncDirective {
	public value: string;

	public part: PartInfo;

	public constructor(part: PartInfo) {
		super(part);

		this.value = '';
		this.part = part;
	}

	/**
	 * @param keys - translation key
	 * @param options - i18next translation options
	 * @returns translated string
	 */
	public async render(keys: string[] | string, options?: any): Promise<string | symbol> {
		await i18Provider?.then(() => {
			this.setValue(this.translate(keys, options));
		});
		return noChange;
	}

	/**
	 * @param keys - translation key
	 * @param options - i18next translation options
	 * @returns translated string
	 */
	public translate(keys: string[] | string, options?: TOptions | (() => TOptions)): string | symbol {
		registry.set(this, { keys, options });

		const translation = translateAndInit(keys, typeof options === 'function' ? options() : options);

		if (this.isConnected === false || translation === undefined || this.value === translation) {
			return noChange;
		}

		return translation;
	}

	/**
	 * clean up the registry
	 */
	public override disconnected() {
		registry.delete(this);
	}
}

/**
 * The translate directive
 *
 * @example
 * ```ts
 * import { translate as t, i18next, html, render } from 'lit-i18n/src/lit-i18n.js';
 * i18next.init({...i18next config...});
 * class MyElement extends HTMLElement {
 *     connectedCallback() {
 *         this.person = { name: 'Fred', age: 23, male: true };
 *         render(this.renderTemplate, this);
 *     }
 *     get renderTemplate() {
 *         return html`
 *             <span class="basic">${t('introduceself', { name: this.person.name })}</span>
 *             <div class="title" title="${t('divtitle')}">Div with translated title</div>
 *             <div class="title-interpolation" title="${t('whatishow', { what: 'i18next', how: 'great' })}"></div>
 *             <span class="person">${t('datamodel', { person: this.person })}</span>
 *             <input class="placeholder" type="text" placeholder="${t('entername')}" />
 *         `;
 *     }
 * }
 * ```
 */
const translate = directive(Translate);

export { setI18n, registry, registryCleanup, translate, initLitI18n };

import { consume } from '@lit/context';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { messagesLightTheme } from '../discord-messages/DiscordMessages.js';
import type { LightTheme } from '../../types.js';

@customElement('discord-link')
export class DiscordLink extends LitElement implements LightTheme {
	public static override readonly styles = css`
		a {
			color: #00aff4;
			text-decoration: none;
		}

		a:hover {
			text-decoration: underline;
		}

		.discord-link-light-theme a {
			color: #00b0f4;
		}
	`;

	@consume({ context: messagesLightTheme, subscribe: true })
	@property({ type: Boolean, reflect: true, attribute: 'light-theme' })
	public accessor lightTheme = false;

	/**
	 * The URL to link
	 * @example
	 * ```ts
	 * 'https://example.com/example.txt'
	 * ```
	 */
	@property()
	public accessor href: string;

	/**
	 * The `<a>` tag {@linkplain https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#rel `rel`}
	 */
	@property()
	public accessor rel: string;

	/**
	 * The `<a>` tag {@linkplain https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target `target`}
	 */
	@property()
	public accessor target: '_self' | '_blank' | '_parent' | '_top';

	/**
	 * The `<a>` tag {@linkplain https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#type `type`}
	 */
	@property()
	public accessor type: string;

	protected override render() {
		return html`<a
			href=${ifDefined(this.href)}
			rel=${ifDefined(this.rel)}
			target=${ifDefined(this.target)}
			type=${ifDefined(this.type)}
			class=${classMap({ 'discord-link-light-theme': this.lightTheme })}
			><slot></slot
		></a>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-link': DiscordLink;
	}
}

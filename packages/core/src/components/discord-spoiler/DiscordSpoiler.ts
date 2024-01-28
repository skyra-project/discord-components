import { consume } from '@lit/context';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { messagesLightTheme } from '../discord-messages/DiscordMessages.js';
import type { LightTheme } from '../../types.js';

@customElement('discord-spoiler')
export class DiscordSpoiler extends LitElement implements LightTheme {
	public static override styles = css`
		:host {
			background-color: #202225;
			border-radius: 3px;
			color: transparent;
			cursor: pointer;
		}

		:host([light-theme]) {
			background-color: #c4c9ce;
		}

		:host(:hover) {
			background-color: rgba(32, 34, 37, 0.8);
		}

		:host([light-theme]:hover) {
			background-color: #cfd3d7;
		}

		:host([activated]) {
			color: inherit;
			background-color: hsla(0, 0%, 100%, 0.1);
		}

		:host([light-theme][activated]) {
			background-color: #e5e5e5;
		}
	`;

	@property({ type: Boolean, reflect: true })
	public accessor activated = false;

	/**
	 * Whether to use light theme or not.
	 */
	@consume({ context: messagesLightTheme })
	@property({ type: Boolean, reflect: true, attribute: 'light-theme' })
	public accessor lightTheme = false;

	protected override render() {
		return html`<slot
			@click=${() => {
				this.activated = true;
			}}
			@keydown=${() => {
				this.activated = true;
			}}
		></slot>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-spoiler': DiscordSpoiler;
	}
}

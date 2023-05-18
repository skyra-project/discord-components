import { consume } from '@lit-labs/context';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { LightTheme } from '../../util.js';
import { messagesLightTheme } from '../discord-messages/DiscordMessages.js';

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

		:host(:active) {
			color: inherit;
			background-color: hsla(0, 0%, 100%, 0.1);
		}

		:host([light-theme]:active) {
			background-color: #e5e5e5;
		}
	`;

	/**
	 * Whether to use light theme or not.
	 */
	@consume({ context: messagesLightTheme })
	@property({ type: Boolean, reflect: true, attribute: 'light-theme' })
	public lightTheme = false;

	protected override render() {
		return html`<slot></slot>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-spoiler': DiscordSpoiler;
	}
}

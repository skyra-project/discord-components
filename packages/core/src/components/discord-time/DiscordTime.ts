import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('discord-time')
export class DiscordTime extends LitElement {
	/**
	 * @internal
	 */
	public static override readonly styles = css`
		:host {
			background-color: #ffffff0f;
			border-radius: 3px;
			padding: 0 2px;
		}
	`;

	protected override render() {
		return html`<slot></slot>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-time': DiscordTime;
	}
}

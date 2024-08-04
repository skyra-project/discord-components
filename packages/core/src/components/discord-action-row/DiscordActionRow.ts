import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('discord-action-row')
export class DiscordActionRow extends LitElement {
	/**
	 * @internal
	 */
	public static override readonly styles = css`
		:host {
			display: flex;
			flex-wrap: wrap;
		}
	`;

	protected override render() {
		return html`<slot></slot>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-action-row': DiscordActionRow;
	}
}

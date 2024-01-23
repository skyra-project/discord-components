import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('discord-action-row')
export class DiscordActionRow extends LitElement {
	public static override styles = css`
		:host {
			display: flex;
			flex-wrap: nowrap;
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

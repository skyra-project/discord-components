import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('discord-attachments')
export class DiscordAttachments extends LitElement {
	public static override styles = css`
		:host {
			display: grid;
			grid-auto-flow: row;
			grid-row-gap: 0.25rem;
			text-indent: 0;
			min-height: 0;
			min-width: 0;
			padding-top: 0.125rem;
			padding-bottom: 0.125rem;
			position: relative;
		}

		:host > * {
			justify-self: start;
			-ms-flex-item-align: start;
			align-self: start;
		}
	`;

	protected override render() {
		return html`<slot></slot>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-attachments': DiscordAttachments;
	}
}

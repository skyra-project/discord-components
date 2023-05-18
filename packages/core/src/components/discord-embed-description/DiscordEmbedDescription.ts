import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('discord-embed-description')
export class DiscordEmbedDescription extends LitElement {
	public static override styles = css`
		:host {
			font-size: 0.875rem;
			font-weight: 400;
			grid-column: 1/1;
			line-height: 1.125rem;
			margin-top: 8px;
			min-width: 0;
			white-space: pre-line;
		}
	`;

	protected override render() {
		return html`<slot></slot>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-embed-description': DiscordEmbedDescription;
	}
}

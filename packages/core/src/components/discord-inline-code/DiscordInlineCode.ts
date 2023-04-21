import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('discord-inline-code')
export class DiscordInlineCode extends LitElement {
	protected override render() {
		return html` <code>
			<slot></slot>
		</code>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-inline-code': DiscordInlineCode;
	}
}

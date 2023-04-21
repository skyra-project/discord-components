import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('discord-bold')
export class DiscordBold extends LitElement {
	protected override render() {
		return html`
			<strong>
				<slot></slot>
			</strong>
		`;
	}
}

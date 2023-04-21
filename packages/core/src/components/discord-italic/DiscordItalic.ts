import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('discord-italic')
export class DiscordItalic extends LitElement {
	protected override render() {
		return html`
			<em>
				<slot></slot>
			</em>
		`;
	}
}

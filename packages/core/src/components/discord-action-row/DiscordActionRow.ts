import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('discord-action-row')
export class DiscordActionRow extends LitElement {
	static override styles = css`
		.discord-action-row {
			display: flex;
			flex-wrap: nowrap;
		}
	`;

	protected override render() {
		return html`
			<div class="discord-action-row">
				<slot></slot>
			</div>
		`;
	}
}

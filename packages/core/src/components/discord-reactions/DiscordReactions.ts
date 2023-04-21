import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('discord-reactions')
export class DiscordReactions extends LitElement {
	public static override styles = css`
		.discord-message .discord-reactions,
		.discord-system-message .discord-reactions {
			display: flex;
			-webkit-box-flex: 1;
			-ms-flex: 1 0 auto;
			flex: 1 0 auto;
			align-items: center;
			flex-wrap: wrap;
		}
	`;

	protected override render() {
		return html`
			<div class="discord-reactions">
				<slot></slot>
			</div>
		`;
	}
}

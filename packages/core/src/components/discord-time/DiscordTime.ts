import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('discord-time')
export class DiscordTime extends LitElement {
	public static override styles = css`
		.discord-time {
			background-color: #ffffff0f;
			border-radius: 3px;
			padding: 0 2px;
		}
	`;

	protected override render() {
		return html` <div class="discord-time">
			<slot></slot>
		</div>`;
	}
}

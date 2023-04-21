import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('discord-spoiler')
export class DiscordSpoiler extends LitElement {
	public static override styles = css`
		.discord-spoiler {
			background-color: #202225;
			color: transparent;
			cursor: pointer;
		}

		.discord-light-theme .discord-message .discord-message-body .discord-spoiler {
			background-color: #b9bbbe;
		}

		.discord-spoiler:hover {
			background-color: rgba(32, 34, 37, 0.8);
		}

		.discord-light-theme .discord-message .discord-message-body .discord-spoiler:hover {
			background-color: rgba(185, 187, 190, 0.8);
		}

		.discord-spoiler:active {
			color: inherit;
			background-color: hsla(0, 0%, 100%, 0.1);
		}

		.discord-light-theme .discord-message .discord-message-body .discord-spoiler:active {
			background-color: rgba(0, 0, 0, 0.1);
		}
	`;

	protected override render() {
		return html` <div class="discord-spoiler">
			<slot></slot>
		</div>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-spoiler': DiscordSpoiler;
	}
}

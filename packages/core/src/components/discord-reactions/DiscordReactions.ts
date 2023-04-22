import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import type { DiscordMessage } from '../discord-message/DiscordMessage.js';

@customElement('discord-reactions')
export class DiscordReactions extends LitElement {
	public static override styles = css`
		.discord-message.discord-reactions,
		.discord-system-message.discord-reactions {
			display: flex;
			-webkit-box-flex: 1;
			-ms-flex: 1 0 auto;
			flex: 1 0 auto;
			align-items: center;
			flex-wrap: wrap;
		}
	`;

	@state()
	public lightTheme = false;

	protected override render() {
		const parent = this.parentElement as DiscordMessage;

		if (!parent || (parent.tagName.toLowerCase() !== 'discord-message' && parent.tagName.toLowerCase() !== 'discord-system-message')) {
			throw new Error('All <discord-reactions> components must be direct children of either <discord-message> or <discord-system-message>.');
		}

		this.lightTheme = parent.lightTheme;

		return html`
			<div
				class=${classMap({
					'discord-reactions': true,
					'discord-message': true,
					'discord-system-message': true
				})}
			>
				<slot></slot>
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-reactions': DiscordReactions;
	}
}

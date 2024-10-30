import { consume } from '@lit/context';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { when } from 'lit/directives/when.js';
import type { LightTheme } from '../../types.js';
import { messagesLightTheme } from '../discord-messages/DiscordMessages.js';

@customElement('discord-reaction')
export class DiscordReaction extends LitElement implements LightTheme {
	/**
	 * @internal
	 */
	public static override readonly styles = css`
		:host > *:first-child {
			border-radius: 0.5rem;
			cursor: pointer;
			flex-shrink: 0;
			margin-right: 0.25rem;
			margin-bottom: 0.25rem;
			user-select: none;
			transition: none 0.1s ease;
			transition-property: background-color, border-color;
			background-color: #2f3136;
			border: 1px solid transparent;
		}

		:host([light-theme]) > *:first-child {
			background-color: #f2f3f5;
		}

		:host > *:first-child:hover {
			background-color: #36393f;
			border-color: #fff2;
		}

		:host([light-theme]:not([reacted])) > *:first-child:hover {
			background-color: white;
			border-color: #0003;
		}

		:host([reacted]) > *:first-child {
			background-color: rgba(88, 101, 242, 0.15);
			border-color: #5865f2;
		}

		:host([light-theme][reacted]) > *:first-child {
			background-color: #e7e9fd;
		}

		:host .discord-reaction-inner {
			display: flex;
			align-items: center;
			padding: 0.125rem 0.375rem;
		}

		:host img {
			width: 1rem;
			height: 1rem;
			margin: 0.125rem 0;
			min-width: auto;
			min-height: auto;
			object-fit: contain;
			vertical-align: bottom;
		}

		:host .discord-reaction-count {
			font-size: 0.875rem;
			font-weight: 500;
			margin-left: 0.375rem;
			text-align: center;
			color: #b9bbbe;
		}

		:host([light-theme]) .discord-reaction-count {
			color: #4f5660;
		}

		:host([reacted]) .discord-reaction-count {
			color: #dee0fc;
		}

		:host([light-theme][reacted]) .discord-reaction-count {
			color: #5865f2;
		}
	`;

	/**
	 * The reaction emoji image URL.
	 */
	@property()
	public accessor emoji: string;

	/**
	 * The name of the emoji to use as alternative image text.
	 *
	 * @defaultValue ':emoji'
	 */
	@property()
	public accessor name = ':emoji:';

	/**
	 * The number of people who reacted.
	 *
	 * @defaultValue 1
	 */
	@property({ type: Number })
	public accessor count = 1;

	/**
	 * Whether the reaction should show as reacted by the user.
	 *
	 * @defaultValue false
	 */
	@property({ type: Boolean, reflect: true })
	public accessor reacted = false;

	/**
	 * Whether the reaction should be reactive.
	 *
	 * @remarks When the reaction is interactive left clicking it will add 1 to the counter.
	 * Whereas when holding the Shift key and left clicking it will decrease the counter.
	 * The counter cannot go below 1.
	 * @defaultValue false
	 */
	@property({ type: Boolean })
	public accessor interactive = false;

	@consume({ context: messagesLightTheme })
	@property({ type: Boolean, reflect: true, attribute: 'light-theme' })
	public accessor lightTheme = false;

	protected override render() {
		return html`<div class="discord-reaction-inner" @click=${this.handleReactionClick} @keydown=${this.handleReactionClick}>
			${when(
				this.emoji.includes('http') || this.emoji.startsWith('/') || this.emoji.startsWith('./'),
				() => html`<img src=${ifDefined(this.emoji)} alt=${ifDefined(this.name)} draggable="false" />`,
				() => html`<span>${this.emoji}</span>`
			)}
			<span class="discord-reaction-count">${this.count}</span>
		</div>`;
	}

	private readonly handleReactionClick = (event: MouseEvent) => {
		if (this.interactive) {
			if (event.shiftKey) {
				this.count--;
			} else {
				this.count++;
			}

			if (this.count <= 0) {
				this.count = 1;
			}
		}
	};
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-reaction': DiscordReaction;
	}
}

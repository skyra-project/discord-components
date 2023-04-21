import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('discord-reaction')
export class DiscordReaction extends LitElement {
	public static override styles = css`
		.discord-reaction {
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

		.discord-light-theme .discord-reaction {
			background-color: #f2f3f5;
		}

		.discord-reaction:hover {
			background-color: #36393f;
			border-color: #fff2;
		}

		.discord-light-theme .discord-reaction:not(.discord-reaction-reacted):hover {
			background-color: white;
			border-color: #0003;
		}

		.discord-reaction.discord-reaction-reacted {
			background-color: rgba(88, 101, 242, 0.15);
			border-color: #5865f2;
		}

		.discord-light-theme .discord-reaction.discord-reaction-reacted {
			background-color: #e7e9fd;
		}

		.discord-reaction .discord-reaction-inner {
			display: flex;
			align-items: center;
			padding: 0.125rem 0.375rem;
		}

		.discord-reaction img {
			width: 1rem;
			height: 1rem;
			margin: 0.125rem 0;
			min-width: auto;
			min-height: auto;
			object-fit: contain;
			vertical-align: bottom;
		}

		.discord-reaction .discord-reaction-count {
			font-size: 0.875rem;
			font-weight: 500;
			margin-left: 0.375rem;
			text-align: center;
			color: #b9bbbe;
		}

		.discord-light-theme .discord-reaction .discord-reaction-count {
			color: #4f5660;
		}

		.discord-reaction.discord-reaction-reacted .discord-reaction-count {
			color: #dee0fc;
		}

		.discord-light-theme .discord-reaction.discord-reaction-reacted .discord-reaction-count {
			color: #5865f2;
		}
	`;

	/**
	 * The reaction emoji image URL.
	 */
	@property({ type: String })
	public emoji: string;

	/**
	 * The name of the emoji to use as alternative image text.
	 * @default ':emoji'
	 */
	@property({ type: String })
	public name = ':emoji:';

	/**
	 * The number of people who reacted.
	 * @default 1
	 */
	@property({ type: Number })
	public count = 1;

	/**
	 * Whether the reaction should show as reacted by the user.
	 * @default false
	 */
	@property({ type: Boolean })
	public reacted = false;

	/**
	 * Whether the reaction should be reactive.
	 * @remark When the reaction is interactive left clicking it will add 1 to the counter.
	 * Whereas when holding the Shift key and left clicking it will decrease the counter.
	 * The counter cannot go below 1.
	 * @default false
	 */
	@property({ type: Boolean })
	public interactive = false;

	protected override render() {
		return html`
			<div
				class=${classMap({
					'discord-reaction': true,
					'discord-reaction-reacted': this.reacted
				})}
				@click=${this.handleReactionClick}
				@keydown=${this.handleReactionClick}
			>
				<div class="discord-reaction-inner">
					<img src="${this.emoji}" alt="${this.name}" draggable="false" />
					<span class="discord-reaction-count">${this.count}</span>
				</div>
			</div>
		`;
	}

	private handleReactionClick(event: MouseEvent) {
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
	}
}

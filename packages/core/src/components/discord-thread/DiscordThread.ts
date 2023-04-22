import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import type { DiscordMessage } from '../discord-message/DiscordMessage.js';

@customElement('discord-thread')
export class DiscordThread extends LitElement {
	public static override styles = css`
		.discord-thread {
			background-color: #2f3136;
			border-radius: 4px;
			cursor: pointer;
			margin-top: 8px;
			max-width: 480px;
			min-width: 0;
			padding: 8px;
			display: inline-flex;
			width: fit-content;
			flex-direction: column;
		}

		.discord-light-theme.discord-thread {
			background-color: #f2f3f5;
		}

		.discord-thread .discord-thread-top {
			display: flex;
		}

		.discord-thread .discord-thread-bottom {
			font-size: 0.875rem;
			line-height: 1.125rem;
			align-items: center;
			color: #b9bbbe;
			display: flex;
			margin-top: 2px;
			white-space: nowrap;
		}

		.discord-light-theme .discord-thread-bottom {
			color: #4f5660;
		}

		.discord-thread .discord-thread-name {
			font-size: 0.875rem;
			font-weight: 600;
			line-height: 1.125rem;
			color: white;
			margin-right: 8px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		.discord-light-theme .discord-thread-name {
			color: #060607;
		}

		.discord-thread .discord-thread-cta {
			color: #00aff4;
			flex-shrink: 0;
			font-size: 0.875rem;
			font-weight: 600;
			line-height: 1.125rem;
		}

		.discord-thread:hover .discord-thread-cta {
			text-decoration: underline;
		}
	`;

	/**
	 * The name of the thread.
	 */
	@property()
	public name = 'Thread';

	/**
	 * The the text within the call to action text. (i.e. 'See Thread' or 'x Messages')
	 */
	@property()
	public cta = 'See Thread';

	@state()
	public lightTheme = false;

	protected override render() {
		const parent = this.parentElement as DiscordMessage;

		if (!parent || (parent.tagName.toLowerCase() !== 'discord-message' && parent.tagName.toLowerCase() !== 'discord-system-message')) {
			throw new Error('All <discord-thread> components must be direct children of either <discord-message> or <discord-system-message>.');
		}

		this.lightTheme = parent.lightTheme;

		return html`
			<div
				class=${classMap({
					'discord-thread': true,
					'discord-light-theme': this.lightTheme
				})}
			>
				<div class="discord-thread-top">
					<span class="discord-thread-name">${this.name}</span>
					<span class="discord-thread-cta" aria-hidden="true"> ${this.cta} › </span>
				</div>
				<span class="discord-thread-bottom">
					<slot></slot>
				</span>
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-thread': DiscordThread;
	}
}

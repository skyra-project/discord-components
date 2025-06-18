import { consume } from '@lit/context';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { when } from 'lit/directives/when.js';
import type { LightTheme } from '../../types.js';
import { DiscordComponentsError } from '../../util.js';
import { messagesLightTheme } from '../discord-messages/DiscordMessages.js';

@customElement('discord-string-select-menu-option')
export class DiscordStringSelectMenuOption extends LitElement implements LightTheme {
	/**
	 * @internal
	 */
	public static override readonly styles = css`
		label {
			display: flex;
			align-items: center;
			max-width: 400px;
			padding: 8px 8px 8px 12px;
			gap: 10px;
			font-size: small;
			cursor: pointer;
		}

		label:hover {
			background-color: rgba(255, 255, 255, 0.1);
		}

		:host([light-theme]) {
			background-color: #f2f3f5 !important;
			border-color: #d9d9d9 !important;
			color: #2e3338;
		}

		:host([light-theme]) label:hover {
			background-color: rgba(204, 204, 204, 2) !important;
		}

		.discord-string-select-menu-option-emoji {
			margin-right: 4px;
			object-fit: contain;
			width: 1.375em;
			height: 1.375em;
			vertical-align: bottom;
		}

		.discord-string-select-menu-option-ellipsis-text {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		.discord-string-select-menu-option-hidden {
			display: none;
		}
	`;

	/**
	 * The emoji URL to use in the SelectMenu.
	 */
	@property({ reflect: true, attribute: 'emoji' })
	public accessor emoji: string;

	/**
	 * The name of the emoji used in the SelectMenu.
	 */
	@property({ reflect: true, attribute: 'emoji-name' })
	public accessor emojiName = 'emoji';

	/**
	 * The label of the option
	 */
	@property({ attribute: 'label' })
	public accessor label: string;

	/**
	 * The description of the option
	 */
	@property({ attribute: 'description' })
	public accessor description: string;

	@property({ reflect: false, noAccessor: true, attribute: false })
	public accessor selectOption: (...args: unknown[]) => void;

	public checkLabelIsProvided() {
		if (!this.label) {
			throw new DiscordComponentsError('The label of option is required');
		}
	}

	@consume({ context: messagesLightTheme })
	@property({ type: Boolean, reflect: true, attribute: 'light-theme' })
	public accessor lightTheme = false;

	protected override render() {
		this.checkLabelIsProvided();

		return html`
			<label>
				${when(this.emoji, () =>
					when(
						this.emoji?.includes('http') || this.emoji.startsWith('/') || this.emoji.startsWith('./'),
						() =>
							html`<img
								src=${this.emoji}
								alt=${ifDefined(this.emojiName)}
								draggable="true"
								class="discord-string-select-menu-option-emoji"
							/>`,
						() => html`<span class="discord-string-select-menu-option-emoji">${this.emoji}</span>`
					)
				)}
				<div class="discord-string-select-menu-option-ellipsis-text">
					<div class="discord-string-select-menu-option-ellipsis-text">
						<strong>${this.label}</strong>
					</div>
					${when(this.description, () => html`<span>${this.description}</span>`)}
				</div>
				<span class="discord-string-select-menu-option-hidden"><input type="checkbox" @click=${() => this.selectOption?.()} /></span>
			</label>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-string-select-menu-option': DiscordStringSelectMenuOption;
	}
}

import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { when } from 'lit/directives/when.js';
import { DiscordComponentsError } from '../../util.js';

@customElement('discord-string-select-menu-option')
export class DiscordStringSelectMenuOption extends LitElement {
	/**
	 * @internal
	 */
	public static override readonly styles = css`
		:host {
			display: flex;
			align-items: center;
			max-width: 400px;
			padding: 8px 8px 8px 12px;
			gap: 10px;
			font-size: small;
			max-width: 95%;
		}

		:host(:hover) {
			background-color: rgba(0, 0, 0, 0.1);
		}

		.discord-string-select-menu-option-emoji {
			margin-right: 4px;
			object-fit: contain;
			width: 1.375em;
			height: 1.375em;
			vertical-align: bottom;
		}

		.discord-string-select-menu-option-max-size {
			display: block;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			max-width: 390px;
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

	public checkLabelIsProvided() {
		if (!this.label) {
			throw new DiscordComponentsError('The label of option is required');
		}
	}

	protected override render() {
		this.checkLabelIsProvided();

		return html`
			${when(
				this.emoji,
				() =>
					html`<img src=${this.emoji} alt=${ifDefined(this.emojiName)} draggable="true" class="discord-string-select-menu-option-emoji" />`
			)}
			<div>
				<div>
					<strong class="discord-string-select-menu-option-max-size">${this.label}</strong>
				</div>
				${when(this.description, () => html`<span class="discord-string-select-menu-option-max-size">${this.description}</span>`)}
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-string-select-menu-option': DiscordStringSelectMenuOption;
	}
}

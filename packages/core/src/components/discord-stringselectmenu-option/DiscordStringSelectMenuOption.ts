import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import type { DicordSelectMenuOptionProps } from '../../types.js';
import { DiscordComponentsError } from '../../util.js';

@customElement('discord-stringselectmenu-option')
export class DiscordStringSelectMenuOption extends LitElement implements DicordSelectMenuOptionProps {
	public static override readonly styles = css`
		.selectMenuOption {
			display: flex;
			align-items: center;
			max-width: 400px;
			padding: 8px 8px 8px 12px;
			gap: 10px;
			font-size: small;
			max-width: 95%;
		}

		.selectMenuOption:hover {
			background-color: rgba(0, 0, 0, 0.1);
		}

		.emoji {
			margin-right: 4px;
			object-fit: contain;
			width: 1.375em;
			height: 1.375em;
			vertical-align: bottom;
		}

		.maxsize {
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
	 * The label of option.
	 */
	@property({ attribute: 'label' })
	public accessor label: string;

	/**
	 * The description of option o.
	 */
	@property({ attribute: 'description' })
	public accessor description: string;

	protected override render() {
		if (!this.label) {
			throw new DiscordComponentsError('The label of option is required');
		}

		return html`
			<div class="selectMenuOption">
				${when(this.emoji, () => html`<img src=${this.emoji} alt=${this.emojiName} draggable="true" class="emoji" />`)}
				<div>
					<div>
						<strong class="maxsize">${this.label}</strong>
					</div>
					${when(this.description, () => html`<strong class="maxsize">${this.description}</strong>`)}
				</div>
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-selectmenu-option': DiscordStringSelectMenuOption;
	}
}

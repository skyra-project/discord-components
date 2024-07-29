import { css, html, LitElement } from 'lit';
import { customElement, eventOptions, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import type { DiscordSelectMenuProps } from '../../types.js';
import ExpandMore from '../svgs/ExpandMore.js';

@customElement('discord-stringselectmenu')
export class DiscordStringSelectMenu extends LitElement implements DiscordSelectMenuProps {
	public static override readonly styles = css`
		.selectMenu {
			color: correntColour;
			border: 1px solid transparent;
			background-color: rgba(0, 0, 0, 0.2);
			cursor: pointer;
			box-sizing: border-box;
			display: grid;
			grid-template-columns: 1fr auto;
			align-items: center;
			border-radius: 4px;
			width: 90%;
			max-width: 400px;
		}

		.selectMenuOptionSlot {
			overflow-y: scroll;
			overflow-x: hidden;
			color: correntColour;
			border: none;
			border-top-left-radius: 0px;
			border-top-right-radius: 0px;
			border-color: rgba(0, 0, 0, 0.4);
			background-color: rgba(0, 0, 0, 0.2);
			cursor: pointer;
			box-sizing: border-box;
			border-radius: 4px;
			width: 90%;
			max-width: 400px;
			gap: 10px;
			display: block;
			max-height: 282px;
		}

		.selectMenuOptionSlot::-webkit-scrollbar {
			width: 5px;
			backgound-color: white;
		}

		.selectMenuOptionSlot::-webkit-scrollbar-track {
			background-color: none;
		}

		.selectMenuOptionSlot::-webkit-scrollbar-thumb {
			border-radius: 10px;
			background-color: rgba(0, 0, 0, 0.3);
		}

		.insideSelectMenu {
			padding: 8px 8px 8px 12px;
			display: grid;
			grid-template-columns: 1fr auto;
		}

		.hidden {
			display: none;
		}

		.disabled {
			cursor: not-allowed !important;
			opacity: 0.5;
		}

		.insideSelectMenu:hover {
			border-color: black;
			cursor: pointer;
		}

		.revert {
			transform: rotate(-180deg);
		}
	`;

	/**
	 * Whether to show the SelectMenu as disabled.
	 */
	@property({ attribute: 'disabled' })
	public accessor disabled: boolean;

	/**
	 * The placeholder of the selectmenu.
	 */
	@property({ attribute: 'placeholder' })
	public accessor placeholder: string = 'Make a selection';

	protected override render() {
		return html`
			<div class="selectMenu ${classMap({ disabled: this.disabled })}">
				<label>
					<div class="insideSelectMenu ${classMap({ disabled: this.disabled })}">
						<span>${this.placeholder}</span> ${ExpandMore()}
						<span class="hidden"><input type="checkbox" @click=${this._onClick} /></span>
					</div>
				</label>
			</div>
			<div class="selectMenuOptionSlot hidden"><slot></slot></div>
		`;
	}

	@eventOptions({ once: false, capture: true, passive: true })
	private _onClick() {
		const iconSpandMore = this.shadowRoot?.querySelectorAll('svg.discord-expand-more-icon').item(0);
		const optionsMenu = this.shadowRoot?.querySelectorAll('div.selectMenuOptionSlot').item(0);
		const stringSelectMenu = this.shadowRoot?.querySelectorAll('div.selectMenu').item(0);

		if (stringSelectMenu?.className === 'selectMenu  disabled ') return;

		if (optionsMenu?.className === 'selectMenuOptionSlot hidden') {
			optionsMenu?.setAttribute('class', 'selectMenuOptionSlot');
			iconSpandMore?.setAttribute('class', 'discord-expand-more-icon revert');
		} else {
			optionsMenu?.setAttribute('class', 'selectMenuOptionSlot hidden');
			iconSpandMore?.setAttribute('class', 'discord-expand-more-icon');
		}
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-stringselectmenu': DiscordStringSelectMenu;
	}
}

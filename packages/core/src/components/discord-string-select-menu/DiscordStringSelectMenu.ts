import { consume } from '@lit/context';
import { css, html, LitElement } from 'lit';
import { customElement, eventOptions, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import type { LightTheme } from '../../types.js';
import { messagesLightTheme } from '../discord-messages/DiscordMessages.js';
import ExpandMore from '../svgs/ExpandMore.js';

@customElement('discord-string-select-menu')
export class DiscordStringSelectMenu extends LitElement implements LightTheme {
	/**
	 * @internal
	 */
	public static override readonly styles = css`
		.discord-string-select-menu {
			height: 36px;
			min-height: 36px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			box-sizing: border-box;
			cursor: pointer;
			color: color-mix(in oklab, hsl(210 calc(1 * 9.1%) 87.1% / 1) 100%, black 0%);
			border: 1px solid;
			border-radius: 4px;
			background-color: color-mix(in oklab, hsl(225 calc(1 * 6.3%) 12.5% / 1) 100%, black 0%);
			border-color: color-mix(in oklab, hsl(225 calc(1 * 6.3%) 12.5% / 1) 100%, black 0%);
			padding: 8px !important;
			width: 90%;
			max-width: 400px;
			margin-right: 16px;
			transition: border 0.2s ease;
			font-weight: 500;
		}

		:host([light-theme]) .discord-string-select-menu {
			background-color: #ebebeb !important;
			border-color: #b5b5b5 !important;
			border: 1px solid;
			color: #2e3338;
		}

		:host([light-theme]) .discord-string-select-menu-option-slot {
			background-color: #ebebeb !important;
			border-color: #b5b5b5 !important;
			border: 1px solid;
			color: #2e3338;
		}

		.discord-string-select-menu-option-slot {
			overflow-y: auto;
			overflow-x: hidden;
			color: currentColor;
			border: none;
			border-top-left-radius: 0px;
			border-top-right-radius: 0px;
			border-color: color-mix(in oklab, hsl(225 calc(1 * 6.3%) 12.5% / 1) 100%, black 0%);
			background-color: color-mix(in oklab, hsl(220 calc(1 * 6.5%) 18% / 1) 100%, black 0%);

			cursor: pointer;
			box-sizing: border-box;
			border-radius: 4px;
			gap: 10px;
			display: block;
			max-height: 282px;
			position: absolute;

			width: 90%;
			max-width: 400px;
			z-index: 1002;
		}

		.discord-string-select-menu-option-slot::-webkit-scrollbar {
			width: 5px;
			background-color: transparent;
		}

		.discord-string-select-menu-option-slot::-webkit-scrollbar-track {
			background-color: transparent;
		}

		.discord-string-select-menu-option-slot::-webkit-scrollbar-thumb {
			border-radius: 10px;
			background-color: rgba(0, 0, 0, 0.3);
		}

		.discord-string-select-menu-label {
			width: 100%;
		}

		.discord-string-select-inside-menu {
			padding: 8px 8px 8px 12px;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.discord-string-select-menu-hidden {
			display: none;
		}

		.discord-string-select-menu-disabled {
			cursor: not-allowed !important;
			opacity: 0.5;
		}

		.discord-string-select-inside-menu:hover {
			border-color: black;
			cursor: pointer;
		}

		.discord-string-select-menu-rotated {
			transform: rotate(-180deg);
		}

		.discord-expand-more-icon {
			margin-left: auto;
		}
	`;

	/**
	 * Whether to show the `discord-string-select-menu` as disabled.
	 */
	@property({ type: Boolean, attribute: 'disabled' })
	public accessor disabled: boolean;

	/**
	 * The placeholder of the select-menu
	 */
	@property({ attribute: 'placeholder' })
	public accessor placeholder: string = 'Make a selection';

	@consume({ context: messagesLightTheme })
	@property({ type: Boolean, reflect: true, attribute: 'light-theme' })
	public accessor lightTheme = false;

	protected override render() {
		return html`
			<div class="${classMap({ 'discord-string-select-menu': true, 'discord-string-select-menu-disabled': this.disabled })}">
				<label class="discord-string-select-menu-label">
					<div class="${classMap({ 'discord-string-select-inside-menu': true, 'discord-string-select-menu-disabled': this.disabled })}">
						<span>${this.placeholder}</span> ${ExpandMore({ class: 'discord-expand-more-icon' })}
						<span class="discord-string-select-menu-hidden"><input type="checkbox" @click=${this._onClick} /></span>
					</div>
				</label>
			</div>
			<div class="discord-string-select-menu-option-slot discord-string-select-menu-hidden"><slot></slot></div>
		`;
	}

	@eventOptions({ once: false, capture: true, passive: true })
	private _onClick() {
		const expandMoreIcon = this.shadowRoot?.querySelectorAll('svg.discord-expand-more-icon').item(0);
		const optionsMenu = this.shadowRoot?.querySelectorAll('div.discord-string-select-menu-option-slot').item(0);
		const stringSelectMenu = this.shadowRoot?.querySelectorAll('div.discord-string-select-menu').item(0);

		if (stringSelectMenu?.className.includes('discord-string-select-menu-disabled')) return;

		if (optionsMenu?.className.includes('discord-string-select-menu-hidden')) {
			optionsMenu?.setAttribute('class', 'discord-string-select-menu-option-slot');
			expandMoreIcon?.setAttribute('class', 'discord-expand-more-icon discord-string-select-menu-rotated');
		} else {
			optionsMenu?.setAttribute('class', 'discord-string-select-menu-option-slot discord-string-select-menu-hidden');
			expandMoreIcon?.setAttribute('class', 'discord-expand-more-icon');
		}
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-string-select-menu': DiscordStringSelectMenu;
	}
}

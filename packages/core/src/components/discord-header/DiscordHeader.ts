import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('discord-header')
export class DiscordHeader extends LitElement {
	public static override styles = css`
		:host > * {
			margin: 16px 0 8px;
			font-weight: 700;
			line-height: 1.375em;
		}

		:host([level='1']) > h1 {
			font-size: 1.5rem;
		}

		:host([level='2']) > h2 {
			font-size: 1.25rem;
		}

		:host([level='3']) > h3 {
			font-size: 1rem;
		}

		:host([level='1']):first-child() > h1,
		:host([level='2']):first-child() > h2 {
			margin-top: 8px;
		}

		:host([level='3']):first-child() > h3 {
			margin-top: 4px;
		}
	`;

	/**
	 * The header level, this should be a number between 1 and 3 (inclusive).
	 * If a number outside of this range is provided, an error is thrown.
	 */
	@property({ type: Number, reflect: true })
	public accessor level: 1 | 2 | 3 = 1;

	public checkLevel() {
		if (this.level < 1 || this.level > 3) {
			throw new RangeError('The level property must be a number between 1 and 3 (inclusive)');
		}
	}

	protected override render() {
		this.checkLevel();

		switch (this.level) {
			case 1: {
				return html`<h1><slot></slot></h1>`;
			}
			case 2: {
				return html`<h2><slot></slot></h2>`;
			}
			case 3: {
				return html`<h3><slot></slot></h3>`;
			}
			default: {
				return html`<slot></slot>`;
			}
		}
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-header': DiscordHeader;
	}
}

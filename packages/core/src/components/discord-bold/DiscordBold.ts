import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('discord-bold')
export class DiscordBold extends LitElement {
	/**
	 * @internal
	 */
	public static override readonly styles = css`
		:host > strong {
			font-weight: 700;
		}
	`;

	protected override render() {
		return html`
			<strong>
				<slot></slot>
			</strong>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-bold': DiscordBold;
	}
}

import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('discord-subtext')
export class DiscordSubtext extends LitElement {
	/**
	 * @internal
	 */
	public static override readonly styles = css`
		:host > small {
			color: #949ba4;
		}
	`;

	protected override render() {
		return html`
			<small>
				<slot></slot>
			</small>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-subtext': DiscordSubtext;
	}
}

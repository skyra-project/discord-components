import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('discord-quote')
export class DiscordQuote extends LitElement {
	public static override styles = css`
		:host {
			display: flex;
		}

		.discord-quote-divider {
			background-color: #4f545c;
			border-radius: 4px;
			font-size: 0.9em;
			font-style: normal;
			font-weight: 400;
			margin: 0;
			padding: 0;
			width: 4px;
		}

		blockquote {
			margin-block-end: unset;
			margin-block-start: unset;
			margin-inline-end: unset;
			margin-inline-start: unset;
			padding: 0 8px 0 12px;
		}
	`;

	protected override render() {
		return html`
			<div class="discord-quote-divider"></div>
			<blockquote>
				<slot></slot>
			</blockquote>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-quote': DiscordQuote;
	}
}

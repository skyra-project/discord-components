import { consume } from '@lit-labs/context';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { messagesLightTheme } from '../discord-messages/DiscordMessages.js';
import type { LightTheme } from '../../util.js';

@customElement('discord-quote')
export class DiscordQuote extends LitElement implements LightTheme {
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

		:host([light-theme]) .discord-quote-divider {
			background-color: #c4c9ce;
		}

		blockquote {
			margin-block-end: unset;
			margin-block-start: unset;
			margin-inline-end: unset;
			margin-inline-start: unset;
			padding: 0 8px 0 12px;
		}
	`;

	@consume({ context: messagesLightTheme, subscribe: true })
	@property({ type: Boolean, reflect: true, attribute: 'light-theme' })
	public lightTheme = false;

	public override willUpdate() {
		if (this.parentElement && 'lightTheme' in this.parentElement) {
			const parent = this.parentElement as { lightTheme: boolean };
			this.lightTheme = parent.lightTheme;
		}
	}

	protected override render() {
		return html`
			<div class="discord-quote-divider"></div>
			<!-- display: inline -->
			<blockquote><slot></slot></blockquote>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-quote': DiscordQuote;
	}
}

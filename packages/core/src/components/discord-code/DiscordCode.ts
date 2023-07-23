import { consume } from '@lit-labs/context';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { messagesLightTheme } from '../discord-messages/DiscordMessages.js';
import type { LightTheme } from '../../util.js';

@customElement('discord-code')
export class DiscordCode extends LitElement implements LightTheme {
	public static override styles = css`
		:host {
			background-color: #2f3136;
			white-space: break-spaces;
			font-family:
				Consolas,
				Andale Mono WT,
				Andale Mono,
				Lucida Console,
				Lucida Sans Typewriter,
				DejaVu Sans Mono,
				Bitstream Vera Sans Mono,
				Liberation Mono,
				Nimbus Mono L,
				Monaco,
				Courier New,
				Courier,
				monospace;
			border-radius: 3px;
		}

		code {
			padding: 0.2em;
			margin: -0.2em;
			border-radius: 3px;
			border: none;
			font-size: 85%;
			text-indent: 0;
			white-space: pre-wrap;
		}

		:host([multiline]) code {
			display: block;
			width: 90%;
			font-size: 0.875rem;
			line-height: 1.125rem;
			padding: 0.5em;
			background: #2b2d31;
			border: 1px solid #1e1f22;
		}

		:host([embed]) code {
			background-color: #1e1f22;
		}

		:host([embed][multiline]) code {
			display: block;
			width: 100%;
			padding: 7px;
			border-radius: 4px;
			background: #1e1f22;
		}

		:host([light-theme]) code {
			border-color: #e3e5e8;
			background-color: #f2f3f5;
		}

		:host([light-theme][embed]) code {
			background-color: #e3e5e8;
		}
	`;

	@property({ type: Boolean, reflect: true })
	public multiline = false;

	@consume({ context: messagesLightTheme, subscribe: true })
	@property({ type: Boolean, reflect: true, attribute: 'light-theme' })
	public lightTheme = false;

	@property({ type: Boolean, reflect: true })
	public embed = false;

	protected override willUpdate() {
		if (this.parentElement && 'lightTheme' in this.parentElement) {
			const parent = this.parentElement as { lightTheme: boolean };
			this.lightTheme = parent.lightTheme;
		}
	}

	protected override render() {
		if (this.multiline) {
			return html`<discord-pre embed
				><code><slot></slot></code
			></discord-pre>`;
		}

		return html`<code><slot></slot></code>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-code': DiscordCode;
	}
}

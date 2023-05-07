import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('discord-inline-code')
export class DiscordInlineCode extends LitElement {
	public static override styles = css`
		:host {
			background-color: #2f3136;
			white-space: break-spaces;
			font-family: Consolas, Andale Mono WT, Andale Mono, Lucida Console, Lucida Sans Typewriter, DejaVu Sans Mono, Bitstream Vera Sans Mono,
				Liberation Mono, Nimbus Mono L, Monaco, Courier New, Courier, monospace;
		}
	`;

	protected override render() {
		return html`<code><slot></slot></code>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-inline-code': DiscordInlineCode;
	}
}

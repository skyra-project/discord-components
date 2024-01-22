import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('discord-pre')
export class DiscordPre extends LitElement {
	public static override styles = css`
		:host pre {
			border-radius: 4px;
			padding: 0;
			font-size: 0.75rem;
			line-height: 1rem;
			margin-top: 6px;
			white-space: pre-wrap;
			background-clip: border-box;
			width: 90%;
			border: none;
		}

		:host([embed]) pre {
			margin: 0;
			margin-top: 6px;
			width: 100%;
		}
	`;

	@property({ type: Boolean })
	public accessor embed = false;

	protected override render() {
		return html`<pre><slot></slot
		></pre>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-pre': DiscordPre;
	}
}

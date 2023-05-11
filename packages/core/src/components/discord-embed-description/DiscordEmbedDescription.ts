import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import type { DiscordEmbed } from '../discord-embed/DiscordEmbed.js';

@customElement('discord-embed-description')
export class DiscordEmbedDescription extends LitElement {
	public static override styles = css`
		:host {
			font-size: 0.875rem;
			font-weight: 400;
			grid-column: 1/1;
			line-height: 1.125rem;
			margin-top: 8px;
			min-width: 0;
			white-space: pre-line;
		}

		:host code {
			background-color: #202225;
			padding: 2.5px;
			border-radius: 3px;
		}

		:host([light-theme]) code {
			background-color: #e3e5e8;
		}

		:host code.multiline {
			display: block;
			padding: 7px;
			border-radius: 4px;
			white-space: break-spaces;
		}

		:host pre {
			margin: 0;
			margin-top: 6px;
		}

		:host img.emoji {
			width: 22px;
			height: 22px;
		}

		:host blockquote {
			position: relative;
			padding: 0 8px 0 12px;
			margin: 0;
		}

		:host blockquote::before {
			content: '';
			display: block;
			position: absolute;
			left: 0;
			height: 100%;
			width: 4px;
			border-radius: 4px;
			background-color: #4f545c;
		}

		:host([light-theme]) blockquote::before {
			background-color: #c7ccd1;
		}

		:host .spoiler {
			background-color: #202225;
			color: transparent;
			cursor: pointer;
		}

		:host([light-theme]) .spoiler {
			background-color: #b9bbbe;
		}

		:host .spoiler:hover {
			background-color: rgba(32, 34, 37, 0.8);
		}

		:host([light-theme]) .spoiler:hover {
			background-color: rgba(185, 187, 190, 0.8);
		}

		:host .spoiler:active {
			color: inherit;
			background-color: hsla(0, 0%, 100%, 0.1);
		}

		:host([light-theme]) .spoiler:active {
			background-color: rgba(0, 0, 0, 0.1);
		}
	`;

	@state()
	public lightTheme = false;

	protected override render() {
		const parent = this.parentElement as DiscordEmbed | null;

		if (!parent || parent.tagName.toLowerCase() !== 'discord-embed') {
			throw new Error('All <discord-embed-description> components must be direct children of <discord-embed>.');
		}

		this.lightTheme = parent.lightTheme;

		return html`<slot></slot>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-embed-description': DiscordEmbedDescription;
	}
}

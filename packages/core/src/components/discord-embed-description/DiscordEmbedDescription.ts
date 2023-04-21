import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('discord-embed-description')
export class DiscordEmbedDescription extends LitElement {
	public static override styles = css`
		.discord-embed .discord-embed-description {
			font-size: 0.875rem;
			font-weight: 400;
			grid-column: 1/1;
			line-height: 1.125rem;
			margin-top: 8px;
			min-width: 0;
			white-space: pre-line;
		}

		.discord-embed .discord-embed-description code {
			background-color: #202225;
			padding: 2.5px;
			border-radius: 3px;
		}

		.discord-light-theme .discord-embed-description code {
			background-color: #e3e5e8;
		}

		.discord-embed .discord-embed-description code.multiline {
			display: block;
			padding: 7px;
			border-radius: 4px;
			white-space: break-spaces;
		}

		.discord-embed .discord-embed-description pre {
			margin: 0;
			margin-top: 6px;
		}

		.discord-embed .discord-embed-description img.emoji {
			width: 22px;
			height: 22px;
		}

		.discord-embed .discord-embed-description blockquote {
			position: relative;
			padding: 0 8px 0 12px;
			margin: 0;
		}

		.discord-embed .discord-embed-description blockquote::before {
			content: '';
			display: block;
			position: absolute;
			left: 0;
			height: 100%;
			width: 4px;
			border-radius: 4px;
			background-color: #4f545c;
		}

		.discord-light-theme .discord-embed-description blockquote::before {
			background-color: #c7ccd1;
		}

		.discord-embed .discord-embed-description .spoiler {
			background-color: #202225;
			color: transparent;
			cursor: pointer;
		}

		.discord-light-theme .discord-embed .discord-embed-description .spoiler {
			background-color: #b9bbbe;
		}

		.discord-embed .discord-embed-description .spoiler:hover {
			background-color: rgba(32, 34, 37, 0.8);
		}

		.discord-light-theme .discord-embed .discord-embed-description .spoiler:hover {
			background-color: rgba(185, 187, 190, 0.8);
		}

		.discord-embed .discord-embed-description .spoiler:active {
			color: inherit;
			background-color: hsla(0, 0%, 100%, 0.1);
		}

		.discord-light-theme .discord-embed .discord-embed-description .spoiler:active {
			background-color: rgba(0, 0, 0, 0.1);
		}
	`;

	protected override render() {
		if (!this.parentElement || this.parentElement.tagName.toLowerCase() !== 'discord-embed') {
			throw new Error('All <discord-embed-description> components must be direct children of <discord-embed>.');
		}

		return html` <div class="discord-embed-description">
			<slot></slot>
		</div>`;
	}
}

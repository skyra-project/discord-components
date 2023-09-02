import { consume } from '@lit-labs/context';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { DiscordTimestamp, handleTimestamp, LightTheme } from '../../util.js';
import { messagesLightTheme } from '../discord-messages/DiscordMessages.js';

@customElement('discord-embed-footer')
export class DiscordEmbedFooter extends LitElement implements LightTheme {
	public static override styles = css`
		:host {
			-webkit-box-align: center;
			align-items: center;
			display: flex;
			font-size: 12px;
			line-height: 16px;
			font-weight: 500;
			margin-top: 8px;
		}

		:host([light-theme]) {
			color: #747f8d;
		}

		:host .discord-footer-image {
			border-radius: 50%;
			flex-shrink: 0;
			height: 20px;
			margin-right: 8px;
			width: 20px;
		}

		:host .discord-footer-separator {
			color: #dcddde;
			font-weight: 500;
			display: inline-block;
			margin: 0 4px;
		}

		:host([light-theme]) .discord-footer-separator {
			color: #5c5e66;
		}
	`;

	/**
	 * The image to use next to the footer text.
	 */
	@property({ attribute: 'footer-image' })
	public footerImage: string;

	/**
	 * The alt attribute to use for the {@link footerImage}
	 */
	@property({ attribute: 'footer-image-alt' })
	public footerImageAlt: string;

	/**
	 * The timestamp to use for the message date. When supplying a string, the format must be `01/31/2000`.
	 */
	@property({ reflect: true })
	public timestamp?: DiscordTimestamp;

	@consume({ context: messagesLightTheme, subscribe: true })
	@property({ type: Boolean, reflect: true, attribute: 'light-theme' })
	public lightTheme = false;

	public updateTimestamp(value?: DiscordTimestamp): string | null {
		if (!value || isNaN(new Date(value).getTime())) return null;
		return handleTimestamp(new Date(value));
	}

	protected override render() {
		this.updateTimestamp(this.timestamp);

		return html` ${this.footerImage ? html`<img src="${this.footerImage}" alt="${this.footerImageAlt}" class="discord-footer-image" />` : null}
		${html`
			<slot></slot>
			${this.timestamp ? html`<span class="discord-footer-separator">&bull;</span>` : null} ${this.timestamp ? html`${this.timestamp}` : null}
		`}`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-embed-footer': DiscordEmbedFooter;
	}
}

import { consume } from '@lit/context';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { when } from 'lit/directives/when.js';
import type { DiscordTimestamp, LightTheme } from '../../types.js';
import { handleTimestamp } from '../../util.js';
import { messagesLightTheme } from '../discord-messages/DiscordMessages.js';

@customElement('discord-embed-footer')
export class DiscordEmbedFooter extends LitElement implements LightTheme {
	/**
	 * @internal
	 */
	public static override readonly styles = css`
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
	public accessor footerImage: string;

	/**
	 * The alt attribute to use for the {@link DiscordEmbedFooter.footerImage}
	 */
	@property({ attribute: 'footer-image-alt' })
	public accessor footerImageAlt: string;

	/**
	 * The timestamp to use for the message date. When supplying a string, the format must be `01/31/2000`.
	 */
	@property({
		type: String,
		reflect: true,
		converter: (value) => handleTimestamp(value),
		attribute: true
	})
	public accessor timestamp: DiscordTimestamp;

	@consume({ context: messagesLightTheme, subscribe: true })
	@property({ type: Boolean, reflect: true, attribute: 'light-theme' })
	public accessor lightTheme = false;

	public updateTimestamp(value?: DiscordTimestamp): void {
		if (value && !Number.isNaN(new Date(value).getTime())) {
			this.timestamp = handleTimestamp(value);
		}
	}

	protected override render() {
		this.updateTimestamp(this.timestamp);

		return html`${when(
				this.footerImage,
				() => html`<img src=${ifDefined(this.footerImage)} alt=${ifDefined(this.footerImageAlt)} class="discord-footer-image" />`
			)}
			<slot></slot>
			${when(this.timestamp, () => html`<span class="discord-footer-separator">&bull;</span>`)}
			${when(
				this.timestamp,
				() => ` ${this.timestamp}`,
				() => null
			)}`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-embed-footer': DiscordEmbedFooter;
	}
}

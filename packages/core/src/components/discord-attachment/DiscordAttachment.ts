import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { validateImageExtension } from '../../util.js';

@customElement('discord-attachment')
export class DiscordAttachment extends LitElement {
	public static override styles = css`
		:host {
			display: block;
			position: relative;
			-webkit-user-select: text;
			-moz-user-select: text;
			-ms-user-select: text;
			user-select: text;
			overflow: hidden;
			border-radius: 3px;
		}

		.discord-attachment {
			color: #dcddde;
			display: flex;
			font-size: 13px;
			line-height: 150%;
			margin-bottom: 8px;
			margin-top: 8px;
		}
	`;

	/**
	 * The URL for the image attachment
	 * @important Should be a valid image URL, i.e. matching the regex `/\.(bmp|jpe?g|png|gif|webp|tiff)$/i`
	 */
	@property({ reflect: true, attribute: 'url' })
	public accessor url: string;

	/**
	 * The height of the image in pixels
	 */
	@property({ type: Number, reflect: true, attribute: 'height' })
	public accessor height: number;

	/**
	 * The width of the image in pixels
	 */
	@property({ type: Number, reflect: true, attribute: 'width' })
	public accessor width: number;

	/**
	 * The alt text to show in case the image was unable to load
	 * @default 'discord attachment'
	 */
	@property({ reflect: true, attribute: 'alt' })
	public accessor alt = 'discord attachment';

	public componentWillRender() {
		validateImageExtension(this.url);
	}

	protected override render() {
		return html`
			<div class="discord-attachment">
				<div class="discord-image-wrapper" style="${styleMap({ height: `${this.height}px`, width: `${this.width}px` })}">
					<img alt="${this.alt}" src="${this.url}" height="${this.height}" width="${this.width}" />
				</div>
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-attachment': DiscordAttachment;
	}
}

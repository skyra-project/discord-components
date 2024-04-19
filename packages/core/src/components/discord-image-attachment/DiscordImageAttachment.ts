import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { when } from 'lit/directives/when.js';
import { validateImageExtension } from '../../util.js';

@customElement('discord-image-attachment')
export class DiscordImageAttachment extends LitElement {
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

		.discord-image-attachment {
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
	public accessor alt = 'discord image attachment';

	/**
	 * A custom image element, useful if you want to use something like
	 * {@link https://nextjs.org/docs/pages/api-reference/components/image `next/image`}
	 *
	 * Note that all other properties will be ignored if this is set
	 */
	@property({ attribute: false })
	public accessor customImageElement: HTMLElement;

	public componentWillRender() {
		if (!this.customImageElement) {
			validateImageExtension(this.url);
		}
	}

	protected override render() {
		return html`
			<div class="discord-image-attachment">
				<div class="discord-image-wrapper" style="${styleMap({ height: `${this.height}px`, width: `${this.width}px` })}">
					${when(
						Boolean(this.customImageElement),
						() => this.customImageElement,
						() => html`<img alt="${this.alt}" src="${this.url}" height="${this.height}" width="${this.width}" />`
					)}
				</div>
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-attachment': DiscordImageAttachment;
	}
}

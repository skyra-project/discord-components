import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { when } from 'lit/directives/when.js';
import { validateImageExtension } from '../../util.js';

@customElement('discord-image-attachment')
export class DiscordImageAttachment extends LitElement {
	/**
	 * @internal
	 */
	public static override readonly styles = css`
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
	 *
	 * @remarks Should be a valid image URL, i.e. matching the regex `/\.(bmp|jpe?g|png|gif|webp|tiff)$/i`
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
	 *
	 * @defaultValue 'discord attachment'
	 */
	@property({ reflect: true, attribute: 'alt' })
	public accessor alt = 'discord image attachment';

	/**
	 * Indicates that you intend to use a custom image element,
	 * useful if you want to use something like
	 * {@link https://nextjs.org/docs/pages/api-reference/components/image | `next/image`}
	 *
	 * Once this property is set, use the child element (default slot) to insert
	 * the code for the desired image component
	 *
	 * @remarks Setting this will disable the
	 * {@link DiscordImageAttachment.url | `url`}, and {@link DiscordImageAttachment.alt | `alt`} properties.
	 */
	@property({ type: Boolean, attribute: 'custom-image-element' })
	public accessor customImageElement = false;

	/**
	 * Triggered when the image attachment fails to load.
	 * If not provided, nothing will happen on error.
	 */
	@property({ attribute: false })
	public onImageError?: (imgEl: HTMLImageElement) => void;

	private handleImageError(event: Event): void {
		if (!this.onImageError) return;
		const img = event.currentTarget as HTMLImageElement;
		this.onImageError(img);
	}

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
						this.customImageElement,
						() => html`<slot></slot>`,
						() =>
							html`<img
								alt=${ifDefined(this.alt)}
								src=${ifDefined(this.url)}
								height=${ifDefined(this.height)}
								width=${ifDefined(this.width)}
								@error=${this.handleImageError}
							/>`
					)}
				</div>
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-image-attachment': DiscordImageAttachment;
	}
}

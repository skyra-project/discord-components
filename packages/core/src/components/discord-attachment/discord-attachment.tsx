import { Component, ComponentInterface, ComponentWillLoad, Element, h, Prop } from '@stencil/core';
import { validateImageExtension } from '../../util';

@Component({
	tag: 'discord-attachment',
	styleUrl: 'discord-attachment.css'
})
export class DiscordAttachment implements ComponentWillLoad, ComponentInterface {
	/**
	 * The DiscordEmbed element.
	 */
	@Element() el: HTMLElement;

	/**
	 * The URL for the image attachment
	 * @important Should be a valid image URL, i.e. matching the regex `/\.(bmp|jpe?g|png|gif|webp|tiff)$/i`
	 */
	@Prop() url: string;

	/**
	 * The height of the image in pixels
	 * @remark For images over 200 pixels the height is multiplied by 0.2 (20% of the total height)
	 * This is to ensure that it doesn't supersize.
	 * The size at which the height should be modified can be set by `heightModifierSize`
	 */
	@Prop() height: number;

	/**
	 * The max size at which the height will be modified to be only 20% of the total given amount
	 * If you would like to disable resizing of the image then set this to `null`
	 * @default 200
	 */
	@Prop() heightModifierSize: number | null = 200;

	/**
	 * The width of the image in pixels
	 * @remark For images over 200 pixels the width is multiplied by 0.2 (20% of the total width)
	 * This is to ensure that it doesn't supersize.
	 * The size at which the width should be modified can be set by `widthModifierSize`
	 */
	@Prop() width: number;

	/**
	 * The max size at which the width will be modified to be only 20% of the total given amount
	 * If you would like to disable resizing of the image then set this to `null`
	 * @default 200
	 */
	@Prop() widthModifierSize: number | null = 200;

	/**
	 * The alt text to show in case the image was unable to load
	 * @default 'discord attachment'
	 */
	@Prop() alt = 'discord attachment';

	componentWillLoad() {
		validateImageExtension(this.url);

		if (this.heightModifierSize !== null && this.height > this.heightModifierSize) this.height *= 0.2;

		if (this.widthModifierSize !== null && this.width > this.widthModifierSize) this.width *= 0.2;
	}

	render() {
		return (
			<div class="discord-attachment">
				<div class="discord-attachment-root">
					<div class="discord-image-wrapper" style={{ height: `${this.height}px`, width: `${this.width}px` }}>
						<img alt={this.alt} src={this.url} height={this.height} width={this.width} />
					</div>
				</div>
			</div>
		);
	}
}

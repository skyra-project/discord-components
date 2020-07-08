import { Component, ComponentInterface, ComponentWillLoad, Element, h, Host, Prop } from '@stencil/core';
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
	 */
	@Prop() height: number;

	/**
	 * The width of the image in pixels
	 */
	@Prop() width: number;

	/**
	 * The alt text to show in case the image was unable to load
	 * @default 'discord attachment'
	 */
	@Prop() alt = 'discord attachment';

	componentWillLoad() {
		validateImageExtension(this.url);
	}

	render() {
		return (
			<Host class="discord-attachment">
				<div class="discord-attachment-root">
					<div class="discord-image-wrapper" style={{ height: `${this.height}px`, width: `${this.width}px` }}>
						<img alt={this.alt} src={this.url} height={this.height} width={this.width} />
					</div>
				</div>
			</Host>
		);
	}
}

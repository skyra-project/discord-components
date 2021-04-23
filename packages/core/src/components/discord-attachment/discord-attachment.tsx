import { Component, ComponentInterface, Element, h, Host, Prop } from '@stencil/core';
import { validateImageExtension } from '../../util';

@Component({
	tag: 'discord-attachment',
	styleUrl: 'discord-attachment.css'
})
export class DiscordAttachment implements ComponentInterface {
	/**
	 * The DiscordEmbed element.
	 */
	@Element()
	public el: HTMLElement;

	/**
	 * The URL for the image attachment
	 * @important Should be a valid image URL, i.e. matching the regex `/\.(bmp|jpe?g|png|gif|webp|tiff)$/i`
	 */
	@Prop()
	public url: string;

	/**
	 * The height of the image in pixels
	 */
	@Prop()
	public height: number;

	/**
	 * The width of the image in pixels
	 */
	@Prop()
	public width: number;

	/**
	 * The alt text to show in case the image was unable to load
	 * @default 'discord attachment'
	 */
	@Prop()
	public alt = 'discord attachment';

	public componentWillRender() {
		validateImageExtension(this.url);
	}

	public render() {
		return (
			<Host class="discord-attachment">
				<div class="discord-image-wrapper" style={{ height: `${this.height}px`, width: `${this.width}px` }}>
					<img alt={this.alt} src={this.url} height={this.height} width={this.width} />
				</div>
			</Host>
		);
	}
}

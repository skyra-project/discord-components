import { Component, ComponentInterface, Element, h, Host, Prop } from '@stencil/core';

@Component({
	tag: 'discord-tenor-video',
	styleUrl: 'discord-tenor-video.css'
})
export class DiscordTenorVideo implements ComponentInterface {
	/**
	 * The DiscordTenorVideo element.
	 */
	@Element()
	public el: HTMLElement;

	/**
	 * The URL for the video
	 */
	@Prop()
	public url: string;

	/**
	 * The height of the video in pixels
	 */
	@Prop()
	public height: number;

	/**
	 * The width of the video in pixels
	 */
	@Prop()
	public width: number;

	public render() {
		return (
			<Host class="discord-tenor-video">
				<div class="discord-tenor-video-wrapper" style={{ height: `${this.height}px`, width: `${this.width}px` }}>
					<video muted preload="auto" autoplay loop src={this.url} height={this.height} width={this.width}></video>
				</div>
			</Host>
		);
	}
}

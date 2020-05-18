import { Component, Element, h, Prop, Watch } from '@stencil/core';
import { DiscordTimestamp, findSlotElement, handleTimestamp } from '../../util';

@Component({
	tag: 'discord-embed',
	styleUrl: 'discord-embed.css'
})
export class DiscordEmbed {
	/**
	 * The DiscordEmbed element.
	 */
	@Element() el: HTMLElement;

	/**
	 * The color to use for the embed's left border. Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp).
	 */
	@Prop() color: string;

	/**
	 * The author's name.
	 */
	@Prop() authorName: string;

	/**
	 * The author's avatar URL.
	 */
	@Prop() authorImage: string;

	/**
	 * The URL to open when you click on the author's name.
	 */
	@Prop() authorUrl: string;

	/**
	 * The embed title.
	 */
	@Prop() embedTitle: string;

	/**
	 * The URL to open when you click on the embed title.
	 */
	@Prop() url: string;

	/**
	 * The thumbnail image to use.
	 */
	@Prop() thumbnail: string;

	/**
	 * The embed image to use (displayed at the bottom).
	 */
	@Prop() image: string;

	/**
	 * The image to use next to the footer text.
	 */
	@Prop() footerImage: string;

	/**
	 * The timestamp to use for the message date. When supplying a string, the format must be `01/31/2000`.
	 */
	@Prop({ mutable: true, reflect: true }) timestamp?: DiscordTimestamp;

	@Watch('timestamp')
	updateTimestamp(value?: DiscordTimestamp): string | null {
		if (!value) return null;
		return handleTimestamp(value);
	}

	componentWillLoad() {
		this.timestamp = this.updateTimestamp(this.timestamp);
	}

	render() {
		const footerSlot: Element | undefined = findSlotElement(this.el.children, 'footer');

		return (
			<div class="discord-embed">
				<div style={{ 'background-color': this.color }} class="discord-left-border"></div>
				<div class="discord-embed-root">
					<div class="discord-embed-wrapper">
						<div class="discord-embed-grid">
							{this.authorName ? (
								<div class="discord-embed-author">
									{this.authorImage ? <img src={this.authorImage} alt="" class="discord-author-image" /> : ''}
									{this.authorUrl ? (
										<a href={this.authorUrl} target="_blank" rel="noopener noreferrer">
											{this.authorName}
										</a>
									) : (
										<span>{this.authorName}</span>
									)}
								</div>
							) : (
								''
							)}
							{this.embedTitle ? (
								<div class="discord-embed-title">
									{this.url ? (
										<a href={this.url} target="_blank" rel="noopener noreferrer">
											{this.embedTitle}
										</a>
									) : (
										<span>{this.embedTitle}</span>
									)}
								</div>
							) : (
								''
							)}
							<div class="discord-embed-description">
								<slot></slot>
							</div>
							<slot name="fields"></slot>
							{this.image ? <img src={this.image} alt="" class="discord-embed-image" /> : ''}

							{this.thumbnail ? <img src={this.thumbnail} alt="" class="discord-embed-thumbnail" /> : ''}
							{footerSlot || this.timestamp ? (
								<div class="discord-embed-footer">
									{footerSlot && this.footerImage ? (
										<img src={this.footerImage} alt="" class="discord-footer-image" />
									) : (
										''
									)}
									<span>
										<slot name="footer"></slot>
										{footerSlot && this.timestamp ? <span class="discord-footer-separator">&bull;</span> : ''}
										{this.timestamp ? <span>{this.timestamp}</span> : ''}
									</span>
								</div>
							) : (
								''
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

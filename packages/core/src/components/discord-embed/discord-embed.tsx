import { Component, ComponentInterface, Element, h, Prop, State } from '@stencil/core';
import clsx from 'clsx';
import Fragment from '../../Fragment';
import type { Emoji } from '../../options';
import { getGlobalEmojiUrl } from '../../util';

@Component({
	tag: 'discord-embed',
	styleUrl: 'discord-embed.css'
})
export class DiscordEmbed implements ComponentInterface {
	/**
	 * The DiscordEmbed element.
	 */
	@Element()
	public el: HTMLElement;

	/**
	 * The color to use for the embed's left border. Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp).
	 */
	@Prop()
	public color: string;

	/**
	 * The author's name.
	 */
	@Prop()
	public authorName: string;

	/**
	 * The author's avatar URL.
	 */
	@Prop()
	public authorImage: string;

	/**
	 * The URL to open when you click on the author's name.
	 */
	@Prop()
	public authorUrl: string;

	/**
	 * The embed title.
	 */
	@Prop()
	public embedTitle: string;

	/**
	 * The URL to open when you click on the embed title.
	 */
	@Prop()
	public url: string;

	/**
	 * The thumbnail image to use.
	 */
	@Prop()
	public thumbnail: string;

	/**
	 * The embed image to use (displayed at the bottom).
	 */
	@Prop()
	public image: string;

	/**
	 * The embed video to use (displayed at the bottom, same slot as the image).
	 * @important YouTube videos will not be playable on your projects, this is due to YouTube using DASH to play their videos rather
	 * than providing the raw media stream (in a container such as mp4 or ogg). Links to regular MP4 files (such as on a CDN) however
	 * will autoplay!
	 * @note Video takes priority over image.
	 * @remark Providing both a video and an image will ensure the image is shown to users with browsers
	 * that do not support HTML5 video playback.
	 * @example https://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_1080p_stereo.ogg
	 */
	@Prop()
	public video: string;

	/**
	 * The provider to show above the embed, for example for YouTube videos it will show "YouTube" at the top of the embed (above the author)
	 * @example YouTube
	 */
	@Prop()
	public provider: string;

	private hasPerformedRerenderChecks: 'dirty' | 'pristine' = 'pristine';

	@State()
	private hasProvidedDescriptionSlot = true;

	public componentDidRender() {
		if (this.hasPerformedRerenderChecks === 'pristine') {
			try {
				const discordEmbedDescriptionChild = this.el.querySelector('.discord-embed-description');
				this.hasProvidedDescriptionSlot = Boolean(discordEmbedDescriptionChild?.innerHTML.trim());
			} finally {
				this.hasPerformedRerenderChecks = 'dirty';
			}
		}
	}

	public render() {
		const emojiParsedAuthorName = this.parseTitle(this.authorName);
		const emojiParsedEmbedTitle = this.parseTitle(this.embedTitle);

		return (
			<div class="discord-embed">
				<div style={{ 'background-color': this.color }} class="discord-left-border"></div>
				<div class="discord-embed-root">
					<div class="discord-embed-wrapper">
						<div class="discord-embed-grid">
							{this.provider && (
								<div class="discord-embed-provider">
									<Fragment>{this.provider}</Fragment>
								</div>
							)}
							{emojiParsedAuthorName && (
								<div class="discord-embed-author">
									{this.authorImage ? <img src={this.authorImage} alt="" class="discord-author-image" /> : ''}
									{this.authorUrl ? (
										<a href={this.authorUrl} target="_blank" rel="noopener noreferrer">
											{...emojiParsedAuthorName}
										</a>
									) : (
										<Fragment>{...emojiParsedAuthorName}</Fragment>
									)}
								</div>
							)}
							{emojiParsedEmbedTitle && (
								<div class="discord-embed-title">
									{this.url ? (
										<a href={this.url} target="_blank" rel="noopener noreferrer">
											{...emojiParsedEmbedTitle}
										</a>
									) : (
										<Fragment>{...emojiParsedEmbedTitle}</Fragment>
									)}
								</div>
							)}

							{this.hasProvidedDescriptionSlot && <slot name="description"></slot>}

							<slot name="fields"></slot>
							{this.image || this.video ? (
								<div class={clsx('discord-embed-media', { 'discord-embed-media-video': Boolean(this.video) })}>
									{this.renderMedia()}
								</div>
							) : null}

							{this.thumbnail ? <img src={this.thumbnail} alt="" class="discord-embed-thumbnail" /> : ''}
							<slot name="footer"></slot>
						</div>
					</div>
				</div>
			</div>
		);
	}

	private renderMedia() {
		if (this.video) {
			return (
				<video controls muted preload="none" poster={this.image} src={this.video} height="225" width="400" class="discord-embed-video">
					<img src={this.image} alt="Discord embed media" class="discord-embed-image" />
				</video>
			);
		} else if (this.image) {
			return <img src={this.image} alt="Discord embed media" class="discord-embed-image" />;
		}

		return null;
	}

	private parseTitle(title?: string) {
		if (!title) return null;

		const words = title.split(' ');

		return words.map((word: string, idx: number) => {
			const emoji = getGlobalEmojiUrl(word) ?? ({} as Emoji);
			let el = '';
			if (emoji.name) {
				el = (
					<span class="discord-embed-custom-emoji">
						<img src={emoji.url} alt={emoji.name} class="discord-embed-custom-emoji-image" />
						<span>&nbsp;</span>
					</span>
				);
			} else {
				el = idx < words.length - 1 ? `${word} ` : word;
			}
			return el;
		});
	}
}

import { consume } from '@lit/context';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { when } from 'lit/directives/when.js';
import type { Emoji, DiscordEmbedProps, LightTheme } from '../../types.js';
import { getGlobalEmojiUrl } from '../../util.js';
import '../discord-custom-emoji/DiscordCustomEmoji.js';
import { messagesLightTheme } from '../discord-messages/DiscordMessages.js';

@customElement('discord-embed')
export class DiscordEmbed extends LitElement implements DiscordEmbedProps, LightTheme {
	public static override readonly styles = css`
		:host {
			color: #dcddde;
			display: flex;
			font-size: 13px;
			line-height: 150%;
			margin-bottom: 8px;
			margin-top: 8px;
		}

		:host([light-theme]) {
			color: #2e3338;
		}

		:host .discord-left-border {
			background-color: #202225;
			border-radius: 4px 0 0 4px;
			flex-shrink: 0;
			width: 4px;
		}

		:host([light-theme]) .discord-left-border {
			background-color: #e3e5e8;
		}

		:host .discord-embed-root {
			display: grid;
			grid-auto-flow: row;
			grid-row-gap: 0.25rem;
			min-height: 0;
			min-width: 0;
			text-indent: 0;
		}

		:host .discord-embed-wrapper {
			background-color: #2f3136;
			max-width: 520px;
			border: 1px solid rgba(46, 48, 54, 0.6);
			border-radius: 0 4px 4px 0;
			justify-self: start;
			align-self: start;
			display: grid;
			box-sizing: border-box;
		}

		:host([light-theme]) .discord-embed-wrapper {
			background-color: rgb(242, 243, 245);
			border-color: rgba(205, 205, 205, 0.3);
		}

		:host .discord-embed-wrapper .discord-embed-grid {
			display: inline-grid;
			grid-template-columns: auto -webkit-min-content;
			grid-template-columns: auto min-content;
			grid-template-columns: auto;
			grid-template-rows: auto;
			padding: 0.5rem 1rem 1rem 0.75rem;
		}

		:host .discord-embed-thumbnail {
			border-radius: 4px;
			flex-shrink: 0;
			grid-column: 2/2;
			grid-row: 1/8;
			justify-self: end;
			margin-left: 16px;
			margin-top: 8px;
			max-height: 80px;
			max-width: 80px;
			object-fit: contain;
			object-position: top center;
		}

		:host .discord-embed-author {
			-webkit-box-align: center;
			align-items: center;
			color: #fff;
			font-size: 14px;
			display: flex;
			font-weight: 600;
			grid-column: 1 / 1;
			margin-top: 8px;
			min-width: 0;
		}

		:host([light-theme]) .discord-embed-author {
			color: #060607;
		}

		:host .discord-embed-author a {
			color: #fff;
			font-weight: 600;
			text-decoration: none;
		}

		:host .discord-embed-author a:hover {
			text-decoration: underline;
		}

		:host([light-theme]) .discord-embed-author a {
			color: #060607;
		}

		:host .discord-embed-author .discord-author-image {
			border-radius: 50%;
			height: 24px;
			margin-right: 8px;
			width: 24px;
		}

		:host .discord-embed-provider {
			font-size: 0.75rem;
			line-height: 1rem;
			font-weight: 400;
			grid-column: 1/1;
			margin-top: 8px;
			unicode-bidi: plaintext;
			text-align: left;
		}

		:host([light-theme]) .discord-embed-provider {
			color: #4f545c;
		}

		:host .discord-embed-title {
			-webkit-box-align: center;
			align-items: center;
			color: #fff;
			display: inline-block;
			font-size: 1rem;
			font-weight: 600;
			grid-column: 1 / 1;
			margin-top: 8px;
			min-width: 0;
		}

		:host([light-theme]) .discord-embed-title {
			color: #060607;
		}

		:host .discord-embed-title a {
			color: #00aff4;
			font-weight: 600;
			text-decoration: none;
		}

		:host .discord-embed-title a:hover {
			text-decoration: underline;
		}

		:host .discord-embed-image {
			border-radius: 4px;
			max-width: 100%;
		}

		:host .discord-embed-media {
			border-radius: 4px;
			contain: paint;
			display: block;
			grid-column: 1/1;
			margin-top: 16px;
		}

		:host .discord-embed-media.discord-embed-media-video {
			height: 225px;
		}

		:host .discord-embed.media .discord-embed-image {
			overflow: hidden;
			position: relative;
			user-select: text;
		}

		:host .discord-embed-media .discord-embed-video {
			-webkit-box-align: center;
			-webkit-box-pack: center;
			align-items: center;
			border-radius: 0;
			cursor: pointer;
			display: flex;
			height: 100%;
			justify-content: center;
			max-height: 100%;
			width: 100%;

			width: 400px;
			height: 225px;
			left: 0px;
			top: 0px;
		}

		.discord-embed-custom-emoji {
			display: inline-block;
		}

		.discord-embed-custom-emoji .discord-embed-custom-emoji-image {
			width: 18px;
			height: 18px;
			vertical-align: bottom;
		}

		slot[name='footer']::slotted(*) {
			grid-column: 1/3;
			grid-row: auto/auto;
		}
	`;

	/**
	 * The color to use for the embed's left border.
	 * Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp).
	 */
	@property()
	public accessor color: string;

	/**
	 * The author's name.
	 */
	@property({ attribute: 'author-name' })
	public accessor authorName: string;

	/**
	 * The author's avatar URL.
	 */
	@property({ attribute: 'author-image' })
	public accessor authorImage: string;

	/**
	 * The URL to open when you click on the author's name.
	 */
	@property({ attribute: 'author-url' })
	public accessor authorUrl: string;

	/**
	 * The embed title.
	 */
	@property({ attribute: 'embed-title' })
	public accessor embedTitle: string;

	/**
	 * An emoji that is prefixed to {@link DiscordEmbed.embedTitle | embedTitle}.
	 *
	 * This should be keyed as `{ key: { emojiData } }` wherein `key`
	 * should occur in the {@link DiscordEmbed.embedTitle | embedTitle}.
	 *
	 * By default this component will use the global emojis from
	 * {@link getGlobalEmojiUrl}, however on SSR frameworks like Nuxt 3 global config doesn't
	 * work so we provide this as an alternative method.
	 */
	@property({ attribute: false })
	public accessor embedEmojisMap: { [key: string]: Emoji } = {};

	/**
	 * The URL to open when you click on the embed title.
	 */
	@property()
	public accessor url: string;

	/**
	 * The thumbnail image to use.
	 */
	@property()
	public accessor thumbnail: string;

	/**
	 * The embed image to use (displayed at the bottom).
	 */
	@property()
	public accessor image: string;

	/**
	 * The embed video to use (displayed at the bottom, same slot as the image).
	 *
	 * @remarks
	 * - YouTube videos will not be playable on your projects, this is due to YouTube using DASH to play their videos rather
	 * than providing the raw media stream (in a container such as mp4 or ogg). Links to regular MP4 files (such as on a CDN) however
	 * will autoplay!
	 * - Video takes priority over image.
	 * - Providing both a video and an image will ensure the image is shown to users with browsers
	 * that do not support HTML5 video playback.
	 * @example https://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_1080p_stereo.ogg
	 */
	@property()
	public accessor video: string;

	/**
	 * The provider to show above the embed, for example for YouTube videos it will show "YouTube" at the top of the embed (above the author)
	 *
	 * @example YouTube
	 */
	@property()
	public accessor provider: string;

	@consume({ context: messagesLightTheme, subscribe: true })
	@property({ type: Boolean, reflect: true, attribute: 'light-theme' })
	public accessor lightTheme = false;

	protected override render() {
		const emojiParsedAuthorName = this.parseTitle(this.authorName);
		const emojiParsedEmbedTitle = this.parseTitle(this.embedTitle);

		return html`<div style=${styleMap({ 'background-color': this.color })} class="discord-left-border"></div>
			<div class="discord-embed-root">
				<div class="discord-embed-wrapper">
					<div class="discord-embed-grid">
						${when(this.provider, () => html`<div class="discord-embed-provider">${this.provider}</div>`)}
						${when(
							emojiParsedAuthorName,
							() =>
								html`<div class="discord-embed-author">
									${when(
										this.authorImage,
										() => html`<img src=${ifDefined(this.authorImage)} alt="" class="discord-author-image" />`
									)}
									${when(
										this.authorUrl,
										() =>
											html`<a
												href=${ifDefined(this.authorUrl)}
												target="_blank"
												rel="noopener noreferrer"
												style="max-width: 95%;"
											>
												${emojiParsedAuthorName}
											</a>`,
										() => html`<div style="max-width: 95%;">${emojiParsedAuthorName}</div>`
									)}
								</div>`
						)}
						${when(
							emojiParsedEmbedTitle,
							() =>
								html`<div class="discord-embed-title">
									${this.url
										? html`<a href="${this.url}" target="_blank" rel="noopener noreferrer"> ${emojiParsedEmbedTitle} </a>`
										: html`${emojiParsedEmbedTitle}`}
								</div>`
						)}
						<slot name="description"></slot>
						<slot name="fields"></slot>
						${when(
							this.image || this.video,
							() =>
								html`<div class=${classMap({ 'discord-embed-media': true, 'discord-embed-media-video': Boolean(this.video) })}>
									${this.renderMedia()}
								</div>`
						)}
						${when(this.thumbnail, () => html`<img src=${ifDefined(this.thumbnail)} alt="" class="discord-embed-thumbnail" />`)}
						<slot name="footer"></slot>
					</div>
				</div>
			</div>`;
	}

	private renderMedia() {
		if (this.video) {
			return html`
				<video
					controls
					muted
					preload="none"
					poster=${ifDefined(this.image)}
					src=${ifDefined(this.video)}
					height="225"
					width="400"
					class="discord-embed-video"
				>
					<img src=${ifDefined(this.image)} alt="Discord embed media" class="discord-embed-image" />
				</video>
			`;
		}

		if (this.image) {
			return html`<img src=${ifDefined(this.image)} alt="Discord embed media" class="discord-embed-image" />`;
		}

		return null;
	}

	private parseTitle(title?: string) {
		if (!title) return null;

		const el: any[] = [];
		let complete = '';

		for (const words of title.split('\n')) {
			for (const w of words.split(' ')) {
				const emoji = getGlobalEmojiUrl(w) ?? this.embedEmojisMap[w] ?? ({} as Emoji);

				if (emoji.name) {
					el.push(html`<discord-custom-emoji name=${emoji.name} url=${ifDefined(emoji.url)} embed-emoji></discord-custom-emoji>`);
				} else {
					complete += `${w} `;
				}
				if (complete == ' ') {
					el.push(html`<br />`);
				}
			}

			el.push(complete);

			complete = '';
		}

		return el.map((word: string, _index) => {
			return html`<div">${word}</div>`;
		});
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-embed': DiscordEmbed;
	}
}

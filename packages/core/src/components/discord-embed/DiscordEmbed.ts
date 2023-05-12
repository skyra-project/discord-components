import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import type { Emoji } from '../../options.js';
import { getGlobalEmojiUrl, LightTheme } from '../../util.js';
import type { DiscordMessage } from '../discord-message/DiscordMessage.js';

export interface DiscordEmbedProps {
	color: string;
	authorName: string;
	authorImage: string;
	authorUrl: string;
	embedTitle: string;
	url: string;
	thumbnail: string;
	image: string;
	video: string;
	provider: string;
}

@customElement('discord-embed')
export class DiscordEmbed extends LitElement implements DiscordEmbedProps, LightTheme {
	public static override styles = css`
		.discord-embed {
			color: #dcddde;
			display: flex;
			font-size: 13px;
			line-height: 150%;
			margin-bottom: 8px;
			margin-top: 8px;
		}

		.discord-light-theme.discord-embed {
			color: #2e3338;
		}

		.discord-embed .discord-left-border {
			background-color: #202225;
			border-radius: 4px 0 0 4px;
			flex-shrink: 0;
			width: 4px;
		}

		.discord-light-theme.discord-embed .discord-left-border {
			background-color: #e3e5e8;
		}

		.discord-embed .discord-embed-root {
			display: grid;
			grid-auto-flow: row;
			grid-row-gap: 0.25rem;
			min-height: 0;
			min-width: 0;
			text-indent: 0;
		}

		.discord-embed .discord-embed-wrapper {
			background-color: #2f3136;
			max-width: 520px;
			border: 1px solid rgba(46, 48, 54, 0.6);
			border-radius: 0 4px 4px 0;
			justify-self: start;
			align-self: start;
			display: grid;
			box-sizing: border-box;
		}

		.discord-light-theme.discord-embed .discord-embed-wrapper {
			background-color: rgba(249, 249, 249, 0.3);
			border-color: rgba(205, 205, 205, 0.3);
		}

		.discord-embed .discord-embed-wrapper .discord-embed-grid {
			display: inline-grid;
			grid-template-columns: auto -webkit-min-content;
			grid-template-columns: auto min-content;
			grid-template-columns: auto;
			grid-template-rows: auto;
			padding: 0.5rem 1rem 1rem 0.75rem;
		}

		.discord-embed .discord-embed-thumbnail {
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

		.discord-embed .discord-embed-author {
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

		.discord-light-theme.discord-embed .discord-embed-author {
			color: #4f545c;
		}

		.discord-embed .discord-embed-author a {
			color: #fff;
			font-weight: 600;
			text-decoration: none;
		}

		.discord-embed .discord-embed-author a:hover {
			text-decoration: underline;
		}

		.discord-light-theme.discord-embed .discord-embed-author a {
			color: #4f545c;
		}

		.discord-embed .discord-embed-author .discord-author-image {
			border-radius: 50%;
			height: 24px;
			margin-right: 8px;
			width: 24px;
		}

		.discord-embed .discord-embed-provider {
			font-size: 0.75rem;
			line-height: 1rem;
			font-weight: 400;
			grid-column: 1/1;
			margin-top: 8px;
			unicode-bidi: plaintext;
			text-align: left;
		}

		.discord-light-theme.discord-embed .discord-embed-provider {
			color: #4f545c;
		}

		.discord-embed .discord-embed-title {
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

		.discord-embed .discord-embed-title a {
			color: #00aff4;
			font-weight: 600;
			text-decoration: none;
		}

		.discord-embed .discord-embed-title a:hover {
			text-decoration: underline;
		}

		.discord-embed .discord-embed-image {
			border-radius: 4px;
			max-width: 100%;
		}

		.discord-embed .discord-embed-media {
			border-radius: 4px;
			contain: paint;
			display: block;
			grid-column: 1/1;
			margin-top: 16px;
		}

		.discord-embed .discord-embed-media.discord-embed-media-video {
			height: 225px;
		}

		.discord-embed .discord-embed.media .discord-embed-image {
			overflow: hidden;
			position: relative;
			user-select: text;
		}

		.discord-embed .discord-embed-media .discord-embed-video {
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
	 * The color to use for the embed's left border. Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp).
	 */
	@property()
	public color: string;

	/**
	 * The author's name.
	 */
	@property({ attribute: 'author-name' })
	public authorName: string;

	/**
	 * The author's avatar URL.
	 */
	@property({ attribute: 'author-image' })
	public authorImage: string;

	/**
	 * The URL to open when you click on the author's name.
	 */
	@property({ attribute: 'author-url' })
	public authorUrl: string;

	/**
	 * The embed title.
	 */
	@property({ attribute: 'embed-title' })
	public embedTitle: string;

	/**
	 * The URL to open when you click on the embed title.
	 */
	@property()
	public url: string;

	/**
	 * The thumbnail image to use.
	 */
	@property()
	public thumbnail: string;

	/**
	 * The embed image to use (displayed at the bottom).
	 */
	@property()
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
	@property()
	public video: string;

	/**
	 * The provider to show above the embed, for example for YouTube videos it will show "YouTube" at the top of the embed (above the author)
	 * @example YouTube
	 */
	@property()
	public provider: string;

	// TODO: private hasPerformedRerenderChecks: 'dirty' | 'pristine' = 'pristine';

	@state()
	private hasProvidedDescriptionSlot = true;

	@state()
	public lightTheme = false;

	@state()
	public compactMode = false;

	protected override render() {
		const parent = this.parentElement as DiscordMessage | null;

		if (!parent || parent.tagName.toLowerCase() !== 'discord-message') {
			throw new Error('All <discord-embed> components must be direct children of <discord-message>.');
		}

		this.lightTheme = parent.lightTheme;

		const emojiParsedAuthorName = this.parseTitle(this.authorName);
		const emojiParsedEmbedTitle = this.parseTitle(this.embedTitle);

		return html`<div
			class=${classMap({
				'discord-embed': true,
				'discord-light-theme': this.lightTheme
			})}
		>
			<div style=${styleMap({ 'background-color': this.color })} class="discord-left-border"></div>
			<div class="discord-embed-root">
				<div class="discord-embed-wrapper">
					<div class="discord-embed-grid">
						${this.provider ? html` <div class="discord-embed-provider">${this.provider}</div>` : null}
						${emojiParsedAuthorName
							? html` <div class="discord-embed-author">
									${this.authorImage ? html`<img src="${this.authorImage}" alt="" class="discord-author-image" />` : null}
									${this.authorUrl
										? html` <a href="${this.authorUrl}" target="_blank" rel="noopener noreferrer"> ${emojiParsedAuthorName} </a> `
										: html` ${emojiParsedAuthorName} `}
							  </div>`
							: null}
						${emojiParsedEmbedTitle
							? html` <div class="discord-embed-title">
									${this.url
										? html` <a href="${this.url}" target="_blank" rel="noopener noreferrer"> ${emojiParsedEmbedTitle} </a> `
										: html` ${emojiParsedEmbedTitle} `}
							  </div>`
							: null}
						${this.hasProvidedDescriptionSlot ? html` <slot name="description"></slot>` : null}
						<slot name="fields"></slot>
						${this.image || this.video
							? html` <div class=${classMap({ 'discord-embed-media': true, 'discord-embed-media-video': Boolean(this.video) })}>
									${this.renderMedia()}
							  </div>`
							: null}
						${this.thumbnail ? html`<img src=${this.thumbnail} alt="" class="discord-embed-thumbnail" />` : null}
						<slot name="footer"></slot>
					</div>
				</div>
			</div>
		</div>`;
	}

	private renderMedia() {
		if (this.video) {
			return html`
				<video controls muted preload="none" poster="${this.image}" src="${this.video}" height="225" width="400" class="discord-embed-video">
					<img src="${this.image}" alt="Discord embed media" class="discord-embed-image" />
				</video>
			`;
		}
		if (this.image) {
			return html`<img src="${this.image}" alt="Discord embed media" class="discord-embed-image" />`;
		}

		return null;
	}

	private parseTitle(title?: string) {
		if (!title) return null;

		const words = title.split(' ');

		return words.map((word: string, idx: number) => {
			const emoji = getGlobalEmojiUrl(word) ?? ({} as Emoji);
			let el;
			if (emoji.name) {
				el = html`
					<span class="discord-embed-custom-emoji">
						<img src="${ifDefined(emoji.url)}" alt="${emoji.name}" class="discord-embed-custom-emoji-image" />
					</span>
				`;
			} else {
				el = idx < words.length - 1 ? `${word} ` : word;
			}
			return el;
		});
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-embed': DiscordEmbed;
	}
}

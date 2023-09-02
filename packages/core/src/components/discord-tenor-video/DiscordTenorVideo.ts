import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

@customElement('discord-tenor-video')
export class DiscordTenorVideo extends LitElement {
	public static override styles = css`
		.discord-tenor-video {
			color: #dcddde;
			display: flex;
			font-size: 13px;
			line-height: 150%;
			margin-bottom: 8px;
			margin-top: 8px;
		}

		.discord-tenor-video .discord-tenor-video-wrapper {
			display: block;
			position: relative;
			-webkit-user-select: text;
			-moz-user-select: text;
			-ms-user-select: text;
			user-select: text;
			overflow: hidden;
			border-radius: 4px;
		}

		.discord-tenor-video .discord-tenor-video-wrapper video {
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
			left: 0px;
			top: 0px;
		}
	`;

	/**
	 * The URL for the video
	 */
	@property({ type: String })
	public url: string;

	/**
	 * The height of the video in pixels
	 */
	@property({ type: Number })
	public height: number;

	/**
	 * The width of the video in pixels
	 */
	@property({ type: Number })
	public width: number;

	protected override render() {
		return html`
			<div class="discord-tenor-video">
				<div
					class="discord-tenor-video-wrapper"
					height=${ifDefined(this.height ? `${this.height}px` : undefined)}
					width=${ifDefined(this.width ? `${this.width}px` : undefined)}
				>
					<video preload="auto" autoplay loop src="${this.url}" height="${ifDefined(this.height)}" width="${ifDefined(this.width)}"></video>
				</div>
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-tenor-video': DiscordTenorVideo;
	}
}

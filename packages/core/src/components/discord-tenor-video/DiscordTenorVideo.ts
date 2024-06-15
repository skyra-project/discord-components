import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

@customElement('discord-tenor-video')
export class DiscordTenorVideo extends LitElement {
	public static override readonly styles = css`
		:host {
			color: #dcddde;
			display: flex;
			font-size: 13px;
			line-height: 150%;
			margin-bottom: 8px;
			margin-top: 8px;
		}

		.discord-tenor-video-wrapper {
			max-width: 169px;
			width: 100%;
			cursor: pointer;
			display: block;
			position: relative;
			-webkit-user-select: text;
			-moz-user-select: text;
			user-select: text;
			overflow: hidden;
			border-radius: 3px;
		}

		.discord-tenor-video {
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

		.discord-tenor-video-original-link {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			z-index: 1;
		}

		.discord-tenor-video-image-accessory {
			position: absolute;
			top: 6px;
			left: 6px;
			z-index: 3;
		}

		.discord-tenor-video-gif-tag {
			background-image: url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjIyIiB2aWV3Qm94PSIwIDAgMjkgMjIiIHdpZHRoPSIyOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBkPSJtMCAwaDI5djIyaC0yOXoiLz48L2NsaXBQYXRoPjxnIGNsaXAtcGF0aD0idXJsKCNhKSI+PHBhdGggZD0ibTI2IDBoLTIzYy0xLjY1Njg1IDAtMyAxLjM0MzE1LTMgM3YxNmMwIDEuNjU2OSAxLjM0MzE1IDMgMyAzaDIzYzEuNjU2OSAwIDMtMS4zNDMxIDMtM3YtMTZjMC0xLjY1Njg1LTEuMzQzMS0zLTMtM3oiIGZpbGw9IiMyMDIyMjUiIGZpbGwtb3BhY2l0eT0iLjgiLz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJtOC4wMTcyNSAxNi4yMDU0Yy0uODQxIDAtMS41ODUzNC0uMjE3NS0yLjIzMy0uNjUyNS0uNjQ3NjctLjQzNS0xLjE1MDM0LTEuMDQ0LTEuNTA4LTEuODI3LS4zNTc2Ny0uNzkyNi0uNTM2NS0xLjcwMTMtLjUzNjUtMi43MjYgMC0xLjAxNDk3LjE4ODUtMS45MTM5Ny41NjU1LTIuNjk2OTcuMzg2NjYtLjc4My45NDI1LTEuMzk2ODMgMS42Njc1LTEuODQxNS43MzQ2Ni0uNDQ0NjYgMS42MDk1LS42NjcgMi42MjQ1LS42NjcuODYwMzMgMCAxLjYyODg1LjE4MzY3IDIuMzA1NDUuNTUxLjY4NjQuMzY3MzQgMS4yMDM1Ljg4NDUgMS41NTE1IDEuNTUxNWwtMS42Mzg1IDEuMTc0NWMtLjQ5My0uOTA4NjYtMS4yMjc2Mi0xLjM2My0yLjIwMzk1LTEuMzYzLS44ODkzNCAwLTEuNTcwODQuMjktMi4wNDQ1Ljg3LS40NzM2Ny41NzAzNC0uNzEwNSAxLjM3NzUtLjcxMDUgMi40MjE0NyAwIDEuMDUzNy4yMzY4MyAxLjg2NTcuNzEwNSAyLjQzNi40NzM2Ni41NzA0IDEuMTU1MTYuODU1NSAyLjA0NDUuODU1NS4zOTYzMyAwIC43NTg4My0uMDcyNSAxLjA4NzUtLjIxNzUuMzM4MzUtLjE1NDYuNTk5MzUtLjM2MjUuNzgyOTUtLjYyMzV2LTEuMjQ3aC0yLjMwNTQ1di0xLjg4NWg0LjM2NDQ1djUuNjg0aC0xLjcxMWwtLjI3NTUtLjk1N2MtLjU3MDI5Ljc3MzQtMS40MTYxMiAxLjE2LTIuNTM3NDUgMS4xNnoiLz48cGF0aCBkPSJtMTYuNTQ0NCAxNi4wMDI0aC0yLjExN3YtMTAuMDA0OTdoMi4xMTd6Ii8+PHBhdGggZD0ibTIwLjY5MzMgMTYuMDAyNGgtMi4xMTd2LTEwLjAwNDk3aDYuNjg0NXYxLjkxNGgtNC41Njc1djIuMzc3OTdoMy43MTJ2MS45MTRoLTMuNzEyeiIvPjwvZz48L2c+PC9zdmc+');
			width: 29px;
			height: 22px;
		}
	`;

	/**
	 * The URL for the video
	 */
	@property()
	public accessor url: string;

	/**
	 * The height of the video in pixels
	 */
	@property({ type: Number })
	public accessor height: number;

	/**
	 * The width of the video in pixels
	 */
	@property({ type: Number })
	public accessor width: number;

	protected override render() {
		return html`
			<div class="discord-tenor-video-wrapper" height=${ifDefined(this.height)} width=${ifDefined(this.width)}>
				<a target="_blank" class="discord-tenor-video-original-link" href=${ifDefined(this.url)}> </a>
				<video
					autoplay
					muted
					loop
					preload="auto"
					src=${ifDefined(this.url)}
					class="discord-tenor-video"
					height=${ifDefined(this.height)}
					width=${ifDefined(this.width)}
				></video>
				<div class="discord-tenor-video-image-accessory">
					<div class="discord-tenor-video-gif-tag"></div>
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

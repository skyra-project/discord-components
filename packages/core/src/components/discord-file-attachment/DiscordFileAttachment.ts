import { consume } from '@lit/context';
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { when } from 'lit/directives/when.js';
import '../discord-link/DiscordLink.js';
import type { LightTheme } from '../../types.js';
import { messagesLightTheme } from '../discord-messages/DiscordMessages.js';
import FileAttachment from '../svgs/FileAttachment.js';

@customElement('discord-file-attachment')
export class DiscordFileAttachment extends LitElement implements LightTheme {
	/**
	 * @internal
	 */
	public static override readonly styles = css`
		:host {
			display: grid;
			height: -moz-fit-content;
			height: fit-content;
			grid-auto-flow: row;
			grid-row-gap: 0.25rem;
			grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
			text-indent: 0;
			min-height: 0;
			min-width: 0;
			padding-top: 0.125rem;
			padding-bottom: 0.125rem;
			position: relative;
		}

		:host > * {
			justify-self: start;
			align-self: start;
		}

		.discord-file-attachment-non-visual-media-item-container:hover .discord-button-download-attachment {
			display: block !important;
		}

		.discord-button-download-attachment {
			display: none;
			position: absolute;
			top: -8px;
			right: -8px;
			border-radius: 5px;
			outline: color-mix(in oklab, hsl(220 calc(1 * 6.5%) 18% / 1) 100%, black 0%);
			background-color: color-mix(in oklab, hsl(223 calc(1 * 6.7%) 20.6% / 1) 100%, black 0%);
		}

		.discord-link-download-attachment {
			color: color-mix(in oklab, hsl(215 calc(1 * 8.8%) 73.3% / 1) 100%, black 0%);
			display: flex;
		}

		.discord-icon-download {
			padding: 6px;
		}

		.discord-file-attachment-non-visual-media-item-container {
			margin-top: 8px;
			max-width: 100%;
			display: flex;
			flex-direction: column;
			position: relative;
		}

		.discord-file-attachment-non-visual-media-item {
			width: -moz-fit-content;
			width: fit-content;
			max-width: 100%;
		}

		.discord-file-attachment-mosaic-item-media {
			position: relative;
			max-height: inherit;
			border-radius: 2px;
			width: 100%;
			align-items: center;
			display: flex;
			flex-flow: row nowrap;
			max-width: 100%;
			height: 100%;
		}

		.discord-file-attachment-mosaic-style {
			padding: 16px;
			border-radius: 8px;
			width: 432px;
			max-width: 100%;
			flex: auto;
			border-color: #202020;
			background-color: #282828;

			align-items: center;
			flex-direction: row;
			display: flex;
			box-sizing: border-box;
			letter-spacing: 0;
			border: 1px solid transparent;
		}

		.discord-file-attachment-light-theme.discord-file-attachment-mosaic-style {
			border-color: #f3f3f3;
			background-color: #f9f9f9;
		}

		.discord-file-attachment-icon {
			width: 30px;
			height: 40px;
			margin-right: 8px;
			flex-shrink: 0;
		}

		.discord-file-attachment-inner {
			flex: 1;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}

		.discord-file-attachment-filename-link-wrapper {
			color: #00aff4;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}

		.discord-file-attachment-metadata {
			line-height: 16px;
			font-size: 12px;
			font-weight: 400;
			color: hsl(223 calc(1 * 5.8%) 52.9% / 1);
			margin-right: 8px;
		}
	`;

	/**
	 * The name of the file
	 *
	 * @example
	 * ```ts
	 * 'example.txt'
	 * ```
	 */
	@property()
	public accessor name: string;

	/**
	 * The size of the file in bytes
	 *
	 * @remarks The unit is not automatically calculated,
	 * you should provide it manually through {@link DiscordFileAttachment.bytesUnit | `bytesUnit`}
	 * @example
	 * ```ts
	 * 1024
	 * ```
	 */
	@property({ type: Number })
	public accessor bytes: number;

	/**
	 * The unit of the file in a human-readable format
	 *
	 * @example
	 * ```ts
	 * 'KB'
	 * ```
	 */
	@property({ attribute: 'bytes-unit' })
	public accessor bytesUnit: string;

	/**
	 * The URL to the file, this is passed to `<discord-link>`
	 *
	 * @example
	 * ```ts
	 * 'https://example.com/example.txt'
	 * ```
	 */
	@property()
	public accessor href: string;

	/**
	 * The `<a>` tag {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#rel | `rel`},
	 * this is passed to `<discord-link>`
	 */
	@property()
	public accessor rel: string;

	/**
	 * The `<a>` tag {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target | `target`},
	 * this is passed to `<discord-link>`
	 */
	@property()
	public accessor target: '_blank' | '_parent' | '_self' | '_top';

	/**
	 * The `<a>` tag {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#type | `type`},
	 * this is passed to `<discord-link>`
	 */
	@property()
	public accessor type: string;

	@consume({ context: messagesLightTheme, subscribe: true })
	@property({ type: Boolean, reflect: true, attribute: 'light-theme' })
	public accessor lightTheme = false;

	protected override render() {
		return html`<div class="discord-file-attachment-non-visual-media-item-container">
			<div class="discord-file-attachment-non-visual-media-item">
				<div class="discord-file-attachment-mosaic-item-media">
					<div class=${classMap({ 'discord-file-attachment-mosaic-style': true, 'discord-file-attachment-light-theme': this.lightTheme })}>
						${FileAttachment({ class: 'discord-file-attachment-icon', alt: 'Attachment file type: unknown', title: 'unknown' })}
						<div class="discord-file-attachment-inner">
							<div class="discord-file-attachment-filename-link-wrapper">
								<discord-link
									href=${ifDefined(this.href)}
									rel=${ifDefined(this.rel)}
									target=${ifDefined(this.target)}
									type=${ifDefined(this.type)}
								>
									${this.name}
								</discord-link>
							</div>
							<div class="discord-file-attachment-metadata">
								${this.bytes}${when(
									this.bytesUnit,
									() => html` ${this.bytesUnit}`,
									() => null
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="discord-button-download-attachment">
				<a
					class="discord-link-download-attachment"
					aria-label="Download"
					href="https://cdn.discordapp.com/attachments/1155271800033398905/1301701936923283536/OperaSetup.exe?ex=67256fe6&amp;is=67241e66&amp;hm=3b01a6cf8ebaa2cf932469daafb71a364e20a387f08007e07514908e8d7af95b&amp;"
					rel="noreferrer noopener"
					target="_blank"
					role="button"
					tabindex="0"
				>
					<svg
						class="discord-icon-download"
						aria-hidden="true"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
							d="M12 2a1 1 0 0 1 1 1v10.59l3.3-3.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42l3.3 3.3V3a1 1 0 0 1 1-1ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z"
							class=""
						></path>
					</svg>
				</a>
			</div>
		</div>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-file-attachment': DiscordFileAttachment;
	}
}

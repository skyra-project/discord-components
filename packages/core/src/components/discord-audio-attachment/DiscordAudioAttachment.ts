import { consume } from '@lit/context';
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { when } from 'lit/directives/when.js';
import { DiscordMediaLifecycle } from '../_private/DiscordMediaLifecycle.js';
import { DiscordPlaybackControlStyles } from '../_private/DiscordPlaybackControlStyles.js';
import { DiscordVolumeControlStyles } from '../_private/DiscordVolumeControlStyles.js';
import '../discord-link/DiscordLink.js';
import { messagesLightTheme } from '../discord-messages/DiscordMessages.js';
import AudioVideoPauseIcon from '../svgs/AudioVideoPauseIcon.js';
import AudioVideoPlayIcon from '../svgs/AudioVideoPlayIcon.js';
import AudioVideoVolumeAbove50PercentIcon from '../svgs/AudioVideoVolumeAbove50PercentIcon.js';
import AudioVideoVolumeBelow50PercentIcon from '../svgs/AudioVideoVolumeBelow50PercentIcon.js';
import AudioVideoVolumeMutedIcon from '../svgs/AudioVideoVolumeMutedIcon.js';
import type { LightTheme } from '../../types.js';

@customElement('discord-audio-attachment')
export class DiscordAudioAttachment extends DiscordMediaLifecycle implements LightTheme {
	public static override readonly styles = [
		DiscordVolumeControlStyles,
		DiscordPlaybackControlStyles,
		css`
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

				--seek-before-width: 0%;
				--buffered-width: 0%;
				--volume-slider-opacity: 0;
			}

			.discord-audio-attachment-non-visual-media-item-container {
				justify-self: start;
				align-self: start;
				margin-top: 8px;
				max-width: 100%;
				display: flex;
				flex-direction: column;
			}

			.discord-audio-attachment-non-visual-media-item {
				width: -moz-fit-content;
				width: fit-content;
				max-width: 100%;
			}

			.discord-audio-attachment-mosaic-item-media {
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

			.discord-audio-attachment-wrapper-audio {
				background-color: #282828;
				border-color: #202020;
				border-radius: 8px;
				border-style: solid;
				border-width: 1px;
				box-sizing: border-box;
				color: hsl(0 calc(1 * 0%) 100% / 1);
				display: flex;
				flex-direction: column;
				flex: auto;
				height: auto;
				justify-content: space-between;
				max-width: 100%;
				overflow: visible;
				padding: 16px;
				position: relative;
				user-select: none;
				width: 432px;
			}

			.discord-audio-attachment-light-theme.discord-audio-attachment-wrapper-audio {
				border-color: #f3f3f3;
				background-color: #f9f9f9;
			}

			.discord-audio-attachment-audio-metadata {
				display: flex;
			}

			.discord-audio-attachment-audio-metadata::before {
				width: 24px;
				height: 40px;
				content: '';
				background-image: url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9Ijk2IiB2aWV3Qm94PSIwIDAgNzIgOTYiIHdpZHRoPSI3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtNzIgMjkuM3Y2MC4zYzAgMi4yNCAwIDMuMzYtLjQ0IDQuMjItLjM4Ljc0LTEgMS4zNi0xLjc0IDEuNzQtLjg2LjQ0LTEuOTguNDQtNC4yMi40NGgtNTkuMmMtMi4yNCAwLTMuMzYgMC00LjIyLS40NC0uNzQtLjM4LTEuMzYtMS0xLjc0LTEuNzQtLjQ0LS44Ni0uNDQtMS45OC0uNDQtNC4yMnYtODMuMmMwLTIuMjQgMC0zLjM2LjQ0LTQuMjIuMzgtLjc0IDEtMS4zNiAxLjc0LTEuNzQuODYtLjQ0IDEuOTgtLjQ0IDQuMjItLjQ0aDM2LjNjMS45NiAwIDIuOTQgMCAzLjg2LjIyLjUuMTIuOTguMjggMS40NC41djE2Ljg4YzAgMi4yNCAwIDMuMzYuNDQgNC4yMi4zOC43NCAxIDEuMzYgMS43NCAxLjc0Ljg2LjQ0IDEuOTguNDQgNC4yMi40NGgxNi44OGMuMjIuNDYuMzguOTQuNSAxLjQ0LjIyLjkyLjIyIDEuOS4yMiAzLjg2eiIgZmlsbD0iI2QzZDZmZCIvPjxwYXRoIGQ9Im02OC4yNiAyMC4yNmMxLjM4IDEuMzggMi4wNiAyLjA2IDIuNTYgMi44OC4xOC4yOC4zMi41Ni40Ni44NmgtMTYuODhjLTIuMjQgMC0zLjM2IDAtNC4yMi0uNDQtLjc0LS4zOC0xLjM2LTEtMS43NC0xLjc0LS40NC0uODYtLjQ0LTEuOTgtLjQ0LTQuMjJ2LTE2Ljg4MDAyOWMuMy4xNC41OC4yOC44Ni40NTk5OTkuODIuNSAxLjUgMS4xOCAyLjg4IDIuNTZ6IiBmaWxsPSIjOTM5YmY5Ii8+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMzQuNzYgNDIuMTZjLS43NC0uMy0xLjYtLjE0LTIuMTguNDRsLTguNTggOS40aC02Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDZsOC41OCA5LjQyYy41OC41OCAxLjQ0Ljc0IDIuMTguNDQuNzYtLjMyIDEuMjQtMS4wNiAxLjI0LTEuODZ2LTMyYzAtLjgtLjQ4LTEuNTQtMS4yNC0xLjg0em01LjI0IDMuODR2NGM1LjUyIDAgMTAgNC40OCAxMCAxMHMtNC40OCAxMC0xMCAxMHY0YzcuNzIgMCAxNC02LjI4IDE0LTE0cy02LjI4LTE0LTE0LTE0em0wIDhjMy4zIDAgNiAyLjcgNiA2cy0yLjcgNi02IDZ2LTRjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yeiIgZmlsbD0iIzU4NjVmMiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+');
				background-size: 100%auto;
				background-repeat: no-repeat;
			}

			.discord-audio-attachment-audio-metadata-content {
				padding: 0 8px;
				flex: 1 1 auto;
				white-space: nowrap;
				overflow: hidden;
			}

			.discord-audio-attachment-audio-metadata-size {
				color: color-mix(in oklab, hsl(214 calc(1 * 8.1%) 61.2% / 1) 100%, black 0%);
				font-size: 12px;
				line-height: 16px;
				font-weight: 500;
				opacity: 0.7;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}

			.discord-audio-attachment-audio-element {
				display: none !important;
				position: absolute;
				width: 0;
				height: 0;
			}

			.discord-audio-attachment-controls {
				width: 100%;
				display: flex;
				align-items: center;
				margin-top: 4px;
				background-color: hsl(0 calc(1 * 0%) 0% / 0.6);
				border-radius: 3px;
			}

			.discord-audio-attachment-video-button {
				margin-right: 8px;
			}

			.discord-audio-attachment-control-icon {
				display: block;
				width: 24px;
				height: 24px;
				padding: 4px;
				cursor: pointer;
				flex: 0 0 auto;
				opacity: 0.6;
			}

			.discord-audio-attachment-duration-time-wrapper {
				flex: 0 0 auto;
				margin: 4px;
				height: 12px;
			}

			.discord-audio-attachment-duration-time-display {
				font-weight: 500;
				display: inline-block;
				font-family: 'gg mono', 'Source Code Pro', Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter',
					'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier, monospace;
				font-size: 12px;
				line-height: 12px;
				vertical-align: text-top;
			}

			.discord-audio-attachment-duration-time-separator {
				margin: 0 2px;
			}
		`
	];

	// #region properties
	/**
	 * The URL to audio file
	 * @example
	 * ```ts
	 * 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3'
	 * ```
	 */
	@property()
	public accessor href: string;

	/**
	 * The name of the audio file
	 *
	 * @note Spaces will be replaced with underscores and any non-alphanumeric characters will be removed
	 */
	@property()
	public accessor name: string;

	/**
	 * The size of the audio file in bytes
	 *
	 * @note The unit is not automatically calculated,
	 * you should provide it manually through {@link DiscordAudioAttachment.bytesUnit `bytesUnit`}
	 *
	 * @example
	 * ```ts
	 * 1024
	 * ```
	 */
	@property({ type: Number })
	public accessor bytes: number;

	/**
	 * The unit of the audio file in a human-readable format
	 * @example
	 * ```ts
	 * 'KB'
	 * ```
	 */
	@property({ attribute: 'bytes-unit' })
	public accessor bytesUnit: string;

	@consume({ context: messagesLightTheme, subscribe: true })
	@property({ type: Boolean, reflect: true, attribute: 'light-theme' })
	public accessor lightTheme = false;
	// #endregion

	// #region lifecycle

	public override connectedCallback(): void {
		super.connectedCallback();

		if (this.mediaComponentRef.value) {
			if (this.mediaComponentRef.value.readyState > 0) {
				this.displayAudioDuration();
				this.setSliderMax();
				this.displayBufferedAmount();
			} else {
				this.mediaComponentRef.value.addEventListener('loadedmetadata', this.audioMetadataLoaded);
			}
		}
	}

	public override disconnectedCallback(): void {
		super.disconnectedCallback();

		this.mediaComponentRef.value?.removeEventListener('loadedmetadata', this.audioMetadataLoaded);
	}
	// #endregion

	public constructor() {
		super(createRef(), createRef(), createRef(), createRef(), '', '0:00', null, false, false, 1);
	}

	protected override render() {
		const parsedName = this.name.replace(/\s/g, '_').replace(/[^a-zA-Z0-9_-]/g, '');

		return html`<div class="discord-audio-attachment-non-visual-media-item-container">
			<div class="discord-audio-attachment-non-visual-media-item">
				<div class="discord-audio-attachment-mosaic-item-media">
					<div
						class=${classMap({ 'discord-audio-attachment-wrapper-audio': true, 'discord-audio-attachment-light-theme': this.lightTheme })}
					>
						<div class="discord-audio-attachment-audio-metadata">
							<div class="discord-audio-attachment-audio-metadata-content">
								<discord-link
									href=${ifDefined(this.href)}
									ref="noreferrer noopener"
									target="_blank"
									role="button"
									aria-label="Download"
								>
									${parsedName}
								</discord-link>
								<div class="discord-audio-attachment-audio-metadata-size">
									${this.bytes}${when(
										this.bytesUnit,
										() => html` ${this.bytesUnit}`,
										() => null
									)}
								</div>
							</div>
						</div>
						<audio
							${ref(this.mediaComponentRef)}
							class="discord-audio-attachment-audio-element"
							preload="metadata"
							@progress=${this.displayBufferedAmount}
						>
							<source src=${ifDefined(this.href)} />
						</audio>
						<div class="discord-audio-attachment-controls" style="transform: translateY(0%)">
							${/* eslint-disable lit-a11y/click-events-have-key-events */ html``}
							<div
								class="discord-audio-attachment-video-button"
								tabindex="0"
								aria-label="${this.isPlaying ? 'Pause' : 'Play'}"
								role="button"
								@click=${this.handleClickPlayPauseIcon}
							>
								${/* eslint-enable lit-a11y/click-events-have-key-events */ html``}
								${when(
									this.isPlaying,
									() => AudioVideoPauseIcon({ class: 'discord-audio-attachment-control-icon' }),
									() => AudioVideoPlayIcon({ class: 'discord-audio-attachment-control-icon' })
								)}
							</div>
							<div class="discord-audio-attachment-duration-time-wrapper">
								<span class="discord-audio-attachment-duration-time-display">${this.currentPlaybackPosition}</span>
								<span class="discord-audio-attachment-duration-time-display discord-audio-attachment-duration-time-separator">/</span>
								<span class="discord-audio-attachment-duration-time-display">${this.totalAudioDuration}</span>
							</div>
							<div class="discord-audio-attachment-horizontal">
								<div class="discord-audio-attachment-media-bar-interaction">
									<input
										type="range"
										${ref(this.seekSliderRef)}
										class="discord-audio-attachment-playback-control"
										@input=${this.handleSeekSliderInput}
										@change=${this.handleSeekSliderChange}
										max="100"
										value="0"
									/>
								</div>
							</div>
							<div class="discord-audio-attachment-flex">
								<div class="discord-audio-attachment-flex-container">
									<div ${ref(this.volumeControlRef)} class="discord-audio-attachment-volume-button-slider">
										<div
											class="discord-audio-attachment-volume-vertical"
											@mouseenter=${this.handleVolumeVerticalEnter}
											@mouseleave=${this.handleVolumeVerticalLeave}
										>
											<input
												${ref(this.volumeControlInputRef)}
												type="range"
												class="discord-audio-attachment-volume-slider"
												@input=${this.handleVolumeSliderInput}
												max="100"
												value="100"
											/>
										</div>
									</div>
									<button
										aria-label="Control volume"
										type="button"
										class="discord-audio-attachment-volume-button"
										@focus=${this.handleVolumeVerticalFocus}
										@blur=${this.handleVolumeVerticalBlur}
										@mouseover=${this.handleVolumeVerticalEnter}
										@mouseout=${this.handleVolumeVerticalLeave}
									>
										${/* eslint-disable lit-a11y/click-events-have-key-events */ html``}
										<div class="discord-audio-attachment-volume-button-content" @click=${this.handleClickMuteIcon}>
											${/* eslint-enable lit-a11y/click-events-have-key-events */ html``}
											${when(
												this.currentVolume === 0 || this.isMuted,
												() => AudioVideoVolumeMutedIcon({ class: 'discord-audio-attachment-volume-button-control-icon' }),
												() =>
													when(
														this.currentVolume <= 0.5,
														() =>
															AudioVideoVolumeBelow50PercentIcon({
																class: 'discord-audio-attachment-volume-button-control-icon'
															}),
														() =>
															AudioVideoVolumeAbove50PercentIcon({
																class: 'discord-audio-attachment-volume-button-control-icon'
															})
													)
											)}
										</div>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-audio-attachment': DiscordAudioAttachment;
	}
}

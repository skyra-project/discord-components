import { consume } from '@lit/context';
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ref } from 'lit/directives/ref.js';
import { when } from 'lit/directives/when.js';
import { DiscordMediaAttachmentStyles } from '../_private/DiscordMediaAttachmentStyles.js';
import { DiscordMediaLifecycle } from '../_private/DiscordMediaLifecycle.js';
import { DiscordPlaybackControlStyles } from '../_private/DiscordPlaybackControlStyles.js';
import { DiscordVolumeControlStyles } from '../_private/DiscordVolumeControlStyles.js';
import '../discord-link/DiscordLink.js';
import { messagesLightTheme } from '../discord-messages/DiscordMessages.js';
import MediaPauseIcon from '../svgs/MediaPauseIcon.js';
import MediaPlayIcon from '../svgs/MediaPlayIcon.js';
import MediaRestartIcon from '../svgs/MediaRestartIcon.js';
import MediaVolumeAbove50PercentIcon from '../svgs/MediaVolumeAbove50PercentIcon.js';
import MediaVolumeBelow50PercentIcon from '../svgs/MediaVolumeBelow50PercentIcon.js';
import MediaVolumeMutedIcon from '../svgs/MediaVolumeMutedIcon.js';
import type { LightTheme } from '../../types.js';

@customElement('discord-audio-attachment')
export class DiscordAudioAttachment extends DiscordMediaLifecycle implements LightTheme {
	public static override readonly styles = [
		DiscordVolumeControlStyles,
		DiscordPlaybackControlStyles,
		DiscordMediaAttachmentStyles,
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

			.discord-audio-attachment-non-visual-media-item {
				width: -moz-fit-content;
				width: fit-content;
				max-width: 100%;
			}

			.discord-media-attachment-mosaic-item-media {
				width: 100%;
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
		`
	];

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

	protected override render() {
		const parsedName = this.name.replace(/\s/g, '_').replace(/[^a-zA-Z0-9_-]/g, '');

		return html`<div class="discord-media-attachment-non-visual-media-item-container">
			<div class="discord-audio-attachment-non-visual-media-item">
				<div class="discord-media-attachment-mosaic-item-media">
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
							@ended=${this.handleEnded}
						>
							<source src=${ifDefined(this.href)} />
						</audio>
						<div class="discord-media-attachment-controls" style="transform: translateY(0%)">
							<div
								class="discord-media-attachment-video-button"
								tabindex="0"
								aria-label="${this.isPlaying ? 'Pause' : 'Play'}"
								role="button"
								@click=${this.handleClickPlayPauseIcon}
								@keydown=${this.handleSpaceToPlayPause}
							>
								${when(
									this.hasEnded,
									() => MediaRestartIcon({ class: 'discord-media-attachment-control-icon' }),
									() =>
										when(
											this.isPlaying,
											() => MediaPauseIcon({ class: 'discord-media-attachment-control-icon' }),
											() => MediaPlayIcon({ class: 'discord-media-attachment-control-icon' })
										)
								)}
							</div>
							<div class="discord-media-attachment-duration-time-wrapper">
								<span role="status" class="discord-media-attachment-duration-time-display">${this.currentPlaybackPosition}</span>
								<span
									role="separator"
									class="discord-media-attachment-duration-time-display discord-media-attachment-duration-time-separator"
									>/</span
								>
								<span class="discord-media-attachment-duration-time-display">${this.totalMediaDuration}</span>
							</div>
							<div class="discord-media-attachment-horizontal">
								<div class="discord-media-attachment-media-bar-interaction">
									<input
										type="range"
										${ref(this.seekSliderRef)}
										class="discord-media-attachment-playback-control"
										@input=${this.handleSeekSliderInput}
										@change=${this.handleSeekSliderChange}
										max="100"
										value="0"
									/>
								</div>
							</div>
							<div class="discord-media-attachment-flex">
								<div class="discord-media-attachment-flex-container">
									<div ${ref(this.volumeControlRef)} class="discord-media-attachment-button-slider">
										<div
											class="discord-media-attachment-volume-vertical"
											@mouseenter=${this.handleVolumeVerticalEnter}
											@mouseleave=${this.handleVolumeVerticalLeave}
										>
											<input
												${ref(this.volumeControlInputRef)}
												type="range"
												class="discord-media-attachment-volume-slider"
												@input=${this.handleVolumeSliderInput}
												max="100"
												value="100"
											/>
										</div>
									</div>
									<button
										aria-label="Control volume"
										type="button"
										class="discord-media-attachment-button"
										@focus=${this.handleVolumeVerticalFocus}
										@blur=${this.handleVolumeVerticalBlur}
										@mouseover=${this.handleVolumeVerticalEnter}
										@mouseout=${this.handleVolumeVerticalLeave}
										@click=${this.handleClickMuteIcon}
									>
										<div class="discord-media-attachment-button-content">
											${when(
												this.currentVolume === 0 || this.isMuted,
												() => MediaVolumeMutedIcon({ class: 'discord-media-attachment-button-control-icon' }),
												() =>
													when(
														this.currentVolume <= 0.5,
														() =>
															MediaVolumeBelow50PercentIcon({
																class: 'discord-media-attachment-button-control-icon'
															}),
														() =>
															MediaVolumeAbove50PercentIcon({
																class: 'discord-media-attachment-button-control-icon'
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

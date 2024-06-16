import { consume } from '@lit/context';
import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createRef, ref, type Ref } from 'lit/directives/ref.js';
import { when } from 'lit/directives/when.js';
import '../discord-link/DiscordLink.js';
import { messagesLightTheme } from '../discord-messages/DiscordMessages.js';
import AudioVideoPauseIcon from '../svgs/AudioVideoPauseIcon.js';
import AudioVideoPlayIcon from '../svgs/AudioVideoPlayIcon.js';
import AudioVideoVolumeAbove50PercentIcon from '../svgs/AudioVideoVolumeAbove50PercentIcon.js';
import AudioVideoVolumeBelow50PercentIcon from '../svgs/AudioVideoVolumeBelow50PercentIcon.js';
import AudioVideoVolumeMutedIcon from '../svgs/AudioVideoVolumeMutedIcon.js';
import type { LightTheme } from '../../types.js';

@customElement('discord-audio-attachment')
export class DiscordAudioAttachment extends LitElement implements LightTheme {
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

		/* #region styling playback control  */

		.discord-audio-attachment-horizontal {
			width: 100%;
			display: flex;
			align-self: stretch;
		}

		.discord-audio-attachment-media-bar-interaction {
			position: relative;
			flex: 1 1 auto;
			align-self: stretch;
			display: flex;
			align-items: center;
			cursor: pointer;
			margin: 0 7px;
		}

		.discord-audio-attachment-playback-control {
			position: relative;
			flex: 1 1 auto;
			height: 6px;
			background-color: hsl(210 calc(1 * 9.3%) 78.8% / 0.3);
		}

		.discord-audio-attachment-playback-control:hover {
			box-shadow: 0 1px 1px hsl(0 calc(1 * 0%) 0% / 0.3);
		}

		.discord-audio-attachment-playback-control::before {
			background-color: hsl(210 calc(1 * 9.3%) 78.8% / 0.3);
			left: -3px;
			border-radius: 3px 0 0 3px;
			content: '';
			position: absolute;
			top: 0;
			height: 100%;
			width: 3px;
			z-index: 1;
		}

		input[type='range'].discord-audio-attachment-playback-control::-webkit-slider-runnable-track {
			width: 2.47264%;
			height: 100%;
			cursor: pointer;
			opacity: 1;
			background: linear-gradient(to right, hsl(199 100% calc(1 * 69%) / 1) var(--buffered-width));
		}

		input[type='range'].discord-audio-attachment-playback-control::before {
			position: absolute;
			content: '';
			top: 0;
			width: var(--seek-before-width);
			height: 100%;
			z-index: 3;
			background-color: hsl(199 100% calc(1 * 69%) / 1);
			cursor: pointer;
		}

		input[type='range'].discord-audio-attachment-playback-control::-webkit-slider-thumb {
			position: relative;
			cursor: pointer;
			border-radius: 3px;
			width: auto;
			height: 18px;
			line-height: 18px;
			text-align: center;
			font-weight: 600;
			font-size: 12px;
			color: hsl(0 calc(1 * 0%) 97.6% / 1);
			opacity: 1;
			transition: opacity.2s ease-out;
			pointer-events: none;
			-webkit-appearance: none;
			box-sizing: content-box;
			background-color: hsl(0 calc(1 * 0%) 0% / 1);
			margin: -5px 0 0 0;
			z-index: 4;
		}

		input[type='range'].discord-audio-attachment-playback-control:active::-webkit-slider-thumb {
			transform: scale(1.2);
			filter: brightness(85%);
		}

		input[type='range'].discord-audio-attachment-playback-control::-moz-range-track {
			width: 2.47264%;
			height: 100%;
			cursor: pointer;
			opacity: 1;
			background: linear-gradient(to right, hsl(199 100% calc(1 * 69%) / 1) var(--buffered-width));
		}

		input[type='range'].discord-audio-attachment-playback-control::-moz-range-progress {
			background-color: hsl(199 100% calc(1 * 69%) / 1);
		}

		input[type='range'].discord-audio-attachment-playback-control::-moz-focus-outer {
			border: 0;
		}

		input[type='range'].discord-audio-attachment-playback-control::-moz-range-thumb {
			border-radius: 50%;
			position: relative;
			cursor: pointer;
			line-height: 18px;
			text-align: center;
			font-weight: 600;
			font-size: 12px;
			opacity: 1;
			transition: opacity.2s ease-out;
			pointer-events: none;
			-webkit-appearance: none;
			box-sizing: content-box;
			background: #007db5;
			margin: -5px 0 0 0;
		}

		input[type='range'].discord-audio-attachment-playback-control:active::-moz-range-thumb {
			transform: scale(1.2);
			filter: brightness(85%);
		}

		/* #endregion */

		/* #region styling volume control  */

		.discord-audio-attachment-flex {
			display: flex;
		}

		.discord-audio-attachment-flex-container {
			justify-content: flex-end;
			align-items: center;
			flex-direction: column;
			display: flex;
			position: relative;
		}

		.discord-audio-attachment-volume-button-slider {
			margin-bottom: 4px;
			margin-left: -4px;
			position: absolute;
			bottom: calc(100% + 16px);
			left: -78px;
			right: 0;
			height: 50px;
			opacity: var(--volume-slider-opacity);
			-webkit-app-region: no-drag;
		}

		.discord-audio-attachment-volume-vertical {
			display: flex;
			align-items: center;
			transform-origin: top;
			transform: rotate(270deg);
			height: 54px;
			width: 140px;
		}

		.discord-audio-attachment-volume-button {
			cursor: pointer;
			line-height: 0;
			width: auto;
			background: transparent;
			color: currentColor;
			border: 0;
			padding: 0;
			margin: 0;
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			box-sizing: border-box;
			border-radius: 3px;
			font-size: 14px;
			font-weight: 500;
			-webkit-user-select: none;
			-moz-user-select: none;
			user-select: none;
		}

		.discord-audio-attachment-volume-button-content {
			--custom-button-link-underline-offset: 1px;
			--button--underline-color: transparent;
			--custom-button-link-underline-width: 1px;
			--custom-button-link-underline-stop: calc(var(--custom-button-link-underline-width) + var(--custom-button-link-underline-offset));

			background-image: linear-gradient(
				to top,
				transparent,
				transparent var(--custom-button-link-underline-offset),
				var(--button--underline-color) var(--custom-button-link-underline-offset),
				var(--button--underline-color) var(--custom-button-link-underline-stop),
				transparent var(--custom-button-link-underline-stop)
			);
		}

		.discord-audio-attachment-volume-button-control-icon {
			display: block;
			width: 24px;
			height: 24px;
			padding: 4px;
			cursor: pointer;
			flex: 0 0 auto;
			opacity: 0.6;
		}

		.discord-audio-attachment-volume-slider {
			position: relative;
			height: 6px;
			background-color: hsl(210 calc(1 * 9.3%) 78.8% / 0.3);
			width: 88px;
		}

		.discord-audio-attachment-volume-slider:hover {
			box-shadow: 0 1px 1px hsl(0 calc(1 * 0%) 0% / 0.3);
		}

		.discord-audio-attachment-volume-slider::before {
			background-color: hsl(210 calc(1 * 9.3%) 78.8%/0.3);
			left: 0px;
			border-radius: 3px 0 0 3px;
			content: '';
			position: absolute;
			top: 0;
			height: 6px;
			width: 100%;
			z-index: 3;
		}

		input[type='range'].discord-audio-attachment-volume-slider::-webkit-slider-runnable-track {
			background-color: hsl(210 calc(1 * 9.3%) 78.8%/0.3);
			height: 2.47264%;
			width: 100%;
			cursor: grab;
			border-radius: 8px;
		}

		input[type='range'].discord-audio-attachment-volume-slider::-webkit-slider-thumb {
			position: relative;
			bottom: 8px;
			z-index: 4;
		}

		input[type='range'].discord-audio-attachment-volume-slider:active::-webkit-slider-thumb {
			transform: scale(1.2);
			filter: brightness(85%);
		}
		/* #endregion */
	`;

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

	// #region state
	@state()
	private accessor currentPlaybackPosition = '0:00';

	@state()
	private accessor totalAudioDuration = '';

	@state()
	private accessor isPlaying = false;

	@state()
	private accessor raf: number | null = null;

	@state()
	private accessor isMuted = false;

	/** Volume is a fractional value between 0 and 1 */
	@state()
	private accessor currentVolume = 1;

	// #endregion

	// #region refs
	private audioRef: Ref<HTMLAudioElement> = createRef();
	private seekSliderRef: Ref<HTMLInputElement> = createRef();
	private volumeControlRef: Ref<HTMLDivElement> = createRef();
	private volumeControlInputRef: Ref<HTMLInputElement> = createRef();
	// #endregion

	// #region lifecycle
	private calculateTime(secs: number) {
		const minutes = Math.floor(secs / 60);
		const seconds = Math.floor(secs % 60);
		const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
		return `${minutes}:${returnedSeconds}`;
	}

	private displayAudioDuration() {
		if (this.audioRef.value) {
			this.totalAudioDuration = this.calculateTime(this.audioRef.value.duration);
		}
	}

	private setSliderMax() {
		if (this.audioRef.value && this.seekSliderRef.value) {
			this.seekSliderRef.value.max = Math.floor(this.audioRef.value.duration).toString();
		}
	}

	private displayBufferedAmount() {
		if (this.audioRef.value && this.seekSliderRef.value) {
			this.displayAudioDuration();

			const newBufferedAmount = this.audioRef.value.buffered.length - 1;
			if (newBufferedAmount >= 0) {
				const bufferedAmount = Math.floor(this.audioRef.value.buffered.end(newBufferedAmount));
				this.style.setProperty('--buffered-width', `${(bufferedAmount / Number(this.seekSliderRef.value.max)) * 100}%`);
			}
		}
	}

	private whilePlaying = () => {
		if (this.audioRef.value && this.seekSliderRef.value) {
			this.seekSliderRef.value.value = Math.floor(this.audioRef.value.currentTime).toString();
			const bufferedAmount = Number(this.seekSliderRef.value.value);
			this.currentPlaybackPosition = this.calculateTime(bufferedAmount);
			this.style.setProperty('--seek-before-width', `${(bufferedAmount / Number(this.seekSliderRef.value.max)) * 100}%`);
			this.raf = requestAnimationFrame(this.whilePlaying);
		}
	};

	private handleClickPlayPauseIcon = () => {
		if (this.audioRef.value) {
			if (this.isPlaying) {
				this.audioRef.value.pause();
				if (this.raf !== null) cancelAnimationFrame(this.raf);
				this.isPlaying = false;
			} else {
				void this.audioRef.value.play();
				requestAnimationFrame(this.whilePlaying);
				this.isPlaying = true;
			}
		}
	};

	private handleClickMuteIcon() {
		if (this.audioRef.value) {
			if (this.isMuted) {
				this.audioRef.value.muted = false;
				this.isMuted = false;
			} else {
				this.audioRef.value.muted = true;
				this.isMuted = true;
			}
		}
	}

	private handleSeekSliderInput(event: Event) {
		const typedEventTarget = event.target as HTMLInputElement;

		this.style.setProperty('--seek-before-width', `${(Number(typedEventTarget.value) / Number(typedEventTarget.max)) * 100}%`);

		if (this.seekSliderRef.value) {
			this.currentPlaybackPosition = this.calculateTime(Number(this.seekSliderRef.value.value));
		}

		if (this.audioRef.value && !this.audioRef.value.paused) {
			if (this.raf !== null) cancelAnimationFrame(this.raf);
		}
	}

	private handleSeekSliderChange = () => {
		if (this.audioRef.value && this.seekSliderRef.value) {
			this.audioRef.value.currentTime = Number(this.seekSliderRef.value.value);
			if (!this.audioRef.value.paused) {
				requestAnimationFrame(this.whilePlaying);
			}
		}
	};

	private handleVolumeSliderInput(event: Event) {
		const typedEventTarget = event.target as HTMLInputElement;
		const { value } = typedEventTarget;

		if (this.audioRef.value) {
			const newVolume = Number(value) / 100;

			this.currentVolume = newVolume;
			this.audioRef.value.volume = newVolume;
		}
	}

	private handleVolumeVerticalEnter() {
		if (this.volumeControlRef.value) {
			this.style.setProperty('--volume-slider-opacity', '1');
		}
	}

	private handleVolumeVerticalLeave() {
		if (this.volumeControlRef.value) {
			this.style.setProperty('--volume-slider-opacity', '0');
		}
	}

	private handleVolumeVerticalFocus() {
		this.handleVolumeVerticalEnter();
		this.addEventListener('keydown', this.handleVolumeControlKeyboard);
	}

	private handleVolumeVerticalBlur() {
		this.handleVolumeVerticalLeave();
		this.removeEventListener('keydown', this.handleVolumeControlKeyboard);
	}

	private handleVolumeControlKeyboard(event: KeyboardEvent) {
		let volumeChange = 0;
		if (event.key === 'ArrowDown') {
			volumeChange = -0.1;
		} else if (event.key === 'ArrowUp') {
			volumeChange = 0.1;
		}

		if (volumeChange !== 0) {
			this.adjustVolume(volumeChange, event);
		}
	}

	private adjustVolume(change: number, event: KeyboardEvent) {
		event.preventDefault();
		event.stopPropagation();

		let newValue = this.currentVolume + change;

		if (newValue < 0.1) {
			newValue = 0;
		} else if (newValue > 1) {
			newValue = 1;
		}

		if (this.audioRef.value && this.volumeControlInputRef.value) {
			this.currentVolume = newValue;
			this.audioRef.value.volume = newValue;
			this.volumeControlInputRef.value.value = (newValue * 100).toString();
		}
	}

	private audioMetadataLoaded = () => {
		if (this.audioRef.value) {
			this.displayAudioDuration();
			this.setSliderMax();
			this.displayBufferedAmount();
		}
	};

	public override connectedCallback(): void {
		super.connectedCallback();

		if (this.audioRef.value) {
			if (this.audioRef.value.readyState > 0) {
				this.displayAudioDuration();
				this.setSliderMax();
				this.displayBufferedAmount();
			} else {
				this.audioRef.value.addEventListener('loadedmetadata', this.audioMetadataLoaded);
			}
		}
	}

	public override disconnectedCallback(): void {
		super.disconnectedCallback();

		this.audioRef.value?.removeEventListener('loadedmetadata', this.audioMetadataLoaded);
	}
	// #endregion

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
							${ref(this.audioRef)}
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

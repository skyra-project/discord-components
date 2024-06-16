import { LitElement } from 'lit';
import { state } from 'lit/decorators.js';
import type { Ref } from 'lit/directives/ref.js';

export class DiscordMediaLifecycle extends LitElement {
	protected mediaComponentRef: Ref<HTMLAudioElement | HTMLVideoElement>;
	protected seekSliderRef: Ref<HTMLInputElement>;
	protected volumeControlRef: Ref<HTMLDivElement>;
	protected volumeControlInputRef: Ref<HTMLInputElement>;

	@state()
	protected accessor currentPlaybackPosition = '0:00';

	@state()
	protected accessor totalAudioDuration = '';

	@state()
	protected accessor isPlaying = false;

	@state()
	private accessor raf: number | null = null;

	@state()
	protected accessor isMuted = false;

	/** Volume is a fractional value between 0 and 1 */
	@state()
	protected accessor currentVolume = 1;

	public constructor(
		audioRef: Ref<HTMLAudioElement>,
		seekSliderRef: Ref<HTMLInputElement>,
		volumeControlRef: Ref<HTMLDivElement>,
		volumeControlInputRef: Ref<HTMLInputElement>,
		totalAudioDuration: string,
		currentPlaybackPosition: string,
		raf: number | null,
		isPlaying: boolean,
		isMuted: boolean,
		currentVolume: number
	) {
		super();

		this.mediaComponentRef = audioRef;
		this.seekSliderRef = seekSliderRef;
		this.volumeControlRef = volumeControlRef;
		this.volumeControlInputRef = volumeControlInputRef;
		this.totalAudioDuration = totalAudioDuration;
		this.currentPlaybackPosition = currentPlaybackPosition;
		this.raf = raf;
		this.isPlaying = isPlaying;
		this.isMuted = isMuted;
		this.currentVolume = currentVolume;
	}

	protected calculateTime(secs: number) {
		const minutes = Math.floor(secs / 60);
		const seconds = Math.floor(secs % 60);
		const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
		return `${minutes}:${returnedSeconds}`;
	}

	protected displayAudioDuration() {
		if (this.mediaComponentRef.value) {
			this.totalAudioDuration = this.calculateTime(this.mediaComponentRef.value.duration);
		}
	}

	protected setSliderMax() {
		if (this.mediaComponentRef.value && this.seekSliderRef.value) {
			this.seekSliderRef.value.max = Math.floor(this.mediaComponentRef.value.duration).toString();
		}
	}

	protected displayBufferedAmount() {
		if (this.mediaComponentRef.value && this.seekSliderRef.value) {
			this.displayAudioDuration();

			const newBufferedAmount = this.mediaComponentRef.value.buffered.length - 1;
			if (newBufferedAmount >= 0) {
				const bufferedAmount = Math.floor(this.mediaComponentRef.value.buffered.end(newBufferedAmount));
				this.style.setProperty('--buffered-width', `${(bufferedAmount / Number(this.seekSliderRef.value.max)) * 100}%`);
			}
		}
	}

	protected whilePlaying = () => {
		if (this.mediaComponentRef.value && this.seekSliderRef.value) {
			this.seekSliderRef.value.value = Math.floor(this.mediaComponentRef.value.currentTime).toString();
			const bufferedAmount = Number(this.seekSliderRef.value.value);
			this.currentPlaybackPosition = this.calculateTime(bufferedAmount);
			this.style.setProperty('--seek-before-width', `${(bufferedAmount / Number(this.seekSliderRef.value.max)) * 100}%`);
			this.raf = requestAnimationFrame(this.whilePlaying);
		}
	};

	protected handleClickPlayPauseIcon = () => {
		if (this.mediaComponentRef.value) {
			if (this.isPlaying) {
				this.mediaComponentRef.value.pause();
				if (this.raf !== null) cancelAnimationFrame(this.raf);
				this.isPlaying = false;
			} else {
				void this.mediaComponentRef.value.play();
				requestAnimationFrame(this.whilePlaying);
				this.isPlaying = true;
			}
		}
	};

	protected handleClickMuteIcon() {
		if (this.mediaComponentRef.value) {
			if (this.isMuted) {
				this.mediaComponentRef.value.muted = false;
				this.isMuted = false;
			} else {
				this.mediaComponentRef.value.muted = true;
				this.isMuted = true;
			}
		}
	}

	protected handleSeekSliderInput(event: Event) {
		const typedEventTarget = event.target as HTMLInputElement;

		this.style.setProperty('--seek-before-width', `${(Number(typedEventTarget.value) / Number(typedEventTarget.max)) * 100}%`);

		if (this.seekSliderRef.value) {
			this.currentPlaybackPosition = this.calculateTime(Number(this.seekSliderRef.value.value));
		}

		if (this.mediaComponentRef.value && !this.mediaComponentRef.value.paused) {
			if (this.raf !== null) cancelAnimationFrame(this.raf);
		}
	}

	protected handleSeekSliderChange = () => {
		if (this.mediaComponentRef.value && this.seekSliderRef.value) {
			this.mediaComponentRef.value.currentTime = Number(this.seekSliderRef.value.value);
			if (!this.mediaComponentRef.value.paused) {
				requestAnimationFrame(this.whilePlaying);
			}
		}
	};

	protected handleVolumeSliderInput(event: Event) {
		const typedEventTarget = event.target as HTMLInputElement;
		const { value } = typedEventTarget;

		if (this.mediaComponentRef.value) {
			const newVolume = Number(value) / 100;

			this.currentVolume = newVolume;
			this.mediaComponentRef.value.volume = newVolume;
		}
	}

	protected handleVolumeVerticalEnter() {
		if (this.volumeControlRef.value) {
			this.style.setProperty('--volume-slider-opacity', '1');
		}
	}

	protected handleVolumeVerticalLeave() {
		if (this.volumeControlRef.value) {
			this.style.setProperty('--volume-slider-opacity', '0');
		}
	}

	protected handleVolumeVerticalFocus() {
		this.handleVolumeVerticalEnter();
		this.addEventListener('keydown', this.handleVolumeControlKeyboard);
	}

	protected handleVolumeVerticalBlur() {
		this.handleVolumeVerticalLeave();
		this.removeEventListener('keydown', this.handleVolumeControlKeyboard);
	}

	protected handleVolumeControlKeyboard(event: KeyboardEvent) {
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

	protected adjustVolume(change: number, event: KeyboardEvent) {
		event.preventDefault();
		event.stopPropagation();

		let newValue = this.currentVolume + change;

		if (newValue < 0.1) {
			newValue = 0;
		} else if (newValue > 1) {
			newValue = 1;
		}

		if (this.mediaComponentRef.value && this.volumeControlInputRef.value) {
			this.currentVolume = newValue;
			this.mediaComponentRef.value.volume = newValue;
			this.volumeControlInputRef.value.value = (newValue * 100).toString();
		}
	}

	protected audioMetadataLoaded = () => {
		if (this.mediaComponentRef.value) {
			this.displayAudioDuration();
			this.setSliderMax();
			this.displayBufferedAmount();
		}
	};
}

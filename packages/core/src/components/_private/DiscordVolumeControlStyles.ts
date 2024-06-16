import { css } from 'lit';

export const DiscordVolumeControlStyles = css`
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
`;

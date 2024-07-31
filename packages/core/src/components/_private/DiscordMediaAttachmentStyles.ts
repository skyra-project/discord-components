import { css } from 'lit';

/**
 * @internal
 */
export const DiscordMediaAttachmentStyles = css`
	.discord-media-attachment-non-visual-media-item-container {
		justify-self: start;
		align-self: start;
		margin-top: 8px;
		max-width: 100%;
		display: flex;
		flex-direction: column;
	}

	.discord-media-attachment-mosaic-item-media {
		border-radius: 2px;
		display: flex;
		flex-flow: row nowrap;
		height: 100%;
		max-height: inherit;
		max-width: 100%;
		position: relative;
	}

	.discord-media-attachment-controls {
		width: 100%;
		display: flex;
		align-items: center;
		margin-top: 4px;
		background-color: hsl(0 calc(1 * 0%) 0% / 0.6);
		border-radius: 3px;
	}

	.discord-media-attachment-video-button {
		margin-right: 8px;
	}

	.discord-media-attachment-control-icon {
		display: block;
		width: 24px;
		height: 24px;
		padding: 4px;
		cursor: pointer;
		flex: 0 0 auto;
		opacity: 0.6;
	}

	.discord-media-attachment-duration-time-wrapper {
		flex: 0 0 auto;
		margin: 4px;
		height: 12px;
	}

	.discord-media-attachment-duration-time-display {
		font-weight: 500;
		display: inline-block;
		font-family: 'gg mono', 'Source Code Pro', Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter',
			'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier, monospace;
		font-size: 12px;
		line-height: 12px;
		vertical-align: text-top;
	}

	.discord-media-attachment-duration-time-separator {
		margin: 0 2px;
	}
`;

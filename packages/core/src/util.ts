import { getConfig } from './config.js';
import type { Emoji, DiscordTimestamp } from './types.js';

const intlDateFormat = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
const intlTwelveHourFormat = new Intl.DateTimeFormat('en-US', { hour12: true, hour: '2-digit', minute: '2-digit' });
const intlTwentyFourHourFormat = new Intl.DateTimeFormat('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });

const formatDate = (value: Exclude<DiscordTimestamp, null>): string | null => {
	if (!(value instanceof Date)) return value;
	return intlDateFormat.format(value);
};

const formatTime = (value: Exclude<DiscordTimestamp, null>, hour24 = false): string | null => {
	if (!(value instanceof Date)) return value;
	if (hour24) return intlTwentyFourHourFormat.format(value);
	return intlTwelveHourFormat.format(value);
};

export const handleTimestamp = (value: DiscordTimestamp, useTime = false, hour24 = false): string | null => {
	if (!(value instanceof Date) && typeof value !== 'string') {
		throw new TypeError('Timestamp prop must be a Date object or a string.');
	}

	return useTime ? formatTime(value, hour24) : formatDate(value);
};

export const IMAGE_EXTENSION = /\.(bmp|jpe?g|png|gif|webp|tiff)$/i;

export const validateImageExtension = (url: string) => {
	if (!IMAGE_EXTENSION.test(url))
		throw new DiscordComponentsError(`The url of an image for discord-image-attachment should match the regex ${IMAGE_EXTENSION}`);
};

export const getGlobalEmojiUrl = (emojiName: string): Emoji | undefined => getConfig().emojis?.[emojiName];

export class DiscordComponentsError extends Error {
	public constructor(message: string) {
		super(message);
		this.name = 'DiscordComponentsError';
	}
}

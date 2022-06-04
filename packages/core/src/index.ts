import type { DiscordMessageOptions } from './options';

export { DiscordAuthorInfo } from './components/discord-author-info/DiscordAuthorInfo.js';
export { DiscordMessage } from './components/discord-message/DiscordMessage.js';
export { DiscordMessages } from './components/discord-messages/DiscordMessages.js';
export type { Avatars, DiscordMessageOptions, Emoji, Profile } from './options.js';

declare global {
	interface Window {
		$discordMessage: DiscordMessageOptions;
	}
}

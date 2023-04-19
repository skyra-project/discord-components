import type { DiscordMessageOptions } from './options';

export { DiscordAuthorInfo } from './components/discord-author-info/DiscordAuthorInfo.js';
export { DiscordBold } from './components/discord-bold/DiscordBold.js';
export { DiscordMention } from './components/discord-mention/DiscordMention.js';
export { DiscordMessage } from './components/discord-message/DiscordMessage.js';
export { DiscordMessages } from './components/discord-messages/DiscordMessages.js';
export type { Avatars, DiscordMessageOptions, Emoji, Profile } from './options.js';

declare global {
	interface Window {
		$discordMessage: DiscordMessageOptions;
	}
}

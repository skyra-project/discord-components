import type { DiscordMessageOptions } from './options';

/* EXPORTS START */

export { DiscordActionRow } from './components/discord-action-row/DiscordActionRow.js';
export { DiscordAttachment } from './components/discord-attachment/DiscordAttachment.js';
export { DiscordAttachments } from './components/discord-attachments/DiscordAttachments.js';
export { DiscordAuthorInfo } from './components/discord-author-info/DiscordAuthorInfo.js';
export { DiscordBold } from './components/discord-bold/DiscordBold.js';
export { DiscordButton } from './components/discord-button/DiscordButton.js';
export { DiscordCode } from './components/discord-code/DiscordCode.js';
export { DiscordCommand } from './components/discord-command/DiscordCommand.js';
export { DiscordCustomEmoji } from './components/discord-custom-emoji/DiscordCustomEmoji.js';
export { DiscordEmbed } from './components/discord-embed/DiscordEmbed.js';
export { DiscordEmbedDescription } from './components/discord-embed-description/DiscordEmbedDescription.js';
export { DiscordEmbedField } from './components/discord-embed-field/DiscordEmbedField.js';
export { DiscordEmbedFields } from './components/discord-embed-fields/DiscordEmbedFields.js';
export { DiscordEmbedFooter } from './components/discord-embed-footer/DiscordEmbedFooter.js';
export { DiscordInvite } from './components/discord-invite/DiscordInvite.js';
export { DiscordItalic } from './components/discord-italic/DiscordItalic.js';
export { DiscordLink } from './components/discord-link/DiscordLink.js';
export { DiscordMention } from './components/discord-mention/DiscordMention.js';
export { DiscordMessage } from './components/discord-message/DiscordMessage.js';
export { DiscordMessages } from './components/discord-messages/DiscordMessages.js';
export { DiscordPre } from './components/discord-pre/DiscordPre.js';
export { DiscordQuote } from './components/discord-quote/DiscordQuote.js';
export { DiscordReaction } from './components/discord-reaction/DiscordReaction.js';
export { DiscordReactions } from './components/discord-reactions/DiscordReactions.js';
export { DiscordReply } from './components/discord-reply/DiscordReply.js';
export { DiscordSpoiler } from './components/discord-spoiler/DiscordSpoiler.js';
export { DiscordSystemMessage } from './components/discord-system-message/DiscordSystemMessage.js';
export { DiscordTenorVideo } from './components/discord-tenor-video/DiscordTenorVideo.js';
export { DiscordThread } from './components/discord-thread/DiscordThread.js';
export { DiscordThreadMessage } from './components/discord-thread-message/DiscordThreadMessage.js';
export { DiscordTime } from './components/discord-time/DiscordTime.js';
export { DiscordUnderlined } from './components/discord-underlined/DiscordUnderlined.js';

/* EXPORTS END */

export type { Avatars, DiscordMessageOptions, Emoji, Profile } from './options.js';

declare global {
	interface Window {
		$discordMessage: DiscordMessageOptions;
	}
}

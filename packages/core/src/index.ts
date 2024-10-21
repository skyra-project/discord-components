import type { DiscordMessageOptions } from './types.js';

/* EXPORTS START */

export { DiscordActionRow } from './components/discord-action-row/DiscordActionRow.js';
export { DiscordAttachments } from './components/discord-attachments/DiscordAttachments.js';
export { DiscordAudioAttachment } from './components/discord-audio-attachment/DiscordAudioAttachment.js';
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
export { DiscordFileAttachment } from './components/discord-file-attachment/DiscordFileAttachment.js';
export { DiscordHeader } from './components/discord-header/DiscordHeader.js';
export { DiscordImageAttachment } from './components/discord-image-attachment/DiscordImageAttachment.js';
export { DiscordInputText } from './components/discord-input-text/DiscordInputText.js';
export { DiscordInvite } from './components/discord-invite/DiscordInvite.js';
export { DiscordItalic } from './components/discord-italic/DiscordItalic.js';
export { DiscordLink } from './components/discord-link/DiscordLink.js';
export { DiscordListItem } from './components/discord-list-item/DiscordListItem.js';
export { DiscordMention } from './components/discord-mention/DiscordMention.js';
export { DiscordMessage } from './components/discord-message/DiscordMessage.js';
export { DiscordMessages } from './components/discord-messages/DiscordMessages.js';
export { DiscordModal } from './components/discord-modal/DiscordModal.js';
export { DiscordOrderedList } from './components/discord-ordered-list/DiscordOrderedList.js';
export { DiscordPoll } from './components/discord-poll/DiscordPoll.js';
export { DiscordPollAnswer } from './components/discord-poll-answer/DiscordPollAnswer.js';
export { DiscordPre } from './components/discord-pre/DiscordPre.js';
export { DiscordQuote } from './components/discord-quote/DiscordQuote.js';
export { DiscordReaction } from './components/discord-reaction/DiscordReaction.js';
export { DiscordReactions } from './components/discord-reactions/DiscordReactions.js';
export { DiscordReply } from './components/discord-reply/DiscordReply.js';
export { DiscordSpoiler } from './components/discord-spoiler/DiscordSpoiler.js';
export { DiscordStringSelectMenu } from './components/discord-string-select-menu/DiscordStringSelectMenu.js';
export { DiscordStringSelectMenuOption } from './components/discord-string-select-menu-option/DiscordStringSelectMenuOption.js';
export { DiscordSubscript } from './components/discord-subscript/DiscordSubscript.js';
export { DiscordSystemMessage } from './components/discord-system-message/DiscordSystemMessage.js';
export { DiscordTenorVideo } from './components/discord-tenor-video/DiscordTenorVideo.js';
export { DiscordThread } from './components/discord-thread/DiscordThread.js';
export { DiscordThreadMessage } from './components/discord-thread-message/DiscordThreadMessage.js';
export { DiscordTime } from './components/discord-time/DiscordTime.js';
export { DiscordUnderlined } from './components/discord-underlined/DiscordUnderlined.js';
export { DiscordUnorderedList } from './components/discord-unordered-list/DiscordUnorderedList.js';
export { DiscordVerifiedAuthorTag } from './components/discord-verified-author-tag/DiscordVerifiedAuthorTag.js';
export { DiscordVideoAttachment } from './components/discord-video-attachment/DiscordVideoAttachment.js';

/* EXPORTS END */
export { getConfig, setConfig } from './config.js';
export { DiscordComponentsError } from './util.js';
export type * from './types.js';

declare global {
	// eslint-disable-next-line no-var, vars-on-top
	var $discordMessage: DiscordMessageOptions | undefined;
}

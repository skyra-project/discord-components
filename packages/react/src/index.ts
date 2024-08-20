import * as ReactComponents from '@skyra/discord-components-core';
import { createReactComponent } from './react-components/createComponent.js';

/* IMPORTS START */

export const DiscordActionRow = createReactComponent('discord-action-row', ReactComponents.DiscordActionRow);
export const DiscordAttachments = createReactComponent('discord-attachments', ReactComponents.DiscordAttachments);
export const DiscordAudioAttachment = createReactComponent('discord-audio-attachment', ReactComponents.DiscordAudioAttachment);
export const DiscordAuthorInfo = createReactComponent('discord-author-info', ReactComponents.DiscordAuthorInfo);
export const DiscordBold = createReactComponent('discord-bold', ReactComponents.DiscordBold);
export const DiscordSubtext = createReactComponent('discord-subtext', ReactComponents.DiscordSubtext);
export const DiscordButton = createReactComponent('discord-button', ReactComponents.DiscordButton);
export const DiscordCode = createReactComponent('discord-code', ReactComponents.DiscordCode);
export const DiscordCommand = createReactComponent('discord-command', ReactComponents.DiscordCommand);
export const DiscordCustomEmoji = createReactComponent('discord-custom-emoji', ReactComponents.DiscordCustomEmoji);
export const DiscordEmbed = createReactComponent('discord-embed', ReactComponents.DiscordEmbed);
export const DiscordEmbedDescription = createReactComponent('discord-embed-description', ReactComponents.DiscordEmbedDescription);
export const DiscordEmbedField = createReactComponent('discord-embed-field', ReactComponents.DiscordEmbedField);
export const DiscordEmbedFields = createReactComponent('discord-embed-fields', ReactComponents.DiscordEmbedFields);
export const DiscordEmbedFooter = createReactComponent('discord-embed-footer', ReactComponents.DiscordEmbedFooter);
export const DiscordFileAttachment = createReactComponent('discord-file-attachment', ReactComponents.DiscordFileAttachment);
export const DiscordHeader = createReactComponent('discord-header', ReactComponents.DiscordHeader);
export const DiscordImageAttachment = createReactComponent('discord-image-attachment', ReactComponents.DiscordImageAttachment);
export const DiscordInputText = createReactComponent('discord-input-text', ReactComponents.DiscordInputText);
export const DiscordInvite = createReactComponent('discord-invite', ReactComponents.DiscordInvite);
export const DiscordItalic = createReactComponent('discord-italic', ReactComponents.DiscordItalic);
export const DiscordLink = createReactComponent('discord-link', ReactComponents.DiscordLink);
export const DiscordListItem = createReactComponent('discord-list-item', ReactComponents.DiscordListItem);
export const DiscordMention = createReactComponent('discord-mention', ReactComponents.DiscordMention);
export const DiscordMessage = createReactComponent('discord-message', ReactComponents.DiscordMessage);
export const DiscordMessages = createReactComponent('discord-messages', ReactComponents.DiscordMessages);
export const DiscordModal = createReactComponent('discord-modal', ReactComponents.DiscordModal);
export const DiscordOrderedList = createReactComponent('discord-ordered-list', ReactComponents.DiscordOrderedList);
export const DiscordPre = createReactComponent('discord-pre', ReactComponents.DiscordPre);
export const DiscordQuote = createReactComponent('discord-quote', ReactComponents.DiscordQuote);
export const DiscordReaction = createReactComponent('discord-reaction', ReactComponents.DiscordReaction);
export const DiscordReactions = createReactComponent('discord-reactions', ReactComponents.DiscordReactions);
export const DiscordReply = createReactComponent('discord-reply', ReactComponents.DiscordReply);
export const DiscordSpoiler = createReactComponent('discord-spoiler', ReactComponents.DiscordSpoiler);
export const DiscordStringSelectMenu = createReactComponent('discord-string-select-menu', ReactComponents.DiscordStringSelectMenu);
export const DiscordStringSelectMenuOption = createReactComponent('discord-string-select-menu-option', ReactComponents.DiscordStringSelectMenuOption);
export const DiscordSubscript = createReactComponent('discord-subscript', ReactComponents.DiscordSubscript);
export const DiscordSystemMessage = createReactComponent('discord-system-message', ReactComponents.DiscordSystemMessage);
export const DiscordTenorVideo = createReactComponent('discord-tenor-video', ReactComponents.DiscordTenorVideo);
export const DiscordThread = createReactComponent('discord-thread', ReactComponents.DiscordThread);
export const DiscordThreadMessage = createReactComponent('discord-thread-message', ReactComponents.DiscordThreadMessage);
export const DiscordTime = createReactComponent('discord-time', ReactComponents.DiscordTime);
export const DiscordUnderlined = createReactComponent('discord-underlined', ReactComponents.DiscordUnderlined);
export const DiscordUnorderedList = createReactComponent('discord-unordered-list', ReactComponents.DiscordUnorderedList);
export const DiscordVideoAttachment = createReactComponent('discord-video-attachment', ReactComponents.DiscordVideoAttachment);

/* IMPORTS END */

export type { Avatars, DiscordMessageOptions, DiscordTimestamp, Emoji, LightTheme, Profile } from '@skyra/discord-components-core';
export { getConfig, setConfig } from '@skyra/discord-components-core';

declare global {
	// eslint-disable-next-line no-var, vars-on-top
	var $discordMessage: ReactComponents.DiscordMessageOptions | undefined;
}

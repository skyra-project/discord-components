/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { DiscordTimestamp } from "./util";
export namespace Components {
    interface DiscordActionRow {
    }
    interface DiscordAttachment {
        /**
          * The alt text to show in case the image was unable to load
          * @default 'discord attachment'
         */
        "alt": string;
        /**
          * The height of the image in pixels
         */
        "height": number;
        /**
          * The URL for the image attachment
          * @important Should be a valid image URL, i.e. matching the regex `/\.(bmp|jpe?g|png|gif|webp|tiff)$/i`
         */
        "url": string;
        /**
          * The width of the image in pixels
         */
        "width": number;
    }
    interface DiscordAttachments {
    }
    interface DiscordButton {
        /**
          * Whether to show the button as disabled.
         */
        "disabled": boolean;
        /**
          * The emoji URL to use in the button.
         */
        "emoji": string;
        /**
          * The name of the emoji used in the button.
         */
        "emojiName": string;
        /**
          * The type of button this is, this will change the color of the button. Valid values: `primary`, `secondary`, `success`, `destructive`.
         */
        "type": 'primary' | 'secondary' | 'success' | 'destructive';
        /**
          * The URL for the button. Setting this will force the button type to be `secondary`.
         */
        "url": string;
    }
    interface DiscordCommand {
        /**
          * The message author's username.
          * @default 'User'
         */
        "author": string;
        /**
          * The message author's avatar. Can be an avatar shortcut, relative path, or external link.
         */
        "avatar": string;
        /**
          * The name of the command invoked.
         */
        "command": string;
        /**
          * The id of the profile data to use.
         */
        "profile": string;
        /**
          * The message author's primary role color. Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp).
         */
        "roleColor": string;
    }
    interface DiscordEmbed {
        /**
          * The author's avatar URL.
         */
        "authorImage": string;
        /**
          * The author's name.
         */
        "authorName": string;
        /**
          * The URL to open when you click on the author's name.
         */
        "authorUrl": string;
        /**
          * The color to use for the embed's left border. Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp).
         */
        "color": string;
        /**
          * The embed title.
         */
        "embedTitle": string;
        /**
          * The image to use next to the footer text.
         */
        "footerImage": string;
        /**
          * The embed image to use (displayed at the bottom).
         */
        "image": string;
        /**
          * The provider to show above the embed, for example for YouTube videos it will show "YouTube" at the top of the embed (above the author)
          * @example YouTube
         */
        "provider": string;
        /**
          * The thumbnail image to use.
         */
        "thumbnail": string;
        /**
          * The timestamp to use for the message date. When supplying a string, the format must be `01/31/2000`.
         */
        "timestamp"?: DiscordTimestamp;
        /**
          * The URL to open when you click on the embed title.
         */
        "url": string;
        /**
          * The embed video to use (displayed at the bottom, same slot as the image).
          * @important YouTube videos will not be playable on your projects, this is due to YouTube using DASH to play their videos rather than providing the raw media stream (in a container such as mp4 or ogg). Links to regular MP4 files (such as on a CDN) however will autoplay!
          * @note Video takes priority over image.
          * @remark Providing both a video and an image will ensure the image is shown to users with browsers that do not support HTML5 video playback.
          * @example https://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_1080p_stereo.ogg
         */
        "video": string;
    }
    interface DiscordEmbedField {
        /**
          * The field's title.
         */
        "fieldTitle": string;
        /**
          * Whether this field should be displayed inline or not.
         */
        "inline": boolean;
        /**
          * The index of this inline field
          * @remark This defines the position of this inline field. 1 is left, 2 is middle and 3 is right.
          * @oneof [1, 2, 3]
          * @default 1
         */
        "inlineIndex": number;
    }
    interface DiscordEmbedFields {
    }
    interface DiscordInvite {
        /**
          * The server icon to display for the invite.
         */
        "icon": string | undefined;
        /**
          * The number of members on the server.
          * @default 0
         */
        "members": number;
        /**
          * The server's name.
          * @default 'Discord Server'
         */
        "name": string;
        /**
          * The number of members online on the server.
          * @default 0
         */
        "online": number;
        /**
          * Whether the server is partnered. Only works if `verified` is `false` or `undefined`.
         */
        "partnered": boolean;
        /**
          * The URL to open when you click on the join button.
         */
        "url": string;
        /**
          * Whether the server is verified. Only works if `partnered` is `false` or `undefined`.
         */
        "verified": boolean;
    }
    interface DiscordMention {
        /**
          * The color to use for this mention. Only works for role mentions and must be in hex format.
         */
        "color": string;
        /**
          * Whether this entire message block should be highlighted (to emulate the "logged in user" being pinged).
         */
        "highlight": boolean;
        /**
          * The type of mention this should be. This will prepend the proper prefix character. Valid values: `user`, `channel`, `role`, `voice`, and `locked`.
         */
        "type": 'user' | 'channel' | 'role' | 'voice' | 'locked' | 'thread';
    }
    interface DiscordMessage {
        /**
          * The message author's username.
          * @default 'User'
         */
        "author": string;
        /**
          * The message author's avatar. Can be an avatar shortcut, relative path, or external link.
         */
        "avatar": string;
        /**
          * Whether the message author is a bot or not. Only works if `server` is `false` or `undefined`.
         */
        "bot": boolean;
        /**
          * Whether the message has been edited or not.
         */
        "edited": boolean;
        /**
          * Whether to highlight this message.
         */
        "highlight": boolean;
        /**
          * The id of the profile data to use.
         */
        "profile": string;
        /**
          * The message author's primary role color. Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp).
         */
        "roleColor": string;
        /**
          * Whether the message author is a server crosspost webhook or not. Only works if `bot` is `false` or `undefined`.
         */
        "server": boolean;
        /**
          * The timestamp to use for the message date.
         */
        "timestamp": DiscordTimestamp;
        /**
          * Whether to use 24-hour format for the timestamp.
         */
        "twentyFour": boolean;
        /**
          * Whether the bot is verified or not. Only works if `bot` is `true`
         */
        "verified": boolean;
    }
    interface DiscordMessages {
        /**
          * Whether to use compact mode or not.
         */
        "compactMode": boolean;
        /**
          * Whether to use light theme or not.
         */
        "lightTheme": boolean;
        /**
          * Whether to exclude the background or not.
         */
        "noBackground": boolean;
    }
    interface DiscordReaction {
        /**
          * The number of people who reacted.
          * @default 1
         */
        "count": number;
        /**
          * The reaction emoji image URL.
         */
        "emoji": string;
        /**
          * Whether the reaction should be reactive.
          * @remark When the reaction is interactive left clicking it will add 1 to the counter. Whereas when holding the Shift key and left clicking it will decrease the counter. The counter cannot go below 1.
          * @default false
         */
        "interactive": boolean;
        /**
          * The name of the emoji to use as alternative image text.
          * @default ':emoji'
         */
        "name": string;
        /**
          * Whether the reaction should show as reacted by the user.
          * @default false
         */
        "reacted": boolean;
    }
    interface DiscordReactions {
    }
    interface DiscordReply {
        /**
          * Whether the referenced message contains attachments.
         */
        "attachment": boolean;
        /**
          * The message author's username.
          * @default 'User'
         */
        "author": string;
        /**
          * The message author's avatar. Can be an avatar shortcut, relative path, or external link.
         */
        "avatar": string;
        /**
          * Whether the message author is a bot or not. Only works if `server` is `false` or `undefined`.
         */
        "bot": boolean;
        /**
          * Whether the referenced message is from a response of a slash command.
         */
        "command": boolean;
        /**
          * Whether the message has been edited or not.
         */
        "edited": boolean;
        /**
          * Whether this reply pings the original message sender, prepending an "@" on the author's username.
         */
        "mentions": boolean;
        /**
          * The id of the profile data to use.
         */
        "profile": string;
        /**
          * The message author's primary role color. Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp).
         */
        "roleColor": string;
        /**
          * Whether the message author is a server crosspost webhook or not. Only works if `bot` is `false` or `undefined`.
         */
        "server": boolean;
        /**
          * Whether the bot is verified or not. Only works if `bot` is `true`
         */
        "verified": boolean;
    }
    interface DiscordSystemMessage {
        /**
          * Whether this message is to show channel name changes, used to match Discord's style.
         */
        "channelName": boolean;
        /**
          * The timestamp to use for the message date.
         */
        "timestamp": DiscordTimestamp;
        /**
          * The type of system message this is, this will change the icon shown. Valid values: `join`, `leave`, `call`, `missed-call`, `boost`, `edit`, `thread`, `alert`, and `error`.
         */
        "type": 'join' | 'leave' | 'call' | 'missed-call' | 'boost' | 'edit' | 'thread' | 'alert' | 'error';
    }
    interface DiscordTenorVideo {
        /**
          * The height of the video in pixels
         */
        "height": number;
        /**
          * The URL for the video
         */
        "url": string;
        /**
          * The width of the video in pixels
         */
        "width": number;
    }
}
declare global {
    interface HTMLDiscordActionRowElement extends Components.DiscordActionRow, HTMLStencilElement {
    }
    var HTMLDiscordActionRowElement: {
        prototype: HTMLDiscordActionRowElement;
        new (): HTMLDiscordActionRowElement;
    };
    interface HTMLDiscordAttachmentElement extends Components.DiscordAttachment, HTMLStencilElement {
    }
    var HTMLDiscordAttachmentElement: {
        prototype: HTMLDiscordAttachmentElement;
        new (): HTMLDiscordAttachmentElement;
    };
    interface HTMLDiscordAttachmentsElement extends Components.DiscordAttachments, HTMLStencilElement {
    }
    var HTMLDiscordAttachmentsElement: {
        prototype: HTMLDiscordAttachmentsElement;
        new (): HTMLDiscordAttachmentsElement;
    };
    interface HTMLDiscordButtonElement extends Components.DiscordButton, HTMLStencilElement {
    }
    var HTMLDiscordButtonElement: {
        prototype: HTMLDiscordButtonElement;
        new (): HTMLDiscordButtonElement;
    };
    interface HTMLDiscordCommandElement extends Components.DiscordCommand, HTMLStencilElement {
    }
    var HTMLDiscordCommandElement: {
        prototype: HTMLDiscordCommandElement;
        new (): HTMLDiscordCommandElement;
    };
    interface HTMLDiscordEmbedElement extends Components.DiscordEmbed, HTMLStencilElement {
    }
    var HTMLDiscordEmbedElement: {
        prototype: HTMLDiscordEmbedElement;
        new (): HTMLDiscordEmbedElement;
    };
    interface HTMLDiscordEmbedFieldElement extends Components.DiscordEmbedField, HTMLStencilElement {
    }
    var HTMLDiscordEmbedFieldElement: {
        prototype: HTMLDiscordEmbedFieldElement;
        new (): HTMLDiscordEmbedFieldElement;
    };
    interface HTMLDiscordEmbedFieldsElement extends Components.DiscordEmbedFields, HTMLStencilElement {
    }
    var HTMLDiscordEmbedFieldsElement: {
        prototype: HTMLDiscordEmbedFieldsElement;
        new (): HTMLDiscordEmbedFieldsElement;
    };
    interface HTMLDiscordInviteElement extends Components.DiscordInvite, HTMLStencilElement {
    }
    var HTMLDiscordInviteElement: {
        prototype: HTMLDiscordInviteElement;
        new (): HTMLDiscordInviteElement;
    };
    interface HTMLDiscordMentionElement extends Components.DiscordMention, HTMLStencilElement {
    }
    var HTMLDiscordMentionElement: {
        prototype: HTMLDiscordMentionElement;
        new (): HTMLDiscordMentionElement;
    };
    interface HTMLDiscordMessageElement extends Components.DiscordMessage, HTMLStencilElement {
    }
    var HTMLDiscordMessageElement: {
        prototype: HTMLDiscordMessageElement;
        new (): HTMLDiscordMessageElement;
    };
    interface HTMLDiscordMessagesElement extends Components.DiscordMessages, HTMLStencilElement {
    }
    var HTMLDiscordMessagesElement: {
        prototype: HTMLDiscordMessagesElement;
        new (): HTMLDiscordMessagesElement;
    };
    interface HTMLDiscordReactionElement extends Components.DiscordReaction, HTMLStencilElement {
    }
    var HTMLDiscordReactionElement: {
        prototype: HTMLDiscordReactionElement;
        new (): HTMLDiscordReactionElement;
    };
    interface HTMLDiscordReactionsElement extends Components.DiscordReactions, HTMLStencilElement {
    }
    var HTMLDiscordReactionsElement: {
        prototype: HTMLDiscordReactionsElement;
        new (): HTMLDiscordReactionsElement;
    };
    interface HTMLDiscordReplyElement extends Components.DiscordReply, HTMLStencilElement {
    }
    var HTMLDiscordReplyElement: {
        prototype: HTMLDiscordReplyElement;
        new (): HTMLDiscordReplyElement;
    };
    interface HTMLDiscordSystemMessageElement extends Components.DiscordSystemMessage, HTMLStencilElement {
    }
    var HTMLDiscordSystemMessageElement: {
        prototype: HTMLDiscordSystemMessageElement;
        new (): HTMLDiscordSystemMessageElement;
    };
    interface HTMLDiscordTenorVideoElement extends Components.DiscordTenorVideo, HTMLStencilElement {
    }
    var HTMLDiscordTenorVideoElement: {
        prototype: HTMLDiscordTenorVideoElement;
        new (): HTMLDiscordTenorVideoElement;
    };
    interface HTMLElementTagNameMap {
        "discord-action-row": HTMLDiscordActionRowElement;
        "discord-attachment": HTMLDiscordAttachmentElement;
        "discord-attachments": HTMLDiscordAttachmentsElement;
        "discord-button": HTMLDiscordButtonElement;
        "discord-command": HTMLDiscordCommandElement;
        "discord-embed": HTMLDiscordEmbedElement;
        "discord-embed-field": HTMLDiscordEmbedFieldElement;
        "discord-embed-fields": HTMLDiscordEmbedFieldsElement;
        "discord-invite": HTMLDiscordInviteElement;
        "discord-mention": HTMLDiscordMentionElement;
        "discord-message": HTMLDiscordMessageElement;
        "discord-messages": HTMLDiscordMessagesElement;
        "discord-reaction": HTMLDiscordReactionElement;
        "discord-reactions": HTMLDiscordReactionsElement;
        "discord-reply": HTMLDiscordReplyElement;
        "discord-system-message": HTMLDiscordSystemMessageElement;
        "discord-tenor-video": HTMLDiscordTenorVideoElement;
    }
}
declare namespace LocalJSX {
    interface DiscordActionRow {
    }
    interface DiscordAttachment {
        /**
          * The alt text to show in case the image was unable to load
          * @default 'discord attachment'
         */
        "alt"?: string;
        /**
          * The height of the image in pixels
         */
        "height"?: number;
        /**
          * The URL for the image attachment
          * @important Should be a valid image URL, i.e. matching the regex `/\.(bmp|jpe?g|png|gif|webp|tiff)$/i`
         */
        "url"?: string;
        /**
          * The width of the image in pixels
         */
        "width"?: number;
    }
    interface DiscordAttachments {
    }
    interface DiscordButton {
        /**
          * Whether to show the button as disabled.
         */
        "disabled"?: boolean;
        /**
          * The emoji URL to use in the button.
         */
        "emoji"?: string;
        /**
          * The name of the emoji used in the button.
         */
        "emojiName"?: string;
        /**
          * The type of button this is, this will change the color of the button. Valid values: `primary`, `secondary`, `success`, `destructive`.
         */
        "type"?: 'primary' | 'secondary' | 'success' | 'destructive';
        /**
          * The URL for the button. Setting this will force the button type to be `secondary`.
         */
        "url"?: string;
    }
    interface DiscordCommand {
        /**
          * The message author's username.
          * @default 'User'
         */
        "author"?: string;
        /**
          * The message author's avatar. Can be an avatar shortcut, relative path, or external link.
         */
        "avatar"?: string;
        /**
          * The name of the command invoked.
         */
        "command"?: string;
        /**
          * The id of the profile data to use.
         */
        "profile"?: string;
        /**
          * The message author's primary role color. Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp).
         */
        "roleColor"?: string;
    }
    interface DiscordEmbed {
        /**
          * The author's avatar URL.
         */
        "authorImage"?: string;
        /**
          * The author's name.
         */
        "authorName"?: string;
        /**
          * The URL to open when you click on the author's name.
         */
        "authorUrl"?: string;
        /**
          * The color to use for the embed's left border. Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp).
         */
        "color"?: string;
        /**
          * The embed title.
         */
        "embedTitle"?: string;
        /**
          * The image to use next to the footer text.
         */
        "footerImage"?: string;
        /**
          * The embed image to use (displayed at the bottom).
         */
        "image"?: string;
        /**
          * The provider to show above the embed, for example for YouTube videos it will show "YouTube" at the top of the embed (above the author)
          * @example YouTube
         */
        "provider"?: string;
        /**
          * The thumbnail image to use.
         */
        "thumbnail"?: string;
        /**
          * The timestamp to use for the message date. When supplying a string, the format must be `01/31/2000`.
         */
        "timestamp"?: DiscordTimestamp;
        /**
          * The URL to open when you click on the embed title.
         */
        "url"?: string;
        /**
          * The embed video to use (displayed at the bottom, same slot as the image).
          * @important YouTube videos will not be playable on your projects, this is due to YouTube using DASH to play their videos rather than providing the raw media stream (in a container such as mp4 or ogg). Links to regular MP4 files (such as on a CDN) however will autoplay!
          * @note Video takes priority over image.
          * @remark Providing both a video and an image will ensure the image is shown to users with browsers that do not support HTML5 video playback.
          * @example https://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_1080p_stereo.ogg
         */
        "video"?: string;
    }
    interface DiscordEmbedField {
        /**
          * The field's title.
         */
        "fieldTitle": string;
        /**
          * Whether this field should be displayed inline or not.
         */
        "inline"?: boolean;
        /**
          * The index of this inline field
          * @remark This defines the position of this inline field. 1 is left, 2 is middle and 3 is right.
          * @oneof [1, 2, 3]
          * @default 1
         */
        "inlineIndex"?: number;
    }
    interface DiscordEmbedFields {
    }
    interface DiscordInvite {
        /**
          * The server icon to display for the invite.
         */
        "icon"?: string | undefined;
        /**
          * The number of members on the server.
          * @default 0
         */
        "members"?: number;
        /**
          * The server's name.
          * @default 'Discord Server'
         */
        "name"?: string;
        /**
          * The number of members online on the server.
          * @default 0
         */
        "online"?: number;
        /**
          * Whether the server is partnered. Only works if `verified` is `false` or `undefined`.
         */
        "partnered"?: boolean;
        /**
          * The URL to open when you click on the join button.
         */
        "url"?: string;
        /**
          * Whether the server is verified. Only works if `partnered` is `false` or `undefined`.
         */
        "verified"?: boolean;
    }
    interface DiscordMention {
        /**
          * The color to use for this mention. Only works for role mentions and must be in hex format.
         */
        "color"?: string;
        /**
          * Whether this entire message block should be highlighted (to emulate the "logged in user" being pinged).
         */
        "highlight"?: boolean;
        /**
          * The type of mention this should be. This will prepend the proper prefix character. Valid values: `user`, `channel`, `role`, `voice`, and `locked`.
         */
        "type"?: 'user' | 'channel' | 'role' | 'voice' | 'locked' | 'thread';
    }
    interface DiscordMessage {
        /**
          * The message author's username.
          * @default 'User'
         */
        "author"?: string;
        /**
          * The message author's avatar. Can be an avatar shortcut, relative path, or external link.
         */
        "avatar"?: string;
        /**
          * Whether the message author is a bot or not. Only works if `server` is `false` or `undefined`.
         */
        "bot"?: boolean;
        /**
          * Whether the message has been edited or not.
         */
        "edited"?: boolean;
        /**
          * Whether to highlight this message.
         */
        "highlight"?: boolean;
        /**
          * The id of the profile data to use.
         */
        "profile"?: string;
        /**
          * The message author's primary role color. Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp).
         */
        "roleColor"?: string;
        /**
          * Whether the message author is a server crosspost webhook or not. Only works if `bot` is `false` or `undefined`.
         */
        "server"?: boolean;
        /**
          * The timestamp to use for the message date.
         */
        "timestamp"?: DiscordTimestamp;
        /**
          * Whether to use 24-hour format for the timestamp.
         */
        "twentyFour"?: boolean;
        /**
          * Whether the bot is verified or not. Only works if `bot` is `true`
         */
        "verified"?: boolean;
    }
    interface DiscordMessages {
        /**
          * Whether to use compact mode or not.
         */
        "compactMode"?: boolean;
        /**
          * Whether to use light theme or not.
         */
        "lightTheme"?: boolean;
        /**
          * Whether to exclude the background or not.
         */
        "noBackground"?: boolean;
    }
    interface DiscordReaction {
        /**
          * The number of people who reacted.
          * @default 1
         */
        "count"?: number;
        /**
          * The reaction emoji image URL.
         */
        "emoji"?: string;
        /**
          * Whether the reaction should be reactive.
          * @remark When the reaction is interactive left clicking it will add 1 to the counter. Whereas when holding the Shift key and left clicking it will decrease the counter. The counter cannot go below 1.
          * @default false
         */
        "interactive"?: boolean;
        /**
          * The name of the emoji to use as alternative image text.
          * @default ':emoji'
         */
        "name"?: string;
        /**
          * Whether the reaction should show as reacted by the user.
          * @default false
         */
        "reacted"?: boolean;
    }
    interface DiscordReactions {
    }
    interface DiscordReply {
        /**
          * Whether the referenced message contains attachments.
         */
        "attachment"?: boolean;
        /**
          * The message author's username.
          * @default 'User'
         */
        "author"?: string;
        /**
          * The message author's avatar. Can be an avatar shortcut, relative path, or external link.
         */
        "avatar"?: string;
        /**
          * Whether the message author is a bot or not. Only works if `server` is `false` or `undefined`.
         */
        "bot"?: boolean;
        /**
          * Whether the referenced message is from a response of a slash command.
         */
        "command"?: boolean;
        /**
          * Whether the message has been edited or not.
         */
        "edited"?: boolean;
        /**
          * Whether this reply pings the original message sender, prepending an "@" on the author's username.
         */
        "mentions"?: boolean;
        /**
          * The id of the profile data to use.
         */
        "profile"?: string;
        /**
          * The message author's primary role color. Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp).
         */
        "roleColor"?: string;
        /**
          * Whether the message author is a server crosspost webhook or not. Only works if `bot` is `false` or `undefined`.
         */
        "server"?: boolean;
        /**
          * Whether the bot is verified or not. Only works if `bot` is `true`
         */
        "verified"?: boolean;
    }
    interface DiscordSystemMessage {
        /**
          * Whether this message is to show channel name changes, used to match Discord's style.
         */
        "channelName"?: boolean;
        /**
          * The timestamp to use for the message date.
         */
        "timestamp"?: DiscordTimestamp;
        /**
          * The type of system message this is, this will change the icon shown. Valid values: `join`, `leave`, `call`, `missed-call`, `boost`, `edit`, `thread`, `alert`, and `error`.
         */
        "type"?: 'join' | 'leave' | 'call' | 'missed-call' | 'boost' | 'edit' | 'thread' | 'alert' | 'error';
    }
    interface DiscordTenorVideo {
        /**
          * The height of the video in pixels
         */
        "height"?: number;
        /**
          * The URL for the video
         */
        "url"?: string;
        /**
          * The width of the video in pixels
         */
        "width"?: number;
    }
    interface IntrinsicElements {
        "discord-action-row": DiscordActionRow;
        "discord-attachment": DiscordAttachment;
        "discord-attachments": DiscordAttachments;
        "discord-button": DiscordButton;
        "discord-command": DiscordCommand;
        "discord-embed": DiscordEmbed;
        "discord-embed-field": DiscordEmbedField;
        "discord-embed-fields": DiscordEmbedFields;
        "discord-invite": DiscordInvite;
        "discord-mention": DiscordMention;
        "discord-message": DiscordMessage;
        "discord-messages": DiscordMessages;
        "discord-reaction": DiscordReaction;
        "discord-reactions": DiscordReactions;
        "discord-reply": DiscordReply;
        "discord-system-message": DiscordSystemMessage;
        "discord-tenor-video": DiscordTenorVideo;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "discord-action-row": LocalJSX.DiscordActionRow & JSXBase.HTMLAttributes<HTMLDiscordActionRowElement>;
            "discord-attachment": LocalJSX.DiscordAttachment & JSXBase.HTMLAttributes<HTMLDiscordAttachmentElement>;
            "discord-attachments": LocalJSX.DiscordAttachments & JSXBase.HTMLAttributes<HTMLDiscordAttachmentsElement>;
            "discord-button": LocalJSX.DiscordButton & JSXBase.HTMLAttributes<HTMLDiscordButtonElement>;
            "discord-command": LocalJSX.DiscordCommand & JSXBase.HTMLAttributes<HTMLDiscordCommandElement>;
            "discord-embed": LocalJSX.DiscordEmbed & JSXBase.HTMLAttributes<HTMLDiscordEmbedElement>;
            "discord-embed-field": LocalJSX.DiscordEmbedField & JSXBase.HTMLAttributes<HTMLDiscordEmbedFieldElement>;
            "discord-embed-fields": LocalJSX.DiscordEmbedFields & JSXBase.HTMLAttributes<HTMLDiscordEmbedFieldsElement>;
            "discord-invite": LocalJSX.DiscordInvite & JSXBase.HTMLAttributes<HTMLDiscordInviteElement>;
            "discord-mention": LocalJSX.DiscordMention & JSXBase.HTMLAttributes<HTMLDiscordMentionElement>;
            "discord-message": LocalJSX.DiscordMessage & JSXBase.HTMLAttributes<HTMLDiscordMessageElement>;
            "discord-messages": LocalJSX.DiscordMessages & JSXBase.HTMLAttributes<HTMLDiscordMessagesElement>;
            "discord-reaction": LocalJSX.DiscordReaction & JSXBase.HTMLAttributes<HTMLDiscordReactionElement>;
            "discord-reactions": LocalJSX.DiscordReactions & JSXBase.HTMLAttributes<HTMLDiscordReactionsElement>;
            "discord-reply": LocalJSX.DiscordReply & JSXBase.HTMLAttributes<HTMLDiscordReplyElement>;
            "discord-system-message": LocalJSX.DiscordSystemMessage & JSXBase.HTMLAttributes<HTMLDiscordSystemMessageElement>;
            "discord-tenor-video": LocalJSX.DiscordTenorVideo & JSXBase.HTMLAttributes<HTMLDiscordTenorVideoElement>;
        }
    }
}

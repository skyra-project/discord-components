import { consume } from '@lit/context';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { when } from 'lit/directives/when.js';
import { avatars, profiles } from '../../config.js';
import type { LightTheme, Profile } from '../../types.js';
import { messagesCompactMode, messagesLightTheme } from '../discord-messages/DiscordMessages.js';
import AttachmentReply from '../svgs/AttachmentReply.js';
import CommandReply from '../svgs/CommandReply.js';
import ReplyIcon from '../svgs/ReplyIcon.js';
import VerifiedTick from '../svgs/VerifiedTick.js';

@customElement('discord-reply')
export class DiscordReply extends LitElement implements LightTheme {
	/**
	 * @internal
	 */
	public static override readonly styles = css`
		:host {
			color: #b9bbbe;
			display: flex;
			font-size: 0.875rem;
			font-family: 'gg sans', 'Noto Sans', Whitney, 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;

			padding-top: 2px;
			margin-left: 56px;
			margin-bottom: 4px;
			align-items: center;
			line-height: 1.125rem;
			position: relative;
			white-space: pre;
			user-select: none;
		}

		:host([light-theme]) {
			color: #4f5660;
		}

		:host([compact-mode]),
		:host([deleted]) {
			margin-left: 62px;
			margin-bottom: 0;
		}

		:host:before {
			content: '';
			display: block;
			position: absolute;
			top: 50%;
			right: 100%;
			bottom: 0;
			left: -36px;
			margin-right: 4px;
			margin-top: -1px;
			margin-left: -1px;
			margin-bottom: -2px;
			border-left: 2px solid #4f545c !important;
			border-bottom: 0 solid #4f545c !important;
			border-right: 0 solid #4f545c !important;
			border-top: 2px solid #4f545c !important;
			border-top-left-radius: 6px;
		}

		:host([light-theme]):before {
			border-color: #747f8d !important;
		}

		.discord-replied-message-avatar,
		.discord-reply-badge {
			-webkit-box-flex: 0;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
			width: 16px;
			height: 16px;
			border-radius: 50%;
			user-select: none;
			margin-right: 0.25rem;
		}

		.discord-reply-badge {
			display: flex;
			align-items: center;
			justify-content: center;
			color: #b9bbbe;
			background: #202225;
		}

		:host([light-theme]) .discord-reply-badge {
			color: #4f5660;
			background: #e3e5e8;
		}

		:host .discord-clan-tag {
			background-color: oklab(0.431937 0.00109309 -0.0132537 / 0.8);
			color: #fff;
			font-size: 12px;
			font-weight: 500;
			margin-right: 0.25rem;
			border-radius: 4px;
			line-height: 100%;
			text-transform: uppercase;
			justify-content: space-between;
			display: inline-flex;
			align-items: center;
			padding: 0 0.275rem;
			margin-top: 0.075em;
			height: 1.2rem;
			opacity: 0.55;
			transition: background-color 100ms ease-in-out;
			cursor: pointer;
		}

		:host .discord-clan-tag:hover {
			background-color: oklab(0.431937 0.00109309 -0.0132537 / 0.5);
		}

		:host([light-theme]) .discord-clan-tag {
			opacity: 0.65;
			background-color: hsl(0 calc(1 * 0%) 0.8%/0.09);
			color: #000;
		}

		:host([light-theme]) .discord-clan-tag:hover {
			background-color: hsl(0 calc(1 * 0%) 0.8%/0.03);
		}

		:host .discord-clan-tag img {
			display: inline-flex;
			align-items: center;
			margin-right: 0.25rem;
			right: 0.25rem;
		}

		:host .discord-clan-tag span {
			display: inline-flex;
			align-items: center;
			user-select: none;
			-webkit-user-select: none;
			line-height: 1rem !important;
		}

		.discord-application-tag {
			background-color: hsl(235, 85.6%, 64.7%);
			color: #fff;
			font-size: 0.625rem;
			margin-right: 0.25rem;
			line-height: 100%;
			text-transform: uppercase;

			/* Use flex layout to ensure both verified icon and "BOT" text are aligned to center */
			display: flex;
			align-items: center;

			/* Styling taken through Inspect Element on Discord client for Windows */
			height: 0.9375rem;
			padding: 0 0.275rem;
			margin-top: 0.075em;
			border-radius: 0.1875rem;
		}

		:host([compact-mode]) .discord-application-tag {
			margin-right: 0.25rem;
		}

		.discord-application-tag .discord-application-tag-verified {
			width: 0.9375rem;
			height: 0.9375rem;
			margin-left: -0.1rem;
		}

		.discord-application-tag.discord-application-tag-op {
			background-color: #c9cdfb;
			color: #4752c4;
			border-radius: 0.4rem;
		}

		.discord-replied-message-username {
			flex-shrink: 0;
			font-size: inherit;
			line-height: inherit;
			margin-right: 0.25rem;
			opacity: 0.64;
			font-weight: 500;
			color: #fff;
		}

		.discord-replied-message-username:hover {
			text-decoration: underline;
			cursor: pointer;
		}

		.discord-replied-message-content {
			color: inherit;
			font-size: inherit;
			line-height: inherit;
			white-space: pre;
			text-overflow: ellipsis;
			user-select: none;
			cursor: pointer;
		}

		.discord-replied-deleted-message-content {
			color: inherit;
			font-size: inherit;
			line-height: inherit;
			white-space: pre;
			text-overflow: ellipsis;
		}

		.discord-message-edited {
			color: #72767d;
			font-size: 10px;
		}

		:host([light-theme]) .discord-message-edited {
			color: #99aab5;
		}

		.discord-replied-message-content:hover {
			color: #fff;
		}

		:host([light-theme]) .discord-replied-message-content:hover {
			color: #000;
		}

		:host .discord-replied-message-content .discord-message-edited {
			margin-left: 0.25rem;
		}

		.discord-replied-message-content-icon {
			-webkit-box-flex: 0;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
			width: 20px;
			height: 20px;
			margin-left: 4px;
		}
	`;

	/**
	 * The id of the profile data to use.
	 */
	@property()
	public accessor profile: string;

	/**
	 * The message author's username.
	 *
	 * @defaultValue 'User'
	 */
	@property()
	public accessor author = 'User';

	/**
	 * The message author's avatar. Can be an avatar shortcut, relative path, or external link.
	 */
	@property()
	public accessor avatar: string;

	/**
	 * Whether the message author is a bot or not.
	 * Only works if `server` is `false` or `undefined`.
	 */
	@property({ type: Boolean })
	public accessor bot = false;

	/**
	 * Whether the message author is a server crosspost webhook or not.
	 * Only works if `bot` is `false` or `undefined`.
	 */
	@property({ type: Boolean })
	public accessor server = false;

	/**
	 * Whether the author is the original poster.
	 */
	@property({ type: Boolean })
	public accessor op = false;

	/**
	 * Whether the bot is verified or not.
	 * Only works if `bot` is `true`
	 */
	@property({ type: Boolean })
	public accessor verified = false;

	/**
	 * Whether the message has been edited or not.
	 */
	@property({ type: Boolean })
	public accessor edited = false;

	/**
	 * The message author's primary role color. Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp).
	 */
	@property()
	public accessor roleColor: string;

	/**
	 * Whether the referenced message is from a response of a slash command.
	 */
	@property({ type: Boolean })
	public accessor command = false;

	/**
	 * Whether the referenced message contains attachments.
	 */
	@property({ type: Boolean })
	public accessor attachment = false;

	/**
	 * Whether this reply pings the original message sender, prepending an "\@" on the author's username.
	 */
	@property({ type: Boolean })
	public accessor mentions = false;

	/**
	 * The clan icon of the author, which comes from the enabled clan tag
	 */
	@property()
	public accessor clanIcon: string;

	/**
	 * The clan name of the author, which comes from the enabled clan tag
	 */
	@property()
	public accessor clanTag: string;

	/**
	 * Whether this reply is a deleted message.
	 * When set to true, any content inside the tags is ignored as no `slot` is rendered.
	 * The message will always be `"Original message was deleted"`.
	 * Furthermore, the following properties are ignored:
	 *
	 * - {@link DiscordReply.profile | profile}
	 * - {@link DiscordReply.author | author}
	 * - {@link DiscordReply.avatar | avatar}
	 * - {@link DiscordReply.bot | bot}
	 * - {@link DiscordReply.server | server}
	 * - {@link DiscordReply.op | op}
	 * - {@link DiscordReply.verified | verified}
	 * - {@link DiscordReply.edited | edited}
	 * - {@link DiscordReply.roleColor | roleColor}
	 * - {@link DiscordReply.command | command}
	 * - {@link DiscordReply.attachment | attachment}
	 * - {@link DiscordReply.mentions | mentions}
	 * - {@link DiscordReply.clanIcon | clanIcon}
	 * - {@link DiscordReply.clanTag | clanTag}
	 */
	@property({ type: Boolean, reflect: true })
	public accessor deleted = false;

	@consume({ context: messagesLightTheme })
	@property({ type: Boolean, reflect: true, attribute: 'light-theme' })
	public accessor lightTheme = false;

	/**
	 * Whether to use compact mode or not.
	 */
	@consume({ context: messagesCompactMode })
	@property({ type: Boolean, reflect: true, attribute: 'compact-mode' })
	public accessor compactMode = false;

	private resolveAvatar(avatar: string): string {
		return avatars[avatar] ?? avatar ?? avatars.default;
	}

	protected override render() {
		const defaultData: Profile = {
			author: this.author,
			bot: this.bot,
			verified: this.verified,
			op: this.op,
			server: this.server,
			roleColor: this.roleColor,
			clanIcon: this.clanIcon,
			clanTag: this.clanTag
		};
		const profileData: Profile = Reflect.get(profiles, this.profile) ?? {};
		const profile: Profile = { ...defaultData, ...profileData, avatar: this.resolveAvatar(profileData.avatar ?? this.avatar) };

		const profileTag = html`
			${when(
				profile.bot && !profile.server,
				() => html`<span class="discord-application-tag">${profile.verified ? VerifiedTick() : ''}App</span>`
			)}
			${when(profile.server && !profile.bot, () => html`<span class="discord-application-tag">Server</span>`)}
			${when(profile.op, () => html`<span class="discord-application-tag discord-application-tag-op">OP</span>`)}
		`;

		return html`${when(
			this.compactMode || this.deleted,
			() => html`<div class="discord-reply-badge">${ReplyIcon()}</div>`,
			() => html`<img class="discord-replied-message-avatar" src="${ifDefined(profile.avatar)}" alt="${ifDefined(profile.author)}" />`
		)}
		${when(
			this.deleted,
			() => html`<div class="discord-replied-deleted-message-content"><em>Original message was deleted</em></div>`,
			() =>
				html`${profileTag}
					<span class="discord-replied-message-username" style=${styleMap({ color: profile.roleColor })}
						>${when(this.mentions, () => '@')}${profile.author}</span
					>
					${when(
						profile.clanIcon && profile.clanTag && profile.clanTag?.length > 0,
						() => html`
							<span class="discord-clan-tag">
								<span>
									<img
										src=${ifDefined(profile.clanIcon)}
										alt=${ifDefined(profile.clanTag?.slice(0, 4))}
										width="12"
										height="12"
										draggable="false"
									/>
									<span>${profile.clanTag?.slice(0, 4)}</span>
								</span>
							</span>
						`
					)}
					<!-- display: inline -->
					<div class="discord-replied-message-content"
						><slot></slot>${when(this.edited, () => html`<span class="discord-message-edited">(edited)</span>`)}</div
					>
					${when(
						this.command,
						() => CommandReply({ class: 'discord-replied-message-content-icon' }),
						() => when(this.attachment, () => AttachmentReply({ class: 'discord-replied-message-content-icon' }))
					)}`
		)}`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-reply': DiscordReply;
	}
}

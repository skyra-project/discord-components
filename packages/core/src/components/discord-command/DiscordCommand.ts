import { consume } from '@lit/context';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { when } from 'lit/directives/when.js';
import { avatars, profiles } from '../../config.js';
import type { LightTheme, Profile } from '../../types.js';
import { messagesCompactMode, messagesLightTheme } from '../discord-messages/DiscordMessages.js';
import { DiscordReply } from '../discord-reply/DiscordReply.js';
import AttachmentReply from '../svgs/AttachmentReply.js';
import CommandIcon from '../svgs/CommandIcon.js';
import CommandIconName from '../svgs/CommandIconName.js';
import CommandReply from '../svgs/CommandReply.js';
import ExpandMore from '../svgs/ExpandMore.js';
import MessageIcon from '../svgs/MessageIcon.js';
import VerifiedTick from '../svgs/VerifiedTick.js';

@customElement('discord-command')
export class DiscordCommand extends LitElement implements LightTheme {
	/**
	 * @internal
	 */
	public static override readonly styles = [
		DiscordReply.styles,
		css`
			:host .discord-slash-command-name {
				color: color-mix(in oklab, hsl(200 calc(1 * 100%) 49.4% / 1) 100%, black 0%) !important;
				font-weight: 500;
				background-color: #3c4270;
				border-radius: 3px;
				display: flex;
				padding: 0 5px;
				align-items: center;
				gap: 2px;
				cursor: default;
			}

			:host .discord-slash-command-name:hover {
				color: #fffffd !important;
				background-color: #5865f2;
			}

			.discord-context-command-name {
				color: color-mix(in oklab, hsl(200 calc(1 * 100%) 49.4% / 1) 100%, black 0%) !important;
				opacity: 0.64;
				cursor: default;
				font-weight: 500;
			}

			.discord-arrow-right-icon {
				transform: rotate(267deg);
				width: 12px;
				height: 12px;
				fill: none;
				margin-right: 2px;
				margin-left: 2px;
				margin-top: 3px;
			}

			.discord-context-user {
				display: flex;
				align-items: center;
				margin-top: 3px;
			}

			.discord-message-margintop {
				margin-top: 3px;
			}

			:host .discord-message-deleted {
				color: rgb(185, 187, 190) !important;
				cursor: default;
			}

			:host .discord-replied-message-username {
				margin-right: 0;
			}

			:host([light-theme]) .discord-replied-message-username {
				color: rgb(46, 51, 56);
			}

			:host([compact-mode]) .discord-context-user {
				display: flex;
				align-items: center;
				margin: 0 !important;
			}

			:host([compact-mode]) .discord-message-margintop {
				margin-top: 0 !important;
			}
		`
	];

	/**
	 * The id of the profile data to use.
	 */
	@property({ attribute: 'profile' })
	public accessor profile: string;

	/**
	 * The message author's username.
	 *
	 * @defaultValue 'User'
	 */
	@property({ attribute: 'author' })
	public accessor author = 'User';

	/**
	 * The message author's avatar. Can be an avatar shortcut, relative path, or external link.
	 */
	@property({ attribute: 'avatar' })
	public accessor avatar: string;

	/**
	 * The message author's primary role color.
	 * Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp).
	 */
	@property({ attribute: 'role-color' })
	public accessor roleColor: string;

	/**
	 * The name of the command invoked.
	 */
	@property({ attribute: 'command' })
	public accessor command: string;

	/**
	 * The type of command
	 */
	@property({ attribute: 'type' })
	public accessor type: 'message_command' | 'slash_command' | 'user_command' = 'slash_command';

	/**
	 * The id of the profile data to use.
	 */
	@property({ attribute: 'context-user-profile' })
	public accessor contextUserProfile: string;

	/**
	 * The name of user mentioned in context menu
	 */
	@property({ attribute: 'context-user-name' })
	public accessor contextUserName: string = 'User';

	/**
	 * The image of user mentioned in context menu
	 */
	@property({ attribute: 'context-user-image' })
	public accessor contextUserAvatar: string;

	/**
	 * The role color of user mentioned in context menu
	 */
	@property({ attribute: 'context-user-role-color' })
	public accessor contextUserRoleColor: string;

	/**
	 * If the message command user  are bot
	 */
	@property({ type: Boolean, attribute: 'context-user-bot' })
	public accessor contextUserBot: boolean = false;

	/**
	 * If the user bot are verified
	 */
	@property({ type: Boolean, attribute: 'context-user-bot-verified' })
	public accessor contextUserBotVerified: boolean = false;

	/**
	 * Whether the referenced context message is from a response of a slash command.
	 */
	@property({ type: Boolean, attribute: 'context-command-reply' })
	public accessor contextCommandReply: Boolean = false;

	/**
	 * Whether the referenced context message contains attachments.
	 */
	@property({ type: Boolean, attribute: 'context-attachment-reply' })
	public accessor contextAttachmentReply: Boolean = false;

	/**
	 * The referenced message in message command
	 */
	@property({ type: String, attribute: 'context-message-reply' })
	public accessor contextMessageReply: string;

	/**
	 * If the referenced messaga has deleted
	 */
	@property({ type: Boolean, attribute: 'context-message-deleted' })
	public accessor contextMessageDeleted: Boolean = false;

	/**
	 * If the context user is a application official of discord
	 */
	@property({ type: Boolean, attribute: 'context-user-application-official' })
	public accessor contextUserOfficialApplication: Boolean = false;

	/**
	 * If the context user is a server
	 */
	@property({ type: Boolean, attribute: 'context-user-server' })
	public accessor contextUserServer: Boolean = false;

	/**
	 * Whether to use compact mode or not.
	 */
	@consume({ context: messagesCompactMode })
	@property({ type: Boolean, reflect: true, attribute: 'compact-mode' })
	public accessor compactMode = false;

	@consume({ context: messagesLightTheme })
	@property({ type: Boolean, reflect: true, attribute: 'light-theme' })
	public accessor lightTheme = false;

	private readonly validCommandTypes = new Set(['user_command', 'message_command', 'slash_command']);

	public checkType() {
		if (this.type) {
			if (typeof this.type !== 'string') {
				throw new TypeError('DiscordCommand `type` prop must be a string.');
			} else if (!this.validCommandTypes.has(this.type)) {
				throw new RangeError("DiscordCommand `type` prop must be one of: 'uer_command', 'message_command' or 'slash_command'");
			}
		}
	}

	private resolveAvatar(avatar: string): string {
		return avatars[avatar] ?? avatar ?? avatars.default;
	}

	protected override render() {
		this.checkType();
		const defaultData: Profile = { author: this.author, bot: false, verified: false, server: false, roleColor: this.roleColor };
		const profileData: Profile = Reflect.get(profiles, this.profile) ?? {};
		const profile: Profile = { ...defaultData, ...profileData, avatar: this.resolveAvatar(profileData.avatar ?? this.avatar) };

		const defaultDataContext: Profile = {
			author: this.contextUserName,
			bot: this.contextUserBot,
			verified: this.contextUserBotVerified,
			server: false,
			roleColor: this.contextUserRoleColor
		};
		const profileDataContext: Profile = Reflect.get(profiles, this.contextUserProfile) ?? {};
		const profileContext: Profile = {
			...defaultDataContext,
			...profileDataContext,
			avatar: this.resolveAvatar(profileDataContext.avatar ?? this.contextUserAvatar)
		};

		const contentContextMessage = this.contextMessageDeleted
			? html`<em class="discord-message-deleted">Original message was deleted</em>`
			: this.contextMessageReply;

		return html`
			${when(
				this.compactMode,
				() => html`<div class="discord-reply-badge">${CommandIcon()}</div>`,
				() => html`<img class="discord-replied-message-avatar" src="${ifDefined(profile.avatar)}" alt="${ifDefined(profile.author)}" />`
			)}
			<span class="discord-replied-message-username" style=${styleMap({ color: profile.roleColor ?? '' })}>${profile.author}</span>
			<span> used </span>
			${when(
				this.type === 'slash_command',
				() =>
					html`<div class="discord-replied-message-content discord-slash-command-name">
						${CommandIconName()}<span>${this.command}</span>
					</div>`
			)}
			${when(
				this.type === 'user_command',
				() =>
					html`<div class="discord-replied-message-content discord-context-command-name"><span>${this.command}</span></div>
						${ExpandMore({ class: 'discord-arrow-right-icon' })}
						<div class="discord-context-user">
							${when(
								!this.compactMode,
								() =>
									html`<img
										class="discord-replied-message-avatar"
										src="${ifDefined(profileContext.avatar)}"
										alt="${ifDefined(profileContext.author)}"
									/>`
							)}
							<span class="discord-replied-message-username" style=${styleMap({ color: profileContext.roleColor ?? '' })}
								>${profileContext.author}</span
							>
						</div>`
			)}
			${when(
				this.type === 'message_command',
				() =>
					html`<div class="discord-replied-message-content discord-context-command-name"><span>${this.command}</span></div>
						${ExpandMore({ class: 'discord-arrow-right-icon' })}
						${when(
							!this.contextMessageDeleted,
							() =>
								html`<div class="discord-context-user">
									${when(!this.compactMode, () =>
										when(
											!this.contextUserOfficialApplication,
											() =>
												html`<img
													class="discord-replied-message-avatar"
													src="${ifDefined(profileContext.avatar)}"
													alt="${ifDefined(profileContext.author)}"
												/>`,
											() => html`<img class="discord-replied-message-avatar" src="${avatars.blue}" alt="OFFICIALAPPLICATION" />`
										)
									)}
									${when(
										profileContext.bot,
										() => html`<span class="discord-application-tag">${profileContext.verified ? VerifiedTick() : ''}App</span>`,
										() =>
											when(
												this.contextUserServer,
												() => html`<span class="discord-application-tag">SERVER</span>`,
												() =>
													when(
														this.contextUserOfficialApplication,
														() => html`<span class="discord-application-tag">${VerifiedTick()}OFFICIAL</span>`
													)
											)
									)}
									<span class="discord-replied-message-username" style=${styleMap({ color: profileContext.roleColor ?? '' })}
										>${profileContext.author}</span
									><span> </span>
								</div>`,
							() =>
								when(this.contextMessageDeleted, () =>
									MessageIcon({ class: 'discord-message-margintop', style: 'margin-right: 3px;' })
								)
						)}
						<div class="discord-replied-message-content discord-message-margintop">${contentContextMessage}</div>
						${when(
							this.contextCommandReply && !this.contextMessageDeleted,
							() => CommandReply({ class: 'discord-replied-message-content-icon discord-message-margintop' }),
							() =>
								when(this.contextAttachmentReply, () =>
									AttachmentReply({ class: 'discord-replied-message-content-icon discord-message-margintop' })
								)
						)} `
			)}
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-command': DiscordCommand;
	}
}

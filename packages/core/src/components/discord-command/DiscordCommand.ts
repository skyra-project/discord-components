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
import CommandIcon from '../svgs/CommandIcon.js';
import CommandIconName from '../svgs/CommandIconName.js';
import ExpandMore from '../svgs/ExpandMore.js';

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

			:host .discord-replied-message-username {
				margin-right: 0;
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
	public accessor type: 'context_menu' | 'slash_command' = 'slash_command';

	/**
	 * The name of user mentioned in context menu
	 */
	@property({ attribute: 'context-user-name' })
	public accessor context_user_name: string;

	/**
	 * The image of user mentioned in context menu
	 */
	@property({ attribute: 'context-user-image' })
	public accessor context_user_image: string;

	/**
	 * The role color of user mentioned in context menu
	 */
	@property({ attribute: 'context-user-role-color' })
	public accessor context_user_role_color: string;

	/**
	 * Whether to use compact mode or not.
	 */
	@consume({ context: messagesCompactMode })
	@property({ type: Boolean, reflect: true, attribute: 'compact-mode' })
	public accessor compactMode = false;

	@consume({ context: messagesLightTheme })
	@property({ type: Boolean, reflect: true, attribute: 'light-theme' })
	public accessor lightTheme = false;

	private readonly validButtonTypes = new Set(['context_menu', 'slash_command']);

	public checkType() {
		if (this.type) {
			if (typeof this.type !== 'string') {
				throw new TypeError('DiscordCommand `type` prop must be a string.');
			} else if (!this.validButtonTypes.has(this.type)) {
				throw new RangeError("DiscordCommand `type` prop must be one of: 'context_menu', 'slash_command'");
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
				this.type === 'context_menu',
				() =>
					html`<div class="discord-replied-message-content discord-context-command-name"><span>${this.command}</span></div>
						${ExpandMore({ class: 'discord-arrow-right-icon' })}
						<div class="discord-context-user">
							${when(
								!this.compactMode,
								() =>
									html`<img
										class="discord-replied-message-avatar"
										src="${ifDefined(this.context_user_image)}"
										alt="${ifDefined(this.context_user_name)}"
									/>`
							)}<span class="discord-replied-message-username" style=${styleMap({ color: this.context_user_role_color ?? '' })}
								>${this.context_user_name}</span
							>
						</div>`
			)}
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-command': DiscordCommand;
	}
}

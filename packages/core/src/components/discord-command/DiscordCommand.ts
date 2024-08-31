import { consume } from '@lit/context';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { when } from 'lit/directives/when.js';
import { avatars, profiles } from '../../config.js';
import { translate } from '../../i18n/lit-integration.js';
import type { LightTheme, Profile } from '../../types.js';
import { messagesCompactMode, messagesLightTheme } from '../discord-messages/DiscordMessages.js';
import { DiscordReply } from '../discord-reply/DiscordReply.js';
import CommandIcon from '../svgs/CommandIcon.js';

@customElement('discord-command')
export class DiscordCommand extends LitElement implements LightTheme {
	/**
	 * @internal
	 */
	public static override readonly styles = [
		DiscordReply.styles,
		css`
			:host .discord-command-name {
				color: #00aff4;
				font-weight: 500;
			}

			:host .discord-command-name:hover {
				color: #00aff4;
				text-decoration: underline;
			}

			:host .discord-replied-message-username {
				margin-right: 0;
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
	 * Whether to use compact mode or not.
	 */
	@consume({ context: messagesCompactMode })
	@property({ type: Boolean, reflect: true, attribute: 'compact-mode' })
	public accessor compactMode = false;

	@consume({ context: messagesLightTheme })
	@property({ type: Boolean, reflect: true, attribute: 'light-theme' })
	public accessor lightTheme = false;

	private resolveAvatar(avatar: string): string {
		return avatars[avatar] ?? avatar ?? avatars.default;
	}

	protected override render() {
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
			<span> ${translate('discord-command.used')} </span>
			<div class="discord-replied-message-content discord-command-name">${this.command}</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-command': DiscordCommand;
	}
}

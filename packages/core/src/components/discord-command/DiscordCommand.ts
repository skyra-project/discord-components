import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { avatars, Profile, profiles } from '../../options.js';
import { DiscordReply } from '../discord-reply/DiscordReply.js';
import CommandIcon from '../svgs/CommandIcon.js';

@customElement('discord-command')
export class DiscordCommand extends LitElement {
	public static override styles = [
		DiscordReply.styles,
		css`
			.discord-replied-message.discord-executed-command .discord-command-name {
				color: #00aff4;
				font-weight: 500;
			}

			.discord-replied-message.discord-executed-command .discord-command-name:hover {
				color: #00aff4;
				text-decoration: underline;
			}

			.discord-replied-message.discord-executed-command .discord-replied-message-username {
				margin-right: 0;
			}
		`
	];

	/**
	 * The id of the profile data to use.
	 */
	@property({ attribute: 'profile' })
	public profile: string;

	/**
	 * The message author's username.
	 * @default 'User'
	 */
	@property({ attribute: 'author' })
	public author = 'User';

	/**
	 * The message author's avatar. Can be an avatar shortcut, relative path, or external link.
	 */
	@property({ attribute: 'avatar' })
	public avatar: string;

	/**
	 * The message author's primary role color.
	 * Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp).
	 */
	@property({ attribute: 'role-color' })
	public roleColor: string;

	/**
	 * The name of the command invoked.
	 */
	@property({ attribute: 'command' })
	public command: string;

	protected override render() {
		const parent = this.parentElement;
		if (this.parentElement?.tagName.toLowerCase() !== 'discord-message') {
			throw new Error('All <discord-command> components must be direct children of <discord-message>.');
		}

		const resolveAvatar = (avatar: string): string => avatars[avatar] ?? avatar ?? avatars.default;

		const defaultData: Profile = { author: this.author, bot: false, verified: false, server: false, roleColor: this.roleColor };
		const profileData: Profile = Reflect.get(profiles, this.profile) ?? {};
		const profile: Profile = { ...defaultData, ...profileData, ...{ avatar: resolveAvatar(profileData.avatar ?? this.avatar) } };

		const messageParent = parent?.parentElement as any;

		return html`
			<div class="discord-reply discord-replied-message discord-executed-command">
				${messageParent?.compactMode
					? html`<div class="discord-reply-badge">${CommandIcon()}</div>`
					: html`<img class="discord-replied-message-avatar" src="${ifDefined(profile.avatar)}" alt="${ifDefined(profile.author)}" />`}
				<span class="discord-replied-message-username" style=${styleMap({ color: profile.roleColor ?? '' })}>${profile.author}</span>
				<span> used </span>
				<div class="discord-replied-message-content discord-command-name">${this.command}</div>
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-command': DiscordCommand;
	}
}

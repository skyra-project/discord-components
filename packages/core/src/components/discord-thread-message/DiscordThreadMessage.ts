import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { avatars, Profile, profiles } from '../../options.js';
import VerifiedTick from '../svgs/VerifiedTick.js';

@customElement('discord-thread-message')
export class DiscordThreadMessage extends LitElement {
	public static override styles = css`
		.discord-thread-message {
			height: 18px;
			min-width: 0;
			display: flex;
			align-items: center;
			font-size: 0.875rem;
			line-height: 1.125rem;
		}

		.discord-thread-message .discord-thread-message-avatar {
			margin-right: 8px;
			flex: 0 0 auto;
			width: 16px;
			height: 16px;
			border-radius: 50%;
			user-select: none;
		}

		.discord-thread-message .discord-thread-message-username {
			flex-shrink: 0;
			font-size: inherit;
			line-height: inherit;
			margin-right: 0.25rem;
			opacity: 0.64;
			color: white;
			display: inline;
			vertical-align: baseline;
			position: relative;
			overflow: hidden;
		}

		.discord-light-theme .discord-thread-message .discord-thread-message-username {
			color: #060607;
		}

		.discord-thread-message .discord-application-tag {
			background-color: #5865f2;
			color: #fff;
			font-size: 0.65em;
			margin-right: 5px;
			border-radius: 3px;
			line-height: 100%;
			text-transform: uppercase;
			display: flex;
			align-items: center;
			height: 0.9375rem;
			padding: 0 0.275rem;
			margin-top: 0.075em;
			border-radius: 0.1875rem;
		}

		.discord-thread-message .discord-application-tag-verified {
			display: inline-block;
			width: 0.9375rem;
			height: 0.9375rem;
			margin-left: -0.25rem;
		}

		.discord-thread-message .discord-thread-message-content {
			display: flex;
			align-items: baseline;
		}

		.discord-thread-message .discord-message-edited {
			color: #72767d;
			font-size: 10px;
			margin-left: 5px;
		}

		.discord-thread-message .discord-thread-message-timestamp {
			color: #72767d;
			flex-shrink: 0;
			margin-left: 8px;
			font-size: 0.875rem;
			line-height: 1.125rem;
		}

		.discord-light-theme .discord-thread-message .discord-thread-message-timestamp,
		.discord-light-theme .discord-thread-message .discord-message-edited {
			color: #747f8d;
		}
	`;

	/**
	 * The id of the profile data to use.
	 */
	@property()
	public profile: string;

	/**
	 * The message author's username.
	 * @default 'User'
	 */
	@property()
	public author = 'User';

	/**
	 * The message author's avatar. Can be an avatar shortcut, relative path, or external link.
	 */
	@property()
	public avatar: string;

	/**
	 * Whether the message author is a bot or not.
	 * Only works if `server` is `false` or `undefined`.
	 */
	@property({ type: Boolean })
	public bot = false;

	/**
	 * Whether the message author is a server crosspost webhook or not.
	 * Only works if `bot` is `false` or `undefined`.
	 */
	@property({ type: Boolean })
	public server = false;

	/**
	 * Whether the bot is verified or not.
	 * Only works if `bot` is `true`
	 */
	@property({ type: Boolean })
	public verified = false;

	/**
	 * Whether the message has been edited or not.
	 */
	@property({ type: Boolean })
	public edited = false;

	/**
	 * The message author's primary role color. Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp).
	 */
	@property({ attribute: 'role-color' })
	public roleColor: string;

	/**
	 * The relative timestamp of the message.
	 */
	@property({ attribute: 'relative-timestamp' })
	public relativeTimestamp = '1m ago';

	protected override render() {
		const resolveAvatar = (avatar: string): string => avatars[avatar] ?? avatar ?? avatars.default;

		const defaultData: Profile = { author: this.author, bot: this.bot, verified: this.verified, server: this.server, roleColor: this.roleColor };
		const profileData: Profile = Reflect.get(profiles, this.profile) ?? {};
		const profile: Profile = { ...defaultData, ...profileData, ...{ avatar: resolveAvatar(profileData.avatar ?? this.avatar) } };

		return html`
			<div class="discord-thread-message">
				<img src=${ifDefined(profile.avatar)} class="discord-thread-message-avatar" alt=${ifDefined(profile.author)} />
				${html`
					${profile.bot && !profile.server
						? html` <span class="discord-application-tag"> ${profile.verified ? VerifiedTick() : ''} Bot </span> `
						: ''}
					${profile.server && !profile.bot ? html`<span class="discord-application-tag">Server</span>` : ''}
				`}
				<span class="discord-thread-message-username" style=${styleMap({ color: profile.roleColor })}> ${profile.author} </span>
				<div class="discord-thread-message-content">
					<slot></slot>
					${this.edited ? html`<span class="discord-message-edited">(edited)</span>` : ''}
				</div>
				<span class="discord-thread-message-timestamp">${this.relativeTimestamp}</span>
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-thread-message': DiscordThreadMessage;
	}
}

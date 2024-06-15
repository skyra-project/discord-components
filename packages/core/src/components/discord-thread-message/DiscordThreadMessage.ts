import { consume } from '@lit/context';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { when } from 'lit/directives/when.js';
import { avatars, profiles } from '../../config.js';
import { messagesLightTheme } from '../discord-messages/DiscordMessages.js';
import VerifiedTick from '../svgs/VerifiedTick.js';
import type { LightTheme, Profile } from '../../types.js';

@customElement('discord-thread-message')
export class DiscordThreadMessage extends LitElement implements LightTheme {
	public static override readonly styles = css`
		:host {
			height: 18px;
			min-width: 0;
			display: flex;
			align-items: center;
			font-size: 0.875rem;
			line-height: 1.125rem;
		}

		:host .discord-thread-message-avatar {
			margin-right: 8px;
			flex: 0 0 auto;
			width: 16px;
			height: 16px;
			border-radius: 50%;
			user-select: none;
		}

		:host .discord-thread-message-username {
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

		:host([light-theme]) .discord-thread-message-username {
			color: #060607;
		}

		:host .discord-application-tag {
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

		:host .discord-application-tag-verified {
			display: inline-block;
			width: 0.9375rem;
			height: 0.9375rem;
			margin-left: -0.25rem;
		}

		:host .discord-thread-message-content {
			display: flex;
			align-items: baseline;
		}

		:host .discord-message-edited {
			color: #72767d;
			font-size: 10px;
			margin-left: 5px;
		}

		:host .discord-thread-message-timestamp {
			color: #72767d;
			flex-shrink: 0;
			margin-left: 8px;
			font-size: 0.875rem;
			line-height: 1.125rem;
		}

		:host([light-theme]) .discord-thread-message-timestamp,
		:host([light-theme]) .discord-message-edited {
			color: #747f8d;
		}
	`;

	/**
	 * The id of the profile data to use.
	 */
	@property()
	public accessor profile: string;

	/**
	 * The message author's username.
	 * @default 'User'
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
	@property({ attribute: 'role-color' })
	public accessor roleColor: string;

	/**
	 * The relative timestamp of the message.
	 */
	@property({ attribute: 'relative-timestamp' })
	public accessor relativeTimestamp = '1m ago';

	@consume({ context: messagesLightTheme })
	@property({ type: Boolean, reflect: true, attribute: 'light-theme' })
	public accessor lightTheme = false;

	protected override render() {
		const resolveAvatar = (avatar: string): string => avatars[avatar] ?? avatar ?? avatars.default;

		const defaultData: Profile = { author: this.author, bot: this.bot, verified: this.verified, server: this.server, roleColor: this.roleColor };
		const profileData: Profile = Reflect.get(profiles, this.profile) ?? {};
		const profile: Profile = { ...defaultData, ...profileData, ...{ avatar: resolveAvatar(profileData.avatar ?? this.avatar) } };

		return html`<img src=${ifDefined(profile.avatar)} class="discord-thread-message-avatar" alt=${ifDefined(profile.author)} />
			${when(
				profile.bot && !profile.server,
				() => html`<span class="discord-application-tag"> ${profile.verified ? VerifiedTick() : null} App </span>`
			)}
			${when(profile.server && !profile.bot, () => html`<span class="discord-application-tag">Server</span>`)}
			<span class="discord-thread-message-username" style=${styleMap({ color: profile.roleColor })}> ${profile.author} </span>
			<div class="discord-thread-message-content">
				<slot></slot>
				${when(this.edited, () => html`<span class="discord-message-edited">(edited)</span>`)}
			</div>
			<span class="discord-thread-message-timestamp">${this.relativeTimestamp}</span>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-thread-message': DiscordThreadMessage;
	}
}

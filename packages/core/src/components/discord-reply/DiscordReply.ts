import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { Profile, avatars, profiles } from '../../options.js';
import { DiscordAuthorInfo } from '../discord-author-info/DiscordAuthorInfo.js';
import AttachmentReply from '../svgs/AttachmentReply.js';
import CommandReply from '../svgs/CommandReply.js';
import ReplyIcon from '../svgs/ReplyIcon.js';
import VerifiedTick from '../svgs/VerifiedTick.js';

@customElement('discord-reply')
export class DiscordReply extends LitElement {
	public static override styles = [
		DiscordAuthorInfo.styles,
		css`
			.discord-reply .discord-replied-message {
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

			.discord-light-theme .discord-replied-message {
				color: #4f5660;
			}

			.discord-compact-mode .discord-replied-message {
				margin-left: 62px;
				margin-bottom: 0;
			}

			.discord-replied-message:before {
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
				border-left: 2px solid #4f545c;
				border-bottom: 0 solid #4f545c;
				border-right: 0 solid #4f545c;
				border-top: 2px solid #4f545c;
				border-top-left-radius: 6px;
			}

			.discord-light-theme .discord-replied-message:before {
				border-color: #747f8d;
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

			.discord-light-theme .discord-replied-message .discord-reply-badge {
				color: #4f5660;
				background: #e3e5e8;
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

			.discord-replied-message-content {
				color: inherit;
				font-size: inherit;
				line-height: inherit;
				white-space: pre;
				text-overflow: ellipsis;
				user-select: none;
				cursor: pointer;
			}

			.discord-replied-message-content:hover {
				color: #fff;
			}

			.discord-light-theme .discord-replied-message .discord-replied-message-content:hover {
				color: #000;
			}

			.discord-replied-message .discord-replied-message-content .discord-message-edited {
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
		`
	];

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
	 * Whether the author is the original poster.
	 */
	@property({ type: Boolean })
	public op = false;

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
	@property()
	public roleColor: string;

	/**
	 * Whether the referenced message is from a response of a slash command.
	 */
	@property({ type: Boolean })
	public command = false;

	/**
	 * Whether the referenced message contains attachments.
	 */
	@property({ type: Boolean })
	public attachment = false;

	/**
	 * Whether this reply pings the original message sender, prepending an "@" on the author's username.
	 */
	@property({ type: Boolean })
	public mentions = false;

	protected override render() {
		const parent = this.parentElement;

		if (!parent || parent.tagName.toLowerCase() !== 'discord-message') {
			throw new Error('All <discord-reply> components must be direct children of <discord-message>.');
		}

		const resolveAvatar = (avatar: string): string => avatars[avatar] ?? avatar ?? avatars.default;

		const defaultData: Profile = {
			author: this.author,
			bot: this.bot,
			verified: this.verified,
			op: this.op,
			server: this.server,
			roleColor: this.roleColor
		};
		const profileData: Profile = Reflect.get(profiles, this.profile) ?? {};
		const profile: Profile = { ...defaultData, ...profileData, ...{ avatar: resolveAvatar(profileData.avatar ?? this.avatar) } };

		const messageParent = parent.parentElement as any;

		return html`
			<div class="discord-replied-message">
				${messageParent.compactMode
					? html` <div class="discord-reply-badge">${ReplyIcon()}</div> `
					: html` <img class="discord-replied-message-avatar" src="${ifDefined(profile.avatar)}" alt="${ifDefined(profile.author)}" /> `}
				${html`
					${profile.bot && !profile.server
						? html` <span class="discord-application-tag"> ${profile.verified ? VerifiedTick() : ''} Bot </span>`
						: ''}
					${profile.server && !profile.bot ? html`<span class="discord-application-tag">Server</span>` : ''}
					${profile.op ? html` <span class="discord-application-tag discord-application-tag-op">OP</span>` : ''}
				`}
				<span class="discord-replied-message-username" style=${styleMap({ color: profile.roleColor ?? '' })}>
					${this.mentions ? '@' : ''}${profile.author}
				</span>
				<div class="discord-replied-message-content">
					<slot></slot>${this.edited ? html` <span class="discord-message-edited">(edited)</span>` : ''}
				</div>
				${this.command
					? CommandReply({ class: 'discord-replied-message-content-icon' })
					: html` ${this.attachment ? AttachmentReply({ class: 'discord-replied-message-content-icon' }) : ''} `}
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-reply': DiscordReply;
	}
}

import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { avatars, profiles, type Profile } from '../../options.js';
import { handleTimestamp, type DiscordTimestamp } from '../../util.js';
import '../discord-author-info/DiscordAuthorInfo.js';
import type { DiscordMessages } from '../discord-messages/DiscordMessages.js';
import Ephemeral from '../svgs/Ephemeral.js';

interface DiscordMessageProps {
	profile: string | undefined;
	author: string | undefined;
	avatar: string | undefined;
	bot: boolean;
	server: boolean;
	verified: boolean;
	op: boolean;
	edited: boolean;
	roleColor: string | undefined;
	roleIcon: string | undefined;
	roleName: string | undefined;
	highlight: boolean;
	ephemeral: boolean;
	timestamp: DiscordTimestamp;
	twentyFour: boolean;
	lightTheme: boolean;
	compactMode: boolean;
}

@customElement('discord-message')
export class DiscordMessage extends LitElement implements DiscordMessageProps {
	public static override styles = css`
		.discord-message {
			color: #dcddde;
			display: flex;
			flex-direction: column;
			font-size: 0.9em;
			font-family: 'gg sans', 'Noto Sans', Whitney, 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
			padding: 0px 1em;

			position: relative;
			word-wrap: break-word;
			-webkit-user-select: text;
			-moz-user-select: text;
			-ms-user-select: text;
			user-select: text;
			-webkit-box-flex: 0;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
			padding-right: 0;
			min-height: 1.375rem;
			padding-right: 48px !important;
			margin-top: inherit;
			margin-bottom: inherit;
		}

		.discord-message-inner {
			display: flex;
			position: relative;
			-webkit-box-flex: 0;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
		}

		.discord-highlight-mention,
		.discord-highlight-ephemeral {
			padding-right: 5px;
			position: relative;
		}

		.discord-highlight-mention::before,
		.discord-highlight-ephemeral::before {
			content: '';
			position: absolute;
			display: block;
			top: 0;
			left: 0;
			bottom: 0;
			pointer-events: none;
			width: 2px;
		}

		.discord-highlight-mention {
			background-color: rgba(250, 166, 26, 0.1);
		}

		.discord-light-theme .discord-highlight-mention {
			background-color: rgba(250, 166, 26, 0.1);
		}

		.discord-highlight-mention:hover {
			background-color: rgba(250, 166, 26, 0.08);
		}

		.discord-light-theme .discord-highlight-mention:hover {
			background-color: rgba(250, 166, 26, 0.2);
		}

		.discord-highlight-mention::before {
			background-color: #faa61a;
		}

		.discord-highlight-ephemeral {
			background-color: rgba(88, 101, 242, 0.05);
		}

		.discord-light-theme .discord-highlight-ephemeral {
			background-color: rgba(250, 166, 26, 0.1);
		}

		.discord-highlight-ephemeral:hover {
			background-color: rgba(88, 101, 242, 0.1);
		}

		.discord-highlight-ephemeral::before {
			background-color: #5865f2;
		}

		.discord-light-theme {
			color: #2e3338;
			border-color: #eceeef;
		}

		a {
			color: #00aff4;
			font-weight: normal;
			text-decoration: none;
		}

		a:hover {
			text-decoration: underline;
		}

		.discord-light-theme a {
			color: #00b0f4;
		}

		a:hover {
			text-decoration: underline;
		}

		.discord-author-avatar {
			margin-right: 16px;
			margin-top: 5px;
			min-width: 40px;
			z-index: 1;
		}

		.discord-author-avatar img {
			width: 40px;
			height: 40px;
			border-radius: 50%;
		}

		.discord-message-timestamp {
			color: #72767d;
			font-size: 12px;
			margin-left: 3px;
		}

		.discord-light-theme .discord-message-timestamp {
			color: #747f8d;
		}

		.discord-message-edited {
			color: #72767d;
			font-size: 10px;
		}

		.discord-light-theme .discord-message-edited {
			color: #99aab5;
		}

		.discord-message-content {
			width: 100%;
			line-height: 160%;
			font-weight: normal;
			padding-top: 2px;
		}

		.discord-message-body {
			font-size: 1rem;
			font-weight: 400;
			word-break: break-word;
			position: relative;
		}

		.discord-message-body strong {
			font-weight: 700;
		}

		.discord-message-body em {
			font-style: italic;
		}

		.discord-message-body u {
			text-decoration-color: rgb(220, 221, 222);
			text-decoration-line: underline;
			text-decoration-style: solid;
			text-decoration-thickness: auto;
		}

		.discord-message-body pre {
			border: 1px solid #202225;
			border-radius: 4px;
		}

		.discord-light-theme .discord-message-timestamp,
		.discord-compact-mode .discord-message:hover .discord-message-timestamp,
		.discord-compact-mode.discord-light-theme .discord-message:hover .discord-message-timestamp {
			color: #99aab5;
		}

		.discord-compact-mode.discord-light-theme .discord-message-timestamp {
			color: #d1d9de;
		}

		.discord-compact-mode .discord-message-timestamp {
			display: inline-block;
			width: 3.1rem;
			text-align: right;
			font-size: 0.6875rem;
			line-height: 1.375rem;
			margin-right: 0.25rem;
			margin-left: 0;
			text-indent: 0;
		}

		.discord-compact-mode {
			margin-top: unset;
		}

		.discord-compact-mode .discord-message-body {
			line-height: 1.375rem;
			padding-left: 10px;
			text-indent: -6px;
		}

		.discord-compact-mode .discord-message-content {
			margin-left: 8px;
		}

		.discord-compact-mode .discord-message-compact-indent {
			padding-left: 10px;
		}

		.discord-message-markup {
			font-size: 1rem;
			line-height: 1.375rem;
			word-wrap: break-word;
			user-select: text;
			font-weight: 400;
		}

		.discord-message:hover {
			background-color: rgba(4, 4, 5, 0.07);
		}

		.discord-light-theme.discord-message:hover {
			background-color: rgba(6, 6, 7, 0.02);
		}

		.discord-message-has-thread:after {
			width: 2rem;
			left: 2.2rem;
			top: 1.75rem;
			border-left: 2px solid #4f545c;
			border-bottom: 2px solid #4f545c;
			border-bottom-left-radius: 8px;
			bottom: 29px;
			content: '';
			position: absolute;
		}

		.discord-light-theme.discord-message-has-thread:after {
			border-color: #747f8d;
		}

		.discord-message-ephemeral {
			color: #72767d;
			margin-top: 4px;
			font-size: 12px;
			font-weight: 400;
			color: #72767d;
		}

		.discord-light-theme.discord-message-ephemeral {
			color: #747f8d;
		}

		.discord-message-ephemeral .discord-message-ephemeral-link {
			color: #00aff4;
			font-weight: 500;
			cursor: pointer;
		}

		.discord-message-ephemeral .discord-message-ephemeral-link:hover {
			text-decoration: underline;
		}

		.discord-message-ephemeral .discord-message-ephemeral-icon {
			margin-right: 4px;
			vertical-align: text-bottom;
		}
	`;

	/**
	 * The id of the profile data to use.
	 */
	@property({ type: String })
	public profile: string | undefined = undefined;

	/**
	 * The message author's username.
	 * @default 'User'
	 */
	@property({ type: String })
	public author: string | undefined = 'User';

	/**
	 * The message author's avatar. Can be an avatar shortcut, relative path, or external link.
	 */
	@property({ type: String })
	public avatar: string | undefined = undefined;

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
	 * Whether the author is the original poster.
	 */
	@property({ type: Boolean })
	public op = false;

	/**
	 * Whether the message has been edited or not.
	 */
	@property({ type: Boolean })
	public edited = false;

	/**
	 * The message author's primary role color. Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp).
	 */
	@property({ type: String, attribute: 'role-color' })
	public roleColor: string | undefined = undefined;

	/**
	 * The message author's role icon URL.
	 */
	@property({ type: String, attribute: 'role-icon' })
	public roleIcon: string | undefined = undefined;

	/**
	 * The name of the role to use as alternative image text.
	 */
	@property({ type: String, attribute: 'role-name' })
	public roleName: string | undefined = undefined;

	/**
	 * Whether to highlight this message.
	 */
	@property({ type: Boolean })
	public highlight = false;

	/**
	 * Whether to make this message ephemeral.
	 */
	@property({ type: Boolean })
	public ephemeral = false;

	/**
	 * The timestamp to use for the message date.
	 */
	@property({
		type: String,
		converter: (value) => handleTimestamp(value, false, false),
		attribute: true
	})
	public timestamp: DiscordTimestamp = new Date();

	/**
	 * Whether to use 24-hour format for the timestamp.
	 */
	@property({ type: Boolean, attribute: 'twenty-four' })
	public twentyFour = false;

	@state()
	public lightTheme = false;

	@state()
	public compactMode = false;

	protected override render() {
		const parent = this.parentElement as DiscordMessages | null;

		if (!parent || parent.tagName.toLowerCase() !== 'discord-messages') {
			throw new Error('All <discord-message> components must be direct children of <discord-messages>.');
		}

		const resolveAvatar = (avatar: string | undefined): string =>
			avatar === undefined ? avatars.default : avatars[avatar] ?? avatar ?? avatars.default;

		const defaultData: Profile = {
			author: this.author,
			bot: this.bot,
			verified: this.verified,
			server: this.server,
			op: this.op,
			roleColor: this.roleColor,
			roleIcon: this.roleIcon,
			roleName: this.roleName
		};

		const profileData: Profile = ((this.profile !== undefined && Reflect.get(profiles, this.profile)) as Profile) || {};
		const profile: Profile = { ...defaultData, ...profileData, ...{ avatar: resolveAvatar(profileData.avatar ?? this.avatar) } };

		const highlightMention: boolean =
			Array.from(this.children).some(
				(child): boolean =>
					child.tagName.toLowerCase() === 'discord-mention' &&
					child.hasAttribute('highlight') &&
					(child.getAttribute('type') === 'user' || child.getAttribute('type') === 'role')
			) || this.highlight;

		const hasThread: boolean = Array.from(this.children).some((child): boolean => child.tagName.toLowerCase() === 'discord-thread');

		const parentIsCompact = parent.compactMode ?? false;
		const parentHasNoBackground = parent.noBackground ?? false;
		const parentIsLightMode = parent.lightTheme ?? false;

		this.lightTheme = parentIsLightMode;
		this.compactMode = parentIsCompact;

		const computedTimestamp = handleTimestamp(this.timestamp, this.parentElement?.hasAttribute('compact-mode'), this.twentyFour);

		return html`
			<div
				class=${classMap({
					'discord-message': true,
					'discord-highlight-mention': highlightMention,
					'discord-message-has-thread': hasThread,
					'discord-highlight-ephemeral': this.ephemeral,
					'discord-light-theme': parentIsLightMode,
					'discord-compact-mode': parentIsCompact,
					'discord-no-background': parentHasNoBackground
				})}
			>
				<slot name="reply"></slot>
				<div class="discord-message-inner">
					${parentIsCompact ? html`<span class="discord-message-timestamp">${computedTimestamp}</span>` : null}
					${parentIsCompact
						? null
						: html`<div class="discord-author-avatar">
								<img src="${ifDefined(profile.avatar)}" alt="${ifDefined(profile.author)}" />
						  </div>`}

					<div class="discord-message-content">
						${parentIsCompact
							? null
							: html`
									<discord-author-info
										author=${profile.author ?? ''}
										?bot=${profile.bot ?? false}
										?server=${profile.server ?? false}
										?verified=${profile.verified ?? false}
										?op=${profile.op ?? false}
										roleColor=${profile.roleColor ?? ''}
										roleIcon=${profile.roleIcon ?? ''}
										roleName=${profile.roleName ?? ''}
										?compact=${false}
									></discord-author-info>
									<span class="discord-message-timestamp">${computedTimestamp}</span>
							  `}
						<div class="discord-message-body">
							${parentIsCompact
								? html`<discord-author-info
										author=${profile.author ?? ''}
										?bot=${profile.bot ?? false}
										?server=${profile.server ?? false}
										?verified=${profile.verified ?? false}
										?op=${profile.op ?? false}
										roleColor=${profile.roleColor ?? ''}
										roleIcon=${profile.roleIcon ?? ''}
										roleName=${profile.roleName ?? ''}
										?compact=${true}
								  ></discord-author-info>`
								: null}
							<span class="discord-message-markup"> <slot></slot></span>${this.edited
								? html`<span class="discord-message-edited">(edited)</span>`
								: null}
						</div>
						<div class="discord-message-compact-indent">
							<slot name="embeds"></slot>
							<slot name="attachments"></slot>
							<slot name="components"></slot>
							<slot name="reactions"></slot>
							<slot name="thread"></slot>
							${this.ephemeral
								? html`
										<div class="discord-message-ephemeral">
											${Ephemeral()} Only you can see this •
											<span class="discord-message-ephemeral-link">Dismiss message</span>
										</div>
								  `
								: null}
						</div>
					</div>
				</div>
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-message': DiscordMessage;
	}
}

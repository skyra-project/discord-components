import { consume } from '@lit-labs/context';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { avatars, profiles, type Profile } from '../../options.js';
import { handleTimestamp, LightTheme, type DiscordTimestamp } from '../../util.js';
import '../discord-author-info/DiscordAuthorInfo.js';
import type { DiscordMention } from '../discord-mention/DiscordMention.js';
import { messagesCompactMode, messagesLightTheme, messagesNoBackground } from '../discord-messages/DiscordMessages.js';
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
export class DiscordMessage extends LitElement implements DiscordMessageProps, LightTheme {
	public static override styles = css`
		:host {
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

		:host([highlight]),
		:host([ephemeral]) {
			padding-right: 5px;
			position: relative;
		}

		:host([highlight])::before,
		:host([ephemeral])::before {
			content: '';
			position: absolute;
			display: block;
			top: 0;
			left: 0;
			bottom: 0;
			pointer-events: none;
			width: 2px;
		}

		:host([highlight]) {
			background-color: rgba(250, 166, 26, 0.1);
		}

		:host([highlight][light-theme]) {
			background-color: rgba(250, 166, 26, 0.1);
		}

		:host([highlight])::before {
			background-color: #faa61a;
		}

		:host([light-theme][highlight])::before {
			background-color: #af7615;
		}

		:host([ephemeral]) {
			background-color: rgba(88, 101, 242, 0.05);
		}

		:host([ephemeral]:hover) {
			background-color: rgba(88, 101, 242, 0.1);
		}

		:host([ephemeral])::before {
			background-color: #5865f2;
		}

		:host([light-theme]) {
			color: #2e3338;
			border-color: #eceeef;
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
			cursor: pointer;
		}

		.discord-message-timestamp {
			color: #72767d;
			font-size: 12px;
			margin-left: 3px;
		}

		:host([light-theme]) .discord-message-timestamp {
			color: #747f8d;
		}

		.discord-message-edited {
			color: #72767d;
			font-size: 10px;
		}

		:host([light-theme]) .discord-message-edited {
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

		:host([light-theme]) .discord-message-timestamp,
		:host([compact-mode]) .discord-message:hover .discord-message-timestamp {
			color: #99aab5;
		}

		:host([light-theme][compact-mode]).discord-message-timestamp {
			color: #d1d9de;
		}

		:host([compact-mode]) .discord-message-timestamp {
			display: inline-block;
			width: 3.1rem;
			text-align: right;
			font-size: 0.6875rem;
			line-height: 1.375rem;
			margin-right: 0.25rem;
			margin-left: 0;
			text-indent: 0;
		}

		:host([compact-mode]) .discord-message-body {
			line-height: 1.375rem;
			padding-left: 10px;
			text-indent: -6px;
		}

		:host([compact-mode]) .discord-message-compact-indent {
			padding-left: 10px;
		}

		:host .discord-message-markup {
			font-size: 1rem;
			line-height: 1.375rem;
			word-wrap: break-word;
			user-select: text;
			font-weight: 400;
			display: inline;
		}

		:host(:hover) {
			background-color: hsl(0 calc(1 * 0%) 0.8%/0.03);
		}

		:host([highlight]:hover) {
			background-color: hsl(40 calc(1 * 86.4%) 56.9%/0.08);
		}

		:host([has-Thread]):after {
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

		:host([light-theme][has-Thread]):after {
			border-color: #747f8d;
		}

		.discord-message-ephemeral {
			margin-top: 4px;
			font-size: 12px;
			font-weight: 400;
			color: #72767d;
		}

		:host([light-theme]) .discord-message-ephemeral {
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
	@property()
	public profile: string | undefined = undefined;

	/**
	 * The message author's username.
	 * @default 'User'
	 */
	@property()
	public author: string | undefined = 'User';

	/**
	 * The message author's avatar. Can be an avatar shortcut, relative path, or external link.
	 */
	@property()
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
	@property({ attribute: 'role-color' })
	public roleColor: string | undefined = undefined;

	/**
	 * The message author's role icon URL.
	 */
	@property({ attribute: 'role-icon' })
	public roleIcon: string | undefined = undefined;

	/**
	 * The name of the role to use as alternative image text.
	 */
	@property({ attribute: 'role-name' })
	public roleName: string | undefined = undefined;

	/**
	 * Whether to highlight this message.
	 */
	@property({ type: Boolean, reflect: true })
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

	@consume({ context: messagesLightTheme })
	@property({ type: Boolean, reflect: true, attribute: 'light-theme' })
	public lightTheme = false;

	@consume({ context: messagesCompactMode })
	@property({ type: Boolean, reflect: true, attribute: 'compact-mode' })
	public compactMode = false;

	@consume({ context: messagesNoBackground })
	@property({ type: Boolean, reflect: true, attribute: 'no-background' })
	public noBackground = false;

	@property({ type: Boolean, reflect: true, attribute: 'has-Thread' })
	public hasThread = false;

	protected override willUpdate(): void {
		this.hasThread = Array.from(this.children).some((child): boolean => child.tagName.toLowerCase() === 'discord-thread');
		this.highlight =
			this.highlight ||
			Array.from(this.children).some(
				(child): boolean =>
					child.tagName.toLowerCase() === 'discord-mention' &&
					child.hasAttribute('highlight') &&
					((child as DiscordMention).type === 'user' || (child as DiscordMention).type === 'role')
			);
	}

	protected override render() {
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

		const computedTimestamp = handleTimestamp(this.timestamp, this.compactMode, this.twentyFour);

		return html`
			<slot name="reply"></slot>
			<div class="discord-message-inner">
				${this.compactMode ? html`<span class="discord-message-timestamp">${computedTimestamp}</span>` : null}
				${this.compactMode
					? null
					: html`<div class="discord-author-avatar">
							<img src="${ifDefined(profile.avatar)}" alt="${ifDefined(profile.author)}" />
					  </div>`}

				<div class="discord-message-content">
					${this.compactMode
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
								></discord-author-info
								><span class="discord-message-timestamp">${computedTimestamp}</span>
						  `}
					<div class="discord-message-body">
						${this.compactMode
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
							: null}<span class="discord-message-markup"><slot></slot></span>
						${this.edited ? html`<span class="discord-message-edited">(edited)</span>` : null}
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
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-message': DiscordMessage;
	}
}

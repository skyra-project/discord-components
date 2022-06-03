import { css, html, LitElement, PropertyValueMap } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { avatars, profiles, type Profile } from '../../options.js';
import { DiscordTimestamp, handleTimestamp } from '../../util.js';
import { authorInfoStyles } from '../author-info/author-info-styles.js';
import '../author-info/AuthorInfo.js';
import type { DiscordMessages } from '../discord-messages/DiscordMessages.js';
import { Ephemeral } from '../svgs/Ephemeral.js';

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
}

@customElement('discord-message')
export class DiscordMessage extends LitElement implements DiscordMessageProps {
	public static override styles = [
		css`
			:host {
				color: #dcddde;
				display: flex;
				flex-direction: column;
				font-size: 0.9em;
				font-family: Whitney, Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
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
				margin-top: 1.0625rem;
			}

			discord-message .discord-message-inner {
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

			.discord-light-theme discord-message {
				color: #2e3338;
				border-color: #eceeef;
			}

			discord-message a {
				color: #00aff4;
				font-weight: normal;
				text-decoration: none;
			}

			discord-message a:hover {
				text-decoration: underline;
			}

			.discord-light-theme discord-message a {
				color: #00b0f4;
			}

			discord-message a:hover {
				text-decoration: underline;
			}

			discord-message .discord-author-avatar {
				margin-right: 16px;
				margin-top: 5px;
				min-width: 40px;
				z-index: 1;
			}

			discord-message .discord-author-avatar img {
				width: 40px;
				height: 40px;
				border-radius: 50%;
			}

			discord-message .discord-message-timestamp {
				color: #72767d;
				font-size: 12px;
				margin-left: 3px;
			}

			.discord-light-theme discord-message .discord-message-timestamp {
				color: #747f8d;
			}

			discord-message .discord-message-edited {
				color: #72767d;
				font-size: 10px;
			}

			.discord-light-theme discord-message .discord-message-edited {
				color: #99aab5;
			}

			discord-message .discord-message-content {
				width: 100%;
				line-height: 160%;
				font-weight: normal;
				padding-top: 2px;
			}

			discord-message .discord-message-body {
				font-size: 1rem;
				font-weight: 400;
				word-break: break-word;
				position: relative;
			}

			discord-message .discord-message-body strong {
				font-weight: 700;
			}

			discord-message .discord-message-body em {
				font-style: italic;
			}

			discord-message .discord-message-body u {
				text-decoration-color: rgb(220, 221, 222);
				text-decoration-line: underline;
				text-decoration-style: solid;
				text-decoration-thickness: auto;
			}

			discord-message .discord-message-body pre {
				border: 1px solid #202225;
				border-radius: 4px;
			}

			discord-message .discord-message-body code {
				background: #2f3136;
				white-space: break-spaces;
				font-family: Consolas, Andale Mono WT, Andale Mono, Lucida Console, Lucida Sans Typewriter, DejaVu Sans Mono, Bitstream Vera Sans Mono,
					Liberation Mono, Nimbus Mono L, Monaco, Courier New, Courier, monospace;
			}

			.discord-light-theme discord-message .discord-message-timestamp,
			.discord-compact-mode discord-message:hover .discord-message-timestamp,
			.discord-compact-mode.discord-light-theme discord-message:hover .discord-message-timestamp {
				color: #99aab5;
			}

			.discord-compact-mode.discord-light-theme discord-message .discord-message-timestamp {
				color: #d1d9de;
			}

			.discord-compact-mode discord-message .discord-message-timestamp {
				display: inline-block;
				width: 3.1rem;
				text-align: right;
				font-size: 0.6875rem;
				line-height: 1.375rem;
				margin-right: 0.25rem;
				margin-left: 0;
				text-indent: 0;
			}

			.discord-compact-mode discord-message {
				margin-top: unset;
			}

			.discord-compact-mode discord-message .discord-message-body {
				line-height: 1.375rem;
				padding-left: 10px;
				text-indent: -6px;
			}

			.discord-compact-mode discord-message .discord-message-compact-indent {
				padding-left: 10px;
			}

			discord-message:first-child {
				margin-top: 0.5rem;
			}

			discord-message:last-child {
				margin-bottom: 0.5rem;
				border-bottom-width: 0;
			}

			discord-message .discord-message-markup {
				font-size: 1rem;
				line-height: 1.375rem;
				word-wrap: break-word;
				user-select: text;
				font-weight: 400;
			}

			.discord-compact-mode .discord-author-avatar {
				display: none;
			}

			discord-message:hover {
				background-color: rgba(4, 4, 5, 0.07);
			}

			.discord-light-theme .discord-message:hover {
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

			.discord-light-theme .discord-message-has-thread:after {
				border-color: #747f8d;
			}

			discord-message-ephemeral {
				color: #72767d;
				margin-top: 4px;
				font-size: 12px;
				font-weight: 400;
				color: #72767d;
			}

			.discord-light-theme discord-message-ephemeral {
				color: #747f8d;
			}

			discord-message-ephemeral .discord-message-ephemeral-link {
				color: #00aff4;
				font-weight: 500;
				cursor: pointer;
			}

			discord-message-ephemeral .discord-message-ephemeral-link:hover {
				text-decoration: underline;
			}

			discord-message-ephemeral .discord-message-ephemeral-icon {
				margin-right: 4px;
				vertical-align: text-bottom;
			}
		`,
		authorInfoStyles
	];

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
	@property({ type: String })
	public roleColor: string | undefined = undefined;

	/**
	 * The message author's role icon URL.
	 */
	@property({ type: String })
	public roleIcon: string | undefined = undefined;

	/**
	 * The name of the role to use as alternative image text.
	 */
	@property({ type: String })
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
	@property({ type: Boolean })
	public twentyFour = false;

	protected override updated(changedProperties: PropertyValueMap<DiscordMessageProps>): void {
		if (changedProperties.has('timestamp')) {
			// @ts-expect-error Working on this
			this.timestamp = handleTimestamp(this.timestamp, this.parentElement?.compactMode ?? false, this.twentyFour);
		}
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

		const profileData: Profile = (this.profile !== undefined && Reflect.get(profiles, this.profile)) ?? {};
		const profile: Profile = { ...defaultData, ...profileData, ...{ avatar: resolveAvatar(profileData.avatar ?? this.avatar) } };

		const highlightMention: boolean =
			Array.from(this.children).some((child): boolean => {
				return child.tagName.toLowerCase() === 'discord-mention' /* && child.highlight && ['user', 'role'].includes(child.type)*/;
			}) || this.highlight;

		const hasThread: boolean = Array.from(this.children).some((child): boolean => {
			return child.tagName.toLowerCase() === 'discord-thread';
		});

		const parentIsCompact = (this.parentElement && Boolean((this.parentElement as DiscordMessages).compactMode)) ?? false;

		return html`
			<div
				class=${classMap({
					'discord-highlight-mention': highlightMention,
					'discord-message-has-thread': hasThread,
					'discord-highlight-ephemeral': this.ephemeral
				})}
			>
				<slot name="reply"></slot>
				<div class="discord-message-inner">
					${parentIsCompact ? html`<span class="discord-message-timestamp">{this.timestamp}</span>` : ''}

					<div class="discord-author-avatar">
						<img src="${ifDefined(profile.avatar)}" alt="${ifDefined(profile.author)}" />
					</div>
					<div class="discord-message-content">
						${parentIsCompact
							? ''
							: html`
									<div>
										<author-info
											author=${profile.author ?? ''}
											?bot=${profile.bot ?? false}
											?server=${profile.server ?? false}
											?verified=${profile.verified ?? false}
											?op=${profile.op ?? false}
											roleColor=${profile.roleColor ?? ''}
											roleIcon=${profile.roleIcon ?? ''}
											roleName=${profile.roleName ?? ''}
											?compact=${parentIsCompact}
										></author-info>
										<span class="discord-message-timestamp">${this.timestamp}</span>
									</div>
							  `}
						<div class="discord-message-body">
							${parentIsCompact
								? html`<author-info
										author=${profile.author ?? ''}
										?bot=${profile.bot ?? false}
										?server=${profile.server ?? false}
										?verified=${profile.verified ?? false}
										?op=${profile.op ?? false}
										roleColor=${profile.roleColor ?? ''}
										roleIcon=${profile.roleIcon ?? ''}
										roleName=${profile.roleName ?? ''}
										?compact=${parentIsCompact}
								  ></author-info>`
								: ''}
							<span class="discord-message-markup">
								<slot></slot>
							</span>
							${this.edited ? `<span class="discord-message-edited">(edited)</span>` : ''}
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
											${Ephemeral} Only you can see this •
											<span class="discord-message-ephemeral-link">Dismiss message</span>
										</div>
								  `
								: ''}
						</div>
					</div>
				</div>
			</div>
		`;
	}
}

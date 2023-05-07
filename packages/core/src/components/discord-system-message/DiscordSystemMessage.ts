import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { DiscordTimestamp, handleTimestamp } from '../../util.js';
import { DiscordAuthorInfo } from '../discord-author-info/DiscordAuthorInfo.js';
import type { DiscordMessages } from '../discord-messages/DiscordMessages.js';
import Boost from '../svgs/Boost.js';
import DMCall from '../svgs/DMCall.js';
import DMEdit from '../svgs/DMEdit.js';
import DMMissedCall from '../svgs/DMMissedCall.js';
import Pin from '../svgs/Pin.js';
import SystemAlert from '../svgs/SystemAlert.js';
import SystemError from '../svgs/SystemError.js';
import Thread from '../svgs/Thread.js';
import UserJoin from '../svgs/UserJoin.js';
import UserLeave from '../svgs/UserLeave.js';

@customElement('discord-system-message')
export class DiscordSystemMessage extends LitElement {
	public static override styles = [
		DiscordAuthorInfo.styles,
		css`
			.discord-system-message {
				color: #8e9297;
				display: flex;
				font-weight: 400;
				font-size: 1rem;
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
				margin-top: 1.0625rem;
			}

			.discord-light-theme.discord-system-message {
				color: #2e3338;
				border-color: #eceeef;
			}

			.discord-system-message.discord-channel-name-change {
				color: #fff;
			}

			.discord-light-theme.discord-system-message.discord-channel-name-change {
				color: #060607;
			}

			.discord-system-message.discord-boost-system-message svg {
				color: #ff73fa;
			}

			.discord-system-message.discord-alert-system-message svg {
				color: #faa81a;
			}

			.discord-system-message.discord-error-system-message svg {
				color: #faa81a;
			}

			.discord-system-message:first-child {
				margin-top: 0.5rem;
			}

			.discord-system-message:last-child {
				margin-bottom: 0.5rem;
				border-bottom-width: 0;
			}

			.discord-system-message .discord-message-icon {
				margin-right: 16px;
				margin-top: 5px;
				min-width: 40px;
				display: flex;
				align-items: flex-start;
				justify-content: center;
			}

			.discord-system-message .discord-message-icon svg {
				width: 16px;
				height: 16px;
			}

			.discord-system-message .discord-message-timestamp {
				color: #72767d;
				font-size: 12px;
				margin-left: 3px;
			}

			.discord-light-theme.discord-system-message .discord-message-timestamp {
				color: #747f8d;
			}

			.discord-system-message .discord-message-system-edited {
				color: #72767d;
				font-size: 10px;
			}

			.discord-light-theme.discord-system-message .discord-message-edited {
				color: #99aab5;
			}

			.discord-system-message .discord-message-content {
				width: 100%;
				line-height: 160%;
				font-weight: normal;
				padding-top: 2px;
				display: flex;
				flex-direction: column;
			}

			.discord-system-message .discord-message-content ::slotted(i) {
				font-style: normal;
				cursor: pointer;
				color: white;
				font-weight: 500;
			}

			.discord-light-theme.discord-system-message .discord-message-content ::slotted(i) {
				color: #060607;
			}

			.discord-system-message .discord-message-content ::slotted(i:hover) {
				text-decoration: underline;
			}

			.discord-system-message:hover {
				background-color: rgba(4, 4, 5, 0.07);
			}

			.discord-light-theme.discord-system-message:hover {
				background-color: rgba(6, 6, 7, 0.02);
			}

			.discord-system-message.discord-system-message-has-thread:after {
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

			.discord-light-theme.discord-system-message.discord-system-message-has-thread:after {
				border-color: #747f8d;
			}
		`
	];

	/**
	 * The timestamp to use for the message date.
	 */
	@property()
	public timestamp: DiscordTimestamp = new Date();

	/**
	 * The type of system message this is, this will change the icon shown.
	 * Valid values: `join`, `leave`, `call`, `missed-call`, `boost`, `edit`, `thread`, `pin`, `alert`, and `error`.
	 */
	@property()
	public type: 'join' | 'leave' | 'call' | 'missed-call' | 'boost' | 'edit' | 'thread' | 'pin' | 'alert' | 'error' = 'join';

	/**
	 * Whether this message is to show channel name changes, used to match Discord's style.
	 */
	@property({ type: Boolean, attribute: 'channel-name' })
	public channelName = false;

	@state()
	public lightTheme = false;

	public checkType(value: string) {
		if (typeof value !== 'string') {
			throw new TypeError('DiscordSystemMessage `type` prop must be a string.');
		} else if (!['join', 'leave', 'call', 'missed-call', 'boost', 'edit', 'thread', 'pin', 'alert', 'error'].includes(value)) {
			throw new RangeError(
				"DiscordSystemMessage `type` prop must be one of: 'join', 'leave', 'call', 'missed-call', 'boost', 'edit', 'thread', 'pin', 'alert', 'error'"
			);
		}
	}

	protected override render() {
		const parent = this.parentElement as DiscordMessages;

		if (!parent || parent.tagName.toLowerCase() !== 'discord-messages') {
			throw new Error('All <discord-system-message> components must be direct children of <discord-messages>.');
		}

		this.timestamp = handleTimestamp(this.timestamp);
		this.checkType(this.type);

		this.lightTheme = parent.lightTheme;

		let icon: TemplateResult<1>;

		switch (this.type) {
			case 'join':
				icon = UserJoin();
				break;
			case 'leave':
				icon = UserLeave();
				break;
			case 'call':
				icon = DMCall();
				break;
			case 'missed-call':
				icon = DMMissedCall();
				break;
			case 'edit':
				icon = DMEdit();
				break;
			case 'boost':
				icon = Boost();
				break;
			case 'thread':
				icon = Thread();
				break;
			case 'pin':
				icon = Pin();
				break;
			case 'alert':
				icon = SystemAlert();
				break;
			case 'error':
				icon = SystemError();
				break;
		}

		const hasThread: boolean = Array.from(this.children).some((child): boolean => {
			return child.tagName.toLowerCase() === 'discord-thread';
		});

		const classes: Record<string, boolean> = {
			'discord-system-message': true,
			'discord-light-theme': this.lightTheme,
			'discord-system-message-has-thread': hasThread,
			'discord-channel-name-change': this.channelName
		};
		classes[`discord-${this.type}-system-message`] = true;

		return html`
			<div class=${classMap(classes)}>
				<div class="discord-message-icon">${icon}</div>
				<div class="discord-message-content">
					<span>
						<slot></slot>
						<span class="discord-message-timestamp">${this.timestamp}</span>
					</span>
					<slot name="reactions"></slot>
					<slot name="thread"></slot>
				</div>
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-system-message': DiscordSystemMessage;
	}
}

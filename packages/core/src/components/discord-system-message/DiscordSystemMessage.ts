import { consume } from '@lit/context';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { choose } from 'lit/directives/choose.js';
import type { DiscordTimestamp, LightTheme } from '../../types.js';
import { handleTimestamp } from '../../util.js';
import { messagesLightTheme } from '../discord-messages/DiscordMessages.js';
import Boost from '../svgs/Boost.js';
import DMCall from '../svgs/DMCall.js';
import DMEdit from '../svgs/DMEdit.js';
import DMMissedCall from '../svgs/DMMissedCall.js';
import Pin from '../svgs/Pin.js';
import ServerUpgrade from '../svgs/ServerUpgrade.js';
import SystemAlert from '../svgs/SystemAlert.js';
import SystemError from '../svgs/SystemError.js';
import Thread from '../svgs/Thread.js';
import UserJoin from '../svgs/UserJoin.js';
import UserLeave from '../svgs/UserLeave.js';

@customElement('discord-system-message')
export class DiscordSystemMessage extends LitElement implements LightTheme {
	/**
	 * @internal
	 */
	public static override readonly styles = css`
		:host {
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

		:host([light-theme]) {
			color: #2e3338;
			border-color: #eceeef;
		}

		:host([channel-name]) {
			color: #fff;
		}

		:host([light-theme][channel-name]) {
			color: #060607;
		}

		:host([type='boost']) svg {
			color: #ff73fa;
		}

		:host([type='alert']) svg {
			color: #faa81a;
		}

		:host([type='error']) svg {
			color: #faa81a;
		}

		:host .discord-message-icon {
			margin-right: 16px;
			margin-top: 5px;
			min-width: 40px;
			display: flex;
			align-items: flex-start;
			justify-content: center;
		}

		:host .discord-message-icon svg {
			width: 16px;
			height: 16px;
		}

		:host .discord-message-timestamp {
			color: #72767d;
			font-size: 12px;
			margin-left: 3px;
		}

		:host([light-theme]) .discord-message-timestamp {
			color: #747f8d;
		}

		:host .discord-message-content {
			width: 100%;
			line-height: 160%;
			font-weight: normal;
			padding-top: 2px;
			display: flex;
			flex-direction: column;
		}

		:host .discord-message-content ::slotted(i) {
			font-style: normal;
			cursor: pointer;
			color: white;
			font-weight: 500;
		}

		:host([light-theme]) .discord-message-content ::slotted(i) {
			color: #060607;
		}

		:host .discord-message-content ::slotted(i:hover) {
			text-decoration: underline;
		}

		:host(:hover) {
			background-color: rgba(4, 4, 5, 0.07);
		}

		:host([light-theme]:hover) {
			background-color: rgba(6, 6, 7, 0.02);
		}

		:host([has-thread]):after {
			width: 2rem;
			left: 2.2rem;
			top: 1.75rem;
			border-left: 2px solid #4f545c !important;
			border-bottom: 2px solid #4f545c !important;
			border-bottom-left-radius: 8px !important;
			bottom: 29px;
			content: '';
			position: absolute;
		}

		:host([light-theme][has-thread]):after {
			border-color: #747f8d !important;
		}
	`;

	/**
	 * The timestamp to use for the message date.
	 */
	@property({ type: String })
	public accessor timestamp: DiscordTimestamp = new Date();

	/**
	 * The type of system message this is, this will change the icon shown.
	 * Valid values: `join`, `leave`, `call`, `missed-call`, `boost`, `edit`, `thread`, `pin`, `alert`, `upgrade` and `error`.
	 */
	@property({ reflect: true, attribute: 'type' })
	public accessor type: 'alert' | 'boost' | 'call' | 'edit' | 'error' | 'join' | 'leave' | 'missed-call' | 'pin' | 'thread' | 'upgrade' = 'join';

	/**
	 * Whether this message is to show channel name changes, used to match Discord's style.
	 */
	@property({ type: Boolean, reflect: true, attribute: 'channel-name' })
	public accessor channelName = false;

	@property({ type: Boolean, reflect: true, attribute: 'has-thread' })
	public accessor hasThread = false;

	@consume({ context: messagesLightTheme })
	@property({ type: Boolean, reflect: true, attribute: 'light-theme' })
	public accessor lightTheme = false;

	public checkType() {
		if (typeof this.type !== 'string') {
			throw new TypeError('DiscordSystemMessage `type` prop must be a string.');
		} else if (!['join', 'leave', 'call', 'missed-call', 'boost', 'edit', 'thread', 'pin', 'alert', 'error', 'upgrade'].includes(this.type)) {
			throw new RangeError(
				"DiscordSystemMessage `type` prop must be one of: 'join', 'leave', 'call', 'missed-call', 'boost', 'edit', 'thread', 'pin', 'alert', 'upgrade', 'error'"
			);
		}
	}

	protected override willUpdate(): void {
		this.hasThread = Array.from(this.children).some((child): boolean => {
			return child.tagName.toLowerCase() === 'discord-thread';
		});
	}

	protected override render() {
		this.timestamp = handleTimestamp(this.timestamp);
		this.checkType();

		return html`<div class="discord-message-icon">
				${choose(this.type, [
					['join', () => UserJoin()],
					['leave', () => UserLeave()],
					['call', () => DMCall()],
					['missed-call', () => DMMissedCall()],
					['edit', () => DMEdit()],
					['boost', () => Boost()],
					['thread', () => Thread()],
					['pin', () => Pin()],
					['alert', () => SystemAlert()],
					['error', () => SystemError()],
					['upgrade', () => ServerUpgrade()]
				])}
			</div>
			<div class="discord-message-content">
				<span>
					<slot></slot>
					<span class="discord-message-timestamp">${this.timestamp}</span>
				</span>
				<slot name="reactions"></slot>
				<slot name="thread"></slot>
			</div>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-system-message': DiscordSystemMessage;
	}
}

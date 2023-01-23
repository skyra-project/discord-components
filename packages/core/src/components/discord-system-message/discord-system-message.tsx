import { Component, ComponentInterface, Element, h, Host, Prop, Watch } from '@stencil/core';
import clsx from 'clsx';
import { DiscordTimestamp, handleTimestamp } from '../../util';
import Boost from '../svgs/boost';
import DMCall from '../svgs/dm-call';
import DMEdit from '../svgs/dm-edit';
import DMMissedCall from '../svgs/dm-missed-call';
import Pin from '../svgs/pin';
import SystemAlert from '../svgs/system-alert';
import SystemError from '../svgs/system-error';
import Thread from '../svgs/thread';
import UserJoin from '../svgs/user-join';
import UserLeave from '../svgs/user-leave';

@Component({
	tag: 'discord-system-message',
	styleUrl: 'discord-system-message.css'
})
export class DiscordSystemMessage implements ComponentInterface {
	/**
	 * The DiscordSystemMessage element.
	 */
	@Element()
	public el: HTMLElement;

	/**
	 * The timestamp to use for the message date.
	 */
	@Prop({ mutable: true, reflect: true })
	public timestamp: DiscordTimestamp = new Date();

	/**
	 * The type of system message this is, this will change the icon shown.
	 * Valid values: `join`, `leave`, `call`, `missed-call`, `boost`, `edit`, `thread`, `pin`, `alert`, and `error`.
	 */
	@Prop()
	public type: 'join' | 'leave' | 'call' | 'missed-call' | 'boost' | 'edit' | 'thread' | 'pin' | 'alert' | 'error' = 'join';

	/**
	 * Whether this message is to show channel name changes, used to match Discord's style.
	 */
	@Prop()
	public channelName = false;

	@Watch('type')
	public handleType(value: string) {
		if (typeof value !== 'string') {
			throw new TypeError('DiscordSystemMessage `type` prop must be a string.');
		} else if (!['join', 'leave', 'call', 'missed-call', 'boost', 'edit', 'thread', 'pin', 'alert', 'error'].includes(value)) {
			throw new RangeError(
				"DiscordSystemMessage `type` prop must be one of: 'join', 'leave', 'call', 'missed-call', 'boost', 'edit', 'pin', 'thread' 'alert', 'error'"
			);
		}
	}

	@Watch('timestamp')
	public updateTimestamp(value: DiscordTimestamp): string | null {
		return handleTimestamp(value);
	}

	public componentWillRender() {
		this.timestamp = handleTimestamp(this.timestamp);
	}

	public render() {
		const parent: HTMLDiscordMessagesElement = this.el.parentElement as HTMLDiscordMessagesElement;

		if (parent.tagName.toLowerCase() !== 'discord-messages') {
			throw new Error('All <discord-system-message> components must be direct children of <discord-messages>.');
		}

		let icon = '';

		switch (this.type) {
			case 'join':
				icon = <UserJoin />;
				break;
			case 'leave':
				icon = <UserLeave />;
				break;
			case 'call':
				icon = <DMCall />;
				break;
			case 'missed-call':
				icon = <DMMissedCall />;
				break;
			case 'edit':
				icon = <DMEdit />;
				break;
			case 'boost':
				icon = <Boost />;
				break;
			case 'thread':
				icon = <Thread />;
				break;
			case 'alert':
				icon = <SystemAlert />;
				break;
			case 'error':
				icon = <SystemError />;
				break;
			case 'pin':
				icon = <Pin />;
				break;
		}

		const hasThread: boolean =
			// @ts-expect-error ts doesn't understand this
			Array.from(this.el.children).some((child: HTMLDiscordThreadElement): boolean => {
				return child.tagName.toLowerCase() === 'discord-thread';
			});

		return (
			<Host
				class={clsx('discord-system-message', `discord-${this.type}-system-message`, {
					'discord-system-message-has-thread': hasThread,
					'discord-channel-name-change': this.channelName
				})}
			>
				<div class="discord-message-icon">{icon}</div>
				<div class="discord-message-content">
					<span>
						<slot></slot>
						<span class="discord-message-timestamp">{this.timestamp}</span>
					</span>
					<slot name="reactions"></slot>
					<slot name="thread"></slot>
				</div>
			</Host>
		);
	}
}

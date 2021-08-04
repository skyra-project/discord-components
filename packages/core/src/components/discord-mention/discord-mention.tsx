import { Component, ComponentInterface, Element, h, Host, Prop, Watch } from '@stencil/core';
import hexToRgba from 'hex-to-rgba';
import LockedVoiceChannel from '../svgs/locked-voice-channel';
import VoiceChannel from '../svgs/voice-channel';

@Component({
	tag: 'discord-mention',
	styleUrl: 'discord-mention.css'
})
export class DiscordMention implements ComponentInterface {
	/**
	 * The DiscordMention element
	 */
	@Element()
	public el: HTMLElement;

	/**
	 * Whether this entire message block should be highlighted (to emulate the "logged in user" being pinged).
	 */
	@Prop()
	public highlight = false;

	/**
	 * The color to use for this mention. Only works for role mentions and must be in hex format.
	 */
	@Prop()
	public color: string;

	/**
	 * The type of mention this should be. This will prepend the proper prefix character.
	 * Valid values: `user`, `channel`, `role`, `voice`, and `locked`.
	 */
	@Prop()
	public type: 'user' | 'channel' | 'role' | 'voice' | 'locked' = 'user';

	@Watch('type')
	public handleType(value: string) {
		if (typeof value !== 'string') {
			throw new TypeError('DiscordMention `type` prop must be a string.');
		} else if (!['user', 'channel', 'role', 'voice', 'locked'].includes(value)) {
			throw new RangeError("DiscordMention `type` prop must be one of: 'user', 'channel', 'role', 'voice', 'locked' ");
		}
	}

	public componentWillRender() {
		this.handleType(this.type);
	}

	public componentDidLoad() {
		if (this.color && this.type === 'role') {
			this.el.addEventListener('mouseover', this.setHoverColor.bind(this));
			this.el.addEventListener('mouseout', this.resetHoverColor.bind(this));
		}
	}

	public disconnectedCallback() {
		if (this.color && this.type === 'role') {
			this.el.removeEventListener('mouseover', this.setHoverColor.bind(this));
			this.el.removeEventListener('mouseout', this.resetHoverColor.bind(this));
		}
	}

	public setHoverColor() {
		this.el.style.backgroundColor = hexToRgba(this.color, 0.3);
	}

	public resetHoverColor() {
		this.el.style.backgroundColor = hexToRgba(this.color, 0.1);
	}

	public render() {
		const { color, type }: { color?: string; type?: string } = this;

		const colorStyle: {
			color?: string;
			'background-color'?: string;
		} = !color || type !== 'role' ? {} : { color, 'background-color': hexToRgba(color, 0.1) };

		let mentionPrepend = '';

		switch (this.type) {
			case 'channel':
				mentionPrepend = '#';
				break;
			case 'user':
			case 'role':
				mentionPrepend = '@';
				break;
			case 'voice':
				mentionPrepend = <VoiceChannel class="discord-mention-icon" />;
				break;
			case 'locked':
				mentionPrepend = <LockedVoiceChannel class="discord-mention-icon" />;
				break;
		}

		return (
			<Host style={colorStyle} class={`discord-mention discord-${type}-mention`}>
				{mentionPrepend}
				<slot></slot>
			</Host>
		);
	}
}

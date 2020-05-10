import { Component, Element, h, Host, Prop, Watch } from '@stencil/core';
import hexToRgba from 'hex-to-rgba';

@Component({
	tag: 'discord-mention',
	styleUrl: 'discord-mention.css'
})
export class DiscordMention {
	/**
	 * The DiscordMention element
	 */
	@Element() el: HTMLElement;

	/**
	 * Whether this entire message block should be highlighted (to emulate the "logged in user" being pinged).
	 */
	@Prop() highlight = false;

	/**
	 * The color to use for this mention. Only works for role mentions and must be in hex format.
	 */
	@Prop() color: string;

	/**
	 * The type of mention this should be. This will prepend the proper prefix character. Valid values: `user`, `channel`, `role`
	 */
	@Prop() type = 'user';

	@Watch('type')
	handleType(value: string) {
		if (typeof value !== 'string') {
			throw new TypeError('DiscordMention `type` prop must be a string.');
		} else if (!['user', 'channel', 'role'].includes(value)) {
			throw new RangeError("DiscordMention `type` prop must be one of: 'user', 'channel', 'role' ");
		}
	}

	componentWillLoad() {
		this.handleType(this.type);
	}

	componentDidLoad() {
		if (this.color && this.type === 'role') {
			this.el.addEventListener('mouseover', this.setHoverColor.bind(this));
			this.el.addEventListener('mouseout', this.resetHoverColor.bind(this));
		}
	}

	componentDidUnload() {
		if (this.color && this.type === 'role') {
			this.el.removeEventListener('mouseover', this.setHoverColor.bind(this));
			this.el.removeEventListener('mouseout', this.resetHoverColor.bind(this));
		}
	}

	setHoverColor() {
		this.el.style.backgroundColor = hexToRgba(this.color, 0.3);
	}

	resetHoverColor() {
		this.el.style.backgroundColor = hexToRgba(this.color, 0.1);
	}

	render() {
		const { color, type }: { color?: string; type?: string } = this;

		const colorStyle: {
			color?: string;
			'background-color'?: string;
		} = !color || type !== 'role' ? {} : { color, 'background-color': hexToRgba(color, 0.1) };

		return (
			<Host style={colorStyle} class={`discord-mention discord-${type}-mention`}>
				{type === 'channel' ? '#' : '@'}
				<slot>{type === 'channel' ? type : type.charAt(0).toUpperCase() + type.slice(1)}</slot>
			</Host>
		);
	}
}

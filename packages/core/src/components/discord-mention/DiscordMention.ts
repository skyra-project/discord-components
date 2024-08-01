import { consume } from '@lit/context';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { choose } from 'lit/directives/choose.js';
import { hexToRgba } from '../../hex-to-rgba.js';
import type { LightTheme } from '../../types.js';
import { messagesLightTheme } from '../discord-messages/DiscordMessages.js';
import ChannelForum from '../svgs/ChannelForum.js';
import ChannelIcon from '../svgs/ChannelIcon.js';
import ChannelThread from '../svgs/ChannelThread.js';
import ChannelsAndRoles from '../svgs/ChannelsAndRoles.js';
import CustomizeCommunity from '../svgs/CustomizeCommunity.js';
import LockedVoiceChannel from '../svgs/LockedVoiceChannel.js';
import ServerGuide from '../svgs/ServerGuide.js';
import VoiceChannel from '../svgs/VoiceChannel.js';

@customElement('discord-mention')
export class DiscordMention extends LitElement implements LightTheme {
	/**
	 * @internal
	 */
	public static override readonly styles = css`
		:host {
			color: #e3e7f8;
			background-color: hsla(235, 85.6%, 64.7%, 0.3);
			font-weight: 500;
			padding: 0 2px;
			border-radius: 3px;
			unicode-bidi: -moz-plaintext;
			unicode-bidi: plaintext;
			-webkit-transition:
				background-color 50ms ease-out,
				color 50ms ease-out;
			transition:
				background-color 50ms ease-out,
				color 50ms ease-out;
			cursor: pointer;
		}

		:host([type='role']) {
			background-color: rgba(#e3e7f8, 0.1);
		}

		:host([type='channel']) {
			position: relative;
		}

		:host([type='voice']),
		:host([type='locked']),
		:host([type='thread']),
		:host([type='forum']) {
			position: relative;
		}

		:host(:hover) {
			color: #fff;
			background-color: hsl(235, 85.6%, 64.7%);
		}

		:host([highlight][type='user']:hover) {
			text-decoration: underline;
			text-underline-offset: 1px;
		}

		:host([light-theme]) {
			color: #5865f2;
			background-color: hsla(235, 85.6%, 64.7%, 0.15);
		}

		:host([light-theme]:hover) {
			color: #ffffff;
			background-color: hsl(235, 85.6%, 64.7%);
		}

		.discord-mention-icon {
			width: 1rem;
			height: 1rem;
			margin-right: 4px;
			vertical-align: middle;
			margin-bottom: 0.2rem;
		}

		.no-wrap {
			white-space: nowrap;
		}
	`;

	/**
	 * Whether this entire message block should be highlighted (to emulate the "logged in user" being pinged).
	 */
	@property({ type: Boolean, reflect: true })
	public accessor highlight = false;

	/**
	 * The type of mention this should be. This will prepend the proper prefix character.
	 * Valid values:
	 * - `'user'`
	 * - `'channel'`
	 * - `'role'`
	 * - `'voice'`
	 * - `'locked'`
	 * - `'thread'`
	 * - `'forum'`
	 * - `'slash'`
	 * - `'server-guide'`
	 * - `'channels-and-roles'`
	 * - `'customize-community'`
	 */
	@property({ reflect: true })
	public accessor type:
		| 'channel'
		| 'channels-and-roles'
		| 'customize-community'
		| 'forum'
		| 'locked'
		| 'role'
		| 'server-guide'
		| 'slash'
		| 'thread'
		| 'user'
		| 'voice' = 'user';

	@property({ reflect: true })
	public accessor color: string;

	public setHoverColor = () => {
		if (this.color) {
			this.style.backgroundColor = hexToRgba(this.color, 0.3);
		}
	};

	public resetHoverColor = () => {
		if (this.color) {
			this.style.backgroundColor = hexToRgba(this.color, 0.1);
		}
	};

	@consume({ context: messagesLightTheme, subscribe: true })
	@property({ type: Boolean, reflect: true, attribute: 'light-theme' })
	public accessor lightTheme = false;

	public override connectedCallback(): void {
		super.connectedCallback();

		if (this.color && this.type === 'role') {
			this.addEventListener('mouseover', this.setHoverColor);
			this.addEventListener('mouseout', this.resetHoverColor);
		}
	}

	public override disconnectedCallback(): void {
		this.removeEventListener('mouseover', this.setHoverColor);
		this.removeEventListener('mouseout', this.resetHoverColor);

		super.disconnectedCallback();
	}

	protected override willUpdate(): void {
		if (this.color) {
			this.style.color = this.color;
			if (this.type === 'role') this.style.backgroundColor = hexToRgba(this.color, 0.1);
		}
	}

	protected override render() {
		return html`<span class="no-wrap"
				>${choose(this.type, [
					['channel', () => ChannelIcon()],
					['user', () => html`@`],
					['role', () => html`@`],
					['voice', () => VoiceChannel()],
					['locked', () => LockedVoiceChannel()],
					['thread', () => ChannelThread()],
					['forum', () => ChannelForum()],
					['server-guide', () => ServerGuide()],
					['channels-and-roles', () => ChannelsAndRoles()],
					['customize-community', () => CustomizeCommunity()],
					['slash', () => html`/`]
				])}</span
			><slot></slot>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-mention': DiscordMention;
	}
}

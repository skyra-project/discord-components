import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { hexToRgba } from '../../hex-to-rgba.js';
import { ChannelForum } from '../svgs/ChannelForum.js';
import { ChannelIcon } from '../svgs/ChannelIcon.js';
import { ChannelThread } from '../svgs/ChannelThread.js';
import { LockedVoiceChannel } from '../svgs/LockedVoiceChannel.js';
import { VoiceChannel } from '../svgs/VoiceChannel.js';

const colorCodeExtractor = /--discord-mention-color: (?<colorCode>#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}));/;

@customElement('discord-mention')
export class DiscordMention extends LitElement {
	public static override styles = css`
		:host {
			color: var(--discord-mention-color, #e3e7f8);
			background-color: hsla(235, 85.6%, 64.7%, 0.3);
			font-weight: 500;
			padding: 0 2px;
			border-radius: 3px;
			unicode-bidi: -moz-plaintext;
			unicode-bidi: plaintext;
			-webkit-transition: background-color 50ms ease-out, color 50ms ease-out;
			transition: background-color 50ms ease-out, color 50ms ease-out;
			cursor: pointer;
		}

		:host([type='role']) {
			background-color: rgba(var(--discord-mention-color, #e3e7f8), 0.1);
		}

		:host([type='channel']) {
			padding-left: 1.2rem !important;
			position: relative;
		}

		:host([type='voice']),
		:host([type='locked']),
		:host([type='thread']),
		:host([type='forum']) {
			padding-left: 1.25rem !important;
			position: relative;
		}

		:host(:hover) {
			color: #fff;
			background-color: hsl(235, 85.6%, 64.7%);
		}

		.discord-light-theme {
			color: #687dc6;
			background-color: hsla(235, 85.6%, 64.7%, 0.15);
		}

		.discord-light-theme:hover {
			color: #ffffff;
			background-color: hsl(235, 85.6%, 64.7%);
		}

		.discord-mention-icon {
			width: 1rem;
			height: 1rem;
			object-fit: contain;
			position: absolute;
			left: 0.125rem;
			top: 0.125rem;
		}
	`;

	/**
	 * Whether this entire message block should be highlighted (to emulate the "logged in user" being pinged).
	 */
	@property({ type: Boolean, reflect: true, attribute: 'highlight' })
	public highlight = false;

	/**
	 * The type of mention this should be. This will prepend the proper prefix character.
	 * Valid values: `user`, `channel`, `role`, `voice`, `locked`, `thread`, and `forum`.
	 */
	@property({ type: String, reflect: true, attribute: 'type' })
	public type: 'user' | 'channel' | 'role' | 'voice' | 'locked' | 'thread' | 'forum' = 'user';

	public override connectedCallback(): void {
		super.connectedCallback();

		const colorCodeFromStyles = colorCodeExtractor.exec(this.style.cssText)?.groups?.colorCode;
		if (colorCodeFromStyles && this.type === 'role') {
			this.addEventListener('mouseover', this.setHoverColor.bind(this, colorCodeFromStyles));
			this.addEventListener('mouseout', this.resetHoverColor.bind(this, colorCodeFromStyles));
		}
	}

	public override disconnectedCallback(): void {
		super.disconnectedCallback();

		const colorCodeFromStyles = colorCodeExtractor.exec(this.style.cssText)?.groups?.colorCode;
		if (colorCodeFromStyles && this.type === 'role') {
			this.removeEventListener('mouseover', this.setHoverColor.bind(this, colorCodeFromStyles));
			this.removeEventListener('mouseout', this.resetHoverColor.bind(this, colorCodeFromStyles));
		}
	}

	public setHoverColor(colorCodeFromStyles: string) {
		this.style.backgroundColor = hexToRgba(colorCodeFromStyles, 0.3);
	}

	public resetHoverColor(colorCodeFromStyles: string) {
		this.style.backgroundColor = hexToRgba(colorCodeFromStyles, 0.1);
	}

	protected override render() {
		let mentionPrepend: ReturnType<typeof html>;

		switch (this.type) {
			case 'channel':
				mentionPrepend = html`${ChannelIcon}`;
				break;
			case 'user':
			case 'role':
				mentionPrepend = html`@`;
				break;
			case 'voice':
				mentionPrepend = html`${VoiceChannel}`;
				break;
			case 'locked':
				mentionPrepend = html`${LockedVoiceChannel}`;
				break;
			case 'thread':
				mentionPrepend = html`${ChannelThread}`;
				break;
			case 'forum':
				mentionPrepend = html`${ChannelForum}`;
				break;
		}

		return html` ${mentionPrepend}<slot></slot> `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-mention': DiscordMention;
	}
}

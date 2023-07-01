import { consume } from '@lit-labs/context';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { defaultDiscordAvatars } from '../../options.js';
import { messagesLightTheme } from '../discord-messages/DiscordMessages.js';
import GuildBadge from '../svgs/GuildBadge.js';
import PartnerBadgeOverlay from '../svgs/PartnerBadgeOverlay.js';
import VerifiedBadgeOverlay from '../svgs/VerifiedBadgeOverlay.js';
import type { LightTheme } from '../../util.js';

@customElement('discord-invite')
export class DiscordInvite extends LitElement implements LightTheme {
	public static override styles = css`
		:host {
			background-color: #2f3136;
			border-radius: 4px;
			padding: 16px;
			width: 432px;
		}

		:host([light-theme]) {
			background-color: #f2f3f5;
		}

		:host .discord-invite-header {
			font-weight: 700;
			font-size: 12px;
			line-height: 16px;
			margin-bottom: 12px;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			text-transform: uppercase;
			color: #b9bbbe;
		}

		:host([light-theme]) .discord-invite-header {
			color: #4f5660;
		}

		:host .discord-invite-root {
			display: flex;
			flex-flow: row nowrap;
		}

		:host .discord-invite-icon {
			background-color: #36393f;
			border-radius: 15px;
			margin-right: 16px;
			-webkit-box-flex: 0;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
			width: 50px;
			height: 50px;
		}

		:host([light-theme]) .discord-invite-icon {
			background-color: #fff;
		}

		:host .discord-invite-info {
			font-family: 'gg sans', 'Noto Sans', WhitneyMedium, Whitney, 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
			display: flex;
			flex: 1 1 auto;
			flex-direction: column;
			flex-wrap: nowrap;
			align-items: stretch;
			justify-content: center;
		}

		:host .discord-invite-title {
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			margin-bottom: 2px;
			color: white;
			font-size: 16px;
			line-height: 20px;
			font-weight: 700;
			display: flex;
			flex-direction: row;
		}

		:host([light-theme]) .discord-invite-title {
			color: #060607;
		}

		:host .discord-invite-name {
			flex: 1 1 auto;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		:host .discord-invite-counts {
			display: flex;
			align-items: center;
			font-size: 14px;
			font-weight: 600;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			color: #b9bbbe;
			line-height: 16px;
		}

		:host .discord-invite-status {
			display: block;
			margin-right: 4px;
			width: 8px;
			height: 8px;
			border-radius: 50%;
			background-color: #747f8d;
		}

		:host .discord-invite-status-online {
			background-color: #3ba55d;
		}

		:host .discord-invite-count {
			-webkit-box-flex: 0;
			-ms-flex: 0 1 auto;
			flex: 0 1 auto;
			margin-right: 8px;
			color: #b9bbbe;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}

		:host .discord-invite-join {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 40px;
			padding: 0 20px;
			align-self: center;
			margin-left: 10px;
			-webkit-box-flex: 0;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
			line-height: 20px;
			border-radius: 3px;
			font-size: 14px;
			font-weight: 600;
			color: white !important;
			background-color: #3ba55d;
			-webkit-transition: background-color 0.17s ease;
			transition: background-color 0.17s ease;
			text-decoration: none;
		}

		:host .discord-invite-join:hover {
			background-color: #2d7d46;
		}

		:host .discord-invite-badge {
			-webkit-box-flex: 0;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
			margin-right: 8px;
			width: 16px;
			height: 16px;
			align-self: center;
			position: relative;
		}

		:host .discord-invite-badge-verified {
			color: #3ba55d;
		}

		:host .discord-invite-badge-partnered {
			color: #5865f2;
		}

		:host .discord-invite-badge-container {
			position: absolute;
			top: -0.05px;
			left: 0.05px;
			right: 0;
			bottom: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			pointer-events: none;
			color: white;
		}

		:host([light-theme]) .discord-invite-counts,
		:host([light-theme]) .discord-invite-count {
			color: #4f5660;
		}
	`;

	/**
	 * The server icon to display for the invite.
	 */
	@property()
	public icon = defaultDiscordAvatars.blue;

	/**
	 * The server's name.
	 * @default 'Discord Server'
	 */
	@property()
	public name = 'Discord Server';

	/**
	 * The URL to open when you click on the join button.
	 */
	@property()
	public url: string;

	/**
	 * The number of members online on the server.
	 * @default 0
	 */
	@property({ type: Number })
	public online = 0;

	/**
	 * The number of members on the server.
	 * @default 0
	 */
	@property({ type: Number })
	public members = 0;

	/**
	 * Whether the server is verified.
	 * Only works if `partnered` is `false` or `undefined`.
	 */
	@property({ type: Boolean })
	public verified = false;

	/**
	 * Whether the server is partnered.
	 * Only works if `verified` is `false` or `undefined`.
	 */
	@property({ type: Boolean })
	public partnered = false;

	/**
	 * Invitation embed title.
	 * @default "You've been invited to join a server"
	 */
	@property({ attribute: 'invite-title' })
	public inviteTitle = "You've been invited to join a server";

	/**
	 * The join button.
	 * @default 'Join'
	 */
	@property({ attribute: 'join-btn' })
	public joinBtn = 'Join';

	@consume({ context: messagesLightTheme })
	@property({ type: Boolean, reflect: true, attribute: 'light-theme' })
	public lightTheme = false;

	protected override render() {
		return html`<div class="discord-invite-header">${this.inviteTitle}</div>
			<div class="discord-invite-root">
				<img class="discord-invite-icon" src="${ifDefined(this.icon)}" alt="${this.name}" />
				<div class="discord-invite-info">
					<div class="discord-invite-title">
						${(this.verified && !this.partnered) || (!this.verified && this.partnered)
							? html`<div class="discord-invite-badge">
									${GuildBadge({
										'aria-label': this.partnered ? 'Discord Partner' : 'Verified',
										class: `discord-invite-badge-${this.partnered ? 'partnered' : 'verified'}`
									})}
									<div class="discord-invite-badge-container">
										${this.partnered ? PartnerBadgeOverlay() : VerifiedBadgeOverlay()}
									</div>
							  </div>`
							: null}
						<span class="discord-invite-name">${this.name}</span>
					</div>
					<div class="discord-invite-counts">
						<i class="discord-invite-status discord-invite-status-online"></i>
						<span class="discord-invite-count">${this.online.toLocaleString()} Online</span>
						<i class="discord-invite-status"></i>
						<span class="discord-invite-count">${this.members.toLocaleString()} Members</span>
					</div>
				</div>
				<a class="discord-invite-join" href="${this.url}" target="_blank" rel="noopener noreferrer"> ${this.joinBtn} </a>
			</div>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-invite': DiscordInvite;
	}
}

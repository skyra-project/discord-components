import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { defaultDiscordAvatars } from '../../options.js';
import GuildBadge from '../svgs/GuildBadge.js';
import PartnerBadgeOverlay from '../svgs/PartnerBadgeOverlay.js';
import VerifiedBadgeOverlay from '../svgs/VerifiedBadgeOverlay.js';

@customElement('discord-invite')
export class DiscordInvite extends LitElement {
	public static override styles = css`
		.discord-invite {
			background-color: #2f3136;
			border-radius: 4px;
			padding: 16px;
			width: 432px;
		}

		.discord-light-theme .discord-invite {
			background-color: #f2f3f5;
		}

		.discord-invite .discord-invite-header {
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

		.discord-light-theme .discord-invite .discord-invite-header {
			color: #4f5660;
		}

		.discord-invite .discord-invite-root {
			display: flex;
			flex-flow: row nowrap;
		}

		.discord-invite .discord-invite-icon {
			background-color: #36393f;
			border-radius: 15px;
			margin-right: 16px;
			-webkit-box-flex: 0;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
			width: 50px;
			height: 50px;
		}

		.discord-light-theme .discord-invite .discord-invite-icon {
			background-color: #fff;
		}

		.discord-invite .discord-invite-info {
			font-family: 'gg sans', 'Noto Sans', WhitneyMedium, Whitney, 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
			display: flex;
			flex: 1 1 auto;
			flex-direction: column;
			flex-wrap: nowrap;
			align-items: stretch;
			justify-content: center;
		}

		.discord-invite .discord-invite-title {
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

		.discord-light-theme .discord-invite .discord-invite-title {
			color: #060607;
		}

		.discord-invite .discord-invite-name {
			flex: 1 1 auto;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		.discord-invite .discord-invite-counts {
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

		.discord-invite .discord-invite-status {
			display: block;
			margin-right: 4px;
			width: 8px;
			height: 8px;
			border-radius: 50%;
			background-color: #747f8d;
		}

		.discord-invite .discord-invite-status-online {
			background-color: #3ba55d;
		}

		.discord-invite .discord-invite-count {
			-webkit-box-flex: 0;
			-ms-flex: 0 1 auto;
			flex: 0 1 auto;
			margin-right: 8px;
			color: #b9bbbe;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}

		.discord-invite .discord-invite-join {
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
		}

		.discord-invite .discord-invite-join:hover {
			background-color: #2d7d46;
			text-decoration: none;
		}

		.discord-invite .discord-invite-badge {
			-webkit-box-flex: 0;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
			margin-right: 8px;
			width: 16px;
			height: 16px;
			align-self: center;
			position: relative;
		}

		.discord-invite .discord-invite-badge-verified {
			color: #3ba55d;
		}

		.discord-invite .discord-invite-badge-partnered {
			color: #5865f2;
		}

		.discord-invite .discord-invite-badge-container {
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

		.discord-light-theme .discord-invite .discord-invite-counts,
		.discord-light-theme .discord-invite .discord-invite-count {
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
	@property()
	public online = 0;

	/**
	 * The number of members on the server.
	 * @default 0
	 */
	@property()
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

	protected override render() {
		return html` <div class="discord-invite">
			<div class="discord-invite-header">${this.inviteTitle}</div>
			<div class="discord-invite-root">
				<img class="discord-invite-icon" src="${ifDefined(this.icon)}" alt="${this.name}" />
				<div class="discord-invite-info">
					<div class="discord-invite-title">
						${(this.verified && !this.partnered) || (!this.verified && this.partnered)
							? html` <div class="discord-invite-badge">
									${GuildBadge({
										'aria-label': this.partnered ? 'Discord Partner' : 'Verified',
										class: `discord-invite-badge-${this.partnered ? 'partnered' : 'verified'}`
									})}
									<div class="discord-invite-badge-container">
										${this.partnered ? PartnerBadgeOverlay() : VerifiedBadgeOverlay()}
									</div>
							  </div>`
							: ''}
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
			</div>
		</div>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-invite': DiscordInvite;
	}
}

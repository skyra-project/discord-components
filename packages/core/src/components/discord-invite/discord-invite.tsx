import { Component, ComponentInterface, Element, h, Prop } from '@stencil/core';
import { defaultDiscordAvatars } from '../../options';
import GuildBadge from '../svgs/guild-badge';
import PartnerBadgeOverlay from '../svgs/partner-badge-overlay';
import VerifiedBadgeOverlay from '../svgs/verified-badge-overlay';

@Component({
	tag: 'discord-invite',
	styleUrl: 'discord-invite.css'
})
export class DiscordInvite implements ComponentInterface {
	/**
	 * The DiscordInvite element.
	 */
	@Element()
	public el: HTMLElement;

	/**
	 * The server icon to display for the invite.
	 */
	@Prop()
	public icon = defaultDiscordAvatars.blue;

	/**
	 * The server's name.
	 * @default 'Discord Server'
	 */
	@Prop()
	public name = 'Discord Server';

	/**
	 * The URL to open when you click on the join button.
	 */
	@Prop()
	public url: string;

	/**
	 * The number of members online on the server.
	 * @default 0
	 */
	@Prop()
	public online = 0;

	/**
	 * The number of members on the server.
	 * @default 0
	 */
	@Prop()
	public members = 0;

	/**
	 * Whether the server is verified.
	 * Only works if `partnered` is `false` or `undefined`.
	 */
	@Prop()
	public verified = false;

	/**
	 * Whether the server is partnered.
	 * Only works if `verified` is `false` or `undefined`.
	 */
	@Prop()
	public partnered = false;

	/**
	 * Invitation embed title.
	 * @default "You've been invited to join a server"
	 */
	@Prop()
	public inviteTitle = "You've been invited to join a server";

	/**
	 * The join button.
	 * @default 'Join'
	 */
	@Prop()
	public joinBtn = 'Join';

	public render() {
		return (
			<div class="discord-invite">
				<div class="discord-invite-header">{this.inviteTitle}</div>
				<div class="discord-invite-root">
					<img class="discord-invite-icon" src={this.icon} alt={this.name} />
					<div class="discord-invite-info">
						<div class="discord-invite-title">
							{((this.verified && !this.partnered) || (!this.verified && this.partnered)) && (
								<div class="discord-invite-badge">
									<GuildBadge
										aria-label={this.partnered ? 'Discord Partner' : 'Verified'}
										class={`discord-invite-badge-${this.partnered ? 'partnered' : 'verified'}`}
									/>
									<div class="discord-invite-badge-container">
										{this.partnered ? <PartnerBadgeOverlay /> : <VerifiedBadgeOverlay />}
									</div>
								</div>
							)}
							<span class="discord-invite-name">{this.name}</span>
						</div>
						<div class="discord-invite-counts">
							<i class="discord-invite-status discord-invite-status-online" />
							<span class="discord-invite-count">{this.online.toLocaleString()} Online</span>
							<i class="discord-invite-status" />
							<span class="discord-invite-count">{this.members.toLocaleString()} Members</span>
						</div>
					</div>
					<a class="discord-invite-join" href={this.url} target="_blank" rel="noopener noreferrer">
						{this.joinBtn}
					</a>
				</div>
			</div>
		);
	}
}

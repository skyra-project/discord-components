import { Component, ComponentInterface, Element, h, Prop } from '@stencil/core';
// import Fragment from '../../Fragment';
import { defaultDiscordAvatars } from '../../options';

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

	public render() {
		return (
			<div class="discord-invite">
				<div class="discord-invite-header">You've been invited to join a server</div>
				<div class="discord-invite-root">
					<img class="discord-invite-icon" src={this.icon} alt={this.name} />
					<div class="discord-invite-info">
						<div class="discord-invite-title">
							{((this.verified && !this.partnered) || (!this.verified && this.partnered)) && (
								<div class="discord-invite-badge">
									<svg
										aria-label={this.partnered ? 'Discord Partner' : 'Verified'}
										class={`discord-invite-badge-${this.partnered ? 'partnered' : 'verified'}`}
										aria-hidden="false"
										width="16"
										height="16"
										viewBox="0 0 16 15.2"
									>
										<path
											fill="currentColor"
											fill-rule="evenodd"
											d="m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
										/>
									</svg>
									<div class="discord-invite-badge-container">
										{this.partnered ? (
											<svg class="icon-1ihkOt" aria-hidden="false" width="16" height="16" viewBox="0 0 16 16">
												<path
													d="M10.5906 6.39993L9.19223 7.29993C8.99246 7.39993 8.89258 7.39993 8.69281 7.29993C8.59293 7.19993 8.39317 7.09993 8.29328 6.99993C7.89375 6.89993 7.5941 6.99993 7.29445 7.19993L6.79504 7.49993L4.29797 9.19993C3.69867 9.49993 2.99949 9.39993 2.69984 8.79993C2.30031 8.29993 2.50008 7.59993 2.99949 7.19993L5.99598 5.19993C6.79504 4.69993 7.79387 4.49993 8.69281 4.69993C9.49188 4.89993 10.0912 5.29993 10.5906 5.89993C10.7904 6.09993 10.6905 6.29993 10.5906 6.39993Z"
													fill="currentColor"
												/>
												<path
													d="M13.4871 7.79985C13.4871 8.19985 13.2874 8.59985 12.9877 8.79985L9.89135 10.7999C9.29206 11.1999 8.69276 11.3999 7.99358 11.3999C7.69393 11.3999 7.49417 11.3999 7.19452 11.2999C6.39545 11.0999 5.79616 10.6999 5.29674 10.0999C5.19686 9.89985 5.29674 9.69985 5.39663 9.59985L6.79499 8.69985C6.89487 8.59985 7.09463 8.59985 7.19452 8.69985C7.39428 8.79985 7.59405 8.89985 7.69393 8.99985C8.09346 8.99985 8.39311 8.99985 8.69276 8.79985L9.39194 8.39985L11.3896 6.99985L11.6892 6.79985C12.1887 6.49985 12.9877 6.59985 13.2874 7.09985C13.4871 7.39985 13.4871 7.59985 13.4871 7.79985Z"
													fill="currentColor"
												/>
											</svg>
										) : (
											<svg class="icon-1ihkOt" aria-hidden="false" width="16" height="16" viewBox="0 0 16 15.2">
												<path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor" />
											</svg>
										)}
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
					<a class="discord-invite-join" href={this.url}>
						Join
					</a>
				</div>
			</div>
		);
	}
}

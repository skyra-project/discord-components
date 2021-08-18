import { Component, ComponentInterface, Element, h, Host, Prop } from '@stencil/core';
import { avatars, Profile, profiles } from '../../options';
import CommandIcon from '../svgs/command-icon';

@Component({
	tag: 'discord-command',
	styleUrl: 'discord-command.css'
})
export class DiscordCommand implements ComponentInterface {
	/**
	 * The DiscordCommand element.
	 */
	@Element()
	public el: HTMLElement;

	/**
	 * The id of the profile data to use.
	 */
	@Prop()
	public profile: string;

	/**
	 * The message author's username.
	 * @default 'User'
	 */
	@Prop()
	public author = 'User';

	/**
	 * The message author's avatar. Can be an avatar shortcut, relative path, or external link.
	 */
	@Prop()
	public avatar: string;

	/**
	 * The message author's primary role color. Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp).
	 */
	@Prop()
	public roleColor: string;

	/**
	 * The name of the command invoked.
	 */
	@Prop()
	public command: string;

	public render() {
		const parent: HTMLDiscordMessageElement = this.el.parentElement as HTMLDiscordMessageElement;

		if (parent.tagName.toLowerCase() !== 'discord-message') {
			throw new Error('All <discord-command> components must be direct children of <discord-message>.');
		}

		const resolveAvatar = (avatar: string): string => avatars[avatar] ?? avatar ?? avatars.default;

		const defaultData: Profile = { author: this.author, bot: false, verified: false, server: false, roleColor: this.roleColor };
		const profileData: Profile = Reflect.get(profiles, this.profile) ?? {};
		const profile: Profile = { ...defaultData, ...profileData, ...{ avatar: resolveAvatar(profileData.avatar ?? this.avatar) } };

		const messageParent: HTMLDiscordMessagesElement = parent.parentElement as HTMLDiscordMessagesElement;

		return (
			<Host class="discord-replied-message discord-executed-command">
				{messageParent.compactMode ? (
					<div class="discord-reply-badge">
						<CommandIcon />
					</div>
				) : (
					<img class="discord-replied-message-avatar" src={profile.avatar} alt={profile.author} />
				)}
				<span class="discord-replied-message-username" style={{ color: profile.roleColor ?? '' }}>
					{profile.author}
				</span>
				{' used '}
				<div class="discord-replied-message-content discord-command-name">{this.command}</div>
			</Host>
		);
	}
}

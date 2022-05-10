import { Component, ComponentInterface, Element, h, Host, Prop } from '@stencil/core';
import Fragment from '../../Fragment';
import { avatars, Profile, profiles } from '../../options';
import AttachmentReply from '../svgs/attachment-reply';
import CommandReply from '../svgs/command-reply';
import ReplyIcon from '../svgs/reply-icon';
import VerifiedTick from '../svgs/verified-tick';

@Component({
	tag: 'discord-reply',
	styleUrl: 'discord-reply.css'
})
export class DiscordReply implements ComponentInterface {
	/**
	 * The DiscordReply element.
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
	 * Whether the message author is a bot or not.
	 * Only works if `server` is `false` or `undefined`.
	 */
	@Prop()
	public bot = false;

	/**
	 * Whether the message author is a server crosspost webhook or not.
	 * Only works if `bot` is `false` or `undefined`.
	 */
	@Prop()
	public server = false;

	/**
	 * Whether the author is the original poster.
	 */
	@Prop()
	public op = false;

	/**
	 * Whether the bot is verified or not.
	 * Only works if `bot` is `true`
	 */
	@Prop()
	public verified = false;

	/**
	 * Whether the message has been edited or not.
	 */
	@Prop()
	public edited = false;

	/**
	 * The message author's primary role color. Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp).
	 */
	@Prop()
	public roleColor: string;

	/**
	 * Whether the referenced message is from a response of a slash command.
	 */
	@Prop()
	public command = false;

	/**
	 * Whether the referenced message contains attachments.
	 */
	@Prop()
	public attachment = false;

	/**
	 * Whether this reply pings the original message sender, prepending an "@" on the author's username.
	 */
	@Prop()
	public mentions = false;

	public render() {
		const parent: HTMLDiscordMessageElement = this.el.parentElement as HTMLDiscordMessageElement;

		if (parent.tagName.toLowerCase() !== 'discord-message') {
			throw new Error('All <discord-reply> components must be direct children of <discord-message>.');
		}

		const resolveAvatar = (avatar: string): string => avatars[avatar] ?? avatar ?? avatars.default;

		const defaultData: Profile = {
			author: this.author,
			bot: this.bot,
			verified: this.verified,
			op: this.op,
			server: this.server,
			roleColor: this.roleColor
		};
		const profileData: Profile = Reflect.get(profiles, this.profile) ?? {};
		const profile: Profile = { ...defaultData, ...profileData, ...{ avatar: resolveAvatar(profileData.avatar ?? this.avatar) } };

		const messageParent: HTMLDiscordMessagesElement = parent.parentElement as HTMLDiscordMessagesElement;

		return (
			<Host class="discord-replied-message">
				{messageParent.compactMode ? (
					<div class="discord-reply-badge">
						<ReplyIcon />
					</div>
				) : (
					<img class="discord-replied-message-avatar" src={profile.avatar} alt={profile.author} />
				)}
				{
					<Fragment>
						{profile.bot && !profile.server && (
							<span class="discord-application-tag">
								{profile.verified && <VerifiedTick />}
								Bot
							</span>
						)}
						{profile.server && !profile.bot && <span class="discord-application-tag">Server</span>}
						{profile.op && <span class="discord-application-tag discord-application-tag-op">OP</span>}
					</Fragment>
				}
				<span class="discord-replied-message-username" style={{ color: profile.roleColor ?? '' }}>
					{this.mentions && '@'}
					{profile.author}
				</span>
				<div class="discord-replied-message-content">
					<slot />
					{this.edited ? <span class="discord-message-edited">(edited)</span> : ''}
				</div>
				{this.command ? (
					<CommandReply class="discord-replied-message-content-icon" />
				) : (
					this.attachment && <AttachmentReply class="discord-replied-message-content-icon" />
				)}
			</Host>
		);
	}
}

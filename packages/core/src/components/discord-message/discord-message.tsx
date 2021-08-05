import { Component, ComponentInterface, Element, h, Host, Prop, Watch } from '@stencil/core';
import clsx from 'clsx';
import Fragment from '../../Fragment';
import { avatars, Profile, profiles } from '../../options';
import { DiscordTimestamp, handleTimestamp } from '../../util';
import { AuthorInfo } from '../author-info/author-info';

@Component({
	tag: 'discord-message',
	styleUrl: 'discord-message.css'
})
export class DiscordMessage implements ComponentInterface {
	/**
	 * The DiscordMessage element.
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
	 * Whether to highlight this message.
	 */
	@Prop()
	public highlight = false;

	/**
	 * The timestamp to use for the message date.
	 */
	@Prop({ mutable: true, reflect: true })
	public timestamp: DiscordTimestamp = new Date();

	/**
	 * Whether to use 24-hour format for the timestamp.
	 */
	@Prop()
	public twentyFour = false;

	@Watch('timestamp')
	public updateTimestamp(value: DiscordTimestamp): string | null {
		const parent: HTMLDiscordMessagesElement = this.el.parentElement as HTMLDiscordMessagesElement;
		return handleTimestamp(value, parent.compactMode, this.twentyFour);
	}

	public componentWillRender() {
		const parent: HTMLDiscordMessagesElement = this.el.parentElement as HTMLDiscordMessagesElement;
		this.timestamp = handleTimestamp(this.timestamp, parent.compactMode, this.twentyFour);
	}

	public render() {
		const parent: HTMLDiscordMessagesElement = this.el.parentElement as HTMLDiscordMessagesElement;

		if (parent.tagName.toLowerCase() !== 'discord-messages') {
			throw new Error('All <discord-message> components must be direct children of <discord-messages>.');
		}

		const resolveAvatar = (avatar: string): string => avatars[avatar] ?? avatar ?? avatars.default;

		const defaultData: Profile = { author: this.author, bot: this.bot, verified: this.verified, server: this.server, roleColor: this.roleColor };
		const profileData: Profile = Reflect.get(profiles, this.profile) ?? {};
		const profile: Profile = { ...defaultData, ...profileData, ...{ avatar: resolveAvatar(profileData.avatar ?? this.avatar) } };

		const highlightMention: boolean =
			// @ts-expect-error ts doesn't understand this
			Array.from(this.el.children).some((child: HTMLDiscordMentionElement): boolean => {
				return child.tagName.toLowerCase() === 'discord-mention' && child.highlight && ['user', 'role'].includes(child.type);
			}) || this.highlight;

		return (
			<Host class={clsx('discord-message', { 'discord-highlight-mention': highlightMention })}>
				<slot name="reply"></slot>
				<div class="discord-message-inner">
					{parent.compactMode && <span class="discord-message-timestamp">{this.timestamp}</span>}
					<div class="discord-author-avatar">
						<img src={profile.avatar} alt={profile.author} />
					</div>
					<div class="discord-message-content">
						{!parent.compactMode && (
							<Fragment>
								<AuthorInfo
									author={profile.author ?? ''}
									bot={profile.bot ?? false}
									server={profile.server ?? false}
									verified={profile.verified ?? false}
									roleColor={profile.roleColor ?? ''}
									compact={parent.compactMode}
								/>
								<span class="discord-message-timestamp">{this.timestamp}</span>
							</Fragment>
						)}
						<div class="discord-message-body">
							{parent.compactMode && (
								<AuthorInfo
									author={profile.author ?? ''}
									bot={profile.bot ?? false}
									server={profile.server ?? false}
									verified={profile.verified ?? false}
									roleColor={profile.roleColor ?? ''}
									compact={parent.compactMode}
								/>
							)}
							<span class="discord-message-markup">
								<slot></slot>
							</span>
							{this.edited ? <span class="discord-message-edited">(edited)</span> : ''}
						</div>
						<div class="discord-message-compact-indent">
							<slot name="embeds"></slot>
							<slot name="attachments"></slot>
							<slot name="reactions"></slot>
						</div>
					</div>
				</div>
			</Host>
		);
	}
}

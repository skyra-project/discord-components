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
	 */
	@Prop()
	public bot = false;

	/**
	 * Whether the bot is verified or not.
	 */
	@Prop()
	public verified = false;

	/**
	 * Whether the message has been edited or not.
	 */
	@Prop()
	public edited = false;

	/**
	 * The message author's primary role color. Can be any {@link https://www.w3schools.com/cssref/css_colors_legal.asp CSS color value}.
	 */
	@Prop()
	public roleColor: string;

	/**
	 * The timestamp to use for the message date. When supplying a string, the format must be `01/31/2000`.
	 */
	@Prop({ mutable: true, reflect: true })
	public timestamp: DiscordTimestamp = new Date();

	@Watch('timestamp')
	public updateTimestamp(value: DiscordTimestamp): string | null {
		return handleTimestamp(value);
	}

	public componentWillRender() {
		this.timestamp = handleTimestamp(this.timestamp);
	}

	public render() {
		const parent: HTMLDiscordMessagesElement = this.el.parentElement as HTMLDiscordMessagesElement;

		if (parent.tagName.toLowerCase() !== 'discord-messages') {
			throw new Error('All <discord-message> components must be direct children of <discord-messages>.');
		}

		const resolveAvatar = (avatar: string): string => avatars[avatar] ?? avatar ?? avatars.default;

		const defaultData: Profile = { author: this.author, bot: this.bot, verified: this.verified, roleColor: this.roleColor };
		const profileData: Profile = Reflect.get(profiles, this.profile) ?? {};
		const profile: Profile = { ...defaultData, ...profileData, ...{ avatar: resolveAvatar(profileData.avatar ?? this.avatar) } };

		// @ts-expect-error ts doesn't understand this
		const highlightMention: boolean = Array.from(this.el.children).some((child: HTMLDiscordMentionElement): boolean => {
			return child.tagName.toLowerCase() === 'discord-mention' && child.highlight && child.type !== 'channel';
		});

		return (
			<Host class={clsx('discord-message', { 'discord-highlight-mention': highlightMention })}>
				<div class="discord-author-avatar">
					<img src={profile.avatar} alt={profile.author} />
				</div>
				<div class="discord-message-content">
					{!parent.compactMode && (
						<Fragment>
							<AuthorInfo
								author={profile.author ?? ''}
								bot={profile.bot ?? false}
								verified={profile.verified ?? false}
								roleColor={profile.roleColor ?? ''}
							/>
							<span class="discord-message-timestamp">{this.timestamp}</span>
						</Fragment>
					)}
					<div class="discord-message-body">
						{parent.compactMode && (
							<Fragment>
								<span class="discord-message-timestamp">{this.timestamp}</span>
								<AuthorInfo
									author={profile.author ?? ''}
									bot={profile.bot ?? false}
									verified={profile.verified ?? false}
									roleColor={profile.roleColor ?? ''}
								/>
							</Fragment>
						)}
						<slot></slot>
						{this.edited ? <span class="discord-message-edited">(edited)</span> : ''}
					</div>
					<slot name="embeds"></slot>
					<slot name="attachments"></slot>
				</div>
			</Host>
		);
	}
}

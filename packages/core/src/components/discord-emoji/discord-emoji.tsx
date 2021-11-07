import { Component, ComponentInterface, Element, h, Prop } from '@stencil/core';

@Component({
	tag: 'discord-custom-emoji',
	styleUrl: 'discord-emoji.css'
})
export class DiscordCustomEmoji implements ComponentInterface {
	/**
	 * The DiscordReaction element.
	 */
	@Element()
	public el: HTMLElement;

	/**
	 * The name of the emoji
	 */
	@Prop()
	public name: string;

	/**
	 * The emoji URL to use in the message.
	 */
	@Prop()
	public url: string;

	/**
	 * Determines whether or not the emoji is used in an embed, or a message.
	 * If it is used in an embed, the sizing is adjusted accordingly.
	 */
	@Prop()
	public embedEmoji: boolean;

	public render() {
		const name = `:${this.name}:`;
		const emojiClassName = this.embedEmoji ? 'discord-embed-emoji' : 'discord-emoji';
		const emojiImageClassName = this.embedEmoji ? 'discord-embed-emoji-image' : 'discord-emoji-image';
		return (
			<span class={emojiClassName}>
				<img aria-label={name} src={this.url} alt={name} draggable={false} class={emojiImageClassName} />
			</span>
		);
	}
}

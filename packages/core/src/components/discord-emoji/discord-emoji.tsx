import { Component, ComponentInterface, Element, h, Prop } from '@stencil/core';

@Component({
	tag: 'discord-emoji',
	styleUrl: 'discord-emoji.css'
})
export class DiscordEmoji implements ComponentInterface {
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

	public render() {
		const name = `:${this.name}:`;
		return (
			<span class="discord-emoji-container">
				<img aria-label={name} src={this.url} alt={name} draggable={false} class="discord-emoji-image" />
			</span>
		);
	}
}

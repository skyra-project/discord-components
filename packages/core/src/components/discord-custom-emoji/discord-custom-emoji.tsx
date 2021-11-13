import { Component, ComponentInterface, Element, h, Prop } from '@stencil/core';
import { getGlobalEmojiUrl } from '../../util';

@Component({
	tag: 'discord-custom-emoji',
	styleUrl: 'discord-custom-emoji.css'
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
	@Prop({ mutable: true })
	public url: string;

	/**
	 * Determines whether or not the emoji is used in an embed, or a message.
	 * If it is used in an embed, the sizing is adjusted accordingly.
	 */
	@Prop({ mutable: true })
	public embedEmoji: boolean;

	public componentWillRender() {
		if (!this.url && Boolean(this.name)) {
			const emojiFromGlobal = getGlobalEmojiUrl(this.name);

			if (emojiFromGlobal) {
				this.url ??= emojiFromGlobal.url ?? '';
				this.embedEmoji ??= emojiFromGlobal.embedEmoji ?? false;
			}
		}
	}

	public render() {
		const name = `:${this.name}:`;
		const emojiClassName = this.embedEmoji ? 'discord-embed-custom-emoji' : 'discord-custom-emoji';
		const emojiImageClassName = this.embedEmoji ? 'discord-embed-custom-emoji-image' : 'discord-custom-emoji-image';

		return (
			<span class={emojiClassName}>
				<img aria-label={name} src={this.url} alt={name} draggable={false} class={emojiImageClassName} />
			</span>
		);
	}
}

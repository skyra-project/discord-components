import { Component, ComponentInterface, Element, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
	tag: 'discord-reaction',
	styleUrl: 'discord-reaction.css'
})
export class DiscordReaction implements ComponentInterface {
	/**
	 * The DiscordReaction element.
	 */
	@Element()
	public el: HTMLElement;

	/**
	 * The reaction emoji image URL.
	 */
	@Prop()
	public emoji: string;

	/**
	 * The name of the emoji to use as alternative image text.
	 * @default ':emoji'
	 */
	@Prop()
	public name = ':emoji:';

	/**
	 * The number of people who reacted.
	 * @default 1
	 */
	@Prop({ mutable: true })
	public count = 1;

	/**
	 * Whether the reaction should show as reacted by the user.
	 * @default false
	 */
	@Prop()
	public reacted = false;

	/**
	 * Whether the reaction should be reactive.
	 * @remark When the reaction is interactive left clicking it will add 1 to the counter.
	 * Whereas when holding the Shift key and left clicking it will decrease the counter.
	 * The counter cannot go below 1.
	 * @default false
	 */
	@Prop()
	public interactive = false;

	public render() {
		return (
			<div class={clsx('discord-reaction', { 'discord-reaction-reacted': this.reacted })} onClick={this.handleReactionClick.bind(this)}>
				<div class="discord-reaction-inner">
					<img src={this.emoji} alt={this.name} draggable={false} />
					<span class="discord-reaction-count">{this.count}</span>
				</div>
			</div>
		);
	}

	private handleReactionClick(event: MouseEvent) {
		if (this.interactive) {
			if (event.shiftKey) {
				this.count--;
			} else {
				this.count++;
			}

			if (this.count <= 0) {
				this.count = 1;
			}
		}
	}
}

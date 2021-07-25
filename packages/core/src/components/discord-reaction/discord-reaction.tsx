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
	 */
	@Prop()
	public reacted = false;

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

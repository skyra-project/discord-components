import { Component, ComponentInterface, Element, h, Host } from '@stencil/core';

@Component({
	tag: 'discord-embed-description',
	styleUrl: 'discord-embed-description.css'
})
export class DiscordEmbedDescription implements ComponentInterface {
	/**
	 * The DiscordEmbedDescription element.
	 */
	@Element()
	public el: HTMLElement;

	public render() {
		const parent: HTMLDiscordMessagesElement = this.el.parentElement as HTMLDiscordMessagesElement;

		if (parent.tagName.toLowerCase() !== 'div') {
			throw new Error('All <discord-embed-description> components must be direct children of <discord-embed>.');
		}

		return (
			<Host class="discord-embed-description">
				<slot></slot>
			</Host>
		);
	}
}

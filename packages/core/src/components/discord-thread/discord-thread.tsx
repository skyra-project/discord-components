import { Component, ComponentInterface, Element, h, Host, Prop } from '@stencil/core';

@Component({
	tag: 'discord-thread',
	styleUrl: 'discord-thread.css'
})
export class DiscordThread implements ComponentInterface {
	/**
	 * The DiscordThread element.
	 */
	@Element()
	public el: HTMLElement;

	/**
	 * The name of the thread.
	 */
	@Prop()
	public name = 'Thread';

	/**
	 * The the text within the call to action text. (i.e. 'See Thread' or 'x Messages')
	 */
	@Prop()
	public cta = 'See Thread';

	public render() {
		return (
			<Host class="discord-thread">
				<div class="discord-thread-top">
					<span class="discord-thread-name">{this.name}</span>
					<span class="discord-thread-cta" aria-hidden="true">
						{this.cta} ›
					</span>
				</div>
				<span class="discord-thread-bottom">
					<slot></slot>
				</span>
			</Host>
		);
	}
}

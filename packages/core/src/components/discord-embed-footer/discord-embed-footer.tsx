import { Component, ComponentInterface, Element, h, Host, Prop, Watch } from '@stencil/core';
import Fragment from '../../Fragment';
import { DiscordTimestamp, handleTimestamp } from '../../util';

@Component({
	tag: 'discord-embed-footer',
	styleUrl: 'discord-embed-footer.css'
})
export class DiscordEmbedFooter implements ComponentInterface {
	/**
	 * The DiscordEmbedFooter element.
	 */
	@Element()
	public el: HTMLElement;

	/**
	 * The image to use next to the footer text.
	 */
	@Prop()
	public footerImage: string;

	/**
	 * The timestamp to use for the message date. When supplying a string, the format must be `01/31/2000`.
	 */
	@Prop({ mutable: true, reflect: true })
	public timestamp?: DiscordTimestamp;

	@Watch('timestamp')
	public updateTimestamp(value?: DiscordTimestamp): string | null {
		if (!value || isNaN(new Date(value).getTime())) return null;
		return handleTimestamp(new Date(value));
	}

	public componentWillRender() {
		this.timestamp = this.updateTimestamp(this.timestamp);
	}

	public render() {
		const parent: HTMLDiscordMessagesElement = this.el.parentElement as HTMLDiscordMessagesElement;

		if (parent.tagName.toLowerCase() !== 'div') {
			throw new Error('All <discord-embed-footer> components must be direct children of <discord-embed>.');
		}

		return (
			<Host class="discord-embed-footer">
				{this.footerImage ? <img src={this.footerImage} alt="" class="discord-footer-image" /> : ''}
				<Fragment>
					<slot></slot>
					{this.timestamp ? <span class="discord-footer-separator">&bull;</span> : ''}
					{this.timestamp ? <Fragment>{this.timestamp}</Fragment> : ''}
				</Fragment>
			</Host>
		);
	}
}

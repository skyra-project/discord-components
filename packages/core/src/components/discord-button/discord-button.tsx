import { Component, ComponentInterface, Element, h, Host, Prop, Watch } from '@stencil/core';
import Fragment from '../../Fragment';
import LaunchIcon from '../svgs/launch-icon';

@Component({
	tag: 'discord-button',
	styleUrl: 'discord-button.css'
})
export class DiscordButton implements ComponentInterface {
	/**
	 * The DiscordButton element.
	 */
	@Element()
	public el: HTMLElement;

	/**
	 * The emoji URL to use in the button.
	 */
	@Prop()
	public emoji: string;

	/**
	 * The name of the emoji used in the button.
	 */
	@Prop()
	public emojiName = 'emoji';

	/**
	 * The URL for the button. Setting this will force the button type to be `secondary`.
	 */
	@Prop()
	public url: string;

	/**
	 * Whether to show the button as disabled.
	 */
	@Prop()
	public disabled = false;

	/**
	 * The type of button this is, this will change the color of the button.
	 * Valid values: `primary`, `secondary`, `success`, `destructive`.
	 */
	@Prop()
	public type: 'primary' | 'secondary' | 'success' | 'destructive' = 'secondary';

	@Watch('type')
	public handleType(value: string) {
		if (typeof value !== 'string') {
			throw new TypeError('DiscordButton `type` prop must be a string.');
		} else if (!['primary', 'secondary', 'success', 'destructive'].includes(value)) {
			throw new RangeError("DiscordButton `type` prop must be one of: 'primary', 'secondary', 'success', 'destructive'");
		}
	}

	public render() {
		const parent: HTMLDiscordActionRowElement = this.el.parentElement as HTMLDiscordActionRowElement;

		if (parent.tagName.toLowerCase() !== 'discord-action-row') {
			throw new Error('All <discord-button> components must be direct children of <discord-action-row>.');
		}

		const content = (
			<Fragment>
				{this.emoji && <img src={this.emoji} alt={this.emojiName} draggable={false} class="discord-button-emoji" />}
				<span>
					<slot />
				</span>
				{this.url && <LaunchIcon class="discord-button-launch" />}
			</Fragment>
		);

		return this.url && !this.disabled ? (
			<a class="discord-button discord-button-secondary" href={this.url} target="_blank" rel="noopener noreferrer">
				{content}
			</a>
		) : (
			<Host class={`discord-button discord-button-${this.type} discord-button-${this.disabled ? 'disabled' : 'hoverable'}`}>{content}</Host>
		);
	}
}

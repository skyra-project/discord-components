import { Component, h, Host, Prop, Element } from '@stencil/core';

@Component({
	tag: 'discord-embed-field',
	styleUrl: 'discord-embed-field.css'
})
export class DiscordEmbedField {
	/**
	 * The DiscordEmbedField element
	 */
	@Element() el: HTMLElement;

	/**
	 * The field's title.
	 */
	@Prop() fieldTitle!: string;

	/**
	 * Whether this field should be displayed inline or not.
	 */
	@Prop() inline = false;

	render() {
		const parent: HTMLDiscordEmbedFieldElement = this.el.parentElement as HTMLDiscordEmbedFieldElement;

		if (parent.tagName.toLowerCase() !== 'discord-embed-fields') {
			throw new Error('All <discord-embed-field> components must be direct children of <discord-embed-fields>.');
		}

		return (
			<Host class={`discord-embed-field ${this.inline ? 'discord-inline-field' : ''}`}>
				<div class="discord-field-title">{this.fieldTitle}</div>
				<slot></slot>
			</Host>
		);
	}
}

import { Component, h, Host } from '@stencil/core';

@Component({
	tag: 'discord-embed-fields',
	styleUrl: 'discord-embed-fields.css'
})
export class DiscordEmbedFields {
	render() {
		return (
			<Host class="discord-embed-fields">
				<slot></slot>
			</Host>
		);
	}
}

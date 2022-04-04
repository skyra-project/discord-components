import { Component, h, Host } from '@stencil/core';

@Component({
	tag: 'discord-spoiler',
	styleUrl: 'discord-spoiler.css'
})
export class DiscordSpoiler {
	public render() {
		return (
			<Host class="discord-spoiler">
				<slot></slot>
			</Host>
		);
	}
}

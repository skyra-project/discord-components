import { Component, h, Host } from '@stencil/core';

@Component({
	tag: 'discord-time',
	styleUrl: 'discord-time.css'
})
export class DiscordTime {
	public render() {
		return (
			<Host class="discord-time">
				<slot></slot>
			</Host>
		);
	}
}

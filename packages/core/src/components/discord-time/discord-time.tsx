import { Component, h } from '@stencil/core';

@Component({
	tag: 'discord-time',
	styleUrl: 'discord-time.css'
})
export class DiscordTime {
	public render() {
		return (
			<span class="discord-time">
				<slot></slot>
			</span>
		);
	}
}

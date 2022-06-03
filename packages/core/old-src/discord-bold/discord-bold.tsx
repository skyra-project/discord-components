import { Component, h } from '@stencil/core';

@Component({
	tag: 'discord-bold'
})
export class DiscordBold {
	public render() {
		return (
			<strong>
				<slot></slot>
			</strong>
		);
	}
}

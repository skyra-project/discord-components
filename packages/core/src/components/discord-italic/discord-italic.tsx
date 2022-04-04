import { Component, h } from '@stencil/core';

@Component({
	tag: 'discord-italic'
})
export class DiscordItalic {
	public render() {
		return (
			<em>
				<slot></slot>
			</em>
		);
	}
}

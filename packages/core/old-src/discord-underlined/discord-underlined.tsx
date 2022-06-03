import { Component, h } from '@stencil/core';

@Component({
	tag: 'discord-underlined'
})
export class DiscordUnderlined {
	public render() {
		return (
			<u>
				<slot></slot>
			</u>
		);
	}
}

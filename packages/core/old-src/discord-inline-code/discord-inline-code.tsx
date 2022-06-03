import { Component, h } from '@stencil/core';

@Component({
	tag: 'discord-inline-code'
})
export class DiscordInlineCode {
	public render() {
		return (
			<code>
				<slot></slot>
			</code>
		);
	}
}

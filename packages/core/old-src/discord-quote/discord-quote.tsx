import { Component, h, Host } from '@stencil/core';

@Component({
	tag: 'discord-quote',
	styleUrl: 'discord-quote.css'
})
export class DiscordQuote {
	public render() {
		return (
			<Host class="discord-quote-container">
				<div class="discord-quote-divider"></div>
				<blockquote>
					<slot></slot>
				</blockquote>
			</Host>
		);
	}
}

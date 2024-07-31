import { consume } from '@lit/context';
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { LightTheme } from '../../types.js';
import { messagesLightTheme } from '../discord-messages/DiscordMessages.js';

@customElement('discord-subscript')
export class DiscordSubscript extends LitElement implements LightTheme {
	/**
	 * @internal
	 */
	public static override readonly styles = css`
		small {
			display: block;
			color: color-mix(in oklab, hsl(214 calc(1 * 8.1%) 61.2% / 1) 100%, black 0%);
			font-size: 0.8125rem;
			line-height: 1.11719rem;
		}

		:host([light-theme]) > small {
			color: color-mix(in oklab, hsl(228 calc(1 * 5.2%) 38% / 1) 100%, black 0%);
		}
	`;

	@consume({ context: messagesLightTheme })
	@property({ type: Boolean, reflect: true, attribute: 'light-theme' })
	public accessor lightTheme = false;

	protected override render() {
		return html`
			<small>
				<span>
					<slot></slot>
				</span>
			</small>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-subscript': DiscordSubscript;
	}
}

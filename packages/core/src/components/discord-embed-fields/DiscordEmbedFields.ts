import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import type { LightTheme } from '../../util.js';
import type { DiscordEmbed } from '../discord-embed/DiscordEmbed.js';

@customElement('discord-embed-fields')
export class DiscordEmbedFields extends LitElement implements LightTheme {
	public static override styles = css`
		.discord-embed-fields {
			display: grid;
			grid-column: 1/1;
			margin-top: 8px;
			grid-gap: 8px;
		}

		::slotted([inline-index='1']) {
			grid-column: 1/5 !important;
		}
		::slotted([inline-index='2']) {
			grid-column: 5/9 !important;
		}
		::slotted([inline-index='3']) {
			grid-column: 9/13 !important;
		}
	`;

	@state()
	public lightTheme = false;

	protected override render() {
		const parent = this.parentElement as DiscordEmbed | null;

		if (!parent || parent.tagName.toLowerCase() !== 'discord-embed') {
			throw new SyntaxError('All <discord-embed-fields> components must be direct children of <discord-embed>.');
		}

		this.lightTheme = parent.lightTheme;

		return html` <div class="discord-embed-fields">
			<slot></slot>
		</div>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-embed-fields': DiscordEmbedFields;
	}
}

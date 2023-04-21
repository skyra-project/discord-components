import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('discord-embed-fields')
export class DiscordEmbedFields extends LitElement {
	public static override styles = css`
		.discord-embed-fields {
			display: grid;
			grid-column: 1/1;
			margin-top: 8px;
			grid-gap: 8px;
		}
	`;

	protected override render() {
		return html` <div class="discord-embed-fields">
			<slot></slot>
		</div>`;
	}
}

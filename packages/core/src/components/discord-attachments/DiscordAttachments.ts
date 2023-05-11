import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import type { LightTheme } from '../../util.js';
import type { DiscordMessage } from '../discord-message/DiscordMessage.js';

@customElement('discord-attachments')
export class DiscordAttachments extends LitElement implements LightTheme {
	public static override styles = css`
		:host {
			display: grid;
			grid-auto-flow: row;
			grid-row-gap: 0.25rem;
			text-indent: 0;
			min-height: 0;
			min-width: 0;
			padding-top: 0.125rem;
			padding-bottom: 0.125rem;
			position: relative;
		}
		:host > * {
			justify-self: start;
			-ms-flex-item-align: start;
			align-self: start;
		}
	`;

	@state()
	public lightTheme = false;

	protected override render() {
		const parent = this.parentElement as DiscordMessage;

		if (!parent || parent.tagName.toLowerCase() !== 'discord-message') {
			throw new Error('All <discord-attachments> components must be direct children of <discord-message>.');
		}

		this.lightTheme = parent.lightTheme;

		return html`<slot></slot>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-attachments': DiscordAttachments;
	}
}

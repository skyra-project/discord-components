import { consume } from '@lit/context';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { messagesCompactMode } from '../discord-messages/DiscordMessages.js';
import VerifiedTick from '../svgs/VerifiedTick.js';

@customElement('discord-verified-author-tag')
export class DiscordVerifiedAuthorTag extends LitElement {
	public static override readonly styles = css`
		:host {
			background-color: #5865f2;
			color: #fff;
			font-size: 0.625em;
			margin-left: 4px;
			border-radius: 3px;
			line-height: 100%;
			text-transform: uppercase;
			display: inline-flex;
			align-items: center;
			height: 0.9375rem;
			padding: 0 0.275rem;
			margin-top: 0.075em;
			border-radius: 0.1875rem;
		}

		:host .discord-application-tag-verified {
			display: inline-block;
			width: 0.9375rem;
			height: 0.9375rem;
			margin-left: -0.25rem;
		}

		:host([compact-mode]) {
			padding-left: 10px;
			padding-right: 4px;
			margin-right: 0.25rem;
		}

		:host([compact-mode]) .discord-application-tag-verified {
			margin-right: 0.7em;
			margin-left: -0.7em;
		}
	`;

	/**
	 * Whether this bot is verified by Discord. Only works if `bot` is `true`
	 */
	@property({ type: Boolean })
	public accessor verified = false;

	/**
	 * Whether to reverse the order of the author info for compact mode.
	 */
	@consume({ context: messagesCompactMode })
	@property({ type: Boolean, reflect: true, attribute: 'compact-mode' })
	public accessor compactMode = false;

	protected override render() {
		return html`${when(this.verified, () => VerifiedTick())}App`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-verified-author-tag': DiscordVerifiedAuthorTag;
	}
}

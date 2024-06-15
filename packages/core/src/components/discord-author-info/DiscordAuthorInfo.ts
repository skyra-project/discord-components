import { consume } from '@lit/context';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { when } from 'lit/directives/when.js';
import { messagesCompactMode, messagesLightTheme } from '../discord-messages/DiscordMessages.js';
import VerifiedTick from '../svgs/VerifiedTick.js';

@customElement('discord-author-info')
export class DiscordAuthorInfo extends LitElement {
	public static override readonly styles = css`
		:host {
			display: inline-flex;
			align-items: center;
			font-size: 16px;
			text-underline-offset: 1px;
			margin-right: 0.25rem;
		}

		:host([compact-mode]) {
			margin-right: 0.25rem;
			display: inline;
		}

		:host .discord-author-username {
			color: #fff;
			font-size: 1em;
			font-weight: 500;
		}

		:host .discord-author-username:hover {
			text-decoration: underline;
			cursor: pointer;
		}

		:host([light-theme]) .discord-author-username {
			color: #23262a;
		}

		:host .discord-application-tag {
			background-color: #5865f2;
			color: #fff;
			font-size: 0.625em;
			margin-left: 4px;
			border-radius: 3px;
			line-height: 100%;
			text-transform: uppercase;

			/* Use flex layout to ensure both verified icon and "BOT" text are aligned to center */
			display: inline-flex;
			align-items: center;

			/* Styling taken through Inspect Element on Discord client for Windows */
			height: 0.9375rem;
			padding: 0 0.275rem;
			margin-top: 0.075em;
			border-radius: 0.1875rem;
		}

		:host .discord-application-tag.discord-application-tag-op {
			background-color: #c9cdfb;
			color: #4752c4;
			border-radius: 0.4rem;
		}

		:host .discord-application-tag-verified {
			display: inline-block;
			width: 0.9375rem;
			height: 0.9375rem;
			margin-left: -0.25rem;
		}

		:host .discord-author-role-icon {
			margin-left: 0.25rem;
			vertical-align: top;
			height: calc(1rem + 4px);
			width: calc(1rem + 4px);
		}

		:host([compact-mode]) .discord-author-username {
			margin-right: 0.25rem;
		}

		:host([compact-mode]) .discord-application-tag {
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
	 * The name of the author
	 */
	@property()
	public accessor author: string | undefined = undefined;

	/**
	 * Whether this author is a bot. Only works if `server` is `false` or `undefined`.
	 */
	@property({ type: Boolean })
	public accessor bot = false;

	/**
	 * Whether this author is a `server` crosspost webhook. Only works if `bot` is `false` or `undefined`.
	 */
	@property({ type: Boolean })
	public accessor server = false;

	/**
	 * Whether this author is the original poster.
	 */
	@property({ type: Boolean })
	public accessor op = false;

	/**
	 * The colour of the author, which comes from their highest role
	 */
	@property()
	public accessor roleColor: string | undefined = undefined;

	/**
	 * The role icon of the author, which comes from their highest role
	 */
	@property()
	public accessor roleIcon: string | undefined = undefined;

	/**
	 * The role name of the author, which comes from their highest role
	 */
	@property()
	public accessor roleName: string | undefined = undefined;

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

	@consume({ context: messagesLightTheme })
	@property({ type: Boolean, reflect: true, attribute: 'light-theme' })
	public accessor lightTheme = false;

	protected override render() {
		return html`${when(
			this.compactMode,
			() => null,
			() => html`<span class="discord-author-username" style="${styleMap({ color: this.roleColor ?? undefined })}">${this.author}</span>`
		)}
		${when(
			this.roleIcon && !this.compactMode,
			() =>
				html`<img
					class="discord-author-role-icon"
					src=${ifDefined(this.roleIcon)}
					height="20"
					width="20"
					alt=${ifDefined(this.roleName)}
					draggable="false"
				/>`
		)}
		${when(
			this.bot && !this.server,
			() =>
				html`<span class="discord-application-tag"
					>${when(
						this.verified,
						() => VerifiedTick(),
						() => null
					)}
					App</span
				>`
		)}
		${when(this.server && !this.bot, () => html`<span class="discord-application-tag">Server</span>`)}
		${when(this.op, () => html`<span class="discord-application-tag discord-application-tag-op">OP</span>`)}
		${when(
			this.compactMode,
			() => html`<span class="discord-author-username" style="${styleMap({ color: this.roleColor ?? undefined })}">${this.author}</span>`
		)}`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-author-info': DiscordAuthorInfo;
	}
}

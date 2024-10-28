import '../discord-verified-author-tag/DiscordVerifiedAuthorTag.js';

import { consume } from '@lit/context';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { when } from 'lit/directives/when.js';
import { getClanIcon } from '../../util.js';
import { messagesCompactMode, messagesLightTheme } from '../discord-messages/DiscordMessages.js';
import VerifiedTick from '../svgs/VerifiedTick.js';

@customElement('discord-author-info')
export class DiscordAuthorInfo extends LitElement {
	/**
	 * @internal
	 */
	public static override readonly styles = css`
		:host {
			display: inline-flex;
			align-items: center;
			font-size: 16px;
			text-underline-offset: 1px;
			margin-right: 0.25rem;
		}

		:host([compact-mode]) {
			gap: 5px !important;
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

		:host .discord-clan-tag {
			background-color: oklab(0.431937 0.00109309 -0.0132537 / 0.54);
			color: #fff;
			font-size: 12px;
			font-weight: 500;
			margin-left: 0.25rem;
			border-radius: 4px;
			line-height: 100%;
			text-transform: uppercase;
			display: inline-flex;
			width: max-content;
			gap: 0.25rem;
			justify-content: space-between;
			align-items: center;
			padding: 0 0.275rem;
			margin-top: 0.075em;
			height: 1.2rem;
			min-width: 45px;
			line-height: 1rem !important;
			transition: background-color 100ms ease-in-out;
			cursor: pointer;
		}

		:host .discord-clan-tag:hover {
			background-color: oklab(0.431937 0.00109309 -0.0132537 / 0.34);
		}

		:host([light-theme]) .discord-clan-tag {
			background-color: hsl(0 calc(1 * 0%) 0.8%/0.09);
			color: #000;
		}

		:host([light-theme]) .discord-clan-tag:hover {
			background-color: hsl(0 calc(1 * 0%) 0.8%/0.03);
		}

		:host([compact-mode]) .discord-clan-tag {
			margin-left: 0rem;
		}

		:host .discord-clan-tag span,
		:host .discord-clan-tag svg,
		:host .discord-clan-tag img {
			user-select: none;
			-webkit-user-select: none;
		}

		:host .discord-application-tag {
			background-color: #5865f2;
			color: #fff;
			font-size: 0.625em;
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

		:host .discord-official-application {
			background-color: #5865f2;
			color: #fff;
			font-size: 0.625em;
			margin-left: 4px;
			border-radius: 3px;
			line-height: 100%;
			text-transform: uppercase;

			/* Use flex layout to ensure both verified icon and "BOT" text are aligned to center */
			display: flex;
			align-items: center;

			/* Styling taken through Inspect Element on Discord client for Windows */
			height: 0.9375rem;
			padding: 0 0.275rem;
			margin-top: 0.075em;
			border-radius: 0.1875rem;
		}

		:host([compact-mode]) .discord-official-application {
			gap: 5px;
			margin-right: 5px;
			margin-left: -6px !important;
		}

		:host .discord-application-tag.discord-application-tag-op {
			background-color: #c9cdfb;
			color: #4752c4;
			border-radius: 0.4rem;
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
	`;

	/**
	 * The name of the author
	 */
	@property()
	public accessor author: string | undefined = undefined;

	/**
	 * Whether this author is a bot. Only works if `server` and `officialApp` is `false` or `undefined`.
	 */
	@property({ type: Boolean })
	public accessor bot = false;

	/**
	 * Whether this author is a `server` crosspost webhook. Only works if `bot` and `officialApp` is `false` or `undefined`.
	 */
	@property({ type: Boolean })
	public accessor server = false;

	/**
	 * Whether this author is a `official app` crosspost webhook. Only works if `bot` and `server` is `false` or `undefined`.
	 */
	@property({ type: Boolean, attribute: 'official-app' })
	public accessor officialApp = false;

	/**
	 * Whether this author is the original poster.
	 */
	@property({ type: Boolean })
	public accessor op = false;

	/**
	 * The colour of the author, which comes from their highest role
	 */
	@property({ attribute: 'role-color' })
	public accessor roleColor: string | undefined = undefined;

	/**
	 * The role icon of the author, which comes from their highest role
	 */
	@property({ attribute: 'role-icon' })
	public accessor roleIcon: string | undefined = undefined;

	/**
	 * The role name of the author, which comes from their highest role
	 */
	@property({ attribute: 'role-name' })
	public accessor roleName: string | undefined = undefined;

	/**
	 * The clan icon of the author, which comes from the enabled clan tag
	 */
	@property({ attribute: 'clan-icon' })
	public accessor clanIcon: string | undefined = undefined;

	/**
	 * The clan name of the author, which comes from the enabled clan tag
	 */
	@property({ attribute: 'clan-tag' })
	public accessor clanTag: string | undefined = undefined;

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
		const clanIcon = getClanIcon(this.clanIcon);
		const slicedClanTag = this.clanTag?.slice(0, 4);

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
			this.bot && !this.server && !this.officialApp,
			() => html`<discord-verified-author-tag .verified=${this.verified}></discord-verified-author-tag>`
		)}
		${when(this.server && !this.bot && !this.officialApp, () => html`<span class="discord-application-tag">Server</span>`)}
		${when(
			this.officialApp && !this.server && !this.bot,
			() => html`<span class="discord-official-application">${VerifiedTick()}OFFICIAL</span>`
		)}
		${when(this.op, () => html`<span class="discord-application-tag discord-application-tag-op">OP</span>`)}
		${when(
			this.compactMode,
			() => html`<span class="discord-author-username" style="${styleMap({ color: this.roleColor ?? undefined })}">${this.author}</span>`
		)}
		${when(
			this.clanIcon && this.clanTag && this.clanTag?.length > 0,
			() => html`
				<span class="discord-clan-tag">
					${clanIcon === 'string'
						? html`<img srcset=${ifDefined(clanIcon)} alt=${ifDefined(slicedClanTag)} width="12" height="12" draggable="false" />`
						: clanIcon}
					<span>${slicedClanTag}</span>
				</span>
			`
		)} `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-author-info': DiscordAuthorInfo;
	}
}

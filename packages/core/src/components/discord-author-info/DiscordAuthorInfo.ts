import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { VerifiedTick } from '../svgs/VerifiedTick.js';

@customElement('discord-author-info')
export class DiscordAuthorInfo extends LitElement {
	public static override styles = css`
		:host {
			display: inline-flex;
			align-items: center;
			font-size: 16px;
			margin-right: 0.25rem;
		}

		.discord-compact-mode {
			margin-right: 0;
		}

		.discord-author-username {
			color: #fff;
			font-size: 1em;
			font-weight: 500;
		}

		.discord-light-theme .discord-author-username {
			color: #23262a;
		}

		.discord-application-tag {
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

		.discord-application-tag.discord-application-tag-op {
			background-color: #c9cdfb;
			color: #4752c4;
			border-radius: 0.4rem;
		}

		.discord-application-tag-verified {
			display: inline-block;
			width: 0.9375rem;
			height: 0.9375rem;
			margin-left: -0.25rem;
		}

		.discord-author-role-icon {
			margin-left: 0.25rem;
			vertical-align: top;
			height: calc(1rem + 4px);
			width: calc(1rem + 4px);
		}

		.discord-compact-mode .discord-author-username {
			margin-left: 8px;
			margin-right: 4px;
		}

		.discord-compact-mode .discord-application-tag {
			margin-left: 0;
			margin-left: 5px;
			margin-right: 5px;
			padding-left: 10px;
			padding-right: 4px;
		}

		.discord-compact-mode .discord-application-tag-verified {
			margin-right: 0.7em;
			margin-left: -0.7em;
		}
	`;

	/**
	 * The name of the author
	 */
	@property({ type: String })
	public author: string | undefined = undefined;

	/**
	 * Whether this author is a bot. Only works if `server` is `false` or `undefined`.
	 */
	@property({ type: Boolean })
	public bot = false;

	/**
	 * Whether this author is a `server` crosspost webhook. Only works if `bot` is `false` or `undefined`.
	 */
	@property({ type: Boolean })
	public server = false;

	/**
	 * Whether this author is the original poster.
	 */
	@property({ type: Boolean })
	public op = false;

	/**
	 * The colour of the author, which comes from their highest role
	 */
	@property({ type: String })
	public roleColor: string | undefined = undefined;

	/**
	 * The role icon of the author, which comes from their highest role
	 */
	@property({ type: String })
	public roleIcon: string | undefined = undefined;

	/**
	 * The role name of the author, which comes from their highest role
	 */
	@property({ type: String })
	public roleName: string | undefined = undefined;

	/**
	 * Whether this bot is verified by Discord. Only works if `bot` is `true`
	 */
	@property({ type: Boolean })
	public verified = false;

	/**
	 * Whether to reverse the order of the author info for compact mode.
	 */
	@property({ type: Boolean })
	public compact = false;

	protected override render() {
		return html`
			<div>
				${this.compact ? '' : html`<span class="discord-author-username" style="color: ${this.roleColor}">${this.author}</span>`}
				${this.roleIcon
					? html`<img
							class="discord-author-role-icon"
							src=${this.roleIcon}
							height="20"
							width="20"
							alt=${ifDefined(this.roleName)}
							draggable="false"
					  />`
					: ''}
			</div>

			${this.bot && !this.server ? html` <span class="discord-application-tag">${this.verified && VerifiedTick} Bot</span>` : ''}
			${this.server && !this.bot ? html`<span class="discord-application-tag">Server</span>` : ''}
			${this.op ? html`<span class="discord-application-tag discord-application-tag-op">OP</span>` : ''}
			${this.compact ? html`<span class="discord-author-username" style="color: ${this.roleColor}">${this.author}</span>` : ''}
		`;
	}
}

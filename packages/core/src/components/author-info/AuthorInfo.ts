import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { VerifiedTick } from '../svgs/VerifiedTick.js';
import { authorInfoStyles } from './author-info-styles.js';

@customElement('author-info')
export class AuthorInfo extends LitElement {
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
			<span class="discord-author-info">
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
			</span>
		`;
	}

	public static override styles = authorInfoStyles;
}

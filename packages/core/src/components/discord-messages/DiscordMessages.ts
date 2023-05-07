import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defaultBackground, defaultMode, defaultTheme } from '../../options.js';

@customElement('discord-messages')
export class DiscordMessages extends LitElement {
	public static override styles = css`
		:host {
			color: #fff;
			background-color: #36393e;
			display: block;
			font-size: 16px;
			font-family: 'gg sans', 'Noto Sans', Whitney, 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
			line-height: 170%;
			border: 1px solid rgba(255, 255, 255, 0.05);
		}

		:host([light-theme]) {
			color: #747f8d;
			background-color: #fff;
			border-color: #dedede;
		}

		:host([no-background]) {
			background-color: unset;
		}

		::slotted(*:first-child) {
			margin-top: 0.5rem;
		}

		::slotted(*:not(:first-child)) {
			margin-top: 1.0625rem;
		}

		::slotted(*:last-child) {
			margin-bottom: 0.5rem;
			border-bottom-width: 0;
		}
	`;

	/**
	 * Whether to use light theme or not.
	 */
	@property({ type: Boolean, reflect: true, attribute: 'light-theme' })
	public lightTheme = false;

	/**
	 * Whether to exclude the background or not.
	 */
	@property({ type: Boolean, reflect: true, attribute: 'no-background' })
	public noBackground = false;

	/**
	 * Whether to use compact mode or not.
	 */
	@property({ type: Boolean, reflect: true, attribute: 'compact-mode' })
	public compactMode = false;

	public override connectedCallback(): void {
		super.connectedCallback();

		if (this.lightTheme || (defaultTheme === 'light' && this.lightTheme)) {
			this.lightTheme = true;
		}

		if (this.compactMode || (defaultMode === 'compact' && this.compactMode)) {
			this.compactMode = true;
		}

		if (this.noBackground || (defaultBackground === 'none' && this.noBackground)) {
			this.noBackground = true;
		}
	}

	protected override render() {
		return html`<slot></slot>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-messages': DiscordMessages;
	}
}

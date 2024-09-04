import i18next from 'i18next';
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { DiscordComponentsError } from '../../util.js';

@customElement('discord-list-item')
export class DiscordListItem extends LitElement {
	/**
	 * @internal
	 */
	public static override readonly styles = css`
		:host > li {
			margin-bottom: 4px;
		}
	`;

	public checkParentElement() {
		if (
			this.parentElement?.tagName.toLowerCase() !== 'discord-unordered-list' &&
			this.parentElement?.tagName.toLowerCase() !== 'discord-ordered-list'
		) {
			throw new DiscordComponentsError(i18next.t('discord-list-item.errors.wrong-parent'));
		}
	}

	protected override render() {
		this.checkParentElement();
		return html`<li><slot></slot></li>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-list-item': DiscordListItem;
	}
}

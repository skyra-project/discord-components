import i18next from 'i18next';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { DiscordComponentsError } from '../../util.js';

@customElement('discord-unordered-list')
export class DiscordUnorderedList extends LitElement {
	/**
	 * @internal
	 */
	public static override readonly styles = css`
		:host > ul {
			list-style-image: initial;
			list-style: disc;
			list-style-position: outside;
			margin: 4px 0 0 16px;
			padding: 0px;
		}

		:host([nested]) > ul {
			list-style: circle;
		}
	`;

	/**
	 * Whether this is a nested list or not, this will change the style of the list-style.
	 *
	 * The library will try to guess this automatically based on the component tree, but
	 * you can also set this manually.
	 *
	 * @defaultValue false
	 */
	@property({ type: Boolean, reflect: true })
	public accessor nested = false;

	public checkChildren() {
		const allChildrenAreListItems = Array.from(this.children).every((child) => {
			const tagNameLowerCase = child.tagName.toLowerCase();
			return (
				tagNameLowerCase === 'discord-list-item' ||
				tagNameLowerCase === 'discord-unordered-list' ||
				tagNameLowerCase === 'discord-ordered-list'
			);
		});

		if (!allChildrenAreListItems) {
			throw new DiscordComponentsError(i18next.t('discord-unordered-list.errors.invalid-children'));
		}
	}

	/**
	 * Sets {@link DiscordUnorderedList.nested | nested} to true if the parent is either
	 * `<discord-unordered-list>` or `<discord-ordered-list>`.
	 */
	protected override willUpdate(): void {
		if (
			this.parentElement?.tagName.toLowerCase() === 'discord-unordered-list' ||
			this.parentElement?.tagName.toLowerCase() === 'discord-ordered-list'
		) {
			this.nested = true;
		}
	}

	protected override render() {
		this.checkChildren();

		// We disable the eslint rule here because users should use the <discord-list-item> component inside of this component.
		// eslint-disable-next-line lit-a11y/list
		return html`<ul>
			<slot></slot>
		</ul>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-unordered-list': DiscordUnorderedList;
	}
}

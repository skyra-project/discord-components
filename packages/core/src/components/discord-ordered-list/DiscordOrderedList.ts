import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { DiscordComponentsError } from '../../util.js';

@customElement('discord-ordered-list')
export class DiscordOrderedList extends LitElement {
	public static override readonly styles = css`
		:host > ol {
			list-style-image: initial;
			list-style-type: decimal;
			list-style-position: outside;
			margin-bottom: 0px;
			margin-top: 4px;
			margin-right: 0px;
			margin-left: calc(0.4em + 0.6em * var(--totalCharacters));
			padding: 0px;
		}
	`;

	/**
	 * The starting number for the ordered list.
	 *
	 * You can set this to start the list at a specific number
	 *
	 * @default 1
	 */
	@property({ type: Number, reflect: true })
	public accessor start = 1;

	@state()
	private accessor startLength = 1;

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
			throw new DiscordComponentsError(
				'All direct children inside of a <discord-ordered-list> components must be one of <discord-unordered-list>, <discord-ordered-list>, or <discord-list-item>.'
			);
		}
	}

	/**
	 * Checks how many children of `<discord-list-item>` this component has and updates
	 * the {@link DiscordOrderedList.startLength startLength} state.
	 */
	protected override willUpdate(): void {
		const amountOfListItems = Array.from(this.children).filter((child) => {
			return child.tagName.toLowerCase() === 'discord-list-item';
		}).length;

		const totalCount = this.start + amountOfListItems;

		this.startLength = totalCount.toString().length;
	}

	protected override render() {
		this.checkChildren();

		// We disable the eslint rule here because users should use the <discord-list-item> component inside of this component.
		// eslint-disable-next-line lit-a11y/list
		return html`<ol start=${this.start} style="--totalCharacters:${this.startLength}">
			<slot></slot>
		</ol>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-ordered-list': DiscordOrderedList;
	}
}

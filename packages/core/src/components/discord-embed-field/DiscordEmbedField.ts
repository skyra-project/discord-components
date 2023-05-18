import { consume } from '@lit-labs/context';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Emoji } from '../../options.js';
import { getGlobalEmojiUrl, LightTheme } from '../../util.js';
import { messagesLightTheme } from '../discord-messages/DiscordMessages.js';

@customElement('discord-embed-field')
export class DiscordEmbedField extends LitElement implements LightTheme {
	public static override styles = css`
		:host {
			font-size: 0.875rem;
			line-height: 1.125rem;
			min-width: 0;
			font-weight: 400;
			grid-column: 1/13;
		}

		:host .discord-field-title {
			color: #ffffff;
			font-weight: 600;
			font-size: 0.875rem;
			line-height: 1.125rem;
			min-width: 0;
			margin-bottom: 2px;
		}

		:host .discord-inline-field {
			flex-grow: 1;
			flex-basis: auto;
			min-width: 150px;
		}

		:host([light-theme]) .discord-field-title {
			color: #313338;
		}
	`;

	@property({ reflect: true, attribute: 'field-title' })
	public fieldTitle!: string;

	/**
	 * Whether this field should be displayed inline or not.
	 */
	@property({ type: Boolean, reflect: true, attribute: 'inline' })
	public inline = false;

	/**
	 * The index of this inline field
	 * @remark This defines the position of this inline field. 1 is left, 2 is middle and 3 is right.
	 * @oneof [1, 2, 3]
	 * @default 1
	 */
	@property({ type: Number, reflect: true, attribute: 'inline-index' })
	public inlineIndex = 1;

	@consume({ context: messagesLightTheme, subscribe: true })
	@property({ type: Boolean, reflect: true, attribute: 'light-theme' })
	public lightTheme = false;

	private validInlineIndices = new Set([1, 2, 3]);

	public checkInlineIndex(value: DiscordEmbedField['inlineIndex']) {
		if (!this.validInlineIndices.has(Number(value))) throw new RangeError('DiscordEmbedField `inlineIndex` prop must be one of: 1, 2, or 3');
	}

	protected override render() {
		this.checkInlineIndex(this.inlineIndex);

		const emojiParsedEmbedFieldTitle = this.parseTitle(this.fieldTitle);

		return html` ${emojiParsedEmbedFieldTitle ? html`<div class="discord-field-title">${[...emojiParsedEmbedFieldTitle]}</div>` : null}
			<slot></slot>`;
	}

	private parseTitle(title?: string) {
		if (!title) return null;

		const words = title.split(' ');
		return words.map((word: string, idx: number) => {
			const emoji = getGlobalEmojiUrl(word) ?? ({} as Emoji);
			let el: string | ReturnType<typeof html>;

			if (emoji.name) {
				el = html`
					<span class="discord-embed-custom-emoji">
						<img src="${ifDefined(emoji.url)}" alt="${emoji.name}" class="discord-embed-custom-emoji-image" />
					</span>
				`;
			} else {
				el = idx < words.length - 1 ? `${word} ` : word;
			}

			return el;
		});
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-embed-field': DiscordEmbedField;
	}
}

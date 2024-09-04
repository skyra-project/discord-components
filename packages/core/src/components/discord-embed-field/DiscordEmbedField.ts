import { consume } from '@lit/context';
import i18next from 'i18next';
import { css, html, LitElement, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { when } from 'lit/directives/when.js';
import type { Emoji, LightTheme } from '../../types.js';
import { getGlobalEmojiUrl } from '../../util.js';
import '../discord-custom-emoji/DiscordCustomEmoji.js';
import { messagesLightTheme } from '../discord-messages/DiscordMessages.js';

@customElement('discord-embed-field')
export class DiscordEmbedField extends LitElement implements LightTheme {
	/**
	 * @internal
	 */
	public static override readonly styles = css`
		:host {
			font-size: 0.875rem;
			line-height: 1.125rem;
			min-width: 0;
			font-weight: 400;
			grid-column: 1/13;
			word-break: break-word;
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
	public accessor fieldTitle!: string;

	/**
	 * An emoji that is prefixed to {@link DiscordEmbedField.fieldTitle | fieldTitle}.
	 *
	 * This should be keyed as `{ key: { emojiData } }` wherein `key`
	 * should occur in the {@link DiscordEmbedField.fieldTitle | fieldTitle}.
	 *
	 * By default this component will use the global emojis from
	 * {@link getGlobalEmojiUrl}, however on SSR frameworks like Nuxt 3 global config doesn't
	 * work so we provide this as an alternative method.
	 */
	@property({ attribute: false })
	public accessor embedFieldEmojisMap: { [key: string]: Emoji } = {};

	/**
	 * Whether this field should be displayed inline or not.
	 */
	@property({ type: Boolean, reflect: true, attribute: 'inline' })
	public accessor inline = false;

	/**
	 * The index of this inline field
	 *
	 * @remarks
	 * - This defines the position of this inline field. 1 is left, 2 is middle and 3 is right.
	 * - one of `[1, 2, 3]`
	 * @defaultValue 1
	 */
	@property({ type: Number, reflect: true, attribute: 'inline-index' })
	public accessor inlineIndex = 1;

	@consume({ context: messagesLightTheme, subscribe: true })
	@property({ type: Boolean, reflect: true, attribute: 'light-theme' })
	public accessor lightTheme = false;

	private readonly validInlineIndices = new Set([1, 2, 3]);

	public checkInlineIndex() {
		if (this.inlineIndex) {
			const inlineIndexAsNumber = Number(this.inlineIndex);
			if (!Number.isNaN(inlineIndexAsNumber) && !this.validInlineIndices.has(inlineIndexAsNumber)) {
				throw new RangeError(i18next.t('discord-embed-field.errors.range-error'));
			}
		}
	}

	protected override render() {
		this.checkInlineIndex();

		const emojiParsedEmbedFieldTitle = this.parseTitle(this.fieldTitle);

		const component = when(
			emojiParsedEmbedFieldTitle,
			() => html`<div class="discord-field-title">${[...(emojiParsedEmbedFieldTitle as NonNullable<typeof emojiParsedEmbedFieldTitle>)]}</div>`
		);

		return html`${component}<slot></slot>`;
	}

	private parseTitle(title?: string) {
		if (!title) return null;

		const el: (TemplateResult<1> | string)[] = [];
		let complete = '';

		for (const words of title.split('\n')) {
			for (const word of words.split(' ')) {
				const emoji = getGlobalEmojiUrl(word) ?? this.embedFieldEmojisMap[word] ?? ({} as Emoji);

				if (emoji.name) {
					el.push(html`<discord-custom-emoji name=${emoji.name} url=${ifDefined(emoji.url)} embed-emoji></discord-custom-emoji>`);
				} else {
					complete += `${word} `;
				}

				if (complete === ' ') {
					el.push(html`<br />`);
				}
			}

			el.push(complete);

			complete = '';
		}

		return el.map((wordOrHtmlTemplate) => {
			if (typeof wordOrHtmlTemplate === 'string') {
				return html`<span>${wordOrHtmlTemplate}</span>`;
			}

			return wordOrHtmlTemplate;
		});
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-embed-field': DiscordEmbedField;
	}
}

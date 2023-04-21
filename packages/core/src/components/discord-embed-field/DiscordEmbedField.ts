import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Emoji } from '../../options.js';
import { getGlobalEmojiUrl } from '../../util.js';

@customElement('discord-embed-field')
export class DiscordEmbedField extends LitElement {
	public static override styles = css`
		:host {
			font-size: 0.875rem;
			line-height: 1.125rem;
			min-width: 0;
			font-weight: 400;
			grid-column: 1/13;
		}

		.discord-embed-field .discord-field-title {
			color: #ffffff;
			font-weight: 600;
			font-size: 0.875rem;
			line-height: 1.125rem;
			min-width: 0;
			margin-bottom: 2px;
		}

		.discord-embed-field .discord-inline-field {
			flex-grow: 1;
			flex-basis: auto;
			min-width: 150px;
		}

		.discord-light-theme .discord-embed .discord-embed-field .discord-field-title {
			color: #747f8d;
		}

		.discord-embed-inline-field-3 {
			grid-column: 9/13 !important;
		}

		.discord-embed-inline-field-2 {
			grid-column: 5/9 !important;
		}

		.discord-embed-inline-field-1 {
			grid-column: 1/5 !important;
		}
	`;

	@property({ type: String, reflect: true, attribute: 'field-title' })
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

	private validInlineIndices = new Set([1, 2, 3]);

	// @Watch('inlineIndex')
	public checkInlineIndex(value: DiscordEmbedField['inlineIndex']) {
		if (!this.validInlineIndices.has(Number(value))) throw new RangeError('DiscordEmbedField `inlineIndex` prop must be one of: 1, 2, or 3');
	}

	public componentWillRender() {
		this.checkInlineIndex(this.inlineIndex);
	}

	protected override render() {
		const parent = this.parentElement;

		if (!parent || parent.tagName.toLowerCase() !== 'discord-embed-fields') {
			throw new SyntaxError('All <discord-embed-field> components must be direct children of <discord-embed-fields>.');
		}

		const emojiParsedEmbedFieldTitle = this.parseTitle(this.fieldTitle);

		return html` <div
			class=${classMap({
				'discord-embed-field': true,
				'discord-embed-inline-field': this.inline,
				'discord-embed-inline-field-1': this.inline && this.inlineIndex === 1,
				'discord-embed-inline-field-2': this.inline && this.inlineIndex === 2,
				'discord-embed-inline-field-3': this.inline && this.inlineIndex === 3
			})}
		>
			${emojiParsedEmbedFieldTitle ? html`<div class="discord-field-title">${[...emojiParsedEmbedFieldTitle]}</div>` : ''}
			<slot></slot>
		</div>`;
	}

	/* TODO: used to have <img/>: <span>& nbsp; </span>*/
	private parseTitle(title?: string) {
		if (!title) return null;

		const words = title.split(' ');
		return words.map((word: string, idx: number) => {
			const emoji = getGlobalEmojiUrl(word) ?? ({} as Emoji);
			let el;
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

import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { getGlobalEmojiUrl } from '../../util.js';
import type { Emoji } from '../../types.js';

@customElement('discord-custom-emoji')
export class DiscordCustomEmoji extends LitElement {
	public static override readonly styles = css`
		.discord-custom-emoji {
			display: inline-block;
			cursor: pointer;
		}

		.discord-custom-emoji .discord-custom-emoji-image {
			object-fit: contain;
			width: 1.375rem;
			height: 1.375rem;
			vertical-align: bottom;
		}

		.discord-embed-custom-emoji {
			display: inline-block;
		}

		.discord-embed-custom-emoji .discord-embed-custom-emoji-image {
			width: 18px;
			height: 18px;
			vertical-align: bottom;
		}
	`;

	/**
	 * The name of the emoji
	 */
	@property()
	public accessor name: string;

	/**
	 * The emoji URL to use in the message.
	 */
	@property()
	public accessor url: string;

	/**
	 * A map of emoji names and their data {@link DiscordCustomEmoji.name name}.
	 *
	 * This should be keyed as `{ key: { emojiData } }` wherein `key`
	 * should occur in the {@link DiscordCustomEmoji.name name}.
	 *
	 * By default this component will use the global emojis from
	 * {@link getGlobalEmojiUrl}, however on SSR frameworks like Nuxt 3 global config doesn't
	 * work so we provide this as an alternative method.
	 */
	@property({ attribute: false })
	public accessor customEmojisMap: { [key: string]: Emoji } = {};

	/**
	 * Determines whether or not the emoji is used in an embed, or a message.
	 * If it is used in an embed, the sizing is adjusted accordingly.
	 */
	@property({ type: Boolean, attribute: 'embed-emoji' })
	public accessor embedEmoji: boolean;

	public override willUpdate() {
		if (!this.url && Boolean(this.name)) {
			const emojiFromGlobal = getGlobalEmojiUrl(this.name) ?? this.customEmojisMap[this.name];

			if (emojiFromGlobal) {
				this.url ??= emojiFromGlobal.url ?? '';
				this.embedEmoji ??= emojiFromGlobal.embedEmoji ?? false;
			}
		}
	}

	protected override render() {
		const name = `:${this.name}:`;
		const emojiClassName = this.embedEmoji ? 'discord-embed-custom-emoji' : 'discord-custom-emoji';
		const emojiImageClassName = this.embedEmoji ? 'discord-embed-custom-emoji-image' : 'discord-custom-emoji-image';

		return html`<span class="${emojiClassName}"
			><img aria-label="${name}" src="${this.url}" alt="${name}" draggable="false" class="${emojiImageClassName}"
		/></span> `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-custom-emoji': DiscordCustomEmoji;
	}
}

import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { Emoji } from '../../types.js';
import { getGlobalEmojiUrl } from '../../util.js';

@customElement('discord-custom-emoji')
export class DiscordCustomEmoji extends LitElement {
	/**
	 * @internal
	 */
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

		.discord-custom-emoji .discord-custom-jumbo-emoji-image {
			width: 3rem;
			height: 3rem;
			min-height: 3rem;
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
	 * A map of emoji names and their data {@link DiscordCustomEmoji.name | name}.
	 *
	 * This should be keyed as `{ key: { emojiData } }` wherein `key`
	 * should occur in the {@link DiscordCustomEmoji.name | name}.
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

	/**
	 * Determines whether or not the emoji is of "jumbo size",
	 * This means it is larger and is what Discord uses when the message exclusively has emojis,
	 * up to a maximum of 30 emojis.
	 */
	@property({ type: Boolean, attribute: 'jumbo' })
	public accessor jumbo: boolean;

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

		return html`<span
			class=${classMap({
				'discord-embed-custom-emoji': this.embedEmoji,
				'discord-custom-emoji': !this.embedEmoji
			})}
			><img
				aria-label=${name}
				src=${ifDefined(this.url)}
				alt=${name}
				draggable="false"
				class=${classMap({
					'discord-embed-custom-emoji-image': this.embedEmoji,
					'discord-custom-emoji-image': !this.embedEmoji,
					'discord-custom-jumbo-emoji-image': this.jumbo
				})}
		/></span> `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-custom-emoji': DiscordCustomEmoji;
	}
}

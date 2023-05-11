import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { DiscordTimestamp, handleTimestamp, LightTheme } from '../../util.js';
import type { DiscordEmbed } from '../discord-embed/DiscordEmbed.js';

@customElement('discord-embed-footer')
export class DiscordEmbedFooter extends LitElement implements LightTheme {
	public static override styles = css`
		.discord-embed-footer {
			-webkit-box-align: center;
			align-items: center;
			color: #dcddde;
			display: flex;
			font-size: 12px;
			line-height: 16px;
			font-weight: 500;
			margin-top: 8px;
		}

		.discord-embed-footer .discord-footer-image {
			border-radius: 50%;
			flex-shrink: 0;
			height: 20px;
			margin-right: 8px;
			width: 20px;
		}

		.discord-embed-footer .discord-footer-separator {
			color: #dcddde;
			font-weight: 500;
			display: inline-block;
			margin: 0 4px;
		}

		.discord-light-theme.discord-embed-footer .discord-footer-separator {
			color: #e4e4e4;
		}
	`;

	/**
	 * The image to use next to the footer text.
	 */
	@property({ attribute: 'footer-image' })
	public footerImage: string;

	/**
	 * The timestamp to use for the message date. When supplying a string, the format must be `01/31/2000`.
	 */
	@property({ reflect: true })
	public timestamp?: DiscordTimestamp;

	@state()
	public lightTheme = false;

	public updateTimestamp(value?: DiscordTimestamp): string | null {
		if (!value || isNaN(new Date(value).getTime())) return null;
		return handleTimestamp(new Date(value));
	}

	protected override render() {
		const parent = this.parentElement as DiscordEmbed | null;

		if (!parent || parent.tagName.toLowerCase() !== 'discord-embed') {
			throw new Error('All <discord-embed-footer> components must be direct children of <discord-embed>.');
		}

		this.lightTheme = parent.lightTheme;

		this.updateTimestamp(this.timestamp);

		return html`<div
			class=${classMap({
				'discord-embed-footer': true,
				'discord-light-theme': this.lightTheme
			})}
		>
			${this.footerImage ? html`<img src="${this.footerImage}" alt="" class="discord-footer-image" />` : ''}
			${html`
				<slot></slot>
				${this.timestamp ? html`<span class="discord-footer-separator">&bull;</span>` : ''} ${this.timestamp ? html`${this.timestamp}` : ''}
			`}
		</div>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-embed-footer': DiscordEmbedFooter;
	}
}

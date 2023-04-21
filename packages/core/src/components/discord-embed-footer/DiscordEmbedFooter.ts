import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { DiscordTimestamp, handleTimestamp } from '../../util.js';

@customElement('discord-embed-footer')
export class DiscordEmbedFooter extends LitElement {
	public static override styles = css`
		.discord-embed-footer {
			-webkit-box-align: center;
			align-items: center;
			color: #dcddde;
			display: flex;
			font-size: 12px;
			line-height: 16px;
			font-weight: 500;
			grid-column: 1/3;
			grid-row: auto/auto;
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

		.discord-light-theme .discord-embed-footer .discord-footer-separator {
			color: #e4e4e4;
		}
	`;

	/**
	 * The image to use next to the footer text.
	 */
	@property()
	public footerImage: string;

	/**
	 * The timestamp to use for the message date. When supplying a string, the format must be `01/31/2000`.
	 */
	@property({ reflect: true })
	public timestamp?: DiscordTimestamp;

	// @Watch('timestamp')
	public updateTimestamp(value?: DiscordTimestamp): string | null {
		if (!value || isNaN(new Date(value).getTime())) return null;
		return handleTimestamp(new Date(value));
	}

	public componentWillRender() {
		this.timestamp = this.updateTimestamp(this.timestamp);
	}

	protected override render() {
		const parent = this.parentElement;

		if (!parent || parent.tagName.toLowerCase() !== 'discord-embed') {
			throw new Error('All <discord-embed-footer> components must be direct children of <discord-embed>.');
		}

		return html` <div class="discord-embed-footer">
			${this.footerImage ? html`<img src="{this.footerImage}" alt="" class="discord-footer-image" />` : ''}
			${html`
				<slot></slot>
				${this.timestamp ? html`<span class="discord-footer-separator">&bull;</span>` : ''} ${this.timestamp ? html`${this.timestamp}` : ''}
			`}
		</div>`;
	}
}

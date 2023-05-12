import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { LightTheme } from '../../util.js';

@customElement('discord-link')
export class DiscordLink extends LitElement implements LightTheme {
	public static override styles = css`
		a {
			color: #00aff4;
			font-weight: normal;
			text-decoration: none;
		}

		a:hover {
			text-decoration: underline;
		}

		.discord-light-theme a {
			color: #00b0f4;
		}
	`;

	@state()
	public lightTheme = false;

	@property()
	public href?: string;

	@property()
	public rel?: string;

	@property()
	public target?: '_self' | '_blank' | '_parent' | '_top';

	@property()
	public type?: string;

	protected override render() {
		if (this.parentElement && 'lightTheme' in this.parentElement) this.lightTheme = (this.parentElement as LightTheme).lightTheme;

		return html`<a
			href=${ifDefined(this.href)}
			rel=${ifDefined(this.rel)}
			target=${ifDefined(this.target)}
			type=${ifDefined(this.type)}
			class=${classMap({ 'discord-light-theme': this.lightTheme })}
			><slot></slot
		></a>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-link': DiscordLink;
	}
}

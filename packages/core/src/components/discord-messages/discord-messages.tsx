import { Component, ComponentInterface, ComponentWillLoad, h, Host, Prop } from '@stencil/core';
import clsx from 'clsx';
import { defaultBackground, defaultMode, defaultTheme } from '../../options';

@Component({
	tag: 'discord-messages',
	styleUrl: 'discord-messages.css'
})
export class DiscordMessages implements ComponentWillLoad, ComponentInterface {
	/**
	 * Whether to use light theme or not.
	 */
	@Prop({ mutable: true, reflect: true }) lightTheme: boolean;

	/**
	 * Whether to exclude the background or not.
	 */
	@Prop({ mutable: true, reflect: true }) noBackground: boolean;

	/**
	 * Whether to use compact mode or not.
	 */
	@Prop({ mutable: true, reflect: true }) compactMode: boolean;

	componentWillLoad() {
		if (this.lightTheme === true || (defaultTheme === 'light' && this.lightTheme !== false)) {
			this.lightTheme = true;
		}

		if (this.compactMode === true || (defaultMode === 'compact' && this.compactMode !== false)) {
			this.compactMode = true;
		}

		if (this.noBackground === true || (defaultBackground === 'none' && this.noBackground !== false)) {
			this.noBackground = true;
		}
	}

	render() {
		return (
			<Host
				class={clsx(
					{
						'discord-light-theme': this.lightTheme,
						'discord-compact-mode': this.compactMode,
						'discord-no-background': this.noBackground
					},
					'discord-messages'
				)}
			>
				<slot></slot>
			</Host>
		);
	}
}

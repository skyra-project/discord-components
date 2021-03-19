import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import clsx from 'clsx';
import { defaultBackground, defaultMode, defaultTheme } from '../../options';

@Component({
	tag: 'discord-messages',
	styleUrl: 'discord-messages.css'
})
export class DiscordMessages implements ComponentInterface {
	/**
	 * Whether to use light theme or not.
	 */
	@Prop({ mutable: true, reflect: true })
	public lightTheme: boolean;

	/**
	 * Whether to exclude the background or not.
	 */
	@Prop({ mutable: true, reflect: true })
	public noBackground: boolean;

	/**
	 * Whether to use compact mode or not.
	 */
	@Prop({ mutable: true, reflect: true })
	public compactMode: boolean;

	public componentWillRender() {
		if (this.lightTheme || (defaultTheme === 'light' && this.lightTheme)) {
			this.lightTheme = true;
		}

		if (this.compactMode || (defaultMode === 'compact' && this.compactMode)) {
			this.compactMode = true;
		}

		if (this.noBackground || (defaultBackground === 'none' && this.noBackground)) {
			this.noBackground = true;
		}
	}

	public render() {
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

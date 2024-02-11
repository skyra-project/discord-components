import type { Avatars, DiscordMessageOptions, Profile } from './types.js';

let config: DiscordMessageOptions = globalThis.$discordMessage ?? {};

export function getConfig(): DiscordMessageOptions {
	return config;
}

export function setConfig(partialConfig: Partial<DiscordMessageOptions>): void {
	config = Object.assign(config, partialConfig);
}

export const defaultDiscordAvatars: Omit<Avatars, 'default'> = {
	blue: 'https://cdn.discordapp.com/embed/avatars/0.png',
	gray: 'https://cdn.discordapp.com/embed/avatars/1.png',
	green: 'https://cdn.discordapp.com/embed/avatars/2.png',
	orange: 'https://cdn.discordapp.com/embed/avatars/3.png',
	red: 'https://cdn.discordapp.com/embed/avatars/4.png',
	pink: 'https://cdn.discordapp.com/embed/avatars/5.png'
};

const globalAvatars: Avatars = getConfig().avatars ?? ({} as Avatars);

export const avatars: Avatars = Object.assign(defaultDiscordAvatars, globalAvatars, {
	default: defaultDiscordAvatars[globalAvatars.default] ?? globalAvatars.default ?? defaultDiscordAvatars.blue
});

export const profiles: { [key: string]: Profile } = getConfig().profiles ?? {};

export const defaultTheme: string = getConfig().defaultTheme === 'light' ? 'light' : 'dark';

export const defaultMode: string = getConfig().defaultMode === 'compact' ? 'compact' : 'cozy';

export const defaultBackground: string = getConfig().defaultBackground === 'none' ? 'none' : 'discord';

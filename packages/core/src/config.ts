import type { Avatars, Profile } from './types.js';

export const defaultDiscordAvatars: Omit<Avatars, 'default'> = {
	blue: 'https://cdn.discordapp.com/embed/avatars/0.png',
	gray: 'https://cdn.discordapp.com/embed/avatars/1.png',
	green: 'https://cdn.discordapp.com/embed/avatars/2.png',
	orange: 'https://cdn.discordapp.com/embed/avatars/3.png',
	red: 'https://cdn.discordapp.com/embed/avatars/4.png',
	pink: 'https://cdn.discordapp.com/embed/avatars/5.png'
};

const globalAvatars: Avatars = globalThis.$discordMessage?.avatars ?? ({} as Avatars);

export const avatars: Avatars = Object.assign(defaultDiscordAvatars, globalAvatars, {
	default: defaultDiscordAvatars[globalAvatars.default] ?? globalAvatars.default ?? defaultDiscordAvatars.blue
});

export const profiles: { [key: string]: Profile } = globalThis.$discordMessage?.profiles ?? {};

export const defaultTheme: string = globalThis.$discordMessage?.defaultTheme === 'light' ? 'light' : 'dark';

export const defaultMode: string = globalThis.$discordMessage?.defaultMode === 'compact' ? 'compact' : 'cozy';

export const defaultBackground: string = globalThis.$discordMessage?.defaultBackground === 'none' ? 'none' : 'discord';

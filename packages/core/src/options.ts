export interface Avatars {
	default: 'blue' | 'gray' | 'green' | 'orange' | 'red';
	blue?: string;
	gray?: string;
	green?: string;
	orange?: string;
	red?: string;
	[key: string]: string | undefined;
}

export interface Profile {
	author?: string;
	avatar?: string;
	bot?: boolean;
	verified?: boolean;
	server?: boolean;
	roleColor?: string;
}

export interface DiscordMessageOptions {
	avatars?: Avatars;
	profiles?: { [key: string]: Profile };
	defaultTheme?: string;
	defaultMode?: string;
	defaultBackground?: 'discord' | 'none';
}

export const defaultDiscordAvatars: Omit<Avatars, 'default'> = {
	blue: 'https://cdn.discordapp.com/attachments/654503812593090602/665721745466195978/blue.png',
	gray: 'https://cdn.discordapp.com/attachments/654503812593090602/665721746569166849/gray.png',
	green: 'https://cdn.discordapp.com/attachments/654503812593090602/665721748431306753/green.png',
	orange: 'https://cdn.discordapp.com/attachments/654503812593090602/665721750201434138/orange.png',
	red: 'https://cdn.discordapp.com/attachments/654503812593090602/665721752277483540/red.png'
};

const globalAvatars: Avatars = window.$discordMessage?.avatars ?? ({} as Avatars);

export const avatars: Avatars = Object.assign(defaultDiscordAvatars, globalAvatars, {
	default: defaultDiscordAvatars[globalAvatars.default] ?? globalAvatars.default ?? defaultDiscordAvatars.blue
});

export const profiles: { [key: string]: Profile } = window.$discordMessage?.profiles ?? {};

export const defaultTheme: string = window.$discordMessage?.defaultTheme === 'light' ? 'light' : 'dark';

export const defaultMode: string = window.$discordMessage?.defaultMode === 'compact' ? 'compact' : 'cozy';

export const defaultBackground: string = window.$discordMessage?.defaultBackground === 'none' ? 'none' : 'discord';

declare global {
	interface Window {
		$discordMessage: DiscordMessageOptions;
	}
}

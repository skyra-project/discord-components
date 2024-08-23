import Crystal from './components/svgs/clan-icons/Crystal.js';
import Diamond from './components/svgs/clan-icons/Diamond.js';
import Explosion from './components/svgs/clan-icons/Explosion.js';
import Flame from './components/svgs/clan-icons/Flame.js';
import Flower from './components/svgs/clan-icons/Flower.js';
import Heart from './components/svgs/clan-icons/Heart.js';
import Key from './components/svgs/clan-icons/Key.js';
import Leaf from './components/svgs/clan-icons/Leaf.js';
import Lightning from './components/svgs/clan-icons/Lightning.js';
import Magic from './components/svgs/clan-icons/Magic.js';
import Moon from './components/svgs/clan-icons/Moon.js';
import Mushroom from './components/svgs/clan-icons/Mushroom.js';
import Mythical from './components/svgs/clan-icons/Mythical.js';
import Ornament from './components/svgs/clan-icons/Ornament.js';
import Plasma from './components/svgs/clan-icons/Plasma.js';
import Rock from './components/svgs/clan-icons/Rock.js';
import Shell from './components/svgs/clan-icons/Shell.js';
import Skull from './components/svgs/clan-icons/Skull.js';
import Sun from './components/svgs/clan-icons/Sun.js';
import Sword from './components/svgs/clan-icons/Sword.js';
import Water from './components/svgs/clan-icons/Water.js';
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

export const icons = new Map<string, object>([
	['heart', Heart()],
	['crystal', Crystal()],
	['diamond', Diamond()],
	['explosion', Explosion()],
	['flame', Flame()],
	['flower', Flower()],
	['key', Key()],
	['leaf', Leaf()],
	['lightning', Lightning()],
	['magic', Magic()],
	['moon', Moon()],
	['mushroom', Mushroom()],
	['mythical', Mythical()],
	['ornament', Ornament()],
	['plasma', Plasma()],
	['rock', Rock()],
	['shell', Shell()],
	['skull', Skull()],
	['sun', Sun()],
	['sword', Sword()],
	['water', Water()]
]);

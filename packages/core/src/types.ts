export type DiscordTimestamp = Date | string | null;

export interface DiscordButtonProps {
	disabled?: boolean;
	emoji?: string;
	emojiName?: string;
	type?: 'destructive' | 'primary' | 'secondary' | 'success';
	url?: string;
}

export interface LightTheme {
	lightTheme: boolean;
}

export interface DiscordEmbedProps {
	authorImage: string;
	authorName: string;
	authorUrl: string;
	color: string;
	embedTitle: string;
	image: string;
	provider: string;
	thumbnail: string;
	url: string;
	video: string;
}

export interface DiscordMessageProps {
	author: string | undefined;
	avatar: string | undefined;
	bot: boolean;
	compactMode: boolean;
	edited: boolean;
	ephemeral: boolean;
	highlight: boolean;
	lightTheme: boolean;
	op: boolean;
	profile: string | undefined;
	roleColor: string | undefined;
	roleIcon: string | undefined;
	roleName: string | undefined;
	server: boolean;
	timestamp: DiscordTimestamp;
	twentyFour: boolean;
	verified: boolean;
}

export interface Avatars {
	[key: string]: string | undefined;
	blue?: string;
	default: 'blue' | 'gray' | 'green' | 'orange' | 'red';
	gray?: string;
	green?: string;
	orange?: string;
	red?: string;
}

export interface Profile {
	author?: string;
	avatar?: string;
	bot?: boolean;
	op?: boolean;
	roleColor?: string;
	roleIcon?: string;
	roleName?: string;
	server?: boolean;
	verified?: boolean;
}

export interface DiscordMessageOptions {
	avatars?: Avatars;
	defaultBackground?: 'discord' | 'none';
	defaultMode?: string;
	defaultTheme?: string;
	emojis?: { [key: string]: Emoji };
	profiles?: { [key: string]: Profile };
}

export interface Emoji {
	embedEmoji?: boolean;
	name?: string;
	url?: string;
}

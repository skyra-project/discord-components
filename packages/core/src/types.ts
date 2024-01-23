export type DiscordTimestamp = Date | string | null;

export interface DiscordButtonProps {
	emoji?: string;
	emojiName?: string;
	url?: string;
	disabled?: boolean;
	type?: 'primary' | 'secondary' | 'success' | 'destructive';
}

export interface LightTheme {
	lightTheme: boolean;
}

export interface DiscordEmbedProps {
	color: string;
	authorName: string;
	authorImage: string;
	authorUrl: string;
	embedTitle: string;
	url: string;
	thumbnail: string;
	image: string;
	video: string;
	provider: string;
}

export interface DiscordMessageProps {
	profile: string | undefined;
	author: string | undefined;
	avatar: string | undefined;
	bot: boolean;
	server: boolean;
	verified: boolean;
	op: boolean;
	edited: boolean;
	roleColor: string | undefined;
	roleIcon: string | undefined;
	roleName: string | undefined;
	highlight: boolean;
	ephemeral: boolean;
	timestamp: DiscordTimestamp;
	twentyFour: boolean;
	lightTheme: boolean;
	compactMode: boolean;
}

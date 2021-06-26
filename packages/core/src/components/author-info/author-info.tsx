import { FunctionalComponent, h } from '@stencil/core';
import Fragment from '../../Fragment';

interface AuthorInfoProps {
	/**
	 * The name of the author
	 */
	author: string;
	/**
	 * Whether this author is a bot. Only works if `server` is `false` or `undefined`.
	 */
	bot: boolean;
	/**
	 * Whether this author is a `server` crosspost webhook. Only works if `bot` is `false` or `undefined`.
	 */
	server: boolean;
	/**
	 * The colour of the author, which comes from their highest role
	 */
	roleColor: string;
	/**
	 * Whether this bot is verified by Discord. Only works if `bot` is `true`
	 */
	verified: boolean;
}

export const AuthorInfo: FunctionalComponent<AuthorInfoProps> = ({ author, bot, server, roleColor, verified }) => (
	<span class="discord-author-info">
		<span class="discord-author-username" style={{ color: roleColor }}>
			{author}
		</span>
		{
			<Fragment>
				{/* If bot is true then we need to render a Bot tag */}
				{bot && !server && (
					<span class="discord-application-tag">
						{/* If verified is true then a verified checkmark should be prefixed */}
						{verified && (
							// SVG code taken from Discord through Inspect Element on Discord client for Windows
							<svg
								class="discord-application-tag-verified"
								aria-label="Verified Bot"
								aria-hidden="false"
								width="16"
								height="16"
								viewBox="0 0 16 15.2"
							>
								<path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor"></path>
							</svg>
						)}
						Bot
					</span>
				)}
				{server && !bot && <span class="discord-application-tag">Server</span>}
			</Fragment>
		}
	</span>
);

import { FunctionalComponent, h } from '@stencil/core';

interface AuthorInfoProps {
	author: string;
	bot: boolean;
	roleColor: string;
	verified: boolean;
}

export const AuthorInfo: FunctionalComponent<AuthorInfoProps> = ({ author, bot, roleColor, verified }) => (
	<span class="discord-author-info">
		<span class="discord-author-username" style={{ color: roleColor }}>
			{author}
		</span>
		{
			<span>
				{/* If bot is true then we need to render a Bot tag */}
				{bot && (
					<span class="discord-bot-tag">
						{/* If verified is true then a verified checkmark should be prefixed */}
						{verified && (
							// SVG code taken from Discord through Inspect Element on Discord client for Windows
							<svg
								class="discord-bot-tag-verified"
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
			</span>
		}
	</span>
);

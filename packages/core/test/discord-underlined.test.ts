import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';
import '../src/components/discord-message/DiscordMessage.js';
import '../src/components/discord-messages/DiscordMessages.js';
import '../src/components/discord-underlined/DiscordUnderlined.js';
import { getNotNullFirstChildElement, getNotNullQuerySelectedElement } from './matchers.js';
import type { DiscordMessage } from '../src/components/discord-message/DiscordMessage.js';
import type { DiscordMessages } from '../src/components/discord-messages/DiscordMessages.js';
import type { DiscordUnderlined } from '../src/components/discord-underlined/DiscordUnderlined.js';

describe('DiscordUnderlined', () => {
	it('will bolden the text', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message><discord-underlined>Don't give in to hate. That leads to the Dark Side</discord-underlined></discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const discordUnderlined = getNotNullQuerySelectedElement<DiscordUnderlined>(discordMessage, 'discord-underlined');

		expect(discordUnderlined.textContent).to.equal("Don't give in to hate. That leads to the Dark Side");
	});
});

import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';
import '../src/components/discord-message/DiscordMessage.js';
import '../src/components/discord-messages/DiscordMessages.js';
import '../src/components/discord-quote/DiscordQuote.js';
import { getNotNullFirstChildElement, getNotNullQuerySelectedElement } from './matchers.js';
import type { DiscordMessage } from '../src/components/discord-message/DiscordMessage.js';
import type { DiscordMessages } from '../src/components/discord-messages/DiscordMessages.js';
import type { DiscordQuote } from '../src/components/discord-quote/DiscordQuote.js';

describe('DiscordQuote', () => {
	it('will bolden the text', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message><discord-quote>Be mindful of your thoughts Anakin. They'll betray you</discord-quote></discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const discordQuote = getNotNullQuerySelectedElement<DiscordQuote>(discordMessage, 'discord-quote');

		expect(discordQuote.textContent).to.equal("Be mindful of your thoughts Anakin. They'll betray you");
	});
});

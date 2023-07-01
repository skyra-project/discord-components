import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';
import '../src/index.js';
import { getNotNullFirstChildElement, getNotNullQuerySelectedElement } from './matchers.js';
import type { DiscordQuote, DiscordMessage, DiscordMessages } from '../src/index.js';

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

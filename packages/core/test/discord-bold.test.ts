import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';
import '../src/components/discord-bold/DiscordBold.js';
import '../src/components/discord-message/DiscordMessage.js';
import '../src/components/discord-messages/DiscordMessages.js';
import { getNotNullFirstChildElement, getNotNullQuerySelectedElement } from './matchers.js';
import type { DiscordBold } from '../src/components/discord-bold/DiscordBold.js';
import type { DiscordMessage } from '../src/components/discord-message/DiscordMessage.js';
import type { DiscordMessages } from '../src/components/discord-messages/DiscordMessages.js';

describe('DiscordBold', () => {
	it('will bolden the text', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message><discord-bold>You have failed me for the last time</discord-bold></discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const discordBold = getNotNullQuerySelectedElement<DiscordBold>(discordMessage, 'discord-bold');

		expect(discordBold.textContent).to.equal('You have failed me for the last time');
	});
});

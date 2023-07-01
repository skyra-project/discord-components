import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';
import '../src/index.js';
import { getNotNullFirstChildElement, getNotNullQuerySelectedElement } from './matchers.js';
import type { DiscordBold, DiscordMessage, DiscordMessages } from '../src/index.js';

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

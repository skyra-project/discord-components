import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';
import '../src/index.js';
import { getNotNullFirstChildElement, getNotNullQuerySelectedElement } from './matchers.js';
import type { DiscordTime, DiscordMessage, DiscordMessages } from '../src/index.js';

describe('DiscordTime', () => {
	it('will bolden the text', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message><discord-time>You were my brother, Anakin. I loved you</discord-time></discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const discordTime = getNotNullQuerySelectedElement<DiscordTime>(discordMessage, 'discord-time');

		expect(discordTime.textContent).to.equal('You were my brother, Anakin. I loved you');
	});
});

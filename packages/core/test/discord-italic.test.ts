import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';
import '../src/index.js';
import { getNotNullFirstChildElement, getNotNullQuerySelectedElement } from './matchers.js';
import type { DiscordItalic, DiscordMessage, DiscordMessages } from '../src/index.js';

describe('DiscordItalic', () => {
	it('will italicize the text', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message><discord-italic>Remember…the Force will be with you, always</discord-italic></discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const discordItalic = getNotNullQuerySelectedElement<DiscordItalic>(discordMessage, 'discord-italic');

		expect(discordItalic.textContent).to.equal('Remember…the Force will be with you, always');
	});
});

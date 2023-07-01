import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';
import '../src/index.js';
import { getNotNullFirstChildElement, getNotNullQuerySelectedElement } from './matchers.js';
import type { DiscordPre, DiscordMessage, DiscordMessages } from '../src/index.js';

describe('DiscordPre', () => {
	it('will italicize the text', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message><discord-pre>Use the Force, Luke</discord-pre></discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const discordPre = getNotNullQuerySelectedElement<DiscordPre>(discordMessage, 'discord-pre');

		expect(discordPre.textContent).to.equal('Use the Force, Luke');
	});
});

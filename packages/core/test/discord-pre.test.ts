import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';
import '../src/components/discord-message/DiscordMessage.js';
import '../src/components/discord-messages/DiscordMessages.js';
import '../src/components/discord-pre/DiscordPre.js';
import { getNotNullFirstChildElement, getNotNullQuerySelectedElement } from './matchers.js';
import type { DiscordMessage } from '../src/components/discord-message/DiscordMessage.js';
import type { DiscordMessages } from '../src/components/discord-messages/DiscordMessages.js';
import type { DiscordPre } from '../src/components/discord-pre/DiscordPre.js';

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

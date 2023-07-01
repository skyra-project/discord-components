import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';
import { DiscordPre, type DiscordCode, type DiscordMessage, type DiscordMessages } from '../src/index.js';
import { getNotNullFirstChildElement, getNotNullQuerySelectedElement } from './matchers.js';

describe('DiscordCode', () => {
	it('will show text as inline code', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message>
					<discord-code>function foo() { console.log('bar'); }</discord-code>
				</discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const discordCode = getNotNullQuerySelectedElement<DiscordCode>(discordMessage, 'discord-code');

		expect(discordCode.textContent).to.equal("function foo() { console.log('bar'); }");
		expect(discordCode.shadowRoot?.firstElementChild?.tagName).to.equal('CODE');
	});

	it('will show text as multiline code', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message>
					<discord-code multiline>function foo() { console.log('bar'); }</discord-code>
				</discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const discordCode = getNotNullQuerySelectedElement<DiscordCode>(discordMessage, 'discord-code');

		expect(discordCode.textContent).to.equal("function foo() { console.log('bar'); }");
		expect(discordCode.shadowRoot?.firstElementChild).to.be.instanceOf(DiscordPre);
		expect(discordCode.shadowRoot?.firstElementChild?.firstElementChild?.tagName).to.equal('CODE');
	});
});

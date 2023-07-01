import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';
import '../src/components/discord-message/DiscordMessage.js';
import '../src/components/discord-messages/DiscordMessages.js';
import { getNotNullFirstChildElement } from './matchers.js';
import type { DiscordMessage } from '../src/components/discord-message/DiscordMessage.js';
import type { DiscordMessages } from '../src/components/discord-messages/DiscordMessages.js';

describe('DiscordMessages', () => {
	it('will propagate theme properties through context', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages light-theme compact-mode no-background>
				<discord-message>I don't like sand</discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);

		expect(discordMessage.lightTheme).to.equal(true);
		expect(discordMessage.noBackground).to.equal(true);
		expect(discordMessage.compactMode).to.equal(true);
	});

	it('cannot override propagated through context properties', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages light-theme compact-mode no-background>
				<discord-message .light-theme="${false}">It's coarse, and rough, and irritating, and it gets everywhere</discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);

		expect(discordMessage.lightTheme).to.equal(true);
		expect(discordMessage.noBackground).to.equal(true);
		expect(discordMessage.compactMode).to.equal(true);
	});

	it('can override the properties via attribute', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message twenty-four timestamp="03/20/2021">Not like here</discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);

		expect(discordMessage.twentyFour).to.equal(true);
		expect(discordMessage.timestamp).to.equal('03/20/2021');
	});

	it.skip('can set timestamp date through date object', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message .timestamp="${new Date('2023-06-20')}">Nooooooooooo!!!</discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);

		expect(discordMessage.timestamp).to.deep.equal(new Date('2023-06-20'));
	});

	it('returns input value when a timestamp as string is provided', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages compact-mode>
				<discord-message timestamp="12:15">I am your father!</discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);

		expect(discordMessage.timestamp).to.equal('12:15');
	});

	it('returns twenty-four hour time when requested with attribute', async () => {
		const assertedDate = new Date('2022-01-01T15:15:15.000');
		const el = await fixture<DiscordMessages>(html`
			<discord-messages compact-mode>
				<discord-message twenty-four .timestamp="${assertedDate}">Never tell me the odds!</discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);

		expect(discordMessage.timestamp).to.deep.equal(assertedDate);
	});

	it('shows bot icon when bot option is enabled', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message bot>Try not. Do or do not. There is no try</discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const applicationTag = discordMessage.shadowRoot
			?.querySelector('discord-author-info')
			?.shadowRoot?.querySelector('.discord-application-tag')
			?.textContent?.trim();

		expect(applicationTag).to.equal('Bot');
		expect(discordMessage.bot).to.equal(true);
	});

	it('does not show bot icon when bot and server options are enabled', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message bot server>Try not. Do or do not. There is no try</discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const applicationTag = discordMessage.shadowRoot?.querySelector('discord-author-info')?.shadowRoot?.querySelector('.discord-application-tag');

		expect(applicationTag).to.be.null;
	});

	it('shows server icon when server option is enabled', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message server>Try not. Do or do not. There is no try</discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const applicationTag = discordMessage.shadowRoot
			?.querySelector('discord-author-info')
			?.shadowRoot?.querySelector('.discord-application-tag')
			?.textContent?.trim();

		expect(applicationTag).to.equal('Server');
		expect(discordMessage.server).to.equal(true);
	});

	it('shows op icon when OP option is enabled', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message op>Try not. Do or do not. There is no try</discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const applicationTag = discordMessage.shadowRoot
			?.querySelector('discord-author-info')
			?.shadowRoot?.querySelector('.discord-application-tag')
			?.textContent?.trim();

		expect(applicationTag).to.equal('OP');
		expect(discordMessage.op).to.equal(true);
	});

	it('shows bot and op icon when bot and op options are enabled', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message bot op>Try not. Do or do not. There is no try</discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const applicationTag = discordMessage.shadowRoot
			?.querySelector('discord-author-info')
			?.shadowRoot?.querySelector('.discord-application-tag')
			?.textContent?.trim();

		const applicationOpTag = discordMessage.shadowRoot
			?.querySelector('discord-author-info')
			?.shadowRoot?.querySelector('.discord-application-tag-op')
			?.textContent?.trim();

		expect(applicationTag).to.equal('Bot');
		expect(applicationOpTag).to.equal('OP');
		expect(discordMessage.op).to.equal(true);
	});
});

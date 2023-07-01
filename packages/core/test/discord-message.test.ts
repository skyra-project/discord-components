import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';
import '../src/index.js';
import { getNotNullFirstChildElement } from './matchers.js';
import type { DiscordMessage, DiscordMessages } from '../src/index.js';

describe('DiscordMessage', () => {
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
				<discord-message bot server>Who's the more foolish: the fool or the fool who follows him?</discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const applicationTag = discordMessage.shadowRoot?.querySelector('discord-author-info')?.shadowRoot?.querySelector('.discord-application-tag');

		expect(applicationTag).to.be.null;
	});

	it('shows server icon when server option is enabled', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message server>No longer certain that one ever does win a war, I am</discord-message>
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
				<discord-message op>Difficult to see; always in motion is the future</discord-message>
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
				<discord-message bot op>Great, kid, don't get cocky</discord-message>
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

		expect(discordMessage.bot).to.equal(true);
		expect(discordMessage.op).to.equal(true);

		expect(applicationTag).to.equal('Bot');
		expect(applicationOpTag).to.equal('OP');
	});

	it('shows bot and verified icon when bot and verified options are enabled', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message bot verified>The Force is strong with this one</discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const applicationTag = discordMessage.shadowRoot
			?.querySelector('discord-author-info')
			?.shadowRoot?.querySelector('.discord-application-tag')
			?.textContent?.trim();
		const verifiedTag = discordMessage.shadowRoot
			?.querySelector('discord-author-info')
			?.shadowRoot?.querySelector('.discord-application-tag')?.firstElementChild;

		expect(discordMessage.bot).to.equal(true);
		expect(discordMessage.verified).to.equal(true);

		expect(applicationTag).to.equal('Bot');
		expect(verifiedTag).to.instanceOf(SVGElement);
		expect(verifiedTag?.classList.contains('discord-application-tag-verified')).to.equal(true);
	});

	it('shows highlight styling when the option is enabled', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message highlight>Sorry lady. I don't understand frog</discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		expect(discordMessage.highlight).to.equal(true);
		expect(window.getComputedStyle(discordMessage).backgroundColor).to.equal('rgba(250, 166, 26, 0.1)');
	});

	it('shows edited tag when the option is enabled', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message edited>I'm a Mandalorian. Weapons are part of my religion</discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const editedContent = discordMessage.shadowRoot?.querySelector('.discord-message-edited')?.textContent;

		expect(discordMessage.edited).to.equal(true);
		expect(editedContent).to.equal('(edited)');
	});

	it('shows ephemeral tag when the option is enabled', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message ephemeral bot>This is the way</discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const ephemeralContent = discordMessage.shadowRoot?.querySelector('.discord-message-ephemeral')?.childNodes[3].textContent?.trim();

		expect(discordMessage.ephemeral).to.equal(true);
		expect(ephemeralContent).to.equal('Only you can see this •');
	});

	it('shows role icon the option is enabled', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message
					author="Favna"
					role-name="Admin"
					role-color="#20505f"
					avatar="https://cdn.skyra.pw/gh-assets/sapphire.png"
					role-icon="https://cdn.skyra.pw/gh-assets/sapphire.png"
				>
					I find your lack of faith disturbing
				</discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);

		expect(discordMessage.author).to.equal('Favna');
		expect(discordMessage.roleName).to.equal('Admin');
		expect(discordMessage.roleColor).to.equal('#20505f');
		expect(discordMessage.roleIcon).to.equal('https://cdn.skyra.pw/gh-assets/sapphire.png');
	});
});

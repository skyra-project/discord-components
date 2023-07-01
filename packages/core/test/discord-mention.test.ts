import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';
import '../src/index.js';
import { getNotNullFirstChildElement, getNotNullQuerySelectedElement } from './matchers.js';
import type { DiscordMention, DiscordMessage, DiscordMessages } from '../src/index.js';

describe('DiscordMention', () => {
	it('will show user mentions', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message><discord-mention color="#2E67F8">Obi-Wan Kenobi</discord-mention></discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const discordMention = getNotNullQuerySelectedElement<DiscordMention>(discordMessage, 'discord-mention');

		expect(discordMention.type).to.equal('user');
		expect(discordMention.shadowRoot?.textContent).to.equal('@');
		expect(discordMention.textContent).to.equal('Obi-Wan Kenobi');
	});

	it('will show role mentions', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message><discord-mention type="role" color="#EB212E">Galactic Emperor</discord-mention></discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const discordMention = getNotNullQuerySelectedElement<DiscordMention>(discordMessage, 'discord-mention');

		expect(discordMention.type).to.equal('role');
		expect(discordMention.shadowRoot?.textContent).to.equal('@');
		expect(discordMention.textContent).to.equal('Galactic Emperor');

		expect(discordMention.style.color).to.equal('rgb(235, 33, 46)');
		expect(discordMention.style.backgroundColor).to.equal('rgba(235, 33, 46, 0.1)');

		discordMention.setHoverColor();
		expect(discordMention.style.backgroundColor).to.equal('rgba(235, 33, 46, 0.3)');

		discordMention.resetHoverColor();
		expect(discordMention.style.backgroundColor).to.equal('rgba(235, 33, 46, 0.1)');
	});

	it('will show channel mentions', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message><discord-mention type="channel">alderaan</discord-mention></discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const discordMention = getNotNullQuerySelectedElement<DiscordMention>(discordMessage, 'discord-mention');

		expect(discordMention.type).to.equal('channel');
		expect(discordMention.shadowRoot?.firstElementChild?.classList.contains('discord-mention-icon')).to.equal(true);
		expect(discordMention.textContent).to.equal('alderaan');
	});

	it('will show voice channel mentions', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message><discord-mention type="voice">coruscant</discord-mention></discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const discordMention = getNotNullQuerySelectedElement<DiscordMention>(discordMessage, 'discord-mention');

		expect(discordMention.type).to.equal('voice');
		expect(discordMention.shadowRoot?.firstElementChild?.classList.contains('discord-mention-icon')).to.equal(true);
		expect(discordMention.textContent).to.equal('coruscant');
	});

	it('will show locked voice channel mentions', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message><discord-mention type="locked">mustafar</discord-mention></discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const discordMention = getNotNullQuerySelectedElement<DiscordMention>(discordMessage, 'discord-mention');

		expect(discordMention.type).to.equal('locked');
		expect(discordMention.shadowRoot?.firstElementChild?.classList.contains('discord-mention-icon')).to.equal(true);
		expect(discordMention.textContent).to.equal('mustafar');
	});

	it('will show locked thread channel mentions', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message><discord-mention type="thread">Death Star</discord-mention></discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const discordMention = getNotNullQuerySelectedElement<DiscordMention>(discordMessage, 'discord-mention');

		expect(discordMention.type).to.equal('thread');
		expect(discordMention.shadowRoot?.firstElementChild?.classList.contains('discord-mention-icon')).to.equal(true);
		expect(discordMention.textContent).to.equal('Death Star');
	});

	it('will show forum thread channel mentions', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message><discord-mention type="forum">rebel-bases</discord-mention></discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const discordMention = getNotNullQuerySelectedElement<DiscordMention>(discordMessage, 'discord-mention');

		expect(discordMention.type).to.equal('forum');
		expect(discordMention.shadowRoot?.firstElementChild?.classList.contains('discord-mention-icon')).to.equal(true);
		expect(discordMention.textContent).to.equal('rebel-bases');
	});

	it('will show slash command mentions', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message><discord-mention type="slash">fire</discord-mention></discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const discordMention = getNotNullQuerySelectedElement<DiscordMention>(discordMessage, 'discord-mention');

		expect(discordMention.type).to.equal('slash');
		expect(discordMention.shadowRoot?.textContent).to.equal('/');
		expect(discordMention.textContent).to.equal('fire');
	});
});

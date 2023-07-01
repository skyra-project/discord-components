import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';
import '../src/index.js';
import { getNotNullFirstChildElement, getNotNullQuerySelectedElement } from './matchers.js';
import type { DiscordButton, DiscordMessage, DiscordMessages } from '../src/index.js';

describe('DiscordButton', () => {
	it('renders primary buttons', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message>
					<discord-attachments slot="components">
						<discord-action-row>
							<discord-button type="primary">Dreams pass in time</discord-button>
						</discord-action-row>
					</discord-attachments>
				</discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const discordButton = getNotNullQuerySelectedElement<DiscordButton>(discordMessage, 'discord-button');
		expect(discordButton.type).to.equal('primary');
		expect(discordButton.textContent).to.equal('Dreams pass in time');
	});

	it('renders secondary buttons', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message>
					<discord-attachments slot="components">
						<discord-action-row>
							<discord-button type="secondary">I have a bad feeling about this</discord-button>
						</discord-action-row>
					</discord-attachments>
				</discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const discordButton = getNotNullQuerySelectedElement<DiscordButton>(discordMessage, 'discord-button');
		expect(discordButton.type).to.equal('secondary');
		expect(discordButton.textContent).to.equal('I have a bad feeling about this');
	});

	it('renders success buttons', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message>
					<discord-attachments slot="components">
						<discord-action-row>
							<discord-button type="success">Traveling through hyperspace ain't like dusting crops, farm boy</discord-button>
						</discord-action-row>
					</discord-attachments>
				</discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const discordButton = getNotNullQuerySelectedElement<DiscordButton>(discordMessage, 'discord-button');
		expect(discordButton.type).to.equal('success');
		expect(discordButton.textContent).to.equal("Traveling through hyperspace ain't like dusting crops, farm boy");
	});

	it('renders destructive buttons', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message>
					<discord-attachments slot="components">
						<discord-action-row>
							<discord-button type="destructive">Chewie, we're home</discord-button>
						</discord-action-row>
					</discord-attachments>
				</discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const discordButton = getNotNullQuerySelectedElement<DiscordButton>(discordMessage, 'discord-button');
		expect(discordButton.type).to.equal('destructive');
		expect(discordButton.textContent).to.equal("Chewie, we're home");
	});

	it('renders url buttons', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message>
					<discord-attachments slot="components">
						<discord-action-row>
							<discord-button url="https://join.skyra.pw">Laugh it up, fuzzball</discord-button>
						</discord-action-row>
					</discord-attachments>
				</discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const discordButton = getNotNullQuerySelectedElement<DiscordButton>(discordMessage, 'discord-button');
		expect(discordButton.url).to.equal('https://join.skyra.pw');
		expect(discordButton.textContent).to.equal('Laugh it up, fuzzball');
	});

	it('renders emoji buttons', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message>
					<discord-attachments slot="components">
						<discord-action-row>
							<discord-button emoji="https://cdn.skyra.pw/gh-assets/sapphire.png">Let's keep a little optimism here</discord-button>
						</discord-action-row>
					</discord-attachments>
				</discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const discordButton = getNotNullQuerySelectedElement<DiscordButton>(discordMessage, 'discord-button');
		expect(discordButton.emoji).to.equal('https://cdn.skyra.pw/gh-assets/sapphire.png');
		expect(discordButton.textContent).to.equal("Let's keep a little optimism here");
	});

	it('renders disabled buttons', async () => {
		const el = await fixture<DiscordMessages>(html`
			<discord-messages>
				<discord-message>
					<discord-attachments slot="components">
						<discord-action-row>
							<discord-button type="primary" disabled>Judge me by my size, do you</discord-button>
						</discord-action-row>
					</discord-attachments>
				</discord-message>
			</discord-messages>
		`);

		const discordMessage = getNotNullFirstChildElement<DiscordMessage>(el);
		const discordButton = getNotNullQuerySelectedElement<DiscordButton>(discordMessage, 'discord-button');
		expect(discordButton.disabled).to.equal(true);
		expect(discordButton.textContent).to.equal('Judge me by my size, do you');
	});
});

import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';
import '../src/components/discord-messages/DiscordMessages.js';
import type { DiscordMessages } from '../src/components/discord-messages/DiscordMessages.js';

describe('DiscordComponent', () => {
	it('Defaults to Dark Mode with Background and Cozy mode', async () => {
		const el = await fixture<DiscordMessages>(html`<discord-messages></discord-messages>`);

		expect(el.lightTheme).to.equal(false);
		expect(el.noBackground).to.equal(false);
		expect(el.compactMode).to.equal(false);
	});

	it('can override the properties via attribute', async () => {
		const el = await fixture<DiscordMessages>(html`<discord-messages lightTheme noBackground compact-mode></discord-messages>`);

		expect(el.lightTheme).to.equal(true);
		expect(el.noBackground).to.equal(true);
		expect(el.compactMode).to.equal(true);
	});

	it('passes the a11y audit', async () => {
		const el = await fixture<DiscordMessages>(html`<discord-messages></discord-messages>`);

		await expect(el).shadowDom.to.be.accessible();
	});
});

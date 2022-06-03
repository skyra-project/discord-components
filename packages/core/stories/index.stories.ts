import { html, TemplateResult } from 'lit';
import '../src/discord-component.js';

export default {
	title: 'DiscordComponent',
	component: 'discord-component',
	argTypes: {
		title: { control: 'text' },
		counter: { control: 'number' },
		textColor: { control: 'color' }
	}
};

interface Story<T> {
	(args: T): TemplateResult;
	args?: Partial<T>;
	argTypes?: Record<string, unknown>;
}

interface ArgTypes {
	title?: string;
	counter?: number;
	textColor?: string;
	slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({ title = 'Hello world', counter = 5, textColor, slot }: ArgTypes) => html`
	<discord-component style="--discord-component-text-color: ${textColor || 'black'}" .title=${title} .counter=${counter}>
		${slot}
	</discord-component>
`;

export const Regular = Template.bind({});

export const CustomTitle = Template.bind({});
CustomTitle.args = {
	title: 'My title'
};

export const CustomCounter = Template.bind({});
CustomCounter.args = {
	counter: 123456
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
	slot: html`<p>Slotted content</p>`
};
SlottedContent.argTypes = {
	slot: { table: { disable: true } }
};

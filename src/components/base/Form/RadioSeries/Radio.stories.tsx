import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './Radio';

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {
		innerRef: { control: 'string' },
	},
	args: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => (
	<StorybookComponent {...args} />
);

export const defaultChecked = Template.bind({});
defaultChecked.args = {
	content: 'Radio Content',
	disabled: false,
	defaultChecked: false,
	fill: false,
	hideIcon: false,
};

export const checked = Template.bind({});
checked.args = {
	content: 'Radio Content',
	disabled: false,
	checked: false,
	fill: false,
	hideIcon: false,
};

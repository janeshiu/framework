import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './RadioButton';

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

export const Default = Template.bind({});
Default.args = {
	content: 'RadioButton Content',
	disabled: false,
	defaultChecked: false,
};

export const Controlled = Template.bind({});
Controlled.args = {
	content: 'RadioButton Content',
	disabled: false,
	checked: false,
};

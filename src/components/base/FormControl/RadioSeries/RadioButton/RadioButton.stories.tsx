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

export const RadioButton = Template.bind({});
RadioButton.args = {
	content: 'RadioButton Content',
	disabled: false,
	defaultChecked: false,
};

export const RadioButtonControlled = Template.bind({});
RadioButtonControlled.args = {
	content: 'RadioButton Content',
	disabled: false,
	checked: false,
};

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './Checkbox';

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

export const Checkbox = Template.bind({});
Checkbox.args = {
	content: 'Checkbox Content',
	disabled: false,
	defaultChecked: false,
	fill: false,
	hideIcon: false,
};

export const CheckboxControlled = Template.bind({});
CheckboxControlled.args = {
	content: 'Checkbox Content',
	disabled: false,
	checked: false,
	fill: false,
	hideIcon: false,
};

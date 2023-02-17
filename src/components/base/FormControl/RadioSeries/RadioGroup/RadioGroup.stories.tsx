import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './RadioGroup';

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

const radioItemList = [
	{ content: 'radio1', value: 'radio1', disabled: false },
	{ content: 'radio2', value: 'radio2', disabled: false },
	{ content: 'radio3', value: 'radio3', disabled: false },
	{ content: 'radio4', value: 'radio4', disabled: false },
	{ content: 'radio5', value: 'radio5', disabled: true },
];

export const defaultValue = Template.bind({});
defaultValue.args = {
	name: 'radio',
	radioItemList,
	disabledNonChecked: false,
};

export const value = Template.bind({});
value.args = {
	name: 'radio',
	radioItemList,
	value: 'radio2',
	disabledNonChecked: false,
};

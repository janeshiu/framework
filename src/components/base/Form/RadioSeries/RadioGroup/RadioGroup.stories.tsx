import React from 'react';
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
	{ content: 'radio1', defaultValue: 'radio1', disabled: false },
	{ content: 'radio2', defaultValue: 'radio2', disabled: false },
	{ content: 'radio3', defaultValue: 'radio3', disabled: false },
	{ content: 'radio4', defaultValue: 'radio4', disabled: false },
	{ content: 'radio5', defaultValue: 'radio5', disabled: false },
];

export const defaultChecked = Template.bind({});
defaultChecked.args = {
	name: 'radio',
	radioItemList,
};

// export const checked = Template.bind({});
// checked.args = {};

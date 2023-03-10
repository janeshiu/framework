import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './InputPassword';

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {
		innerRef: { control: 'string' },
		toggleMode: {
			control: 'inline-radio',
			options: ['icon', 'checkbox', 'undefined'],
			mapping: {
				icon: 'icon',
				checkbox: 'checkbox',
				undefined: undefined,
			},
		},
	},
	args: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => (
	<StorybookComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
	placeholder: '請輸入密碼',
};

export const Controlled = Template.bind({});
Controlled.args = {
	placeholder: '請輸入密碼',
	value: '123456',
	toggleMode: 'icon',
};

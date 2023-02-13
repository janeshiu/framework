import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './InputBase';

type ComponentType = typeof StorybookComponent;

export default {
	title: 'base/InputBase/InputBase',
	component: StorybookComponent,
	argTypes: {
		type: { control: 'text' },
		innerRef: { control: 'string' },
	},
	args: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => (
	<StorybookComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
	placeholder: '請輸入內容',
	autoSendAfterChanged: false,
};

import React from 'react';
import { default as StorybookComponent } from './InputBaseSearch';
import { ComponentMeta, ComponentStory } from '@storybook/react';

type ComponentType = typeof StorybookComponent;

export default {
	title: 'base/Input/InputBaseSearch',
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
	placeholder: '若存在內容，右方會出現「Ｘ」清除按鈕',
	autoSendAfterChanged: false,
};

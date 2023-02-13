import React from 'react';
import InputBase from './InputBase';

import { ComponentMeta, ComponentStory } from '@storybook/react';

type ComponentType = typeof InputBase;

export default {
	title: 'base/Input/InputBase',
	component: InputBase,
	argTypes: {
		type: { control: 'text' },
		innerRef: { control: 'string' },
	},
	args: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => (
	<InputBase {...args} />
);

export const Default = Template.bind({});
Default.args = {
	placeholder: '請輸入內容',
	autoSendAfterChanged: false,
};

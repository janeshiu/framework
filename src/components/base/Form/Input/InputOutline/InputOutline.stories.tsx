import React from 'react';
import InputOutline from './InputOutline';

import { ComponentMeta, ComponentStory } from '@storybook/react';

type ComponentType = typeof InputOutline;

export default {
	title: 'base/Input/InputOutline',
	component: InputOutline,
	argTypes: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => (
	<InputOutline {...args} />
);

export const Default = Template.bind({});
Default.args = {};

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './MessageGroup';

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {},
	args: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => (
	<StorybookComponent {...args}></StorybookComponent>
);

export const Default = Template.bind({});
Default.args = {
	success: true,
	successMsg: 'Success Message',

	error: true,
	errorMsg: 'Error Message',

	helper: true,
	helperMsg: 'Helper Message',
};

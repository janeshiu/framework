import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './Tabs';
import TabItem from './TabItem/TabItem';

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {
		children: {
			control: 'string',
		},
	},
	args: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => (
	<StorybookComponent {...args}>
		<TabItem content='TabItem1' href='#' />
		<TabItem content='TabItem2' href='/' />
		<TabItem content='TabItem3' href='/' />
		<TabItem content='Disabled' href='/test' disabled />
	</StorybookComponent>
);

export const Default = Template.bind({});
Default.args = {};

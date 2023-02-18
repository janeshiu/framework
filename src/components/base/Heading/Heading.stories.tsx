import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './Heading';

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
	type: 'primary',
	children: 'Heading',
};

export const withButton = Template.bind({});
withButton.args = {
	type: 'primary',
	children: 'Heading',
	buttonProps: {
		content: 'Button',
		color: 'primary',
	},
};

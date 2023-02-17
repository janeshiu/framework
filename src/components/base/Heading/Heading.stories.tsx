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

export const Heading = Template.bind({});
Heading.args = {
	type: 'primary',
	children: 'Heading',
};

export const HeadingWithButton = Template.bind({});
HeadingWithButton.args = {
	type: 'primary',
	children: 'Heading',
	buttonProps: {
		content: 'Button',
		color: 'primary',
	},
};

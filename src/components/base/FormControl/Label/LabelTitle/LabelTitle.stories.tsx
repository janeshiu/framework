import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './LabelTitle';

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {},
	args: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => (
	<StorybookComponent {...args} />
);

export const LabelTitle = Template.bind({});
LabelTitle.args = {
	content: 'Lable Title',
	required: false,
	href: '/',
	target: '',
	linkContent: 'Link',
};

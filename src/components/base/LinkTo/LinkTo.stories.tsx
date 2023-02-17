import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './LinkTo';

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {},
	args: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => (
	<StorybookComponent {...args}></StorybookComponent>
);

export const LinkTo = Template.bind({});
LinkTo.args = {
	children: 'Link',
	href: '/',
	target: '_blank',
};

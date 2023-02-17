import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './Pagination';

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {},
	args: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => (
	<StorybookComponent {...args}></StorybookComponent>
);

export const Pagination = Template.bind({});
Pagination.args = {
	totalPages: 100,
	hideDisabledButton: false,
};

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './Header';

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {},
	args: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => (
	<div style={{ minHeight: 500 }}>
		<StorybookComponent {...args}></StorybookComponent>
	</div>
);

export const Default = Template.bind({});
Default.args = {};

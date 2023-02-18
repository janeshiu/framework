import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './Logo';

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {},
	args: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => (
	<div style={{ height: '5rem', width: '100%' }}>
		<StorybookComponent {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	src: '/logo.png',
	children: 'Logo',
};

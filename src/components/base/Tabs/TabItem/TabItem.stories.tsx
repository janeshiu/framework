import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './TabItem';

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {},
	args: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => (
	<ul className='flex'>
		<StorybookComponent {...args}></StorybookComponent>
		<StorybookComponent content='TabItem2' href='/'></StorybookComponent>
		<StorybookComponent content='TabItem3' href='/test'></StorybookComponent>
		<StorybookComponent
			content='Disabled'
			href='/test/test'
			disabled></StorybookComponent>
	</ul>
);

export const Default = Template.bind({});
Default.args = {
	content: 'TabItem1',
	href: '#',
};

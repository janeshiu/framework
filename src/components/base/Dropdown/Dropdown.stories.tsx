import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './Dropdown';
import DropdownItem from './DropdownItem/DropdownItem';

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
	children: (
		<>
			<DropdownItem content='DropdownItem1' />
			<DropdownItem content='DropdownItem2' />
			<DropdownItem content='DropdownItem3' />
			<DropdownItem content='DropdownItem4' />
		</>
	),
};

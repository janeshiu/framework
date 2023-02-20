import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './Navbar';
import NavbarItem from './NavbarItem/NavbarItem';
import Dropdown from '../Dropdown/Dropdown';
import DropdownItem from '../Dropdown/DropdownItem/DropdownItem';

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {},
	args: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => (
	<div style={{ minHeight: 500 }}>
		<StorybookComponent {...args}>
			<NavbarItem content='NavbarItem1' href='#' />
			<NavbarItem content='NavbarItem2' href='#' />
			<NavbarItem content='NavbarItem3'>
				<Dropdown>
					<DropdownItem content='DropdownItem1' href='#' />
					<DropdownItem content='DropdownItem2' href='#' />
					<DropdownItem content='DropdownItem3' href='#' />
					<DropdownItem content='DropdownItem4' href='#' />
				</Dropdown>
			</NavbarItem>
		</StorybookComponent>
	</div>
);

export const Default = Template.bind({});
Default.args = {};

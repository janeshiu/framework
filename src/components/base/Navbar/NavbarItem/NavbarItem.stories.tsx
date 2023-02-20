import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './NavbarItem';
import Dropdown from '../../Dropdown/Dropdown';
import DropdownItem from '../../Dropdown/DropdownItem/DropdownItem';

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {},
	args: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => (
	<ul>
		<StorybookComponent {...args}></StorybookComponent>
	</ul>
);

export const Default = Template.bind({});
Default.args = {
	content: 'NavbarItem',
	href: '#',
};

const TemplateWithChildren: ComponentStory<ComponentType> = (args) => {
	const [extend, setExtend] = useState(false);

	return (
		<ul style={{ minHeight: 500 }}>
			<StorybookComponent
				{...args}
				onClick={() => setExtend((prev) => !prev)}
				extend={extend}>
				<Dropdown>
					<DropdownItem content='DropdownItem1' />
					<DropdownItem content='DropdownItem2' />
					<DropdownItem content='DropdownItem3' />
					<DropdownItem content='DropdownItem4' />
				</Dropdown>
			</StorybookComponent>
		</ul>
	);
};
export const withDropdown = TemplateWithChildren.bind({});

withDropdown.args = {
	content: 'NavbarItem',
};

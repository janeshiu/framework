import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './Button';
import { BsCheck2, BsTrash } from 'react-icons/bs';

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {
		content: {
			control: 'text',
		},
		icon: {
			control: 'inline-radio',
			options: ['BsCheck2', 'BsTrash', 'undefined'],
			mapping: {
				BsCheck2: <BsCheck2 />,
				BsTrash: <BsTrash />,
				undefined: undefined,
			},
		},
	},
	args: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => (
	<StorybookComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
	content: 'Button',
	icon: <BsCheck2 />,
	disabled: false,
};

export const icon = Template.bind({});
icon.args = {
	icon: <BsCheck2 />,
	disabled: false,
};

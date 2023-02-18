import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Action, default as StorybookComponent } from './PaginationItem';

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {
		content: {
			control: 'inline-radio',
			options: { ...Action, '1': 1 },
		},
	},
	args: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => (
	<ul>
		<StorybookComponent {...args}></StorybookComponent>
	</ul>
);

export const Default = Template.bind({});
Default.args = {
	content: Action.PREV,
};

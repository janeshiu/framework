import React from 'react';
import { default as StorybookComponent } from './Badge';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BsAlarm, BsCheck2 } from 'react-icons/bs';

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {
		icon: {
			control: 'inline-radio',
			options: ['BsAlarm', 'BsCheck2', 'undefined'],
			mapping: {
				BsAlarm: <BsAlarm />,
				BsCheck2: <BsCheck2 />,
				undefined: undefined,
			},
		},
	},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => (
	<StorybookComponent {...args} />
);

export const Badge = Template.bind({});
Badge.args = {
	content: 'Badge',
	icon: <BsCheck2 />,
};

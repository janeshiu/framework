import React from 'react';
import Badge from './Badge';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BsAlarm } from 'react-icons/bs';

export default {
	title: 'base/Badge',
	component: Badge,
	argTypes: {
		icon: {
			control: 'inline-radio',
			options: ['icon', 'no-icon'],
			defaultValue: 'icon',
			mapping: {
				icon: <BsAlarm />,
				['no-icon']: undefined,
			},
		},
	},
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
	content: 'Badge',
};

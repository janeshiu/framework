import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './InputButton';
import { BsJournalText, BsPencilSquare, BsPlus } from 'react-icons/bs';

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {
		type: { control: 'text' },
		innerRef: { control: 'string' },
		buttonIcon: {
			control: 'inline-radio',
			options: ['BsPencilSquare', 'BsJournalText', 'BsPlus', 'undefined'],
			mapping: {
				BsPencilSquare: <BsPencilSquare />,
				BsJournalText: <BsJournalText />,
				BsPlus: <BsPlus />,
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
	placeholder: '請輸入內容',
	autoSendAfterChanged: false,
	buttonIcon: <BsPlus />,
	buttonContent: 'Button',
	buttonDisabled: false,
	separate: false,
};

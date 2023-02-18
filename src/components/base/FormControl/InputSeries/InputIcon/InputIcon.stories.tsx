import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './InputIcon';
import {
	BsCalendarEvent,
	BsCheckLg,
	BsJournalText,
	BsPencilSquare,
	BsPlus,
	BsXLg,
} from 'react-icons/bs';

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {
		type: { control: 'text' },
		innerRef: { control: 'string' },
		leftIcon: {
			control: 'inline-radio',
			options: ['BsPencilSquare', 'BsJournalText', 'BsPlus', 'undefined'],
			mapping: {
				BsPencilSquare: <BsPencilSquare />,
				BsJournalText: <BsJournalText />,
				BsPlus: <BsPlus />,
				undefined: undefined,
			},
		},
		rightIcon: {
			control: 'inline-radio',
			options: ['BsCheckLg', 'BsXLg', 'BsCalendarEvent', 'undefined'],
			mapping: {
				BsCheckLg: <BsCheckLg />,
				BsXLg: <BsXLg />,
				BsCalendarEvent: <BsCalendarEvent />,
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
	leftIconDisabled: true,
};

const TemplateExample: ComponentStory<ComponentType> = (args) => {
	const [hasValue, setHasValue] = useState(false);
	const rightIcon = hasValue ? <BsCheckLg /> : <BsXLg />;
	const rightIconColor = hasValue ? 'success' : 'error';

	return (
		<div>
			<StorybookComponent
				{...args}
				rightIcon={rightIcon}
				rightIconColor={rightIconColor}
				onChange={(e) => {
					setHasValue(!!e.target.value);
				}}
			/>
			<p style={{ marginTop: 12 }}>
				範例模式：rightIcon、rightIconColor 鎖定無法使用
			</p>
		</div>
	);
};

export const Example = TemplateExample.bind({});
Example.args = {
	placeholder: '請輸入內容，若有內容表示成功',
	autoSendAfterChanged: false,
	leftIcon: <BsPencilSquare />,
	leftIconDisabled: true,
};

import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './Modal';
import Button from '../ButtonSeries/Button';

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {},
	args: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<StorybookComponent
				{...args}
				isOpen={open}
				onClose={() => setOpen(false)}></StorybookComponent>
			<Button content='Open Modal' onClick={() => setOpen(true)} />
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	title: 'Model Title',
	children: 'Modal Body',
	loading: false,
	isOpen: false,
	showCloseButton: true,
	autoCloseModal: false,
};

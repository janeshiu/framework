import React, { useEffect } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './ModalLoading';
import useModal from '@/hooks/useModal';
import Button from '../../ButtonSeries/Button';

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {},
	args: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => {
	const { isOpen, open, close, toggle } = useModal();

	useEffect(() => {
		toggle(args.isOpen);
	}, [args.isOpen]);

	return (
		<div>
			<StorybookComponent
				{...args}
				isOpen={isOpen}
				onClose={close}></StorybookComponent>
			<Button content='Open Modal' onClick={open} />
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	message: 'Modal Loading Message',
	isOpen: false,
};

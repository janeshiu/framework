import React, { useEffect } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './Modal';
import Button from '../ButtonSeries/Button';
import ModalFooter from './ModalFooter/ModalFooter';
import ButtonCancel from '../ButtonSeries/ButtonCancel/ButtonCancel';
import ButtonConfirm from '../ButtonSeries/ButtonConfirm/ButtonConfirm';
import Checkbox from '../FormControl/Checkbox/Checkbox';
import useModal from '@/hooks/useModal/useModal';

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {},
	args: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => {
	const { isOpen, openModal, closeModal, toggleModal } = useModal(false);

	useEffect(() => {
		toggleModal(args.isOpen);
	}, [args.isOpen]);

	return (
		<div>
			<StorybookComponent {...args} isOpen={isOpen} onClose={closeModal}>
				<ModalFooter>
					<Checkbox name='checkbox' content='Checkbox' />
					<div className='modalFooter__buttonWrapper'>
						<ButtonCancel content='Cancel' onClick={closeModal} />
						<ButtonConfirm content='Confirm' onClick={closeModal} />
					</div>
				</ModalFooter>
			</StorybookComponent>
			<Button content='Open Modal' onClick={openModal} />
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	title: 'Model Title',
	message: (
		<>
			<p>Modal Body</p>
			<p>Modal Example for reference</p>
		</>
	),
	loading: false,
	isOpen: false,
	showCloseButton: true,
	autoCloseModal: false,
};

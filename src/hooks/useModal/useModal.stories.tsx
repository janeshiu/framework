import React, { ReactNode } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import useModal from './useModal';
import Button from '@/components/base/ButtonSeries/Button';
import Modal from '@/components/base/Modal/Modal';
import ButtonCancel from '@/components/base/ButtonSeries/ButtonCancel/ButtonCancel';
import ButtonConfirm from '@/components/base/ButtonSeries/ButtonConfirm/ButtonConfirm';

type StorybookComponentProps = {
	children: ReactNode;
};

const StorybookComponent: React.FC<StorybookComponentProps> = ({
	children,
}) => {
	return <div>{children}</div>;
};

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => {
	const { isOpen, closeModal, toggleModal } = useModal(false);

	return (
		<StorybookComponent {...args}>
			<Button content='open Modal' onClick={() => toggleModal(true)} />
			<Modal message='Modal Message' isOpen={isOpen} onClose={closeModal}>
				<ButtonCancel content='close Modal' onClick={closeModal} />
			</Modal>
		</StorybookComponent>
	);
};

export const Default = Template.bind({});
Default.args = {};

const TemplateMultiple: ComponentStory<ComponentType> = (args) => {
	const { isOpen, closeModal, openModal, toggleModal } = useModal({
		modal1: false,
		modal2: false,
	});

	return (
		<StorybookComponent {...args}>
			<div className='modalFooter__buttonWrapper justify-start'>
				<Button content='open Modal1' onClick={() => openModal('modal1')} />
				<Button content='open Modal2' onClick={() => openModal('modal2')} />
			</div>

			<Modal message={'Modal 1'} isOpen={isOpen.modal1} onClose={closeModal}>
				<div className='modalFooter__buttonWrapper'>
					<ButtonCancel content='close Modal' onClick={closeModal} />
					<ButtonConfirm
						content='open Modal2'
						onClick={() => toggleModal('modal2')}
					/>
				</div>
			</Modal>

			<Modal
				message={
					<>
						<p>Modal 2</p>
						<p>Modal 2</p>
					</>
				}
				isOpen={isOpen.modal2}
				onClose={closeModal}>
				<div className='modalFooter__buttonWrapper'>
					<ButtonCancel content='close Modal' onClick={closeModal} />
					<ButtonConfirm
						content='open Modal1'
						onClick={() => toggleModal('modal1')}
					/>
				</div>
			</Modal>
		</StorybookComponent>
	);
};

export const MultipleModals = TemplateMultiple.bind({});
MultipleModals.args = {};

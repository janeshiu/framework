import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './ModalFooter';
import ButtonConfirm from '../../ButtonSeries/ButtonConfirm/ButtonConfirm';
import ButtonCancel from '../../ButtonSeries/ButtonCancel/ButtonCancel';

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {},
	args: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => (
	<StorybookComponent {...args}>
		<p>Footer content example</p>
		<div className='modalFooter__buttonWrapper'>
			<ButtonCancel content='Cancel' />
			<ButtonConfirm content='Confirm' />
		</div>
	</StorybookComponent>
);

export const Default = Template.bind({});
Default.args = {};

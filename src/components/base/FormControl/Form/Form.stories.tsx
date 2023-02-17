import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './Form';
import Input from '../InputSeries/Input';
import Button from '../../ButtonSeries/Button';

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {
		content: {
			control: 'text',
		},
	},
	args: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => (
	<StorybookComponent {...args}>
		<Input name='labelInput' placeholder='模擬用，Form 不含 <Input/>' />
		<div style={{ display: 'flex', marginTop: 8 }}>
			<Button type='submit' content='Submit' style={{ width: 108 }} />
			<Button type='reset' content='Reset' style={{ width: 108 }} />
		</div>
	</StorybookComponent>
);

export const Form = Template.bind({});
Form.args = {};

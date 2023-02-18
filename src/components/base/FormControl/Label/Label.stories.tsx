import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './Label';
import Input from '../InputSeries/Input';

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
		<Input name='labelInput' placeholder='模擬用，Label 不含 <Input/>' />
	</StorybookComponent>
);

export const Default = Template.bind({});
Default.args = {
	content: 'Lable',
	required: false,
	href: '/',
	target: '',
	linkContent: 'Link',
};

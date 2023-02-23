import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import useDimensions from './useDimensions';

type StorybookComponentProps = {};

const StorybookComponent: React.FC<StorybookComponentProps> = ({}) => {
	const { width, height } = useDimensions();
	return (
		<div>
			<p>try to resize window</p>
			<br />
			<p>window width: {width}</p>
			<p>window height: {height}</p>
		</div>
	);
};

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => {
	return <StorybookComponent {...args}></StorybookComponent>;
};

export const Default = Template.bind({});
Default.args = {};

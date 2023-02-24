import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import useDisableScroll from './useDisableScroll';

type StorybookComponentProps = {
	disabled: boolean;
};

const StorybookComponent: React.FC<StorybookComponentProps> = ({
	disabled,
}) => {
	useDisableScroll(disabled);
	return (
		<div style={{ height: 2000 }}>
			<p>try to scroll window</p>
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
Default.args = {
	disabled: false,
};

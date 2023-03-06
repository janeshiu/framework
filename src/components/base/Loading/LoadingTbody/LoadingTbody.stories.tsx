import React, { CSSProperties } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './LoadingTbody';
import Table from '../../Table/Table';

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {},
	args: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => {
	return (
		<div
			style={
				{
					'--grid-cols': 'repeat(auto-fit,minmax(10px, auto))',
				} as CSSProperties
			}>
			<StorybookComponent {...args} />
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	length: 6,
};

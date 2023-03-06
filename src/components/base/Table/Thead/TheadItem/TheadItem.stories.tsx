import React, { CSSProperties, Key, useEffect, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './TheadItem';
import Thead from '../Thead';

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {},
	args: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => (
	<>
		<Thead>
			<StorybookComponent {...args}></StorybookComponent>
		</Thead>
		<p className='mt-10'>TheadItem example, please wrap by Thead component</p>
	</>
);

export const Default = Template.bind({});
Default.args = {
	children: 'TheadItem example',
};

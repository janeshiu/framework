import React, { CSSProperties, Key, useEffect, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './Tbody';
import Trow from '../Trow/Trow';
import Tdata from '../Tdata/Tdata';

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {},
	args: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => (
	<>
		<StorybookComponent {...args}></StorybookComponent>
		<p className='mt-10'>Tbody example, please wrap by Table component</p>
	</>
);

export const Default = Template.bind({});
Default.args = {
	gridTemplateCols: 'repeat(auto-fit, minmax(100px, auto))',

	children: (
		<>
			<Trow>
				<Tdata>content 1-1</Tdata>
				<Tdata>content 1-2</Tdata>
			</Trow>
			<Trow>
				<Tdata>content 2-1</Tdata>
				<Tdata>content 2-2</Tdata>
			</Trow>
		</>
	),
};

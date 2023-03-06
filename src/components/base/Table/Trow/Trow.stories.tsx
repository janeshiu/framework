import React, { CSSProperties, Key, useEffect, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './Trow';
import Tdata from '../Tdata/Tdata';
import Tbody from '../Tbody/Tbody';

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {},
	args: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => (
	// <Tbody gridTemplateCols='repeat(auto-fit, minmax(100px, auto))'>
	<>
		<StorybookComponent {...args}></StorybookComponent>
		<p className='mt-10'>Trow example, please wrap by Tbody/Tfoot component</p>
	</>
	// </Tbody>
);

export const Default = Template.bind({});
Default.args = {
	gridTemplateCols: 'repeat(auto-fit, minmax(100px, auto))',
	children: (
		<>
			<Tdata>Tdata1</Tdata>
			<Tdata>Tdata2</Tdata>
			<Tdata>Tdata3</Tdata>
		</>
	),
};

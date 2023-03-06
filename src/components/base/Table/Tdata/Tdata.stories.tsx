import React, { Key, useEffect, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './Tdata';
import Trow from '../Trow/Trow';

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {},
	args: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => (
	<>
		<Trow>
			<StorybookComponent {...args}></StorybookComponent>
		</Trow>
		<p className='mt-10'>Tdata example, please wrap by Trow component</p>
	</>
);

export const Default = Template.bind({});
Default.args = {
	children: 'Tdata example',
};

import React, { CSSProperties, Key, useEffect, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './Thead';
import TheadItem from './TheadItem/TheadItem';

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {},
	args: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => (
	<>
		<StorybookComponent {...args}></StorybookComponent>
		<p className='mt-10'>TheadItem example, please wrap by Table component</p>
	</>
);

export const Default = Template.bind({});
Default.args = {
	gridTemplateCols: 'repeat(auto-fit, minmax(100px, auto))',

	children: (
		<>
			<TheadItem id='TheadItem1' sortable>
				TheadItem1
			</TheadItem>
			<TheadItem id='TheadItem2' align='right'>
				TheadItem2
			</TheadItem>
		</>
	),
};

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './Table';
import { operatorTableHeader, TableHeaderItem } from '@/enums/tableHeader';
import Button from '../ButtonSeries/Button';

type ComponentType = typeof StorybookComponent;

const exampleTableHeader: TableHeaderItem[] = [
	{
		id: 'name',
		title: '名稱',
		width: 'minmax(100px, auto)',
	},
	{
		id: 'email',
		title: '電子信箱',
		width: 'minmax(300px, auto)',
	},
	{
		id: 'email1',
		title: '電子信箱1',
		width: 'minmax(300px, auto)',
	},
	{
		id: 'email2',
		title: '電子信箱2',
		width: 'minmax(300px, auto)',
	},
	...operatorTableHeader,
];

const exampleTableBody = [
	{
		name: 'Jane',
		email: 'jane@jgallop.com',
		email1: 'jane@jgallop.com',
		email2: 'jane@jgallop.com',
		operator: <Button content='詳細內容'></Button>,
	},
	{
		name: 'Jane1111',
		email: 'jane1111@jgallop.com',
		email1: 'jane1111@jgallop.com',
		email2: 'jane1111@jgallop.com',
		operator: <Button content='詳細內容'></Button>,
	},
];

export default {
	component: StorybookComponent,
	argTypes: {
		bodyItems: {
			control: 'inline-radio',
			options: ['exampleData', 'noData'],
			mapping: {
				exampleData: exampleTableBody,
				noData: undefined,
			},
		},
	},
	args: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => (
	<>
		<StorybookComponent {...args}></StorybookComponent>
		<p>try to resize screen with property unfixed</p>
	</>
);

export const Default = Template.bind({});
Default.args = {
	headerItems: exampleTableHeader,
	bodyItems: exampleTableBody,
	isLoading: false,
};

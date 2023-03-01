import React, { Key, useEffect, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { default as StorybookComponent } from './Tabs';
import TabItem from './TabItem/TabItem';

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {
		children: {
			control: 'string',
		},
		tab: {
			control: 'text',
		},
	},
	args: {},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => (
	<StorybookComponent {...args}>
		<TabItem content='TabItem1' href='#' />
		<TabItem content='TabItem2' href='/' />
		<TabItem content='TabItem3' href='/' />
		<TabItem content='Disabled' href='/test' disabled />
	</StorybookComponent>
);

export const Default = Template.bind({});
Default.args = {};

const TemplateControlled: ComponentStory<ComponentType> = (args) => {
	const [tab, setTab] = useState<Key>('TabItem1');

	useEffect(() => {
		if (args.tab) setTab(args.tab as Key);
	}, [args.tab]);

	return (
		<StorybookComponent
			tab={tab}
			onTabItemClick={(newTab) => {
				if (newTab) setTab(newTab);
			}}>
			<TabItem key='TabItem1' content='TabItem1' />
			<TabItem key='TabItem2' content='TabItem2' />
			<TabItem key='TabItem3' content='TabItem3' />
			<TabItem key='Disabled' content='Disabled' disabled />
		</StorybookComponent>
	);
};

export const Controlled = TemplateControlled.bind({});
Controlled.args = {
	tab: 'TabItem1',
};

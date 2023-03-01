import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import usePath from './usePath';

type StorybookComponentProps = {
	href?: string;
};

const StorybookComponent: React.FC<StorybookComponentProps> = ({ href }) => {
	const { isCurrentPage, isSameOrigin } = usePath(href);

	return (
		<div>
			<p>href: {href}</p>
			<p>
				isCurrentPage: 用來確認目前網頁路徑是否與目標 href 的路徑是相同的(
				{`${isCurrentPage}`})
			</p>
			<p>
				isSameOrigin: 用來確認目前網頁路徑是否與目標 href 的來源是相同的 (
				{`${isSameOrigin}`})
			</p>
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
	href: '/',
};

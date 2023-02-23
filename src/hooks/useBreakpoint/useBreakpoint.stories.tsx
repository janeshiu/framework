import React, { ReactNode } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import useBreakpoints from './useBreakpoint';
import { Breakpoints } from '@/enums/style';
import useDimensions from '../useDimensions/useDimensions';

type StorybookComponentProps = {};

const StorybookComponent: React.FC<StorybookComponentProps> = ({}) => {
	const { width, height } = useDimensions();
	const { isMobile, isTablet, isNotebook, isDesktop, isDesktop_lg } =
		useBreakpoints();

	return (
		<div>
			<p>
				try to resize window - {width}x{height}
			</p>
			<br />
			<p>
				isMobile {`(width < ${Breakpoints.sm})`} : {`${isMobile}`}
			</p>
			<p>
				isTablet {`(width < ${Breakpoints.md})`}: {`${isTablet}`}
			</p>
			<p>
				isNotebook {`(width < ${Breakpoints.lg})`}: {`${isNotebook}`}
			</p>
			<p>
				isDesktop {`(width < ${Breakpoints.xl})`}: {`${isDesktop}`}
			</p>
			<p>
				isDesktop_lg {`(width < ${Breakpoints.xxl})`}: {`${isDesktop_lg}`}
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
Default.args = {};

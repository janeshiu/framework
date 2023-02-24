import React, { useEffect } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LoadingActions, LoadingPayload } from '@/reducers/LoadingReducer';
import useLoadingContext from './useLoadingContext';
import Button from '@/components/base/ButtonSeries/Button';

type StorybookComponentProps = {
	payload: LoadingPayload;
};

const loadingContextDemo: {
	[key: string]: LoadingPayload;
} = {
	[LoadingActions.LOADING]: {
		type: LoadingActions.LOADING,
	},
	[LoadingActions.SUCCESS_WITH_MESSAGE]: {
		type: LoadingActions.SUCCESS_WITH_MESSAGE,
	},
	[LoadingActions.SUCCESS_WITH_MESSAGE + '_withCustomMessage']: {
		type: LoadingActions.SUCCESS_WITH_MESSAGE,
		message: 'Success Message',
	},
	[LoadingActions.SUCCESS_WITH_MESSAGE + '_withoutAutoClose']: {
		type: LoadingActions.SUCCESS_WITH_MESSAGE,
		isAutoClose: false,
	},
	[LoadingActions.SUCCESS]: {
		type: LoadingActions.SUCCESS,
	},
	[LoadingActions.CLOSE]: {
		type: LoadingActions.CLOSE,
	},
	[LoadingActions.ERROR]: {
		type: LoadingActions.ERROR,
	},
	[LoadingActions.AUTH_EXPIRED]: {
		type: LoadingActions.AUTH_EXPIRED,
	},
};

const StorybookComponent: React.FC<StorybookComponentProps> = ({ payload }) => {
	const { loadingState, loadingDispatch } = useLoadingContext();

	const handleShowEffect = () => {
		if (payload !== undefined) {
			loadingDispatch(payload);
		}
	};

	useEffect(() => {
		loadingDispatch(payload);
	}, [payload]);

	return (
		<div className='space-y-4'>
			Click button to see effect
			<Button content='click' onClick={handleShowEffect} />
			<p>{JSON.stringify(loadingState)}</p>
		</div>
	);
};

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {
		payload: {
			control: 'inline-radio',
			options: Object.keys(loadingContextDemo),
			mapping: loadingContextDemo,
		},
	},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => {
	return <StorybookComponent {...args}></StorybookComponent>;
};

export const Default = Template.bind({});
Default.args = {};

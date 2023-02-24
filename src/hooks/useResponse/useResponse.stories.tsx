import React, { ReactNode, useEffect } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import useResponse from './useResponse';
import { BaseResponse } from '@/types/service';
import Button from '@/components/base/ButtonSeries/Button';

type StorybookComponentProps = {
	response: BaseResponse;
};

const StorybookComponent: React.FC<StorybookComponentProps> = ({
	response,
}) => {
	const { handleAwaitResponse, handleSuccess, handleError } = useResponse();
	const { error } = response;

	const mockApi = (): Promise<BaseResponse> => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(response);
			}, 500);
		});
	};
	const handleValidation = () => {
		return true;
	};

	const handleFetchResponse = async () => {
		if (!handleValidation()) return;

		handleAwaitResponse();
		const response = await mockApi();
		const { error, message, destination } = response;

		if (!error) {
			// you can do something here
			handleSuccess({ showMessage: !!message, message, destination });
		} else {
			handleError(response);
		}
	};

	useEffect(() => {}, []);

	return (
		<div>
			Click button to mock api process
			<Button content='click' onClick={handleFetchResponse} />
		</div>
	);
};

type ComponentType = typeof StorybookComponent;

export default {
	component: StorybookComponent,
	argTypes: {
		response: {
			control: 'inline-radio',
			options: [
				'success',
				'successWithMessage',
				'successWithDestination',
				'error',
				'errorWithMessage',
				'errorWithRedirect',
			],
			mapping: {
				// success 內除了 error 以外的參數都是範例用資料（後端不會傳，方便展示用而已）
				success: {
					error: false,
				},
				successWithMessage: {
					error: false,
					message: 'Message',
				},
				successWithDestination: {
					error: false,
					destination: 'reload',
				},
				// error
				error: {
					error: true,
				},
				errorWithMessage: {
					error: true,
					message: 'Error Message',
				},
				errorWithRedirect: {
					error: true,
					redirect: 'from api',
					destination: '',
				},
			},
		},
	},
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => {
	return <StorybookComponent {...args}></StorybookComponent>;
};

export const Default = Template.bind({});
Default.args = {};

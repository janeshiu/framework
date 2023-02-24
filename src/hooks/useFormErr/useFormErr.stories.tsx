import React, { useEffect } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import useFormErr from './useFormErr';
import Input from '@/components/base/FormControl/InputSeries/Input';
import Label from '@/components/base/FormControl/Label/Label';
import HintGroup from '@/components/base/Info/Hint/HintGroup/HintGroup';
import Form from '@/components/base/FormControl/Form/Form';
import ButtonConfirm from '@/components/base/ButtonSeries/ButtonConfirm/ButtonConfirm';
import ButtonCancel from '@/components/base/ButtonSeries/ButtonCancel/ButtonCancel';
import InputPassword from '@/components/base/FormControl/InputSeries/InputPassword/InputPassword';
import MessageGroup from '@/components/base/Info/Message/MessageGroup/MessageGroup';

type StorybookComponentProps = {};

const StorybookComponent: React.FC<StorybookComponentProps> = ({}) => {
	const {
		isNoError,
		formErr,
		setFormErr,
		resetFormErr,
		formErrorMsg,
		setFormErrorMsg,
	} = useFormErr({ account: false, password: false });

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		resetFormErr();

		const form = event.target as HTMLElement;
		const inputs = form.getElementsByTagName('input');
		const newErrState: typeof formErr = {};

		for (let i = 0; i < inputs.length; i++) {
			const target = inputs[i];
			switch (target.name) {
				case 'account':
				case 'password':
					newErrState[target.name] = !target.value;
					break;
			}
		}

		setFormErr({ ...newErrState, global: isNoError(newErrState) });
	};

	useEffect(() => {
		setFormErrorMsg({
			account: '帳號為必填',
			password: '密碼為必填',
			global: '全部填寫完畢，感謝',
		});
	}, []);

	const handleReset = (event: React.FormEvent<HTMLFormElement>) => {
		resetFormErr();
	};

	return (
		<div>
			<Form onSubmit={handleSubmit} onReset={handleReset}>
				<Label content='帳號'>
					<Input
						name='account'
						placeholder='需填寫才不會跳錯'
						autoComplete='username'
					/>
					{/* 若包住 input 會讓 input 被刷新，導致畫面上填寫的內容會消失 */}
					<HintGroup error={formErr.account} errorMsg={formErrorMsg.account} />
				</Label>

				<Label content='密碼'>
					<InputPassword
						name='password'
						placeholder='需填寫才不會跳錯'
						autoComplete='current-password'
						toggleMode='icon'
					/>
					<HintGroup
						error={formErr.password}
						errorMsg={formErrorMsg.password}
					/>
				</Label>

				<MessageGroup error={formErr.global} errorMsg={formErrorMsg.global} />

				<div className='flex space-x-4 pt-4'>
					<ButtonConfirm content='Submit' />
					<ButtonCancel content='Reset' type='reset' />
				</div>
			</Form>
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
	disabled: false,
};

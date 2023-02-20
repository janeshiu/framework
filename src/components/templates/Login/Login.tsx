import ButtonConfirm from '@/components/base/ButtonSeries/ButtonConfirm/ButtonConfirm';
import Form, { FormProps } from '@/components/base/FormControl/Form/Form';
import Input from '@/components/base/FormControl/InputSeries/Input';
import InputPassword from '@/components/base/FormControl/InputSeries/InputPassword/InputPassword';
import Label from '@/components/base/FormControl/Label/Label';

interface LoginProps {
	onSubmit: FormProps['onSubmit'];
}

/**
 * Login
 */
const Login: React.FC<LoginProps> = ({ onSubmit }) => {
	return (
		<Form title='經銷商登入' onSubmit={onSubmit}>
			<div className='field__body'>
				<Label content='帳號'>
					<Input name='account' autoComplete='username' />
				</Label>{' '}
				<Label content='密碼' linkContent='忘記密碼？' href='/regiser'>
					<InputPassword
						name='password'
						toggleMode='icon'
						autoComplete='current-password'
					/>
				</Label>
			</div>

			<ButtonConfirm content='登入' size='full' />
		</Form>
	);
};

export default Login;

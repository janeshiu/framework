import { InputProps } from '../Input';
import { ChangeEvent, useEffect, useState } from 'react';
import InputIcon from '../InputIcon/InputIcon';
import dynamic from 'next/dynamic';
import Checkbox from '../../Checkbox/Checkbox';

const BsEye = dynamic(() =>
	import('react-icons/bs').then((bootstrapIcons) => bootstrapIcons.BsEye)
);

const BsEyeSlash = dynamic(() =>
	import('react-icons/bs').then((bootstrapIcons) => bootstrapIcons.BsEyeSlash)
);

export interface InputPasswordProps extends Omit<InputProps, 'type'> {
	/** 控制是否顯示密碼的類型，不提供表示無法看見密碼 */
	toggleMode?: 'icon' | 'checkbox';
}

/**
 * Input[type=password] 基本設置
 * @param toggleMode - 控制是否顯示密碼的類型，不提供表示無法看見密碼
 */
const InputPassword: React.FC<InputPasswordProps> = ({
	toggleMode,
	...props
}) => {
	const { size, value, onChange, autoComplete = 'new-password' } = props;
	const [password, setPassword] = useState('');
	const { icon, inputType, handleToggleVisible } = usePasswordVisible({
		toggleMode,
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange && onChange(e);

		if (value !== undefined) return;
		setPassword(e.target.value);
	};

	useEffect(() => {
		if (value !== undefined) {
			setPassword(value);
		}
	}, [value]);

	if (toggleMode === 'checkbox') {
		return (
			<div className='flex flex-col'>
				<InputIcon
					{...props}
					role='password'
					value={password}
					defaultValue={undefined}
					type={inputType}
					// rightIcon={icon}
					// rightIconOnClick={handleToggleVisible}
					autoComplete={autoComplete}
					onChange={handleChange}
				/>
				{toggleMode === 'checkbox' && (
					<Checkbox
						name='togglePassword'
						size={size}
						content='顯示密碼'
						onChange={handleToggleVisible}
					/>
				)}
			</div>
		);
	}
	return (
		<InputIcon
			{...props}
			role='password'
			value={password}
			defaultValue={undefined}
			type={inputType}
			rightIcon={icon}
			rightIconOnClick={handleToggleVisible}
			autoComplete={autoComplete}
			onChange={handleChange}
		/>
	);
};

function usePasswordVisible(options: {
	toggleMode: InputPasswordProps['toggleMode'];
}) {
	const { toggleMode } = options;
	const [visible, setVisible] = useState(false);
	const inputType = visible ? 'text' : 'password';
	const icon =
		toggleMode !== 'icon' ? undefined : visible ? <BsEyeSlash /> : <BsEye />;

	const handleToggleVisible = () => {
		setVisible((prev) => !prev);
	};

	const resetVisible = () => {
		setVisible(false);
	};

	useEffect(() => {
		if (!toggleMode) {
			resetVisible();
		}
	}, [toggleMode]);

	return {
		icon,
		inputType,
		handleToggleVisible,
	};
}

export default InputPassword;

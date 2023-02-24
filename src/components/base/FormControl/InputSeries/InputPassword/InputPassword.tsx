import { InputProps } from '../Input';
import styles from '../Input.module.scss';
import { useEffect, useState } from 'react';
import InputIcon from '../InputIcon/InputIcon';
import dynamic from 'next/dynamic';
import Checkbox from '../../Checkbox/Checkbox';

const BsEye = dynamic(() =>
	import('react-icons/bs').then((bootstrapIcons) => bootstrapIcons.BsEye)
);

const RxEyeClosed = dynamic(() =>
	import('react-icons/rx').then((bootstrapIcons) => bootstrapIcons.RxEyeClosed)
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
	const { size, autoComplete = 'new-password' } = props;
	const { icon, inputType, handleToggleVisible } = usePasswordVisible({
		toggleMode,
	});

	if (toggleMode === 'checkbox') {
		return (
			<div className='flex flex-col'>
				<InputIcon
					{...props}
					role='password'
					type={inputType}
					autoComplete={autoComplete}
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
			type={inputType}
			autoComplete={autoComplete}
			rightIconShow={toggleMode === 'icon'}
			rightIcon={icon}
			rightIconOnClick={handleToggleVisible}
		/>
	);
};

function usePasswordVisible(options: {
	toggleMode: InputPasswordProps['toggleMode'];
}) {
	const { toggleMode } = options;
	const [visible, setVisible] = useState(false);
	const inputType = visible ? 'text' : 'password';
	const icon = visible ? <BsEye /> : <RxEyeClosed size='100' />;
	const handleToggleVisible = () => {
		setVisible((prev) => !prev);
	};

	const resetVisible = () => {
		setVisible(false);
	};

	useEffect(() => {
		resetVisible();
	}, [toggleMode]);

	return {
		icon,
		inputType,
		handleToggleVisible,
	};
}

export default InputPassword;

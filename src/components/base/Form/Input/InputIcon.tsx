import Input, { InputProps } from './Input';
import styles from './Input.module.scss';
import { ShapeType, SizeType } from '@/types/style';
import classNames from 'classnames';
import { ButtonProps } from '../../Button/Button';

interface InputIconProps {
	size?: SizeType;
	shape?: ShapeType;
	className?: string;

	icon: JSX.Element;
	iconClickable?: boolean;
	iconPosition?: InputProps['buttonPosition'];

	inputProps: InputProps['inputProps'];

	messagesProps?: InputProps['messagesProps'];

	onSend: InputProps['onSend'];
}

const InputIcon: React.FC<InputIconProps> = ({
	size = 'normal',
	shape = 'circle',
	className,

	icon,
	iconClickable = true,
	iconPosition = 'right',

	inputProps,

	messagesProps,

	onSend,
}) => {
	const buttonClass = classNames({
		[styles[`inputIcon__button`]]: true,
		[styles[`inputIcon--${iconPosition}`]]: true,
		[styles[`inputIcon--disabled`]]: !iconClickable,
	});

	const BUTTON_PROPS: ButtonProps = {
		shape,
		size,
		icon,
		className: buttonClass,
		pattern: 'ghost',
		color: 'secondary',
		disabled: !iconClickable,
	};

	return (
		<Input
			className={className}
			shape={shape}
			size={size}
			inputProps={inputProps}
			onSend={onSend}
			buttonProps={BUTTON_PROPS}
			buttonPosition={iconPosition}
			messagesProps={messagesProps}
		/>
	);
};

export default InputIcon;

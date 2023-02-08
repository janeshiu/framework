import { ReactNode } from 'react';
import Message from '../../Message/Message';
import InputBase, { InputBaseProps } from './InputBase';
import styles from './Input.module.scss';
import { HorizontalType, ShapeType, SizeType } from '@/types/style';

import classNames from 'classnames';
import Button, { ButtonProps } from '../../Button/Button';

interface InputProps {
	inputProps: Exclude<InputBaseProps, 'size' | 'shape'>;

	showButton?: boolean;
	buttonPosition?: Exclude<HorizontalType, 'center'>;
	buttonProps?: Exclude<ButtonProps, 'size' | 'shape'>;

	size?: SizeType;
	shape?: ShapeType;

	className?: string;
	success?: boolean;
	successMsg?: ReactNode;
	successClass?: string;

	error?: boolean;
	errorMsg?: ReactNode;
	errorClass?: string;

	helper?: boolean;
	helperMsg?: ReactNode;
	helperClass?: string;
}

const Input: React.FC<InputProps> = ({
	inputProps,

	showButton = true,
	buttonPosition = 'right',
	buttonProps,

	size = 'normal',
	shape = 'circle',

	className,
	success,
	successMsg,
	successClass,

	error,
	errorMsg,
	errorClass,

	helper,
	helperMsg,
	helperClass,
}) => {
	const hasButton = showButton && buttonProps;
	const BUTTON_PROPS: ButtonProps = {
		...buttonProps,
		shape,
		size,
		pattern: buttonProps?.pattern ?? 'ghost',
		color: buttonProps?.color ?? 'secondary',
	};

	const inputWrapperClass = classNames({
		[styles[`input--wrapper`]]: true,
		[styles[`input--hasButton`]]: hasButton,
		[styles[`pattern--${BUTTON_PROPS.pattern}`]]: true,

		[styles[buttonPosition]]: true,
	});

	const messageWrapperClass = classNames({
		[styles[`message--wrapper`]]: true,
		[styles[`message--isCircle`]]: shape === 'circle',
	});

	return (
		<div className={`${className ?? ''}`}>
			<div
				className={`${inputWrapperClass} ${
					buttonProps
						? styles[`button--${buttonProps.pattern || 'primary'}`]
						: ''
				}`}>
				<InputBase {...inputProps} size={size} shape={shape} />
				{hasButton && <Button {...BUTTON_PROPS} />}
			</div>
			<div className={messageWrapperClass}>
				{helper && helperMsg && (
					<Message size={size} msg={helperMsg} className={helperClass} />
				)}
				{error && errorMsg && (
					<Message
						type='error'
						size={size}
						msg={errorMsg}
						className={errorClass}
					/>
				)}
				{success && successMsg && (
					<Message
						type='success'
						size={size}
						msg={successMsg}
						className={successClass}
					/>
				)}
			</div>
		</div>
	);
};

export default Input;

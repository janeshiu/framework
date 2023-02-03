import { ReactNode } from 'react';
import Message from '../../Message/Message';
import InputBase, { InputBaseProps } from './InputBase';
import styles from './Input.module.scss';
import { HorizontalType, ShapeType, SizeType } from '@/types/style';

import classNames from 'classnames';
import Button, { ButtonProps } from '../../Button/Button';
import { Size } from '@/enums/style';

interface InputProps {
	inputProps: Omit<InputBaseProps, 'size' | 'shape'>;

	showButton?: boolean;
	buttonPosition?: Exclude<HorizontalType, 'center'>;
	buttonProps?: Omit<ButtonProps, 'size' | 'shape'>;

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
	shape = 'round',

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
	const baseClass = classNames({
		[styles[`input--${shape}`]]: true,
	});
	return (
		<div className={`${styles.container} ${baseClass} ${className ?? ''}`}>
			<div
				className={`${styles.wrapper} ${
					styles[`buttonPosition--${buttonPosition}`]
				} ${
					buttonProps
						? styles[`button--${buttonProps.pattern || 'primary'}`]
						: ''
				}`}>
				<InputBase {...inputProps} size={size} shape={shape} />
				{hasButton && (
					<Button
						{...buttonProps}
						className={`${styles.button} ${styles[`button--${size}`]} `}
						shape={shape}
						size={size}
					/>
				)}
			</div>
			{success && successMsg && (
				<Message
					type='success'
					size={size}
					msg={successMsg}
					className={successClass}
				/>
			)}
			{error && errorMsg && (
				<Message
					type='error'
					size={size}
					msg={errorMsg}
					className={errorClass}
				/>
			)}
			{helper && helperMsg && (
				<Message
					type='helper'
					size={size}
					msg={helperMsg}
					className={helperClass}
				/>
			)}
		</div>
	);
};

export default Input;

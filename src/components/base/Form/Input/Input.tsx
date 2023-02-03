import { ReactNode } from 'react';
import Message from '../../Message/Message';
import InputBase, { InputBaseProps } from './InputBase';
import styles from './Input.module.scss';
import { Shape } from '@/enums/style';
import { ShapeType, SizeType } from '@/types/style';

import classNames from 'classnames';

interface InputProps {
	inputProps: Omit<InputBaseProps, 'size'>;

	size?: SizeType;

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
	className,
	size = 'normal',

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
	const shape: ShapeType = inputProps.shape || 'round';
	const baseClass = classNames({
		[styles[`input--${shape}`]]: true,
	});
	return (
		<div className={`${styles.inputWrapper} ${baseClass} ${className ?? ''}`}>
			<InputBase {...inputProps} size={size} />
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

import { ReactNode } from 'react';
import Message from '../../Message/Message';
import InputBase, { InputBaseProps } from './InputBase';
import styles from './Input.module.scss';
import { Shape, ShapeType } from '@/enums/style';
import classNames from 'classnames';

interface InputProps {
	inputProps: InputBaseProps;

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
			<InputBase {...inputProps} />
			{success && successMsg && (
				<Message type='success' msg={successMsg} className={successClass} />
			)}
			{error && errorMsg && (
				<Message type='error' msg={errorMsg} className={errorClass} />
			)}
			{helper && helperMsg && (
				<Message type='helper' msg={helperMsg} className={helperClass} />
			)}
		</div>
	);
};

export default Input;

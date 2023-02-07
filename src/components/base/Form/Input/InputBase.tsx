import { ShapeType, SizeType } from '@/types/style';
import classNames from 'classnames';
import { ChangeEvent, HTMLInputTypeAttribute } from 'react';
import styles from './Input.module.scss';

export interface InputBaseProps {
	name: string;
	innerRef?: (el: HTMLInputElement) => void;
	type?: HTMLInputTypeAttribute;
	defaultValue?: string | number;
	value?: string | number;
	accept?: string;
	placeholder?: string;
	disabled?: boolean;
	autoComplete?: string;
	className?: string;
	readonly?: boolean;
	required?: boolean;
	checked?: boolean;
	shape?: ShapeType;
	size?: SizeType;
	showClearButton?: boolean;
	onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
	onFocus?: (event: ChangeEvent<HTMLInputElement>) => void;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	handleClear?: () => void;
}

const InputBase: React.FC<InputBaseProps> = ({
	name,
	innerRef,
	type = 'text',
	defaultValue,
	value,
	accept,
	placeholder,
	disabled = false,
	autoComplete = 'off',
	className,
	readonly,
	required,
	checked,
	shape = 'round',
	size = 'normal',
	showClearButton = false,
	onBlur,
	onFocus,
	onChange,
	handleClear,
}) => {
	const baseClass = classNames({
		[`shape--${shape}`]: true,
		[`text-normal--${[size]}`]: true,
		[`btn--${[size]}`]: true,

		[styles[`inputBase`]]: true,
		[styles[`inputBase--${shape}`]]: true,
	});

	return (
		<input
			ref={innerRef}
			className={`${baseClass} ${className ?? ''}`}
			name={name}
			aria-labelledby={name}
			type={type}
			defaultValue={defaultValue}
			value={value}
			placeholder={placeholder}
			onBlur={onBlur}
			onFocus={onFocus}
			onChange={onChange}
			disabled={disabled}
			autoComplete={autoComplete}
			accept={accept}
			readOnly={readonly}
			required={required}
			checked={checked}
		/>
	);
};

export default InputBase;

import { ShapeType } from '@/enums/style';
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
	shape?: ShapeType;
	onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
	onFocus?: (event: ChangeEvent<HTMLInputElement>) => void;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
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
	shape = 'round',
	onBlur,
	onFocus,
	onChange,
}) => {
	return (
		<input
			ref={innerRef}
			className={`${styles.inputBase} ${styles[shape]} ${className ?? ''}`}
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
		/>
	);
};

export default InputBase;

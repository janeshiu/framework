import { ChangeEvent, HTMLInputTypeAttribute } from 'react';

export interface InputProps {
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
	onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
	onFocus?: (event: ChangeEvent<HTMLInputElement>) => void;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
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
	onBlur,
	onFocus,
	onChange,
}) => {
	return (
		<input
			ref={innerRef}
			className={className}
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

export default Input;

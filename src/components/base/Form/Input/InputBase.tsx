import { ShapeType, SizeType } from '@/types/style';
import classNames from 'classnames';
import {
	ChangeEvent,
	HTMLInputTypeAttribute,
	MouseEvent,
	MutableRefObject,
	useRef,
} from 'react';
import ButtonClear from '../../Button/ButtonClear';
import styles from './Input.module.scss';

export interface InputBaseProps {
	name: string;
	innerRef?: MutableRefObject<{ [name: string]: HTMLInputElement }>;
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
	onClear?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const InputBase: React.FC<InputBaseProps> = ({
	name,
	innerRef = useRef({}),
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
	shape = 'circle',
	size = 'normal',
	showClearButton = false,
	onBlur,
	onFocus,
	onChange,
	onClear,
}) => {
	const baseClass = classNames({
		[`shape--${shape}`]: true,
		[`text-normal--${[size]}`]: true,
		[`btn--${[size]}`]: true,

		[styles[`inputBase`]]: true,
		[styles[`inputBase--${shape}`]]: true,
		[styles[`inputBase--showClear`]]: showClearButton,
	});

	const buttonClearClass = classNames({
		[styles[`inputBase--hideClear`]]: !(value || innerRef.current[name].value),
	});

	const handleClear = (e: MouseEvent<HTMLButtonElement>) => {
		if (value) {
			onClear && onClear(e);
			return;
		}

		innerRef.current[name].value = '';
	};

	return (
		<div className='relative'>
			<input
				ref={(e: HTMLInputElement) => {
					if (!innerRef) return;

					innerRef.current[name] = e;
				}}
				className={`${baseClass} ${className ?? ''}`}
				name={name}
				aria-labelledby={name}
				type={type}
				defaultValue={defaultValue}
				value={value}
				placeholder={placeholder}
				disabled={disabled}
				autoComplete={autoComplete}
				accept={accept}
				readOnly={readonly}
				required={required}
				checked={checked}
				onBlur={onBlur}
				onFocus={onFocus}
				onChange={onChange}
			/>
			{showClearButton && (
				<ButtonClear
					className={buttonClearClass}
					size={size}
					onClick={handleClear}
				/>
			)}
		</div>
	);
};

export default InputBase;

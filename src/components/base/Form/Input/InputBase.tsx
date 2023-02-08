import { ShapeType, SizeType } from '@/types/style';
import classNames from 'classnames';
import {
	ChangeEvent,
	HTMLInputTypeAttribute,
	MouseEvent,
	MutableRefObject,
	useEffect,
	useRef,
	useState,
} from 'react';
import ButtonClear from '../../Button/ButtonClear';
import styles from './Input.module.scss';

export interface InputBaseProps {
	name: string;
	innerRef?: MutableRefObject<{ [name: string]: HTMLInputElement }>;
	type?: HTMLInputTypeAttribute;
	defaultValue?: string;
	value?: string;
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
	shape = 'circle',
	size = 'normal',
	showClearButton = false,
	onBlur,
	onFocus,
	onChange,
	onClear,
}) => {
	const [isEmpty, setIsEmpty] = useState(false);
	const inputRef = useRef<HTMLInputElement>();

	const baseClass = classNames({
		[`shape--${shape}`]: true,
		[`shape--circle`]: true,

		[`text-normal--${[size]}`]: true,
		[`btn--${[size]}`]: true,

		[styles[`inputBase`]]: true,
		[styles[`shape--circle`]]: true,
		[styles[`inputBase--${shape}`]]: true,
		[styles[`inputBase--showClear`]]: showClearButton,
	});

	const buttonClearClass = classNames({
		[styles[`clearButton`]]: true,
		[styles[`clearButton--show`]]: !isEmpty,
	});

	const handleIsEmpty = () => {
		const currentValue = value ?? inputRef.current?.value;
		setIsEmpty(!currentValue);
	};

	const handleClear = (e: MouseEvent<HTMLButtonElement>) => {
		if (value !== undefined) {
			onClear && onClear(e);
			return;
		}

		if (!inputRef.current) return;

		inputRef.current.value = '';
		handleIsEmpty();
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange && onChange(e);

		if (value !== undefined) return;
		handleIsEmpty();
	};

	useEffect(() => {
		handleIsEmpty();
	}, [value]);

	return (
		<div className='relative w-full'>
			{showClearButton && !isEmpty && (
				<ButtonClear
					className={buttonClearClass}
					size={size}
					onClick={handleClear}
				/>
			)}
			<input
				ref={(e: HTMLInputElement) => {
					inputRef.current = e;

					if (!innerRef) return;
					innerRef.current[name] = inputRef.current;
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
				onChange={handleChange}
			/>
		</div>
	);
};

export default InputBase;

import { ShapeType, SizeType } from '@/types/style';
import classNames from 'classnames';
import {
	ChangeEvent,
	HTMLInputTypeAttribute,
	KeyboardEvent,
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
	hideInput?: boolean;
	showClearButton?: boolean;
	autoSendAfterChanged?: boolean;
	onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
	onFocus?: (event: ChangeEvent<HTMLInputElement>) => void;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	onSend?: (currentValue: string | undefined) => void;
	onClear?: (event: MouseEvent<HTMLButtonElement>) => void;
}

/**
 * InputBase - 原型 input 元件，後續 Input component 請以此進行調整
 * @param innerRef - 請使用 useRef({})，後續 element 會放置進 useRef.current[name] 裏面
 * @param className - className
 * @param shape - input 外框形狀
 * @param size - input 尺寸
 * @param hideInput - 是否隱藏 input element
 * @param showClearButton - input 欄位內是否要顯示清除按鈕 [x]
 * @param autoSendAfterChanged - 是否在每次 onChange 後自動執行 onSend
 * @param onBlur - onBlur
 * @param onFocus - onFocus
 * @param onChange - onChange
 * @param onSend - 若 Input 欄位不存在在 Form 內，需要 Enter 執行送出時使用
 * @param onClear - 點擊清除按鈕時所執行的 callback，若使用 value 時，請設置清除內容的 state
 * @returns
 */
const InputBase: React.FC<InputBaseProps> = ({
	innerRef,
	className,

	shape = 'circle',
	size = 'normal',
	hideInput = false,
	showClearButton = false,
	autoSendAfterChanged = false,
	onBlur,
	onFocus,
	onChange,
	onSend,
	onClear,

	...restProps
	// name,
	// type = 'text',
	// autoComplete = 'off',
	// defaultValue,
	// value,
	// accept,
	// placeholder,
	// disabled = false,
	// readonly,
	// required,
	// checked,
}) => {
	const { name, value } = restProps;
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
		if (value === undefined && !!inputRef.current) {
			inputRef.current.value = '';
			handleIsEmpty();
		}
		onClear && onClear(e);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange && onChange(e);
		autoSendAfterChanged && handleSend(e.target.value);

		if (value !== undefined) return;
		handleIsEmpty();
	};

	const handleSend = (inputValue?: string) => {
		if (!onSend) return;
		const currentValue = inputValue ?? value ?? inputRef.current?.value;
		onSend(currentValue);
	};

	const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key !== 'Enter') return;
		handleSend();
	};

	useEffect(() => {
		handleIsEmpty();
	}, [value]);

	return (
		<div
			className={`relative w-full ${hideInput ? 'hidden' : ''} ${
				className ?? ''
			}`}>
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
				className={`${baseClass}`}
				aria-labelledby={name}
				onBlur={onBlur}
				onFocus={onFocus}
				onChange={handleChange}
				onKeyUp={handleKeyUp}
				{...restProps}
				// name={name}
				// type={type}
				// defaultValue={defaultValue}
				// value={value}
				// placeholder={placeholder}
				// disabled={disabled}
				// autoComplete={autoComplete}
				// accept={accept}
				// readOnly={readonly}
				// required={required}
				// checked={checked}
			/>
		</div>
	);
};

export default InputBase;

import { ShapeType, SizeType } from '@/types/style';
import {
	ChangeEvent,
	DetailedHTMLProps,
	InputHTMLAttributes,
	KeyboardEvent,
	MutableRefObject,
	useRef,
} from 'react';

type originInputProps = DetailedHTMLProps<
	InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>;
export interface InputBaseProps<T = HTMLInputElement | undefined>
	extends Omit<originInputProps, 'ref' | 'size'> {
	name: string;
	innerRef?: MutableRefObject<T | { [name: string]: T }>;
	type?: Exclude<originInputProps['type'], 'submit' | 'reset'>;
	valueSize?: number;
	value?: string;
	defaultValue?: string;

	shape?: ShapeType;
	size?: SizeType;
	autoSendAfterChanged?: boolean;

	onSend?: (currentValue: string | undefined) => void;
}

/**
 * InputBase - 原型 input 元件，後續 Input component 請以此進行調整
 * @param innerRef - 請提供 useRef() / useRef({})，後續 element 會放置於 useRef.current / useRef.current[name]
 * @param className - className
 * @param valueSize - replace of original attribute size of input
 * @param shape - input 外框形狀
 * @param size - input 尺寸
 * @param autoSendAfterChanged - 是否在每次 onChange 後自動執行 onSend
 * @param onSend - 若 Input 欄位不存在在 Form 內，需要 Enter 執行送出時使用
 * @returns
 */
const InputBase: React.FC<InputBaseProps> = ({
	innerRef,
	className,
	valueSize,

	shape = 'circle',
	size = 'normal',
	autoSendAfterChanged = false,
	onSend,

	...props
}) => {
	const { name, value, type, onChange, onKeyUp } = props;
	const inputRef = useRef<HTMLInputElement>();
	const inputType = type === 'search' ? 'text' : type ?? 'text';

	// const baseClass = classNames({
	// 	[`shape--${shape}`]: true,
	// 	[`shape--circle`]: true,

	// 	[`text-normal--${[size]}`]: true,
	// 	[`btn--${[size]}`]: true,

	// 	[styles[`inputBase`]]: true,
	// 	[styles[`shape--circle`]]: true,
	// 	[styles[`inputBase--${shape}`]]: true,
	// });

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange && onChange(e);
		autoSendAfterChanged && handleSend(e.target.value);
	};

	const handleSend = (inputValue?: string) => {
		if (!onSend) return;
		const currentValue = inputValue ?? value ?? inputRef.current?.value;
		onSend(currentValue);
	};

	const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
		onKeyUp && onKeyUp(e);
		if (e.key !== 'Enter') return;
		handleSend();
	};

	return (
		<input
			{...props}
			ref={(e: HTMLInputElement) => {
				inputRef.current = e;

				if (!innerRef) return;

				if (innerRef.current === undefined) {
					innerRef.current = inputRef.current;
				} else {
					(innerRef.current as { [name: string]: HTMLInputElement })[name] =
						inputRef.current;
				}
			}}
			type={inputType}
			size={valueSize}
			onChange={handleChange}
			onKeyUp={handleKeyUp}
		/>
	);
};

export default InputBase;

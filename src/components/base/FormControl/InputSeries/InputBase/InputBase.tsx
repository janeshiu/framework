import { SizeType } from '@/types/style';
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

/** InputBase - 原型 input 元件，後續 Input component 請以此進行調整 */
export interface InputBaseProps<T = HTMLInputElement | undefined>
	extends Omit<originInputProps, 'ref' | 'size'> {
	name: string;

	/** 請提供 useRef() / useRef({})，後續 element 會放置於 useRef.current / useRef.current[name] */
	innerRef?: MutableRefObject<T | { [name: string]: T }>;

	/** 架構基礎 component 邏輯使用的 ref，一般情況下請勿使用 */
	codeRef?: MutableRefObject<T>;

	/** input type - 排除 submit, reset */
	type?: Exclude<originInputProps['type'], 'submit' | 'reset'>;
	value?: string;
	defaultValue?: string;

	/** size of text */
	size?: SizeType;

	/** 是否在每次 onChange 後自動執行 onSend */
	autoSendAfterChanged?: boolean;

	/** 若 Input 欄位不存在在 Form 內，需要 Enter 執行送出時使用 */
	onSend?: (currentValue: string | undefined) => void;
}

/**
 * InputBase - 原型 input 元件，後續新增 Input component 請以此進行擴充
 *
 * 使用方式與一般 React input 相同，只是有些部分有調整邏輯
 *
 * @param innerRef - 請提供 useRef() / useRef({})，後續 element 會放置於 useRef.current / useRef.current[name]
 * @param autoSendAfterChanged - 是否在每次 onChange 後自動執行 onSend
 * @param onSend - 若 Input 欄位不存在在 Form 內，需要 Enter 執行送出時使用
 * @returns
 */
const InputBase: React.FC<InputBaseProps> = ({
	innerRef,
	codeRef,

	size = 'normal',
	autoSendAfterChanged = false,
	onSend,

	...props
}) => {
	const { name, value, className, onChange, onKeyUp } = props;
	const inputRef = useRef<HTMLInputElement>();

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
			className={`text-normal--${size} ${className ?? ''}`}
			ref={(e: HTMLInputElement) => {
				inputRef.current = e;

				if (codeRef) {
					codeRef.current = e;
				}

				if (!innerRef) return;

				if (innerRef.current === undefined) {
					innerRef.current = inputRef.current;
				} else {
					(innerRef.current as { [name: string]: HTMLInputElement })[name] =
						inputRef.current;
				}
			}}
			onChange={handleChange}
			onKeyUp={handleKeyUp}
		/>
	);
};

export default InputBase;

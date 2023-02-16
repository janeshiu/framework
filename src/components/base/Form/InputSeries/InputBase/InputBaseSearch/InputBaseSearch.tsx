import { SizeType } from '@/types/style';
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react';
import ButtonClear from '../../../../ButtonSeries/ButtonClear/ButtonClear';
import InputBase, { InputBaseProps } from '../InputBase';

export interface InputBaseSearchProps extends Omit<InputBaseProps, 'type'> {
	/** size of ButtonClear */
	size?: SizeType;
	/** 點擊清除按鈕時所執行的 callback，若使用 value 時，請設置清除 state 用的函式 */
	onClear?: (event: MouseEvent<HTMLButtonElement>) => void;
}

/**
 * InputBaseSearch - input[type='search'] 使用，後續 Input component 請以此進行調整
 * @param size - size of ButtonClear
 * @param onClear - 點擊清除按鈕時所執行的 callback，若使用 value 時，請設置清除 state 用的函式
 * @returns
 */
const InputBaseSearch: React.FC<InputBaseSearchProps> = ({
	innerRef,
	size,
	onClear,
	...props
}) => {
	const { name, value, onChange } = props;
	const [isEmpty, setIsEmpty] = useState(false);
	const inputRef = useRef<HTMLInputElement>();

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

		if (value !== undefined) return;
		handleIsEmpty();
	};

	useEffect(() => {
		handleIsEmpty();
	}, [value]);

	useEffect(() => {
		if (innerRef && inputRef.current) {
			if (innerRef.current === undefined) {
				innerRef.current = inputRef.current;
			} else {
				(innerRef.current as { [name: string]: HTMLInputElement })[name] =
					inputRef.current;
			}
		}
	}, [inputRef]);

	return (
		<div className='w-full h-full flex flex-nowrap items-center'>
			<InputBase
				{...props}
				type='text'
				role='search'
				innerRef={inputRef}
				onChange={handleChange}
				size={size}
			/>
			{!isEmpty && <ButtonClear size={size} onClick={handleClear} />}
		</div>
	);
};

export default InputBaseSearch;

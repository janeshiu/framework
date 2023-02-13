import classNames from 'classnames';
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react';
import ButtonClear from '../../../Button/ButtonClear';
import styles from '../Input.module.scss';
import InputBase, { InputBaseProps } from './InputBase';

export interface InputBaseSearchProps extends Omit<InputBaseProps, 'type'> {
	onClear?: (event: MouseEvent<HTMLButtonElement>) => void;
}

/**
 * InputBase - 原型 input 元件，後續 Input component 請以此進行調整
 * @param innerRef - 請使用 useRef({})，後續 element 會放置進 useRef.current[name] 裏面
 * @param onClear - 點擊清除按鈕時所執行的 callback，若使用 value 時，請設置清除內容的 state
 * @returns
 */
const InputBaseSearch: React.FC<InputBaseSearchProps> = ({
	innerRef,
	onClear,
	...props
}) => {
	const { value, size, onChange } = props;
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

	return (
		<div className='w-full h-full flex flex-nowrap'>
			<InputBase {...props} innerRef={inputRef} onChange={handleChange} />
			{!isEmpty && <ButtonClear size={size} onClick={handleClear} />}
		</div>
	);
};

export default InputBaseSearch;

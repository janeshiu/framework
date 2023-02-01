import InputBase from '../Input/InputBase';
import styles from './Radio.module.scss';
import Label from '../Label/Label';
import { ChangeEvent, useEffect, useState } from 'react';
import Radio from './Radio';
import classNames from 'classnames';

interface RadioItem {
	content: string;
	value: string;
	disabled?: boolean;
}

interface RadioListProps {
	name: string;
	radioList: RadioItem[];
	initialValue?: string;
	className?: string;
	lockNotActiveItem?: boolean;
	afterValueChanged?: (value: RadioItem['value']) => void;
}

const RadioList: React.FC<RadioListProps> = ({
	name,
	radioList,
	initialValue = '',
	className,
	lockNotActiveItem = false,
	afterValueChanged,
}) => {
	const [activeValue, setActiveValue] =
		useState<RadioItem['value']>(initialValue);
	const toggleClass = classNames({
		[styles.lockAll]: lockNotActiveItem,
	});

	if (radioList.length === 0)
		throw '<RadioList> : length of radioList should be more than 1.';

	if (lockNotActiveItem) {
		const activeItem = radioList.some(
			(radioItem) => radioItem.value === initialValue
		);
		if (!activeItem)
			throw `<RadioList> : Please provide initialValue in one of radioList's value`;
	}

	function renderRadioList() {
		return radioList.map((radioItem) => {
			const { value, content, disabled } = radioItem;
			const isCheck = activeValue === value;
			const isDisabled = disabled || lockNotActiveItem;

			return (
				<Radio
					key={value}
					name={name}
					content={content}
					value={value}
					className={toggleClass}
					checked={isCheck}
					disabled={isDisabled}
					onChange={handleChanged}
				/>
			);
		});
	}

	function handleChanged(e: ChangeEvent<HTMLInputElement>) {
		e.preventDefault();
		const currentValue = e.target.value;
		console.log('change', currentValue);
		setActiveValue(currentValue);
	}

	useEffect(() => {
		afterValueChanged && afterValueChanged(activeValue);
	}, [activeValue]);

	return (
		<div className={`space-x-1 ${toggleClass} ${className ?? ''}`}>
			{renderRadioList()}
		</div>
	);
};

export default RadioList;

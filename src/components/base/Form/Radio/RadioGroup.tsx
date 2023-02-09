import { ChangeEvent, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const RadioButton = dynamic(() => import('./RadioButton'));
const Radio = dynamic(() => import('./Radio'));

export interface RadioItem {
	content: string;
	value: string;
	disabled?: boolean;
}

interface RadioGroupProps {
	name: string;
	radioItemList: RadioItem[];
	currentValue?: string;
	className?: string;
	disabledNonChecked?: boolean;
	pattern?: '' | 'button';
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	afterChanged?: (value: RadioItem['value']) => void;
}

/**
 * RadioGroup
 * @param name - input name for all radio
 * @param radioItemList - list of radioItem data
 * @param currentValue - value for checked radio, 使用時可不使用 useState 控制
 * @param className - className
 * @param disabledNonChecked - disabled all non-checked radio
 * @param pattern - radio style
 * @param onChange - onChange
 * @param afterChanged - callback after radio checked(useEffect)
 * @returns
 */
const RadioGroup: React.FC<RadioGroupProps> = ({
	name,
	radioItemList,
	currentValue = '',
	className,
	disabledNonChecked = false,
	pattern = 'button',
	onChange,
	afterChanged,
}) => {
	const [activeValue, setActiveValue] =
		useState<RadioItem['value']>(currentValue);

	if (radioItemList.length === 0) return <></>;

	const handleChanged = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const currentValue = e.target.value;
		setActiveValue(currentValue);
		onChange && onChange(e);
	};

	const renderRadioItem = (
		radioItem: RadioItem,
		option: {
			checked: boolean;
			disabled: boolean;
		}
	) => {
		const props = {
			...radioItem,
			...option,
			key: radioItem.value,
			name,
			onChange: handleChanged,
		};

		switch (pattern) {
			case 'button':
				return <RadioButton {...props} />;
			default:
				return <Radio {...props} />;
		}
	};

	const renderRadioItemList = (() => {
		return radioItemList.map((radioItem) => {
			const { value, disabled } = radioItem;
			const isCheck = activeValue === value;
			const isDisabled = disabled || disabledNonChecked;
			return renderRadioItem(radioItem, {
				checked: isCheck,
				disabled: isDisabled,
			});
		});
	})();

	useEffect(() => {
		afterChanged && afterChanged(activeValue);
	}, [activeValue]);

	useEffect(() => {
		setActiveValue(currentValue);
	}, [currentValue]);

	return (
		<div
			className={`${pattern === '' ? '' : 'space-x-1.5'} ${className ?? ''}`}>
			{renderRadioItemList}
		</div>
	);
};

export default RadioGroup;

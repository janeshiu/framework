import { ChangeEvent, useEffect, useState } from 'react';
import { RadioProps } from '../Radio/Radio';
import styles from '../Radio.module.scss';
import dynamic from 'next/dynamic';
import classNames from 'classnames';

const RadioButton = dynamic(() => import('../RadioButton/RadioButton'));
const Radio = dynamic(() => import('../Radio/Radio'));

export interface RadioItem extends Pick<RadioProps, 'content' | 'disabled'> {
	value: RadioProps['defaultValue'];
}

interface RadioGroupProps {
	/** input name for all radio */
	name: string;
	/** list of radioItem data */
	radioItemList: RadioItem[];
	/** controlled value for checked radio */
	value?: string;
	/** uncontrolled value for checked radio*/
	defaultValue?: string;
	className?: string;
	/**disabled all non-checked radio items */
	disabledNonChecked?: boolean;
	/** radio style */
	pattern?: '' | 'button';
	/** fill radio or not, only workable when patten is original */
	fill?: boolean;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	/** callback after radio checked(useEffect) */
	afterChanged?: (value: RadioProps['defaultValue']) => void;
}

/**
 * RadioGroup
 * @param name - input name for all radio
 * @param radioItemList - list of radioItem data
 * @param value - controlled value for checked radio
 * @param defaultValue - uncontrolled value for checked radio
 * @param className - className
 * @param disabledNonChecked - disabled all non-checked radio items
 * @param pattern - radio style
 * @param fill - fill radio or not, only workable when patten is original
 * @param onChange - onChange
 * @param afterChanged - callback after radio checked(useEffect)
 * @returns
 */
const RadioGroup: React.FC<RadioGroupProps> = ({
	name,
	radioItemList,
	value,
	defaultValue,
	className,
	disabledNonChecked = false,
	pattern = 'button',
	fill,
	onChange,
	afterChanged,
}) => {
	const [activeValue, setActiveValue] = useState<RadioItem['value']>(
		value ?? defaultValue ?? ''
	);

	const baseClass = classNames({
		[styles[`radioGroup--button`]]: pattern === 'button',
	});

	const handleChanged = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();

		if (value === undefined) {
			const updatedValue = e.target.value;
			setActiveValue(updatedValue);
		}

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
			defaultValue: radioItem.value,
			onChange: handleChanged,
		};

		switch (pattern) {
			case 'button':
				return <RadioButton {...props} />;
			default:
				return <Radio {...props} fill={fill} />;
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
		if (value !== undefined) {
			setActiveValue(value);
		}
	}, [value]);

	if (radioItemList.length === 0) return <></>;

	return (
		<div className={`${baseClass} ${className ?? ''}`}>
			{renderRadioItemList}
		</div>
	);
};

export default RadioGroup;

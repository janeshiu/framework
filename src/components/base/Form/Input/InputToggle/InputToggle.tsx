import InputBase from '../InputBase';
import styles from './InputToggle.module.scss';
import Label from '../../Label/Label';
import React, { ChangeEvent, useEffect, useState } from 'react';
import classNames from 'classnames';
import { ColorType, FillingType, ShapeType, SizeType } from '@/types/style';
import { upperCaseFirstLetter } from '@/utils/base';
import { IconSize } from '@/enums/style';
import { inputIcon, toIconSizeKey, transformElement } from '@/utils/element';
import { InputIconNameType } from '@/types/element';

export interface InputToggleProps {
	type: 'radio' | 'checkbox';
	name: string;
	content: string;
	checked?: boolean;
	disabled?: boolean;
	value: string;

	className?: string;
	checkedClassName?: string;
	disablededClassName?: string;

	size?: SizeType;
	shape?: Exclude<ShapeType, 'round'>;
	fill?: boolean;
	color?: ColorType;
	hideIcon?: boolean;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	afterChanged?: (isCheck: boolean) => void;
}

/**
 * Input Radio & Checkbox 基礎元件，後續使用時請先以此為基礎新增元件後再使用
 * @param type - radio or checkbox
 * @param name - input name
 * @param content - label content
 * @param checked - is initial input checked?
 * @param disabled - is disabled?
 * @param value - input value
 *
 * @param className - className for component
 * @param checkedClassName - className for checked component
 * @param disablededClassName - className for disabled component
 *
 * @param size - component size
 * @param shape - input icon shape
 * @param fill - input icon style of checked
 * @param color - input icon color
 * @param hideIcon - hideIcon
 * @param onChange - callback of onChange event
 * @param afterChange - callback after isChecked state is changed(useEffect)
 * @returns
 */
const InputToggle: React.FC<InputToggleProps> = ({
	type,
	name,
	content,
	checked = false,
	disabled = false,
	shape = 'square',
	fill = false,
	size = 'normal',
	color = 'primary',
	className,
	checkedClassName,
	disablededClassName,
	value,
	hideIcon = false,
	onChange,
	afterChanged,
}) => {
	const [isChecked, setIsChecked] = useState(checked);
	const checkStatus = isChecked ? 'Check' : '';
	const fillStatus = (disabled ? true : isChecked && fill) ? 'fill' : '';
	const iconName = [
		'Bs',
		upperCaseFirstLetter(checkStatus),
		upperCaseFirstLetter(type === 'radio' ? type : shape),
		upperCaseFirstLetter(fillStatus),
	].join('') as InputIconNameType;

	const baseClass = classNames({
		[styles[`checkbox`]]: true,
		[`color--${color}`]: true,
		[checkedClassName ?? '']: isChecked,
		[disablededClassName ?? '']: disabled,
	});

	const iconClass = classNames({
		[styles[`icon`]]: true,
		[styles[`icon--check`]]: isChecked,
		[styles[`icon--disabled`]]: disabled,
	});

	const clonedIcon = transformElement(inputIcon[iconName], {
		size: IconSize[toIconSizeKey(size)] + 2,
	});

	function renderContent() {
		return (
			<>
				{!hideIcon && <span className={iconClass}>{clonedIcon}</span>}
				<span>{content}</span>
			</>
		);
	}

	useEffect(() => {
		afterChanged && afterChanged(isChecked);
	}, [isChecked]);

	useEffect(() => {
		setIsChecked(checked);
	}, [checked]);

	return (
		<Label
			content={renderContent()}
			className={`${baseClass} ${className ?? ''}`}
			labelTitleClassName={styles.inputToggleTitle}
			row
			size={size}>
			<InputBase
				type={type}
				name={name}
				checked={isChecked}
				disabled={disabled}
				defaultValue={value}
				onChange={(event: ChangeEvent<HTMLInputElement>) => {
					setIsChecked((prev) => !prev);
					onChange && onChange(event);
				}}
			/>
		</Label>
	);
};

export default InputToggle;

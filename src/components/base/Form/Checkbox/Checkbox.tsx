import InputBase from '../Input/InputBase';
import styles from './Checkbox.module.scss';
import Label from '../Label/Label';
import React, { ChangeEvent, useEffect, useState } from 'react';
import classNames from 'classnames';
import { FillingType, ShapeType, SizeType } from '@/types/style';
import { upperCaseFirstLetter } from '@/utils/base';
import { IconSize } from '@/enums/style';
import { inputIcon, transformElement } from '@/utils/element';
import { InputIconNameType } from '@/types/element';

interface CheckboxProps {
	name: string;
	content: string;
	checked?: boolean;
	disabled?: boolean;
	className?: string;
	shape?: Omit<ShapeType, 'round'>;
	size?: SizeType;
	fill?: FillingType;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	afterChanged?: (isCheck: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
	name,
	content,
	checked = false,
	disabled = false,
	shape = 'square',
	fill = 'fill',
	size = 'normal',
	className,

	onChange,
	afterChanged,
}) => {
	const [isChecked, setIsChecked] = useState(checked);
	const checkStatus = isChecked ? 'Check' : '';
	const iconName = [
		'Bs',
		upperCaseFirstLetter(checkStatus),
		upperCaseFirstLetter(shape as string),
		upperCaseFirstLetter(disabled ? 'fill' : !isChecked ? '' : fill),
	].join('') as InputIconNameType;

	const iconClass = classNames({
		[styles[`icon`]]: true,
		[styles[`icon--check`]]: isChecked,
		[styles[`icon--active`]]: isChecked,
		[styles[`icon--stroke`]]: !isChecked,
		[styles[`icon--disabled`]]: disabled,
	});

	const clonedIcon = transformElement(inputIcon[iconName], {
		size: IconSize[size.toUpperCase() as keyof typeof IconSize] + 2,
	});

	function renderContent() {
		return (
			<>
				<span className={iconClass}>{clonedIcon}</span>
				<span>{content}</span>
			</>
		);
	}

	useEffect(() => {
		afterChanged && afterChanged(isChecked);
	}, [isChecked]);

	return (
		<Label
			content={renderContent()}
			className={`${styles.checkbox} ${className ?? ''}`}
			labelStyle='row'
			size={size}>
			<InputBase
				type='checkbox'
				name={name}
				checked={isChecked}
				disabled={disabled}
				onChange={(event: ChangeEvent<HTMLInputElement>) => {
					setIsChecked((prev) => !prev);
					onChange && onChange(event);
				}}
			/>
		</Label>
	);
};

export default Checkbox;

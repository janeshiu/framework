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

interface InputToggleProps {
	type: 'radio' | 'checkbox';
	name: string;
	content: string;
	checked?: boolean;
	disabled?: boolean;
	className?: string;
	shape?: Exclude<ShapeType, 'round'>;
	size?: SizeType;
	fill?: FillingType;
	color?: ColorType;
	value?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	afterChanged?: (isCheck: boolean) => void;
}

const InputToggle: React.FC<InputToggleProps> = ({
	type,
	name,
	content,
	checked = false,
	disabled = false,
	shape = 'square',
	fill = 'fill',
	size = 'normal',
	color = 'primary',
	className,
	value,

	onChange,
	afterChanged,
}) => {
	const [isChecked, setIsChecked] = useState(checked);
	const checkStatus = isChecked ? 'Check' : '';
	const iconName = [
		'Bs',
		upperCaseFirstLetter(checkStatus),
		upperCaseFirstLetter(type === 'radio' ? type : shape),
		upperCaseFirstLetter(disabled ? 'fill' : !isChecked ? '' : fill),
	].join('') as InputIconNameType;

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
			className={`${styles.checkbox} ${`color--${color}`} ${className ?? ''}`}
			labelTitleClassName={styles.inputToggleTitle}
			row
			size={size}>
			<InputBase
				type={type}
				name={name}
				checked={isChecked}
				disabled={disabled}
				defaultValue={value || name}
				onChange={(event: ChangeEvent<HTMLInputElement>) => {
					setIsChecked((prev) => !prev);
					onChange && onChange(event);
				}}
			/>
		</Label>
	);
};

export default InputToggle;

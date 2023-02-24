import InputBase, { InputBaseProps } from '../InputBase/InputBase';
import styles from './InputToggle.module.scss';
import Label from '../../Label/Label';
import React, { ChangeEvent, useEffect, useState } from 'react';
import classNames from 'classnames';
import InputToggleIcon, { InputToggleIconProps } from './InputToggleIcon';

export interface InputToggleProps extends InputToggleIconProps {
	name: string;
	innerRef?: InputBaseProps['innerRef'];
	content: string;
	defaultValue?: string;

	/** input checked */
	checked?: boolean;
	/** input defaultChecked */
	defaultChecked?: boolean;

	className?: string;
	/** className for disabled component */
	disablededClassName?: string;

	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;

	/** callback after isChecked state is changed(useEffect) */
	afterChanged?: (isCheck: boolean) => void;
}

/**
 * Input Radio & Checkbox 基礎元件，後續使用時請先以此為基礎新增元件後再使用
 * @param name - input name
 * @param content - label content
 * @param defaultValue - input defaultValue
 *
 * @param checked - input checked
 * @param defaultChecked - input defaultChecked
 * @param className - className
 * @param disablededClassName - className for disabled component
 *
 * @param onChange - onChange
 * @param afterChanged - callback after innerState is changed(useEffect)
 * @returns
 */
const InputToggle: React.FC<InputToggleProps> = ({
	name,
	content,
	innerRef,
	defaultValue,

	checked,
	defaultChecked,

	className,
	disablededClassName,

	onChange,
	afterChanged,

	...iconProps
}) => {
	const { type, disabled, size } = iconProps;
	const initialChecked = checked ?? defaultChecked ?? false;
	const [isChecked, setIsChecked] = useState<boolean>(initialChecked);

	const baseClass = classNames({
		[styles['inputToggle']]: true,
		[disablededClassName ?? '']: disabled,
	});

	const renderContent = () => {
		return (
			<>
				<span>
					<InputToggleIcon
						{...iconProps}
						checked={true}
						className={styles[`icon--isChecked`]}
					/>
					<InputToggleIcon
						{...iconProps}
						checked={false}
						className={styles[`icon--isNotChecked`]}
					/>
				</span>
				<span>{content}</span>
			</>
		);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (checked === undefined) {
			setIsChecked(e.target.checked);
		}

		onChange && onChange(e);
	};

	useEffect(() => {
		afterChanged && afterChanged(isChecked);
	}, [isChecked]);

	useEffect(() => {
		if (defaultChecked !== undefined) {
			setIsChecked(defaultChecked);
		}

		if (checked !== undefined) {
			setIsChecked(checked);
		}
	}, [defaultChecked, checked]);

	return (
		<Label
			content={renderContent()}
			className={`${baseClass} ${className ?? ''}`}
			labelTitleClassName={styles.inputToggleTitle}
			row
			size={size}>
			<InputBase
				name={name}
				innerRef={innerRef}
				type={type}
				size={size}
				disabled={disabled}
				checked={checked}
				defaultChecked={defaultChecked}
				defaultValue={defaultValue ?? name}
				onChange={handleChange}
			/>
		</Label>
	);
};

export default InputToggle;

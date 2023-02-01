import InputBase, { InputBaseProps } from '../Input/InputBase';
import styles from './Radio.module.scss';
import Label from '../Label/Label';
import { ChangeEvent, useEffect, useState } from 'react';
import classNames from 'classnames';

interface RadioProps {
	name: string;
	content: string;
	value: string | number;
	checked?: boolean;
	disabled?: boolean;
	className?: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Radio: React.FC<RadioProps> = ({
	name,
	content,
	value,
	checked = false,
	disabled = false,
	className,
	onChange = () => {},
}) => {
	const toggleClass = classNames({
		[styles.disabled]: disabled,
		[styles.active]: checked,
	});

	return (
		<Label
			content={content}
			className={`${styles.radio} ${toggleClass} ${className ?? ''}`}
			labelStyle='row'>
			<InputBase
				type='radio'
				name={name}
				checked={checked}
				defaultValue={value}
				onChange={onChange}
			/>
		</Label>
	);
};

export default Radio;

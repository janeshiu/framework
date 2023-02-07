import { ColorType, SizeType } from '@/types/style';
import classNames from 'classnames';
import React, { MouseEvent } from 'react';
import { BsX } from 'react-icons/bs';
import Button from './Button';
import styles from './Button.module.scss';

export interface ButtonClearProps {
	className?: string;
	size?: SizeType;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ButtonClear: React.FC<ButtonClearProps> = ({
	className,
	size = 'normal',
	onClick,
}) => {
	const baseClass = classNames({
		[styles[`buttonClear`]]: true,
		[styles[`buttonClear--${size}`]]: true,
	});

	return (
		<Button
			className={`${baseClass} ${className ?? ''}`}
			icon={<BsX />}
			shape='circle'
			pattern='ghost'
			size={size}
			onClick={onClick}
		/>
	);
};

export default ButtonClear;

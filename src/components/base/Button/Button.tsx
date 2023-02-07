import { IconSize } from '@/enums/style';
import { ColorType, PatternBaseType, SizeType } from '@/types/style';
import { toIconSizeKey, transformElement } from '@/utils/element';
import classNames from 'classnames';
import React, { MouseEvent } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
	type?: 'button' | 'submit' | 'reset';
	className?: string;
	content?: string | number;
	icon?: JSX.Element;
	iconPosition?: 'left' | 'right';
	pattern?: PatternBaseType | 'fog' | 'ghost';
	shape?: 'square' | 'round' | 'circle';
	size?: SizeType | 'full';
	color?: ColorType;

	disabled?: boolean;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
	type = 'button',
	className,
	content,
	icon,
	iconPosition = 'left',
	pattern = 'fill',
	shape = 'round',
	size = 'normal',
	color = pattern === 'ghost' ? 'secondary' : 'primary',
	disabled = false,
	onClick,
}) => {
	if (!icon && !content)
		throw '<Button> : Please provide icon or content either.';

	const generalSize = (size === 'full' ? 'normal' : size) as SizeType;
	const clonedIcon = transformElement(icon, {
		size: IconSize[toIconSizeKey(generalSize)] + (size === 'normal' ? 0 : 2),
	});

	const baseClass = classNames({
		[`btn`]: true,

		[styles[`button`]]: true,

		[`pattern--${pattern}`]: true,
		[`shape--${shape}`]: true,
		[`color--${color}`]: true,
		[`text-small--${generalSize}`]: true,

		[`btn--${size}`]: true,
		[styles[`button--${size}`]]: true,
		[styles[`iconPosition--${iconPosition}`]]: true,
	});
	const toggleClass = classNames({
		[styles['iconOnly']]: clonedIcon && !content,
		[`pattern--clickable`]: !disabled,
		[`pattern--disabled`]: disabled,
	});

	function renderContent() {
		return (
			<>
				{clonedIcon ?? ''}
				{content && <span>{content}</span>}
			</>
		);
	}

	return (
		<button
			type={type}
			className={`${baseClass} ${toggleClass} ${className ?? ''}`}
			onClick={onClick}
			disabled={disabled}>
			{renderContent()}
		</button>
	);
};

export default Button;

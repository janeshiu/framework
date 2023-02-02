import { IconSize } from '@/enums/style';
import { SizeType } from '@/types/style';
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
	pattern?: 'primary' | 'secondary' | 'outline' | 'ghost';
	shape?: 'square' | 'round' | 'circle';
	size?: Record<SizeType, 'full'>;

	disabled?: boolean;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
	type = 'button',
	className,
	content,
	icon,
	iconPosition = 'left',
	pattern = 'primary',
	shape = 'round',
	size = 'normal',
	disabled = false,
	onClick,
}) => {
	if (!icon && !content)
		throw '<Button> : Please provide icon or content either.';

	const iconSize = (size === 'full' ? 'normal' : size) as SizeType;
	const clonedIcon = transformElement(icon, {
		size: IconSize[toIconSizeKey(iconSize)] + (size === 'normal' ? 0 : 2),
	});

	const baseClass = classNames({
		[styles[`button`]]: true,
		[styles[`button--${pattern}`]]: true,
		[styles[`button--${shape}`]]: true,
		[styles[`button--${size}`]]: true,
		[styles[`button--${iconPosition}`]]: true,
	});
	const toggleClass = classNames({
		'flex-row-reverse': iconPosition === 'right',
		[styles['button--iconOnly']]: clonedIcon && !content,
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

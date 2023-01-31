import classNames from 'classnames';
import React, { MouseEvent } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
	type?: 'button' | 'submit' | 'reset';
	className?: string;
	content?: string | number;
	icon?: JSX.Element;
	iconPosition?: 'left' | 'right';
	pattern?: 'primary' | 'secondary' | 'outline' | 'ghost';
	shape?: 'square' | 'round' | 'circle';
	size?: 'small' | 'normal' | 'large' | 'full';
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

	const iconReactObject = icon && React.Children.only(icon);
	const clonedIcon =
		iconReactObject &&
		React.cloneElement(iconReactObject, {
			size: size === 'large' ? 20 : size === 'small' ? 14 : 16,
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

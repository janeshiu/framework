import classNames from 'classnames';
import React, { ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
	type?: 'button' | 'submit' | 'reset';
	className?: string;
	content?: string;
	icon?: JSX.Element;
	iconPosition?: 'left' | 'right';
	pattern?: 'primary' | 'secondary' | 'outline' | 'ghost';
	shape?: 'square' | 'round' | 'circle';
	size?: 'small' | 'normal' | 'large' | 'full';
	onClick?: () => void;
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
	onClick,
}) => {
	if (!icon && !content)
		throw '<Button> : Please provide icon or content either.';

	const iconReactObject = icon && React.Children.only(icon);
	const clonedIcon =
		iconReactObject &&
		React.cloneElement(iconReactObject, {
			size: size === 'large' ? 24 : size === 'small' ? 16 : 20,
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
			className={` ${styles.button} ${styles[`button--${pattern}`]} ${
				styles[`button--${shape}`]
			}  ${styles[`button--${size}`]} ${
				styles[`button--${iconPosition}`]
			} ${toggleClass} ${className ?? ''}`}
			onClick={onClick}>
			{renderContent()}
		</button>
	);
};

export default Button;

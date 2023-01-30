import { BadgeColor } from '@/enums/style';
import classNames from 'classnames';
import React from 'react';
import styles from './Badge.module.scss';

interface BadgeProps {
	className?: string;
	content: string;
	icon?: JSX.Element;
	iconPosition?: 'left' | 'right';
	pattern?: 'primary' | 'outline';
	shape?: 'square' | 'round' | 'circle';
	size?: 'small' | 'normal' | 'large';
	color?: BadgeColor;
}

const Badge: React.FC<BadgeProps> = ({
	className,
	content,
	icon,
	iconPosition = 'left',
	pattern = 'outline',
	shape = 'circle',
	size = 'normal',
	color = 'primary',
}) => {
	const iconReactObject = icon && React.Children.only(icon);
	const clonedIcon =
		iconReactObject &&
		React.cloneElement(iconReactObject, {
			size: size === 'large' ? 16 : size === 'small' ? 12 : 14,
		});

	const baseClass = classNames({
		[styles[`badge`]]: true,
		[styles[`badge--${pattern}`]]: true,
		[styles[`badge--${shape}`]]: true,
		[styles[`badge--${size}`]]: true,
		[styles[`badge--${color}`]]: true,
		[styles[`badge--${iconPosition}`]]: true,
	});
	const toggleClass = classNames({
		'flex-row-reverse': iconPosition === 'right',
	});

	return (
		<div className={`${baseClass} ${toggleClass} ${className ?? ''}`}>
			{clonedIcon ?? ''}
			{content && <span>{content}</span>}
		</div>
	);
};

export default Badge;

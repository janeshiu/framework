import { IconSize } from '@/enums/style';
import { BadgeColor } from '@/types/style';
import { transformElement } from '@/utils/element';
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
	const clonedIcon = transformElement(icon, {
		size: IconSize[size.toUpperCase() as keyof typeof IconSize],
	});

	const baseClass = classNames({
		[styles[`badge`]]: true,
		[styles[pattern]]: true,
		[styles[shape]]: true,
		[styles[size]]: true,
		[styles[`badge--${color}`]]: true,
		[styles[iconPosition]]: true,
	});
	return (
		<div className={`${baseClass} ${className ?? ''}`}>
			{clonedIcon}
			{content && <span>{content}</span>}
		</div>
	);
};

export default Badge;

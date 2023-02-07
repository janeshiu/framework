import { IconSize } from '@/enums/style';
import { ColorType, PatternBaseType } from '@/types/style';
import { toIconSizeKey, transformElement } from '@/utils/element';
import classNames from 'classnames';
import React from 'react';
import styles from './Badge.module.scss';

interface BadgeProps {
	className?: string;
	content: string;
	icon?: JSX.Element;
	iconPosition?: 'left' | 'right';
	pattern?: PatternBaseType;
	shape?: 'square' | 'round' | 'circle';
	size?: 'small' | 'normal' | 'large';
	color?: Exclude<ColorType, 'helper'>;
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
		size: IconSize[toIconSizeKey(size)],
	});

	const baseClass = classNames({
		[`color--${color}`]: true,
		[`pattern--${pattern}`]: true,
		[`shape--${shape}`]: true,
		[`text-small--${size}`]: true,

		[styles.badge]: true,
		[styles[size]]: true,
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

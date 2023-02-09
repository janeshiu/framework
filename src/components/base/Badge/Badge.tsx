import { IconSize } from '@/enums/style';
import {
	ColorType,
	HorizontalType,
	PatternBaseType,
	ShapeType,
	SizeType,
} from '@/types/style';
import { toIconSizeKey, transformElement } from '@/utils/element';
import classNames from 'classnames';
import React from 'react';
import styles from './Badge.module.scss';

interface BadgeProps {
	className?: string;
	content: string;
	icon?: JSX.Element;
	iconPosition?: Extract<HorizontalType, 'left' | 'right'>;
	pattern?: PatternBaseType;
	shape?: ShapeType;
	size?: SizeType;
	color?: ColorType;
}

/**
 * 藥丸標籤
 * @param className - className
 * @param content - 要顯示的內容
 * @param icon - react-icons element
 * @param iconPosition - icon 位置
 * @param pattern - 顯示型態(fill / outline)
 * @param shape - 形狀(square / round / circle)
 * @param size - 尺寸
 * @param color - 顏色
 * @returns
 */
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

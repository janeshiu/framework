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
import React, { MouseEvent } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
	type?: 'button' | 'submit' | 'reset';
	className?: string;
	content?: string | number;
	icon?: JSX.Element;
	iconPosition?: Extract<HorizontalType, 'left' | 'right'>;
	pattern?: PatternBaseType | 'fog' | 'ghost';
	shape?: ShapeType;
	size?: SizeType | 'full';
	color?: ColorType;

	disabled?: boolean;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

/**
 * 按鈕 - icon & content 請至少擇一填寫
 * @param type - button type
 * @param className -
 * @param content - 顯示文字
 * @param icon - react-icons element
 * @param iconPosition - icon 呈現位置
 * @param pattern - 樣式(fill / outline / fog / ghost)
 * @param shape - 形狀(square / round / circle)
 * @param size - 尺寸
 * @param color - 顏色
 * @param disabled - disabled
 * @param onClick - onClick
 * @returns
 */
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

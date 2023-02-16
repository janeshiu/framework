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
import styles from './Button.module.scss';

type originButtonProps = React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;

export interface ButtonProps extends Omit<originButtonProps, 'children'> {
	/** button text */
	content?: string | number;
	/** button icon - react-icons element */
	icon?: JSX.Element;
	/** icon Position in button */
	iconPosition?: Extract<HorizontalType, 'left' | 'right'>;
	/** button pattern(fill / outline / fog / ghost) */
	pattern?: PatternBaseType | 'fog' | 'ghost';
	/** button shape(square / round / circle) */
	shape?: ShapeType;
	/** button size */
	size?: SizeType | 'full';
	/** button color */
	color?: ColorType;
	/** close hover css effect or not */
	closeHoverEffect?: boolean;
	/** close disabled css effect or not */
	closeDisabledEffect?: boolean;
}

/**
 * 與 React.button 基本上使用方式相同，只是擴張一些樣式設定
 * 按鈕 - icon & content 請至少擇一填寫
 * @param content - button text
 * @param icon - button icon - react-icons element
 * @param iconPosition - icon Position in button
 * @param pattern - button pattern(fill / outline / fog / ghost)
 * @param shape - button shape(square / round / circle)
 * @param size - button size
 * @param color - button color
 * @param closeHoverEffect - close hover css effect or not
 * @param closeDisabledEffect - close disabled css effect or not
 * @returns
 */
const Button: React.FC<ButtonProps> = ({
	className,
	content,
	icon,
	iconPosition = 'left',
	pattern = 'fill',
	shape = 'round',
	size = 'normal',
	color = pattern === 'ghost' ? 'secondary' : 'primary',
	closeHoverEffect = pattern === 'ghost',
	closeDisabledEffect = false,

	...props
}) => {
	const { disabled = false } = props;
	if (!icon && !content)
		throw '<Button> : Please provide icon or content either.';
	const iconOnly = icon && !content;
	const generalSize = (size === 'full' ? 'normal' : size) as SizeType;
	const clonedIcon = transformElement(icon, {
		size: IconSize[toIconSizeKey(generalSize)] + 4,
	});

	const baseClass = classNames({
		[`btn`]: true,
		[`btn--${size}`]: true,

		[`pattern--${pattern}`]: true,
		[`shape--${shape}`]: true,
		[`color--${color}`]: true,
		[`text-small--${generalSize}`]: true,
		[styles[`iconPosition--${iconPosition}`]]: iconPosition === 'right',
	});
	const toggleClass = classNames({
		[`iconOnly`]: iconOnly,
		[`pattern--hoverEffect`]: !closeHoverEffect && !disabled,
		[`cursor-default`]: disabled,
		[`pattern--disabled`]: !closeDisabledEffect && disabled,
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
			{...props}
			className={`${baseClass} ${toggleClass} ${className ?? ''}`}>
			{renderContent()}
		</button>
	);
};

export default Button;

import styles from '../Input.module.scss';
import { ShapeType, SizeType } from '@/types/style';
import classNames from 'classnames';
import { Children, ReactNode } from 'react';
import { transformElement } from '@/utils/element';

export interface InputOutlineProps {
	className?: string;
	size?: SizeType;
	shape?: ShapeType;
	children: ReactNode;
}

/**
 * Input 外框輪廓樣式，請配合 InputBase 系列使用
 * @param size - input size
 * @param shape - input shape
 * @param className - className
 * @param children - please provide input component

 * @returns
 */
const InputOutline: React.FC<InputOutlineProps> = ({
	className,
	size = 'normal',
	shape = 'round',
	children,
}) => {
	const baseClass = classNames({
		[styles[`inputOutline`]]: true,
		[styles[`inputOutline--circle`]]: shape === 'circle',
		[`btn--${size}`]: true,
		[`shape--${shape}`]: true,
		[`text-normal--${size}`]: true,
	});

	return <div className={`${baseClass} ${className ?? ''}`}>{children}</div>;
};

export default InputOutline;

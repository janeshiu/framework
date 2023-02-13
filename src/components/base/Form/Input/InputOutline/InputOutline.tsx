import styles from '../Input.module.scss';
import { ShapeType, SizeType } from '@/types/style';
import classNames from 'classnames';
import { Children, ReactNode } from 'react';
import { transformElement } from '@/utils/element';

export interface InputOutlineProps {
	className?: string;
	/** size of outline component */
	size?: SizeType;
	/** shape of outline component */
	shape?: ShapeType;
	children: ReactNode;
}

/**
 * Input 外框輪廓樣式，請配合 InputBase 系列使用
 * @param size - size of outline component
 * @param shape - shape of outline component
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
		[`btn--${size}`]: true,
		[`shape--${shape}`]: true,
	});

	return <div className={`${baseClass} ${className ?? ''}`}>{children}</div>;
};

export default InputOutline;

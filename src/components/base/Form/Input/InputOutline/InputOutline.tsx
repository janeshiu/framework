import styles from '../Input.module.scss';
import { ShapeType, SizeType } from '@/types/style';
import classNames from 'classnames';
import { Children, ReactNode } from 'react';
import { transformElement } from '@/utils/element';

export interface InputOutlineProps {
	className?: string;
	size?: SizeType;
	shape?: ShapeType;
	focus?: boolean;
	disabled?: boolean;
	children: ReactNode;
}

/**
 * Input 外框輪廓
 * @param size - 尺寸
 * @param shape - 形狀
 * @param className - className
 * @param children - input's component

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

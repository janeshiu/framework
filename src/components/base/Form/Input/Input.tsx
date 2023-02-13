import { Children, ReactNode } from 'react';
import InputBase, { InputBaseProps } from './InputBase/InputBase';
import styles from './Input.module.scss';
import { ShapeType, SizeType } from '@/types/style';

import InputOutline from './InputOutline/InputOutline';
import InputBaseSearch, {
	InputBaseSearchProps,
} from './InputBase/InputBaseSearch';

export interface InputProps extends InputBaseProps, InputBaseSearchProps {
	size?: SizeType;
	shape?: ShapeType;
	className?: string;
	children?: ReactNode;
}

/**
 * Input 元件
 * @param size - input size
 * @param shape - input shape
 * @param className - className
 * @param children - children
 * @param onClear - type = search 時使用的 callback function
 * @returns
 */
const Input: React.FC<InputProps> = ({
	size = 'normal',
	shape = 'round',
	className,
	children,
	onClear,
	...props
}) => {
	const { type } = props;

	return (
		<InputOutline size={size} shape={shape} className={className}>
			{type === 'search' ? (
				<InputBaseSearch {...props} onClear={onClear} size={size} />
			) : (
				<InputBase {...props} size={size} />
			)}
			{children}
		</InputOutline>
	);
};

export default Input;

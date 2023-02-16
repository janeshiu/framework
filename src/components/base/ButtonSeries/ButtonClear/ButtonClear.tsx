import { SizeType } from '@/types/style';
import React, { MouseEvent } from 'react';
import { BsX } from 'react-icons/bs';
import Button, { ButtonProps } from '../Button';

export interface ButtonClearProps
	extends Omit<
		ButtonProps,
		| 'content'
		| 'iconPosition'
		| 'pattern'
		| 'shape'
		| 'color'
		| 'closeHoverEffect'
	> {
	size?: Exclude<ButtonProps['size'], 'full'>;
}

/**
 * InputBaseSearch 內清除按鈕，用法與一般 React.buttonn 差不多
 * @param className - className
 * @param size - size of button
 * @returns
 */
const ButtonClear: React.FC<ButtonClearProps> = (props) => {
	return (
		<Button
			{...props}
			icon={<BsX />}
			shape='circle'
			pattern='ghost'
			closeHoverEffect={false}
		/>
	);
};

export default ButtonClear;

import React from 'react';
import Button, { ButtonProps } from '../Button';

export interface ButtonClearProps
	extends Omit<ButtonProps, 'pattern' | 'shape'> {}

/**
 * ButtonConfirm
 * @returns
 */
const ButtonConfirm: React.FC<ButtonClearProps> = (props) => {
	const { color } = props;
	return (
		<Button
			{...props}
			color={color ?? 'secondary'}
			pattern='fill'
			shape='round'
		/>
	);
};

export default ButtonConfirm;

import React from 'react';
import Button, { ButtonProps } from '../Button';

export interface ButtonClearProps
	extends Omit<ButtonProps, 'pattern' | 'shape'> {}

/**
 * ButtonConfirm
 * @returns
 */
const ButtonConfirm: React.FC<ButtonClearProps> = (props) => {
	const { type = 'submit', color = 'secondary' } = props;
	return (
		<Button {...props} type={type} color={color} pattern='fill' shape='round' />
	);
};

export default ButtonConfirm;

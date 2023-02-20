import React from 'react';
import Button, { ButtonProps } from '../Button';

export interface ButtonClearProps
	extends Omit<ButtonProps, 'pattern' | 'shape'> {}

/**
 * ButtonCancel
 * @returns
 */
const ButtonCancel: React.FC<ButtonClearProps> = (props) => {
	const { color } = props;

	return (
		<Button
			{...props}
			color={color ?? 'secondary'}
			pattern='outline'
			shape='round'
		/>
	);
};

export default ButtonCancel;

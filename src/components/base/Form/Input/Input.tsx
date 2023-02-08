import { ReactNode } from 'react';
import Message from '../../Message/Message';
import InputBase, { InputBaseProps } from './InputBase';
import styles from './Input.module.scss';
import { HorizontalType, ShapeType, SizeType } from '@/types/style';

import classNames from 'classnames';
import Button, { ButtonProps } from '../../Button/Button';
import MessageGroup, { MessageGroupProps } from '../../Message/MessageGroup';

interface InputProps {
	size?: SizeType;
	shape?: ShapeType;
	className?: string;

	inputProps: Exclude<InputBaseProps, 'size' | 'shape'>;

	showButton?: boolean;
	buttonPosition?: Exclude<HorizontalType, 'center'>;
	buttonProps?: Exclude<ButtonProps, 'size' | 'shape'>;

	messagesProps?: MessageGroupProps;
}

const Input: React.FC<InputProps> = ({
	inputProps,

	showButton = true,
	buttonPosition = 'right',
	buttonProps,

	size = 'normal',
	shape = 'round',

	className,

	messagesProps,
}) => {
	const hasButton = showButton && buttonProps;
	const BUTTON_PROPS: ButtonProps = {
		...buttonProps,
		shape,
		size,
		pattern: buttonProps?.pattern ?? 'ghost',
		color: buttonProps?.color ?? 'secondary',
	};

	const inputWrapperClass = classNames({
		[styles[`input--wrapper`]]: true,
		[styles[`input--hasButton`]]: hasButton,
		[styles[`pattern--${BUTTON_PROPS.pattern}`]]: true,

		[styles[buttonPosition]]: true,
	});

	return (
		<div className={`${className ?? ''}`}>
			<div
				className={`${inputWrapperClass} ${
					buttonProps
						? styles[`button--${buttonProps.pattern || 'primary'}`]
						: ''
				}`}>
				<InputBase {...inputProps} size={size} shape={shape} />
				{hasButton && <Button {...BUTTON_PROPS} />}
			</div>
			<MessageGroup
				{...messagesProps}
				size={size}
				className={shape === 'circle' ? 'px-4' : 'px-2'}
			/>
		</div>
	);
};

export default Input;

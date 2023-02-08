import { useRef } from 'react';
import InputBase, { InputBaseProps } from './InputBase';
import styles from './Input.module.scss';
import { HorizontalType, ShapeType, SizeType } from '@/types/style';

import classNames from 'classnames';
import Button, { ButtonProps } from '../../Button/Button';
import MessageGroup, { MessageGroupProps } from '../../Message/MessageGroup';

export interface InputProps {
	size?: SizeType;
	shape?: ShapeType;
	className?: string;

	inputProps: Exclude<InputBaseProps, 'size' | 'shape' | 'onSend'>;
	onSend?: InputBaseProps['onSend'];

	showButton?: boolean;
	buttonPosition?: Exclude<HorizontalType, 'center'>;
	buttonProps?: Exclude<ButtonProps, 'size' | 'shape'>;

	messagesProps?: MessageGroupProps;
}

const Input: React.FC<InputProps> = ({
	inputProps,
	onSend,

	showButton = true,
	buttonPosition = 'right',
	buttonProps,

	size = 'normal',
	shape = 'round',

	className,

	messagesProps,
}) => {
	const inputRef = inputProps.innerRef || useRef({});
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
				<InputBase
					{...inputProps}
					innerRef={inputRef}
					size={size}
					shape={shape}
					onSend={onSend}
				/>
				{hasButton && (
					<Button
						{...BUTTON_PROPS}
						onClick={(e) => {
							if (BUTTON_PROPS.onClick) {
								BUTTON_PROPS.onClick(e);
								return;
							}
							const currentValue =
								inputProps.value ?? inputRef.current[inputProps.name].value;
							onSend && onSend(currentValue);
						}}
					/>
				)}
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

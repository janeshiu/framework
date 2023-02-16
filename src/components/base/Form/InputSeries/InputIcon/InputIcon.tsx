import Input, { InputProps } from '../Input';
import styles from '../Input.module.scss';
import classNames from 'classnames';
import Button, { ButtonProps } from '../../../ButtonSeries/Button';
import { MouseEvent, useRef } from 'react';

export interface InputIconProps extends InputProps {
	/** left icon - react-icons */
	leftIcon?: ButtonProps['icon'];
	/** left icon type (same as button type) */
	leftIconType?: ButtonProps['type'];
	/** left icon color */
	leftIconColor?: ButtonProps['color'];
	/** is left icon disabled or not */
	leftIconDisabled?: ButtonProps['disabled'];
	/** left icon on click */
	leftIconOnClick?: ButtonProps['onClick'];

	/** right icon - react-icons */
	rightIcon?: ButtonProps['icon'];
	/** right icon type (same as button type) */
	rightIconType?: ButtonProps['type'];
	/** right icon color */
	rightIconColor?: ButtonProps['color'];
	/** is right icon disabled or not */
	rightIconDisabled?: ButtonProps['disabled'];
	/** right icon on click */
	rightIconOnClick?: ButtonProps['onClick'];
}

/**
 * 顯示 icon 的 Input(最多可設置兩顆)
 * 若有設定 onSend & 未設置 iconOnClick, 將自動執行 onSend
 * @param leftIcon - left icon - react-icons
 * @param leftIconType - left icon type (same as button type)
 * @param leftIconColor - left icon color
 * @param leftIconDisabled - is left icon disabled or not
 * @param leftIconOnCLick - left icon on click
 * @param rightIcon - right icon - react-icons
 * @param rightIconType - right icon type (same as button type)
 * @param rightIconColor - right icon color
 * @param rightIconDisabled - is right icon disabled or not
 * @param rightIconOnCLick - right icon on click
 */
const InputIcon: React.FC<InputIconProps> = ({
	leftIcon,
	leftIconType,
	leftIconColor,
	leftIconDisabled,
	leftIconOnClick,

	rightIcon,
	rightIconType,
	rightIconColor,
	rightIconDisabled,
	rightIconOnClick,

	...props
}) => {
	const { innerRef, name, size, className, onSend } = props;
	const inputRef = innerRef || useRef<HTMLInputElement>();
	const baseClass = classNames({
		[`!space-x-0`]: true,
		[styles[`inputIcon--hasLeftIcon`]]: !!leftIcon,
		[styles[`inputIcon--hasRightIcon`]]: !!rightIcon,
	});

	const handleClick = (
		e: MouseEvent<HTMLButtonElement>,
		iconOnClick:
			| InputIconProps['leftIconOnClick']
			| InputIconProps['rightIconOnClick']
	) => {
		if (iconOnClick) {
			iconOnClick(e);
			return;
		}

		const inputElement: HTMLInputElement =
			(inputRef.current as { [name: string]: HTMLInputElement })[name] ||
			inputRef.current;

		const currentValue = inputElement.value;
		onSend && onSend(currentValue);
	};

	return (
		<Input
			{...props}
			innerRef={inputRef}
			className={`${baseClass} ${className ?? ''}`}>
			{leftIcon && (
				<Button
					className='order-[-1]'
					pattern='ghost'
					closeDisabledEffect
					size={size}
					icon={leftIcon}
					type={leftIconType}
					color={leftIconColor}
					disabled={leftIconDisabled}
					onClick={(e) => handleClick(e, leftIconOnClick)}
				/>
			)}
			{rightIcon && (
				<Button
					pattern='ghost'
					size={size}
					closeDisabledEffect
					icon={rightIcon}
					type={rightIconType}
					color={rightIconColor}
					disabled={rightIconDisabled}
					onClick={(e) => handleClick(e, rightIconOnClick)}
				/>
			)}
		</Input>
	);
};

export default InputIcon;
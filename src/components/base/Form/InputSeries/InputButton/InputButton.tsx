import Input, { InputProps } from '../Input';
import styles from '../Input.module.scss';
import classNames from 'classnames';
import Button, { ButtonProps } from '../../../ButtonSeries/Button';
import { MouseEvent, useRef } from 'react';

export interface InputButtonProps extends InputProps {
	/** button className */
	buttonClassName?: ButtonProps['className'];
	/** button content */
	buttonContent?: ButtonProps['content'];
	/** button icon - react-icons */
	buttonIcon?: ButtonProps['icon'];
	/** button type */
	buttonType?: ButtonProps['type'];
	/** button color */
	buttonColor?: ButtonProps['color'];
	/** button pattern without ghost */
	buttonPattern?: Exclude<ButtonProps['pattern'], 'ghost'>;

	/** is button disabled or not */
	buttonDisabled?: ButtonProps['disabled'];
	/** is button separate from Input component */
	separate?: boolean;
	/** button on click */
	buttonOnClick?: ButtonProps['onClick'];
}

/**
 * 顯示 button 的 Input
 * 若有設定 onSend & 未設置 buttonOnClick, 將自動執行 onSend
 * @param buttonClassName - button className
 * @param buttonContent - button content
 * @param buttonIcon - button icon - react-icons
 * @param buttonType - button type
 * @param buttonColor - button color
 * @param buttonPattern - button pattern without ghost
 * @param buttonDisabled - is button disabled or not
 * @param separate - is button separate from Input component
 * @param buttonOnClick - button on click
 */
const InputButton: React.FC<InputButtonProps> = ({
	className,

	buttonClassName,
	buttonContent,
	buttonIcon,
	buttonType,
	buttonColor,
	buttonPattern,
	buttonDisabled,
	buttonOnClick,

	separate,

	...props
}) => {
	const { innerRef, name, size, shape, onSend } = props;
	const inputRef = innerRef || useRef<HTMLInputElement>();
	const baseClass = classNames({
		[styles[`inputButton`]]: true,
		[styles[`inputButton--connect`]]: !separate,
	});

	const handleClick = (
		e: MouseEvent<HTMLButtonElement>,
		onClickFun: InputButtonProps['buttonOnClick']
	) => {
		if (onClickFun) {
			onClickFun(e);
			return;
		}

		const inputElement: HTMLInputElement =
			(inputRef.current as { [name: string]: HTMLInputElement })[name] ||
			inputRef.current;

		const currentValue = inputElement.value;
		onSend && onSend(currentValue);
	};

	return (
		<div className={`${baseClass} ${className ?? ''}`}>
			<Input {...props} innerRef={inputRef} />
			{(buttonContent || buttonIcon) && (
				<Button
					size={size}
					shape={shape}
					className={buttonClassName}
					type={buttonType}
					content={buttonContent}
					icon={buttonIcon}
					color={buttonColor}
					pattern={buttonPattern}
					disabled={buttonDisabled}
					onClick={(e) => handleClick(e, buttonOnClick)}
				/>
			)}
		</div>
	);
};

export default InputButton;

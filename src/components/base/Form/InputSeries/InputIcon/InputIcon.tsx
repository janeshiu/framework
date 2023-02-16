import Input, { InputProps } from '../Input';
import styles from '../Input.module.scss';
import { ShapeType, SizeType } from '@/types/style';
import classNames from 'classnames';
import { ButtonProps } from '../../../ButtonSeries/Button';
import { MouseEvent } from 'react';

export interface InputIconProps {
	size?: SizeType;
	shape?: ShapeType;
	className?: string;

	icon: JSX.Element;
	iconType?: ButtonProps['type'];
	iconClickable?: boolean;
	iconPosition?: InputProps['buttonPosition'];

	inputProps: Omit<InputProps['inputProps'], 'content'>;

	messagesProps?: InputProps['messagesProps'];

	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	onSend?: InputProps['onSend'];
}

/**
 * 顯示 icon 的 Input
 * @param size - 尺寸
 * @param shape - 形狀
 * @param className - className
 *
 * @param icon - react-icons element
 * @param iconType - button type
 * @param iconClickable - icon 是否可被點擊
 *
 * @param inputProps - InputBase props，排除 'size' | 'shape' | 'onSend' | 'content'
 * @param messagesProps - Messages props，控制訊息顯示
 * @param onClick - Button onClick，若有設置，點擊元件內按鈕執行
 * @param onSend - InputBase onSend，若有設置，按下 Enter 或 元件內按鈕執行，若與 onClick 同時存在，點擊按鈕時只會執行 onClick
 */
const InputIcon: React.FC<InputIconProps> = ({
	size = 'normal',
	shape = 'circle',
	className,

	icon,
	iconType,
	iconClickable = true,
	iconPosition = 'right',

	inputProps,

	messagesProps,

	onSend,
	onClick,
}) => {
	const buttonClass = classNames({
		[styles[`inputIcon__button`]]: true,
		[styles[`inputIcon--${iconPosition}`]]: true,
		[styles[`inputIcon--disabled`]]: !iconClickable,
	});

	const BUTTON_PROPS: ButtonProps = {
		shape,
		size,
		icon,
		type: iconType,
		className: buttonClass,
		pattern: 'ghost',
		color: 'secondary',
		onClick,
	};

	return (
		<Input
			className={className}
			shape={shape}
			size={size}
			inputProps={inputProps}
			onSend={onSend}
			buttonProps={BUTTON_PROPS}
			buttonPosition={iconPosition}
			messagesProps={messagesProps}
		/>
	);
};

export default InputIcon;

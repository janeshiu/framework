import { SizeType } from '@/types/style';
import { ReactNode } from 'react';
import styles from './Message.module.scss';

export interface MessageProps {
	msg: ReactNode;
	size?: SizeType;
	type?: 'success' | 'error' | 'normal';
	className?: string;
}

/**
 * 一般表單底下所顯示的訊息的基礎元件
 * @param msg - 訊息內容
 * @param size - 尺寸
 * @param type - 訊息類型，'success' | 'error' | 'normal'
 * @param className - className
 * @returns
 */
const Message: React.FC<MessageProps> = ({
	msg,
	size = 'normal',
	type = 'normal',
	className,
}) => {
	return (
		<small
			className={`text-normal--${size} ${styles.message} ${styles[`${type}`]} ${
				className ?? ''
			}`}>
			{msg}
		</small>
	);
};

export default Message;

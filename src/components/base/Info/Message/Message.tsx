import { SizeType } from '@/types/style';
import { ReactNode } from 'react';
import styles from './Message.module.scss';

export interface MessageProps {
	/** text of message */
	msg: ReactNode;
	/** size of message */
	size?: SizeType;
	/** type of message */
	type?: 'success' | 'error' | 'helper';
	className?: string;
	/** purpose of message */
	messageType?: 'message' | 'hint';
}

/**
 * 一般表單底下所顯示的訊息的基礎元件
 * @param msg - text of message
 * @param size - size of message
 * @param type - type of message，'success' | 'error' | 'normal'
 * @param className - className
 * @param messageType - purpose of message
 * @returns
 */
const Message: React.FC<MessageProps> = ({
	msg,
	size = 'normal',
	type = 'helper',
	messageType,
	className,
}) => {
	const baseFontSize = messageType === 'hint' ? 'small' : 'normal';

	return (
		<small
			className={`text-${baseFontSize}--${size} ${styles.message} ${
				styles[`${type}`]
			} ${className ?? ''}`}>
			{msg}
		</small>
	);
};

export default Message;

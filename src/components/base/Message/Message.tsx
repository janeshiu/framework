import { SizeType } from '@/types/style';
import { ReactNode } from 'react';
import styles from './Message.module.scss';

interface MessageProps {
	msg: ReactNode;
	size?: SizeType;
	type?: 'success' | 'error' | 'normal';
	className?: string;
}

const Message: React.FC<MessageProps> = ({
	msg,
	size = 'normal',
	type = 'normal',
	className,
}) => {
	return (
		<small
			className={`text-small--${size} ${styles.message} ${styles[`${type}`]} ${
				className ?? ''
			}`}>
			{msg}
		</small>
	);
};

export default Message;

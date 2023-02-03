import { SizeType } from '@/types/style';
import { ReactNode } from 'react';
import styles from './Message.module.scss';

interface MessageProps {
	msg: ReactNode;
	size?: SizeType;
	type?: 'success' | 'error' | 'helper';
	className?: string;
}

const Message: React.FC<MessageProps> = ({
	msg,
	size = 'normal',
	type = 'helper',
	className,
}) => {
	return (
		<small
			className={`${styles.message} ${styles[`${size}`]} ${styles[`${type}`]} ${
				className ?? ''
			}`}>
			{msg}
		</small>
	);
};

export default Message;

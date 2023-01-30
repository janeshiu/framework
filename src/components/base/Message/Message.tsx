import styles from './Message.module.scss';

interface MessageProps {
	msg: string;
	type?: 'success' | 'error' | 'helper';
	className?: string;
}

const Message: React.FC<MessageProps> = ({
	msg,
	type = 'helper',
	className,
}) => {
	return (
		<small
			className={`${styles.message} ${styles[`message--${type}`]} ${
				className ?? ''
			}`}>
			{msg}
		</small>
	);
};

export default Message;

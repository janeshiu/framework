import { SizeType } from '@/types/style';
import classNames from 'classnames';
import { ReactNode } from 'react';
import Message from './Message';
import styles from './Message.module.scss';

export interface MessageGroupProps {
	className?: string;
	size?: SizeType;

	success?: boolean;
	successMsg?: ReactNode;
	successClass?: string;

	error?: boolean;
	errorMsg?: ReactNode;
	errorClass?: string;

	helper?: boolean;
	helperMsg?: ReactNode;
	helperClass?: string;
}

const MessageGroup: React.FC<MessageGroupProps> = ({
	className,
	size = 'normal',

	success,
	successMsg,
	successClass,

	error,
	errorMsg,
	errorClass,

	helper,
	helperMsg,
	helperClass,
}) => {
	const hasMessage =
		(helper && helperMsg) || (error && errorMsg) || (success && successMsg);

	if (!hasMessage) return <></>;

	return (
		<div className={`${styles.group} ${className ?? ''}`}>
			{helper && helperMsg && (
				<Message size={size} msg={helperMsg} className={helperClass} />
			)}
			{error && errorMsg && (
				<Message
					type='error'
					size={size}
					msg={errorMsg}
					className={errorClass}
				/>
			)}
			{success && successMsg && (
				<Message
					type='success'
					size={size}
					msg={successMsg}
					className={successClass}
				/>
			)}
		</div>
	);
};

export default MessageGroup;

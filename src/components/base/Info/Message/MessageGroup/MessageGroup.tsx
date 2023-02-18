import { SizeType } from '@/types/style';
import { ReactElement, ReactNode } from 'react';
import Message, { MessageProps } from '../Message';
import styles from '../Message.module.scss';

export interface MessageGroupProps {
	className?: string;
	size?: SizeType;
	messageType?: MessageProps['messageType'];

	/** does success message show or not */
	success?: boolean;
	/** success message  */
	successMsg?: ReactNode;
	/** success message className  */
	successClass?: string;

	/** does error message show or not */
	error?: boolean;
	/** error message  */
	errorMsg?: ReactNode;
	/** error message className  */
	errorClass?: string;

	/** does helper message show or not */
	helper?: boolean;
	/** helper message  */
	helperMsg?: ReactNode;
	/** helper message className  */
	helperClass?: string;

	children?: ReactElement<any, any>;
}

/**
 * 訊息包 - 可同時顯示 helper / error / success 相關訊息
 * @param className - className
 * @param size - 尺寸
 * @param messageType - 訊息類型
 *
 * @param success - 是否顯示 success 訊息
 * @param successMsg - success 訊息內容
 * @param successClass - success className
 *
 * @param error - 是否顯示 error 訊息
 * @param errorMsg - error 訊息
 * @param errorClass - error className
 *
 * @param helper - 是否顯示 helper 訊息
 * @param helperMsg - helper 訊息
 * @param helperClass - helper className
 * @returns
 */
const MessageGroup: React.FC<MessageGroupProps> = ({
	className,
	size = 'normal',
	messageType,
	children = null,

	...props
}) => {
	const hasMessage =
		hasTypeMessage('helper') ||
		hasTypeMessage('error') ||
		hasTypeMessage('success');

	if (!hasMessage) return children;

	function hasTypeMessage(type: MessageProps['type'] = 'helper') {
		return props[type] && props[`${type}Msg`];
	}

	const renderMessage = (type: MessageProps['type'] = 'helper') => {
		return (
			hasTypeMessage(type) && (
				<Message
					size={size}
					messageType={messageType}
					msg={props[`${type}Msg`]}
					className={props[`${type}Class`]}
				/>
			)
		);
	};

	return (
		<div className={`${styles.group} ${className ?? ''}`}>
			{children}
			{renderMessage('helper')}
			{renderMessage('error')}
			{renderMessage('success')}
		</div>
	);
};

export default MessageGroup;

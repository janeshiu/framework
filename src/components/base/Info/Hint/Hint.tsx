import Message, { MessageProps } from '../Message/Message';

export interface HintProps extends Omit<MessageProps, 'messageType'> {}

/**
 * input 底下所顯示的訊息的基礎元件
 * @param msg - text of message
 * @param size - size of message
 * @param type - type of message，'success' | 'error' | 'normal'
 * @param className - className
 * @returns
 */
const Hint: React.FC<MessageProps> = ({ ...props }) => {
	return <Message {...props} messageType='hint' />;
};

export default Hint;

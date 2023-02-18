import MessageGroup, {
	MessageGroupProps,
} from '../../Message/MessageGroup/MessageGroup';

export interface HintGroupProps
	extends Omit<MessageGroupProps, 'messageType'> {}

/**
 * 訊息包 - 可同時顯示 helper / error / success 相關訊息
 * @param className - className
 * @param size - 尺寸
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
const HintGroup: React.FC<MessageGroupProps> = ({ children, ...props }) => {
	return (
		<MessageGroup {...props} messageType='hint'>
			{children}
		</MessageGroup>
	);
};

export default HintGroup;

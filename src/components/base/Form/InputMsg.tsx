import Input, { InputProps } from './Input';
import styles from './Form.module.scss';
import Message from './Message';

interface InputMsgProps {
	inputProps: InputProps;

	className?: string;
	successMsg?: string;
	successClass?: string;
	errorMsg?: string;
	errorClass?: string;
	helperMsg?: string;
	helperClass?: string;
}

const InputMsg: React.FC<InputMsgProps> = ({
	inputProps,
	className,
	successMsg,
	successClass,
	errorMsg,
	errorClass,
	helperMsg,
	helperClass,
}) => {
	return (
		<div className={`flex flex-col w-full ${className ?? ''}`}>
			<Input {...inputProps} />
			{successMsg && (
				<Message type='success' msg={successMsg} className={successClass} />
			)}
			{errorMsg && (
				<Message type='error' msg={errorMsg} className={errorClass} />
			)}
			{helperMsg && (
				<Message type='helper' msg={helperMsg} className={helperClass} />
			)}
		</div>
	);
};

export default InputMsg;

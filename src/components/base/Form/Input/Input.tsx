import Message from '../../Message/Message';
import InputBase, { InputBaseProps } from './InputBase';

interface InputProps {
	inputProps: InputBaseProps;

	className?: string;
	successMsg?: string;
	successClass?: string;
	errorMsg?: string;
	errorClass?: string;
	helperMsg?: string;
	helperClass?: string;
}

const Input: React.FC<InputProps> = ({
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
			<InputBase {...inputProps} />
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

export default Input;

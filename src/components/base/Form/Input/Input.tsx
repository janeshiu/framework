import Message from '../../Message/Message';
import InputBase, { InputBaseProps } from './InputBase';

interface InputProps {
	inputProps: InputBaseProps;

	className?: string;
	success?: boolean;
	successMsg?: string;
	successClass?: string;

	error?: boolean;
	errorMsg?: string;
	errorClass?: string;

	helper?: boolean;
	helperMsg?: string;
	helperClass?: string;
}

const Input: React.FC<InputProps> = ({
	inputProps,
	className,

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
	return (
		<div className={`flex flex-col w-full ${className ?? ''}`}>
			<InputBase {...inputProps} />
			{success && successMsg && (
				<Message type='success' msg={successMsg} className={successClass} />
			)}
			{error && errorMsg && (
				<Message type='error' msg={errorMsg} className={errorClass} />
			)}
			{helper && helperMsg && (
				<Message type='helper' msg={helperMsg} className={helperClass} />
			)}
		</div>
	);
};

export default Input;

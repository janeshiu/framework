import React, { ReactNode } from 'react';

interface FormProps {
	className?: string;
	onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
	onReset?: (event: React.FormEvent<HTMLFormElement>) => void;
	children: ReactNode;
}

const Form: React.FC<FormProps> = ({
	className,
	onSubmit,
	onReset,
	children,
}) => {
	return (
		<form className={className} onSubmit={onSubmit} onReset={onReset}>
			{children}
		</form>
	);
};

export default Form;

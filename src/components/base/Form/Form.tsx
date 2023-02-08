import React, { ReactNode } from 'react';

export interface FormProps {
	className?: string;
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
	onReset?: (event: React.FormEvent<HTMLFormElement>) => void;
	children: ReactNode;
}

const Form: React.FC<FormProps> = ({
	className,
	onSubmit,
	onReset,
	children,
}) => {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSubmit(event);
	};

	return (
		<form className={className} onSubmit={handleSubmit} onReset={onReset}>
			{children}
		</form>
	);
};

export default Form;

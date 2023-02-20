import React, { ReactNode } from 'react';
import Heading from '../../Heading/Heading';
import styles from './Form.module.scss';

export interface FormProps {
	/** title of form */
	title?: string;
	className?: string;
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
	onReset?: (event: React.FormEvent<HTMLFormElement>) => void;
	children: ReactNode;
}

/**
 * Form 元件，照 form 使用
 * @param className - className
 * @param onSubmit - onSubmit
 * @param onReset - onReset
 * @param children - Form children
 * @returns
 */
const Form: React.FC<FormProps> = ({
	title,
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
		<form
			className={`shape--round ${styles.form} ${className ?? ''}`}
			onSubmit={handleSubmit}
			onReset={onReset}>
			{title && (
				<Heading type='tertiary' align='center'>
					{title}
				</Heading>
			)}
			{children}
		</form>
	);
};

export default Form;

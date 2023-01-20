import { MouseEvent, ReactNode } from 'react';
import styles from './Form.module.scss';

interface LabelProps {
	content: ReactNode | string;
	forName: string;
	children: ReactNode;
	className?: string;
	labelStyle?: 'row' | 'column';
	required?: boolean;
	onClick?: (event: MouseEvent<HTMLLabelElement>) => void;
}

const Label: React.FC<LabelProps> = ({
	content,
	forName,
	children,
	className,
	labelStyle = 'column',
	required = false,
	onClick,
}) => {
	return (
		<div className={styles[`wrapper--${labelStyle}`]}>
			<label
				id={forName}
				className={`${styles[`label--${labelStyle}`]} ${className ?? ''}`}
				onClick={onClick}>
				{content}
				{required && <sup className='text-error'>*</sup>}
			</label>
			{children}
		</div>
	);
};

export default Label;

import { ReactElement } from 'react';
import styles from './Table.module.scss';

export interface TableProps<T = string> {
	ariaLabel?: string;
	ariaDescribedby?: string;

	className?: string;
	/** please provide TabItem(s) as children */
	children: ReactElement<T> | ReactElement<T>[];
}
/**
 * Table
 */
const Table: React.FC<TableProps> = ({
	ariaLabel,
	ariaDescribedby,
	className,
	children,
}) => {
	return (
		<div
			role='table'
			className={`${styles[`table`]} shape--round  ${className ?? ''}`}
			aria-label={ariaLabel}
			aria-describedby={ariaDescribedby}>
			{children}
		</div>
	);
};

export default Table;

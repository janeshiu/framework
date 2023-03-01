import { Children, isValidElement, ReactElement } from 'react';
import styles from './Table.module.scss';
import { TbodyProps } from './Tbody/Tbody';
import { TfootProps } from './Tfoot/Tfoot';
import { TheadProps } from './Thead/Thead';

export interface TableProps<T = TheadProps | TbodyProps | TfootProps> {
	ariaLabel?: string;
	ariaDescribedby?: string;

	className?: string;
	/** please provide TabItem(s) as children */
	children: ReactElement<T>[];
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
	const childOrder = ['Tfoot', 'Tbody', 'Thead'];
	// sort children by Thead --> Tbody --> Tfooter
	const sortedChildren = Children.map(children, (child) => child).sort(
		(childA, childB) => {
			if (
				isValidElement(childA) &&
				typeof childA.type !== 'string' &&
				isValidElement(childB) &&
				typeof childB.type !== 'string'
			) {
				return childOrder.indexOf(childA.type.name) >
					childOrder.indexOf(childB.type.name)
					? -1
					: 1;
			}

			return 0;
		}
	);

	return (
		<div
			role='table'
			className={`${styles[`table`]} shape--round ${className ?? ''}`}
			aria-label={ariaLabel}
			aria-describedby={ariaDescribedby}>
			{sortedChildren}
		</div>
	);
};

export default Table;

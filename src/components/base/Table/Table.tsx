import { TableHeaderItem } from '@/enums/tableHeader';
import { Children, CSSProperties, isValidElement, ReactElement } from 'react';
import styles from './Table.module.scss';
import { TbodyProps } from './Tbody/Tbody';
import { TfootProps } from './Tfoot/Tfoot';
import Thead, { TheadProps } from './Thead/Thead';
import TheadItem from './Thead/TheadItem/TheadItem';

export interface TableProps<T = TheadProps | TbodyProps | TfootProps> {
	ariaLabel?: string;
	ariaDescribedby?: string;

	headerList?: TableHeaderItem[];

	className?: string;
	/** please provide TabItem(s) as children */
	children?: ReactElement<T>[];
}
/**
 * Table
 */
const Table: React.FC<TableProps> = ({
	ariaLabel,
	ariaDescribedby,
	headerList,
	className,
	children,
}) => {
	const hasHeaderList = headerList && headerList.length > 0;
	const childOrder = ['Tfoot', 'Tbody', 'Thead'];
	const headerStyle =
		hasHeaderList && headerList.map((headerItem) => headerItem.width).join(' ');
	// sort children by Thead --> Tbody --> Tfooter
	const sortedChildren =
		children &&
		Children.map(children, (child) => child)
			.sort((childA, childB) => {
				if (!isValidElement(childA) || typeof childA.type === 'string')
					return 0;
				if (!isValidElement(childB) || typeof childB.type === 'string')
					return 0;

				return childOrder.indexOf(childA.type.name) >
					childOrder.indexOf(childB.type.name)
					? -1
					: 1;
			})
			// 若有提供 headerList，將原先 children 內的 Thead 剔除
			.filter((child) => {
				if (!hasHeaderList) return true;
				if (!isValidElement(child) || typeof child.type === 'string')
					return true;

				return child.type.name !== 'Thead';
			});

	return (
		<div
			role='table'
			style={{ '--grid-cols': headerStyle || 'none' } as CSSProperties}
			className={`Table scrollbox__hor shape--round ${className ?? ''}`}
			aria-label={ariaLabel}
			aria-describedby={ariaDescribedby}>
			{hasHeaderList && (
				<Thead>
					{headerList.map((headerItem) => {
						const { id, title, ...props } = headerItem;
						return (
							<TheadItem {...props} key={id}>
								{headerItem.title}
							</TheadItem>
						);
					})}
				</Thead>
			)}
			{sortedChildren}
		</div>
	);
};

export default Table;

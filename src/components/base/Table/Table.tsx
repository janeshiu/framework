import { TableHeaderItem } from '@/enums/tableHeader';
import {
	Children,
	CSSProperties,
	isValidElement,
	ReactElement,
	ReactNode,
} from 'react';
import Tbody, { TbodyProps } from './Tbody/Tbody';
import Tdata from './Tdata/Tdata';
import { TfootProps } from './Tfoot/Tfoot';
import Thead, { TheadProps } from './Thead/Thead';
import TheadItem, { TheadItemProps } from './Thead/TheadItem/TheadItem';
import Trow from './Trow/Trow';

export type DataItem<K extends string> = {
	[key in K]: ReactNode | undefined;
};

export interface TableProps<
	// V extends string,
	H = TableHeaderItem<string /** V */>,
	T = TheadProps | TbodyProps | TfootProps
> {
	ariaLabel?: string;
	ariaDescribedby?: string;

	headerList: H[];
	/** 這邊寫的有點混亂，是想讓你知道此處資料內的 key === headerList 那各筆 id 的 value，但 typescript 寫不出來Q_Q */
	dataList: DataItem<string /** V */>[];

	className?: string;
	/** please provide TabItem(s) as children */
	children?: ReactElement<T> | ReactElement<T>[];

	onSort?: TheadItemProps['onSort'];
}
/**
 * Table
 */
const Table: React.FC<TableProps> = ({
	ariaLabel,
	ariaDescribedby,
	headerList,
	dataList,
	className,
	onSort = () => {},
	children,
}) => {
	const hasHeaderList = headerList.length > 0;
	const hasDataList = dataList.length > 0;
	const childOrder = ['Tfoot', 'Tbody', 'Thead'];
	const powerOrder = ['unsorted', 'decrease', 'raise'];
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
			// 若有提供 headerList / dataList，將原先 children 內的 Thead / Tbody 剔除
			.filter((child) => {
				if (!isValidElement(child) || typeof child.type === 'string')
					return true;

				if (hasHeaderList && child.type.name === 'Thead') {
					return false;
				}

				if (hasDataList && child.type.name === 'Tbody') {
					return false;
				}

				return true;
			});

	const handleSort = (id: string, mathPower: TheadItemProps['mathPower']) => {
		onSort && onSort(id, mathPower);
	};

	return (
		<div
			role='table'
			style={{ '--grid-cols': headerStyle || 'none' } as CSSProperties}
			className={`Table scrollbox__hor shape--round ${className ?? ''}`}
			aria-label={ariaLabel}
			aria-describedby={ariaDescribedby}>
			{hasHeaderList && <Thead headerItems={headerList} onSort={onSort} />}
			{hasHeaderList && hasDataList && (
				<Tbody>
					{dataList.map((bodyItem) => {
						const valueAsKey = Object.values(bodyItem)
							.filter(
								(value) =>
									typeof value === 'string' || typeof value === 'number'
							)
							.join('');
						return (
							<Trow key={valueAsKey}>
								{headerList.map((headerItem, index) => {
									const { id, align } = headerItem;
									return (
										<Tdata
											key={`${valueAsKey}_${bodyItem[id] ?? index}`}
											align={align}>
											{bodyItem[id] ?? ''}
										</Tdata>
									);
								})}
							</Trow>
						);
					})}
				</Tbody>
			)}
			{sortedChildren}
		</div>
	);
};

export default Table;

import { MathPower, TableHeaderItem } from '@/enums/tableHeader';
import { Children, CSSProperties, isValidElement, ReactElement } from 'react';
import Tbody, { BodyItem, TbodyProps } from './Tbody/Tbody';
import { TfootProps } from './Tfoot/Tfoot';
import Thead, { TheadProps } from './Thead/Thead';
import { ExistMathPower, TheadItemProps } from './Thead/TheadItem/TheadItem';

export interface TableProps<
	// V extends string,
	H = TableHeaderItem<string /** V */>,
	T = TheadProps | TbodyProps | TfootProps
> {
	ariaLabel?: string;
	ariaDescribedby?: string;

	headerItems?: H[];
	/** 抱歉這邊寫的混亂，是想讓你知道此處資料內的 key === headerList 那各筆 id 的 value，但 typescript 寫不出來Q_Q */
	bodyItems: BodyItem<string /** V */>[];

	className?: string;
	/** please provide TabItem(s) as children */
	children?: ReactElement<T> | ReactElement<T>[];

	onSort?: TheadProps['onSort'];
}
/**
 * Table
 */
const Table: React.FC<TableProps> = ({
	ariaLabel,
	ariaDescribedby,
	headerItems,
	bodyItems,
	className,
	onSort = () => {},
	children,
}) => {
	const hasHeaderList = headerItems && headerItems.length > 0;
	const hasBodyList = bodyItems.length > 0;
	const hasContent = hasHeaderList && hasBodyList;
	const childOrder = ['Tfoot', 'Tbody', 'Thead'];
	const headerStyle =
		hasHeaderList &&
		headerItems.map((headerItem) => headerItem.width).join(' ');
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

				if (hasContent && child.type.name === 'Tbody') {
					return false;
				}

				return true;
			});

	return (
		<div
			role='table'
			style={{ '--grid-cols': headerStyle || 'none' } as CSSProperties}
			className={`Table scrollbox__hor shape--round ${className ?? ''}`}
			aria-label={ariaLabel}
			aria-describedby={ariaDescribedby}>
			{hasHeaderList && <Thead headerItems={headerItems} onSort={onSort} />}
			{hasContent && <Tbody headerItems={headerItems} bodyItems={bodyItems} />}
			{sortedChildren}
		</div>
	);
};

export default Table;

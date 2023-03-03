import { MathPower, TableHeaderItem } from '@/enums/tableHeader';
import { MathPowerType } from '@/types/style';
import { Children, CSSProperties, isValidElement, ReactElement } from 'react';
import Tbody, { BodyItem, TbodyProps } from './Tbody/Tbody';
import { TfootProps } from './Tfoot/Tfoot';
import Thead, { TheadProps } from './Thead/Thead';
import { TheadItemProps } from './Thead/TheadItem/TheadItem';

export interface TableProps<
	// V extends string,
	H = TableHeaderItem<string /** V */>,
	T = TheadProps | TbodyProps | TfootProps
> {
	ariaLabel?: string;
	ariaDescribedby?: string;

	headerList?: H[];
	/** 抱歉這邊寫的混亂，是想讓你知道此處資料內的 key === headerList 那各筆 id 的 value，但 typescript 寫不出來Q_Q */
	bodyList: BodyItem<string /** V */>[];

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
	bodyList,
	className,
	onSort = () => {},
	children,
}) => {
	const hasHeaderList = headerList && headerList.length > 0;
	const hasBodyList = bodyList.length > 0;
	const hasContent = hasHeaderList && hasBodyList;

	const childOrder = ['Tfoot', 'Tbody', 'Thead'];
	const powerOrder: MathPowerType[] = [MathPower.DECREASE, MathPower.RAISE];

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

				if (hasContent && child.type.name === 'Tbody') {
					return false;
				}

				return true;
			});

	const handleSort = (id: string, mathPower: MathPowerType) => {
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
			{hasContent && <Tbody headerItems={headerList} bodyItems={bodyList} />}
			{sortedChildren}
		</div>
	);
};

export default Table;

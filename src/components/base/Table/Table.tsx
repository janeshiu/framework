import { MathPower, TableHeaderItem } from '@/enums/tableHeader';
import { Children, CSSProperties, isValidElement, ReactElement } from 'react';
import Heading from '../Heading/Heading';
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

	isLoading?: boolean;
	noDataMsg?: string;

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

	isLoading,
	noDataMsg = '無資料',

	headerItems,
	bodyItems,
	className,
	onSort = () => {},
	children,
}) => {
	const hasHeaderList = headerItems && headerItems.length > 0;
	const hasBodyList = bodyItems.length > 0;
	const hasContent = hasHeaderList && hasBodyList;
	const headerStyle =
		hasHeaderList &&
		headerItems.map((headerItem) => headerItem.width).join(' ');
	// sort children by Thead --> Tbody --> Tfooter
	const theadChild = !hasHeaderList && getChildComponent('Thead');
	const tbodyChild = !hasContent && getChildComponent('Tbody');
	const tfootChild = getChildComponent('Tfoot');

	function getChildComponent(targetTag: string) {
		if (!children) return;

		return Children.map(children, (child) => child).find((child) => {
			if (!isValidElement(child) || typeof child.type === 'string')
				return false;
			return child.type.name === targetTag;
		});
	}

	return (
		<div
			role='table'
			style={{ '--grid-cols': headerStyle || 'none' } as CSSProperties}
			className={`Table scrollbox__hor shape--round ${className ?? ''}`}
			aria-label={ariaLabel}
			aria-describedby={ariaDescribedby}>
			{hasHeaderList && <Thead headerItems={headerItems} onSort={onSort} />}
			{hasContent ? (
				<Tbody headerItems={headerItems} bodyItems={bodyItems} />
			) : (
				<Heading type='quaternary' align='center' className='my-16'>
					{noDataMsg}
				</Heading>
			)}

			{theadChild}
			{tbodyChild}
			{tfootChild}
		</div>
	);
};

export default Table;

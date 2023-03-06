import { MathPower, TableHeaderItem } from '@/enums/tableHeader';
import useBreakpoints from '@/hooks/useBreakpoint/useBreakpoint';
import { Children, CSSProperties, isValidElement, ReactElement } from 'react';
import Heading from '../Heading/Heading';
import LoadingTbody from '../Loading/LoadingTbody/LoadingTbody';
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

	unfixed?: boolean;

	headerItems?: H[];
	/** 抱歉這邊寫的混亂，是想讓你知道此處資料內的 key === headerList 那各筆 id 的 value，但 typescript 寫不出來Q_Q */
	bodyItems?: BodyItem<string /** V */>[];

	className?: string;
	gridTemplateCols?: string;
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

	unfixed,
	headerItems,
	bodyItems,
	className,
	gridTemplateCols,
	onSort = () => {},
	children,
}) => {
	const { isMobile } = useBreakpoints();
	const hasHeaderList = headerItems && headerItems.length > 0;
	const hasBodyList = bodyItems && bodyItems.length > 0;
	const hasContent = hasHeaderList && hasBodyList;
	const headerStyle =
		gridTemplateCols ??
		(hasHeaderList &&
			headerItems.map((headerItem) => headerItem.width).join(' '));

	const theadChild = !hasHeaderList && getChildComponent('Thead');
	const tbodyChild = !hasContent && getChildComponent('Tbody');
	const tfootChild = getChildComponent('Tfoot');

	const loadingLength = getLoadingLength();

	function getChildComponent(targetTag: string) {
		if (!children) return;

		return Children.map(children, (child) => child).find((child) => {
			if (!isValidElement(child) || typeof child.type === 'string')
				return false;
			return child.type.name === targetTag;
		});
	}

	function getLoadingLength() {
		// 若有提供表頭資料，直接抓表頭
		if (hasHeaderList) return headerItems.length;
		// 無表頭資料抓提供的 Thead component's children.length
		if (theadChild) {
			return Array.isArray(theadChild.props.children)
				? theadChild.props.children.length
				: 1;
		}
		// 無表頭 & Thead component 抓 Tbody component's children.length
		if (tbodyChild) {
			return Array.isArray(tbodyChild.props.children)
				? tbodyChild.props.children.length
				: 1;
		}
		return 1;
	}

	return (
		<div
			role='table'
			style={{ '--grid-cols': headerStyle || 'none' } as CSSProperties}
			className={`Table scrollbox__hor shape--round ${className ?? ''}`}
			aria-label={ariaLabel}
			aria-describedby={ariaDescribedby}>
			{hasHeaderList ? (
				<Thead
					headerItems={headerItems}
					onSort={onSort}
					unfixed={unfixed && isMobile}
				/>
			) : (
				theadChild
			)}

			{isLoading ? (
				<LoadingTbody length={loadingLength} />
			) : hasContent ? (
				<Tbody
					headerItems={headerItems}
					bodyItems={bodyItems}
					unfixed={unfixed && isMobile}
				/>
			) : tbodyChild && tbodyChild.props.children ? (
				tbodyChild
			) : (
				<Heading type='quaternary' align='center' className='my-[4.125rem]'>
					{noDataMsg}
				</Heading>
			)}

			{tfootChild}
		</div>
	);
};

export default Table;

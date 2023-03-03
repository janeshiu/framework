import { MathPower, TableHeaderItem } from '@/enums/tableHeader';
import { CSSProperties, ReactElement } from 'react';
import styles from '../Table.module.scss';
import TheadItem, {
	ExistMathPower,
	TheadItemProps,
} from './TheadItem/TheadItem';

export interface TheadProps<T = TheadItemProps, H = TableHeaderItem> {
	style?: CSSProperties;
	headerItems?: H[];
	children?: ReactElement<T> | ReactElement<T>[];
	onSort?: (
		updatedheaderList: H[],
		id: string,
		mathPower: ExistMathPower
	) => void;
}

/**
 * Thead
 */
const Thead: React.FC<TheadProps> = ({
	style,
	headerItems,
	children,
	onSort,
}) => {
	const hasHeaderItem = headerItems && headerItems.length > 0;

	if (!hasHeaderItem && !children) return null;

	const handleSort = (id: string, mathPower: ExistMathPower) => {
		const updatedheaderList = headerItems!.map((headerItem) => {
			return {
				...headerItem,
				mathPower: headerItem.id === id ? mathPower : MathPower.UNSORTED,
			};
		});

		onSort && onSort(updatedheaderList, id, mathPower);
	};

	return (
		<div role='rowgroup' className={`Thead`} style={style}>
			{hasHeaderItem
				? headerItems.map((headerItem) => {
						const { id, title, ...props } = headerItem;
						return (
							<TheadItem key={id} {...props} id={id} onSort={handleSort}>
								{headerItem.title}
							</TheadItem>
						);
				  })
				: children}
		</div>
	);
};

export default Thead;

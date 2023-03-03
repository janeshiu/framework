import { TableHeaderItem } from '@/enums/tableHeader';
import { CSSProperties, ReactElement } from 'react';
import styles from '../Table.module.scss';
import TheadItem, { TheadItemProps } from './TheadItem/TheadItem';

export interface TheadProps<T = TheadItemProps> {
	style?: CSSProperties;
	headerItems?: TableHeaderItem[];
	children?: ReactElement<T> | ReactElement<T>[];
	onSort?: TheadItemProps['onSort'];
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

	return (
		<div role='rowgroup' className={`Thead`} style={style}>
			{hasHeaderItem
				? headerItems.map((headerItem) => {
						const { id, title, ...props } = headerItem;
						console.log('here');
						return (
							<TheadItem key={id} {...props} id={id} onSort={onSort}>
								{headerItem.title}
							</TheadItem>
						);
				  })
				: children}
		</div>
	);
};

export default Thead;

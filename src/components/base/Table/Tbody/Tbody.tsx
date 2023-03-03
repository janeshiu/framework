import { ReactElement, ReactNode } from 'react';
import Tdata from '../Tdata/Tdata';
import { TheadProps } from '../Thead/Thead';
import Trow, { TrowProps } from '../Trow/Trow';

export type BodyItem<K extends string> = {
	[key in K]: ReactNode | undefined;
};

export interface TbodyProps<T = TrowProps> {
	headerItems?: TheadProps['headerItems'];
	bodyItems?: BodyItem<string>[];
	children?: ReactElement<T> | ReactElement<T>[];
}

/**
 * Tbody
 */
const Tbody: React.FC<TbodyProps> = ({ headerItems, bodyItems, children }) => {
	const hasHeaderItem = headerItems && headerItems.length > 0;
	const hasBodyItem = bodyItems && bodyItems.length > 0;
	const hasContent = hasHeaderItem && hasBodyItem;

	if (!hasContent && !children) return null;

	return (
		<div role='rowgroup'>
			{hasContent
				? bodyItems.map((bodyItem) => {
						const valueAsKey = Object.values(bodyItem)
							.filter(
								(value) =>
									typeof value === 'string' || typeof value === 'number'
							)
							.join('');
						return (
							<Trow key={valueAsKey}>
								{headerItems.map((headerItem, index) => {
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
				  })
				: children}
		</div>
	);
};

export default Tbody;

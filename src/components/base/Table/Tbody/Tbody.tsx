import classNames from 'classnames';
import { CSSProperties, Key, ReactElement, ReactNode } from 'react';
import LabelTitle from '../../FormControl/Label/LabelTitle/LabelTitle';
import Tdata from '../Tdata/Tdata';
import Trow, { TrowProps } from '../Trow/Trow';
import { TheadProps } from '../Thead/Thead';

export type BodyItem<K extends string> = {
	[key in K]: ReactNode | undefined;
};

export interface TbodyProps<T = TrowProps> {
	unfixed?: boolean;
	className?: string;
	gridTemplateCols?: string;
	headerItems?: TheadProps['headerItems'];
	bodyItems?: BodyItem<string>[];
	children?: ReactElement<T> | ReactElement<T>[];
}

/**
 * Tbody
 */
const Tbody: React.FC<TbodyProps> = ({
	unfixed,
	className,
	gridTemplateCols,
	headerItems,
	bodyItems,
	children,
}) => {
	const hasHeaderItem = headerItems && headerItems.length > 0;
	const hasBodyItem = bodyItems && bodyItems.length > 0;
	const hasContent = hasHeaderItem && hasBodyItem;

	if (!hasContent && !children) return null;

	function FixedTrow(props: { id: Key; bodyItem: BodyItem<string> }) {
		const { bodyItem } = props;
		const key = props.id;
		return (
			<Trow>
				{headerItems!.map((headerItem, index) => {
					const { id, align } = headerItem;
					return (
						<Tdata key={`${key}_${bodyItem![id] ?? index}`} align={align}>
							{bodyItem[id] ?? ''}
						</Tdata>
					);
				})}
			</Trow>
		);
	}

	function UnfixedTrow(props: { id: Key; bodyItem: BodyItem<string> }) {
		const hasOperator = headerItems?.some((item) => item.id === 'operator');

		return (
			<Trow className='Trow__unfixed'>
				{<UnfixedTdata {...props} hasOperator={hasOperator} />}
				{<UnfixedTdataOperator {...props} hasOperator={hasOperator} />}
			</Trow>
		);
	}

	function UnfixedTdata(props: {
		id: Key;
		bodyItem: BodyItem<string>;
		hasOperator?: boolean;
	}) {
		const { bodyItem, hasOperator = false } = props;
		const key = props.id;

		const baseClass = classNames({
			'min-w-[49%]': !hasOperator,
			'min-w-full': hasOperator,
			'mb-4': true,
		});
		return (
			<Tdata>
				{headerItems!
					.filter((headerItem) => headerItem.id !== 'operator')
					.map((headerItem, index) => {
						const { id } = headerItem;
						return (
							<div
								key={`${key}_${bodyItem![id] ?? index}`}
								className={baseClass}>
								<LabelTitle
									size='small'
									content={headerItem.title}
									className='text-common-disabled !my-0 text-small--small'
								/>
								<span className='text-small--normal'>{bodyItem[id] ?? ''}</span>
							</div>
						);
					})}
			</Tdata>
		);
	}

	function UnfixedTdataOperator(props: {
		id: Key;
		bodyItem: BodyItem<string>;
		hasOperator?: boolean;
	}) {
		const { bodyItem, hasOperator = false } = props;
		const key = props.id;

		if (!hasOperator) return null;

		return (
			<Tdata className='operator'>
				{headerItems!
					.filter((headerItem) => headerItem.id === 'operator')
					.map((headerItem, index) => {
						const { id } = headerItem;
						return (
							<div key={`${key}_${bodyItem![id] ?? index}`}>
								{bodyItem[id] ?? ''}
							</div>
						);
					})}
			</Tdata>
		);
	}

	return (
		<div
			role='rowgroup'
			className={className}
			style={
				gridTemplateCols
					? ({ '--grid-cols': gridTemplateCols } as CSSProperties)
					: undefined
			}>
			{hasContent
				? bodyItems.map((bodyItem, bodyIndex) => {
						const valueAsKey = Object.values(bodyItem)
							.filter(
								(value) =>
									typeof value === 'string' || typeof value === 'number'
							)
							.join('');
						return unfixed ? (
							<UnfixedTrow
								id={valueAsKey}
								key={valueAsKey}
								bodyItem={bodyItem}
							/>
						) : (
							<FixedTrow id={valueAsKey} key={valueAsKey} bodyItem={bodyItem} />
						);
				  })
				: children}
		</div>
	);
};

export default Tbody;

import { SizeType } from '@/types/style';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
import React, { MouseEvent } from 'react';
import Button from '../Button/Button';
import styles from './Pagination.module.scss';

const BsChevronDoubleLeft = dynamic(() =>
	import('react-icons/bs').then(
		(bootstrapIcons) => bootstrapIcons.BsChevronDoubleLeft
	)
);
const BsChevronDoubleRight = dynamic(() =>
	import('react-icons/bs').then(
		(bootstrapIcons) => bootstrapIcons.BsChevronDoubleRight
	)
);
const BsChevronLeft = dynamic(() =>
	import('react-icons/bs').then(
		(bootstrapIcons) => bootstrapIcons.BsChevronLeft
	)
);
const BsChevronRight = dynamic(() =>
	import('react-icons/bs').then(
		(bootstrapIcons) => bootstrapIcons.BsChevronRight
	)
);

export enum Action {
	FIRST = 'first',
	PREV = 'prev',
	NEXT = 'next',
	LAST = 'last',
	NONE = '...',
}

export type ActionType = `${Action}`;

interface PaginationItemProps<T = number | ActionType> {
	size?: SizeType;
	content: T;
	isActive?: boolean;
	disabled?: boolean;
	onClick: (event: MouseEvent<HTMLButtonElement>, action: T) => void;
}

const PaginationItem: React.FC<PaginationItemProps> = ({
	size = 'normal',
	content,
	isActive = false,
	disabled = false,
	onClick,
}) => {
	const actionValues: ActionType[] = Object.values(Action);
	const isAction =
		typeof content === 'string' && actionValues.includes(`${content}`);

	const icon = isAction ? getPaginationIcon(content) : undefined;

	const classes = classNames({
		[styles.item]: true,
		[styles[`item--active`]]: isActive,
		[styles[`item--disabled`]]: disabled || content === Action.NONE,
	});

	return (
		<li key={content} className={classes}>
			<Button
				pattern='ghost'
				icon={icon}
				content={!isAction || content === Action.NONE ? content : undefined}
				shape='round'
				size={size}
				disabled={disabled ?? false}
				onClick={(e) => onClick(e, content)}
			/>
		</li>
	);
};

function getPaginationIcon(action: ActionType) {
	switch (action) {
		case Action.FIRST:
			return <BsChevronDoubleLeft />;
		case Action.PREV:
			return <BsChevronLeft />;
		case Action.NEXT:
			return <BsChevronRight />;
		case Action.LAST:
			return <BsChevronDoubleRight />;
		default:
			return;
	}
}

export default PaginationItem;

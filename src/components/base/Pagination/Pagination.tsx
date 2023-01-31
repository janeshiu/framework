import classNames from 'classnames';
import React, { useState, MouseEvent, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Button from '../Button/Button';
import styles from './Pagination.module.scss';

enum Action {
	PREV = 'prev',
	NEXT = 'next',
	NONE = '...',
}

interface PaginationProps {
	totalPages: number;
	initialPage?: number;
	size?: 'small' | 'normal' | 'large';
	onPageChanged: (currentPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
	totalPages,
	initialPage = 1,
	size = 'normal',
	onPageChanged,
}) => {
	const activePageRange = 1;
	const maxPaginationLength = activePageRange * 2 + 3;
	const [currentPage, setCurrentPage] = useState<number>(initialPage);

	function handleChangePage(
		event: MouseEvent<HTMLButtonElement>,
		action: number | Action
	) {
		event.preventDefault();
		switch (action) {
			case Action.PREV:
				setCurrentPage((prev) => --prev);
				break;
			case Action.NEXT:
				setCurrentPage((prev) => ++prev);
				break;
			case Action.NONE:
				break;
			default:
				setCurrentPage(action);
		}
	}

	function getPaginationNumbers() {
		const paginationNumbers = [1, currentPage, totalPages];
		if (totalPages <= maxPaginationLength) {
			for (let i = 2; i < totalPages; i++) {
				paginationNumbers.push(i);
			}
		} else {
			switch (currentPage) {
				case 1:
					for (let i = 1; i <= activePageRange * 2; i++) {
						paginationNumbers.push(currentPage + i);
					}
					break;
				case totalPages:
					for (let i = 1; i <= activePageRange * 2; i++) {
						paginationNumbers.push(currentPage - i);
					}
					break;
				default:
					for (let i = -activePageRange; i <= activePageRange; i++) {
						if (i === 0 || currentPage + i <= 0) continue;
						paginationNumbers.push(currentPage + i);
					}
			}
			if (currentPage >= totalPages - activePageRange) {
				for (let i = 1; i <= activePageRange; i++) {
					paginationNumbers.push(1 + i);
				}
			}
			if (currentPage <= 1 + activePageRange) {
				for (let i = 1; i <= activePageRange; i++) {
					paginationNumbers.push(totalPages - i);
				}
			}
		}

		return paginationNumbers
			.filter(
				(pageNumber, index) => paginationNumbers.indexOf(pageNumber) === index
			)
			.sort((a, b) => (a < b ? -1 : 1));
	}

	function renderPaginationList() {
		const paginationNumbers = getPaginationNumbers();
		const paginationChunks: [[number | Action.NONE]] = [[1]];

		paginationNumbers.forEach((pageNumber, index) => {
			if (index === 0) return;

			const currentChunk = paginationChunks[paginationChunks.length - 1];
			const prevNumber = currentChunk[currentChunk.length - 1];
			if (prevNumber !== pageNumber - 1) {
				paginationChunks.push([Action.NONE]);
				paginationChunks.push([pageNumber]);
			} else {
				currentChunk.push(pageNumber);
			}
		});
		console.log('paginationNumbers', paginationNumbers);
		console.log('paginationChunks', paginationChunks);
		const paginationList = paginationChunks.map((pageItems) => {
			return pageItems.map((pageNumber) =>
				getPaginationItem({
					content: pageNumber,
					disabled: pageNumber === Action.NONE,
				})
			);
		});
		return [...paginationList];
	}

	function getPaginationItem(options: {
		content: number | Action;
		disabled?: boolean;
	}) {
		const { content, disabled } = options;

		const isAction =
			typeof content === 'string' && Object.values(Action).includes(content);

		const icon = isAction ? getPaginationIcon(content) : undefined;

		const classes = classNames({
			[styles.item]: true,
			[styles[`item--active`]]: content === currentPage,
			[styles[`item--none`]]: content === Action.NONE,
		});

		return (
			<li key={content} className={classes}>
				<Button
					pattern='ghost'
					icon={icon}
					content={!isAction || content === Action.NONE ? content : undefined}
					shape='round'
					size={size}
					onClick={(e: MouseEvent<HTMLButtonElement>) => {
						if (content === Action.NONE) return;
						handleChangePage(e, content);
					}}
					disabled={disabled ?? false}
				/>
			</li>
		);
	}

	useEffect(() => {
		onPageChanged(currentPage);
	}, [currentPage]);

	if (totalPages <= 0) return <></>;

	return (
		<div className='flex justify-center w-full p-2'>
			<ul className={styles.pagination}>
				{getPaginationItem({
					content: Action.PREV,
					disabled: currentPage === 1,
				})}
				{renderPaginationList()}
				{getPaginationItem({
					content: Action.NEXT,
					disabled: currentPage === totalPages,
				})}
			</ul>
		</div>
	);
};

function getPaginationIcon(action: Action) {
	switch (action) {
		case Action.PREV:
			return <BsChevronLeft />;
		case Action.NEXT:
			return <BsChevronRight />;
		default:
			return;
	}
}

export default Pagination;

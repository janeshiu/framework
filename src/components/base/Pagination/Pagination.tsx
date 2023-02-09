import { SizeType } from '@/types/style';
import classNames from 'classnames';
import React, { useState, MouseEvent, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Button from '../Button/Button';
import styles from './Pagination.module.scss';
import PaginationItem, { Action, ActionType } from './PaginationItem';

interface PaginationProps {
	totalPages: number;
	initialPage?: number;
	pageLength?: 7 | 9 | 11;
	size?: SizeType;
	onPageChanged: (currentPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
	totalPages,
	pageLength = 7,
	initialPage = 1,
	size = 'normal',
	onPageChanged,
}) => {
	const MAX_LENGTH = pageLength; // 奇數，不可小於 7
	const [currentPage, setCurrentPage] = useState<number>(initialPage);

	const handleChangePage = (
		event: MouseEvent<HTMLButtonElement>,
		action: number | ActionType
	) => {
		event.preventDefault();

		switch (action) {
			case Action.FIRST:
				setCurrentPage(1);
				break;
			case Action.PREV:
				setCurrentPage((prev) => --prev);
				break;
			case Action.NEXT:
				setCurrentPage((prev) => ++prev);
				break;
			case Action.LAST:
				setCurrentPage(totalPages);
				break;
			case Action.NONE:
				break;

			default:
				setCurrentPage(action as number);
		}
	};

	/**
	 * 抓取可顯示之頁碼列表
	 * @returns {number[]}
	 */
	const getPageNumbers = () => {
		const pageNumbers = [1, currentPage, totalPages];

		if (totalPages <= MAX_LENGTH) {
			for (let i = 2; i < totalPages; i++) {
				pageNumbers.push(i);
			}
			return pageNumbers;
		} else {
			const ACTIVE_RANGE = MAX_LENGTH - 4; // 5 中間頁碼最多可顯示的數量
			const EXTEND_RANGE = (ACTIVE_RANGE - 1) / 2; // 2 中間頁碼為準，左右各有幾個數量
			const SIDE_RANGE = ACTIVE_RANGE - EXTEND_RANGE - 1; // 邊界數量判斷用

			if (
				currentPage <= 1 + SIDE_RANGE ||
				currentPage >= totalPages - SIDE_RANGE
			) {
				for (let i = 1; i < (MAX_LENGTH - 1) / 2; i++) {
					pageNumbers.push(1 + i);
					pageNumbers.push(totalPages - i);
				}
			} else {
				for (let i = 1; i <= EXTEND_RANGE; i++) {
					pageNumbers.push(currentPage - i);
					pageNumbers.push(currentPage + i);
				}

				const SIDE_NUMBER = MAX_LENGTH - (ACTIVE_RANGE + 2); // 側邊可顯示之數量
				const SIDE_RANGE = ACTIVE_RANGE - EXTEND_RANGE; // 邊界數量判斷用

				if (currentPage <= 1 + SIDE_RANGE) {
					for (let i = 0; i < SIDE_NUMBER; i++) {
						pageNumbers.push(totalPages - i);
					}
				} else if (currentPage >= totalPages - SIDE_RANGE) {
					for (let i = 0; i < SIDE_NUMBER; i++) {
						pageNumbers.push(1 + i);
					}
				}
			}
		}

		return sortPageNumbers(pageNumbers);
	};

	/**
	 * 清除重複的數字，並將頁碼進行排序
	 * @param pageNumbers - 頁碼清單陣列
	 * @returns
	 */
	const sortPageNumbers = (pageNumbers: number[]) => {
		return pageNumbers
			.filter((pageNumber, index) => pageNumbers.indexOf(pageNumber) === index)
			.sort((a, b) => (a < b ? -1 : 1));
	};

	/**
	 *
	 * @returns
	 */
	const renderPaginationList = () => {
		const pageNumbers = getPageNumbers();
		const paginationChunks: [[number | Action.NONE]] = [[1]];

		pageNumbers.forEach((pageNumber, index) => {
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
		const paginationList = paginationChunks.map((pageItems) => {
			return pageItems.map((pageNumber) =>
				renderPaginationItem({
					content: pageNumber,
					disabled: pageNumber === Action.NONE,
				})
			);
		});
		return [...paginationList];
	};

	const renderPaginationItem = (options: {
		content: number | Action;
		disabled?: boolean;
	}) => {
		const { content, disabled } = options;

		return (
			<PaginationItem
				key={content}
				size={size}
				content={content}
				disabled={disabled}
				isActive={content === currentPage}
				onClick={handleChangePage}
			/>
		);
	};

	useEffect(() => {
		onPageChanged(currentPage);
	}, [currentPage]);

	if (totalPages <= 0) return <></>;

	return (
		<div className='flex justify-center w-full p-2'>
			<ul className={styles.pagination}>
				{renderPaginationItem({
					content: Action.PREV,
					disabled: currentPage === 1,
				})}
				{renderPaginationList()}
				{renderPaginationItem({
					content: Action.NEXT,
					disabled: currentPage === totalPages,
				})}
			</ul>
		</div>
	);
};

export default Pagination;

import useBreakpoints from '@/hooks/useBreakpoint';
import { SizeType } from '@/types/style';
import React, { useState, MouseEvent, useEffect } from 'react';
import styles from './Pagination.module.scss';
import PaginationItem, {
	Action,
	ActionType,
} from './PaginationItem/PaginationItem';

interface PaginationProps {
	totalPages: number;
	initialPage?: number;
	MAX_LENGTH?: 7 | 9 | 11; // 奇數，不可小於 7
	showFirstLastButton?: boolean;
	hideDisabledButton?: boolean;
	size?: SizeType;
	afterPageChanged?: (currentPage: number) => void;
}

/**
 * Pagination
 * @param totalPages - 總頁數
 * @param initialPage - 當前頁碼
 * @param MAX_LENGTH - 元件中間顯示的按鈕數量
 * @param showFirstLastButton - 是否顯示頁首/頁尾按鈕
 * @param hideDisabledButton - 是否隱藏無法被點擊之按鈕（前一頁、後一頁、頁首、頁尾）
 * @param size - 尺寸
 * @param afterPageChanged - callback after currentPage changed(useEffect)
 * @returns
 */
const Pagination: React.FC<PaginationProps> = ({
	totalPages,
	MAX_LENGTH = 7,
	initialPage = 1,
	showFirstLastButton = false,
	hideDisabledButton = false,
	size = 'normal',
	afterPageChanged,
}) => {
	const { isMobile } = useBreakpoints();
	const { currentPage, handleChangePage } = usePagination({
		totalPages,
		initialPage,
	});
	const { getPageNumbers, isButtonDisabled } = usePaginationRenderTool({
		currentPage,
		totalPages,
		MAX_LENGTH,
	});

	if (isMobile) {
		MAX_LENGTH = 7;
		size = 'small';
		showFirstLastButton = false;
	}

	/**
	 * 提供中間顯示的頁面號碼 與 ...
	 * @returns
	 */
	const renderPaginationList = () => {
		const pageNumbers = getPageNumbers();
		const paginationChunks: [[number | Action.NONE]] = [[1]];

		// 將有連號的頁碼進行分段，並在分段的間隔塞入 ...
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

		// 將排序好的頁碼清單轉換為元件
		const paginationList: JSX.Element[] = paginationChunks
			.flat()
			.map((pageNumber, index) => {
				return renderPaginationItem({
					content: pageNumber,
					key: pageNumber === Action.NONE ? `${pageNumber}${index}` : undefined,
				});
			});

		return paginationList;
	};

	const renderPaginationItem = (options: {
		content: number | Action;
		key?: string | number;
	}) => {
		const { content, key } = options;
		const actionValues: ActionType[] = Object.values(Action);
		const isDisabled = isButtonDisabled(content);
		const isButton =
			typeof content === 'string' &&
			actionValues.includes(`${content}`) &&
			content !== Action.NONE;

		return (
			<PaginationItem
				key={key ?? content}
				size={size}
				content={content}
				disabled={isDisabled}
				hidden={hideDisabledButton && isDisabled && isButton}
				isActive={content === currentPage}
				onClick={handleChangePage}
			/>
		);
	};

	useEffect(() => {
		totalPages > 0 && afterPageChanged && afterPageChanged(currentPage);
	}, [currentPage]);

	if (totalPages <= 0) return null;

	return (
		<div className='flex justify-center w-full p-2'>
			<ul className={styles.pagination}>
				{showFirstLastButton && renderPaginationItem({ content: Action.FIRST })}
				{renderPaginationItem({ content: Action.PREV })}

				{renderPaginationList()}

				{renderPaginationItem({ content: Action.NEXT })}
				{showFirstLastButton && renderPaginationItem({ content: Action.LAST })}
			</ul>
		</div>
	);
};

export default Pagination;

function usePagination(options: {
	totalPages: PaginationProps['totalPages'];
	initialPage: PaginationProps['initialPage'];
}) {
	const { totalPages, initialPage = 1 } = options;
	const [currentPage, setCurrentPage] = useState<number>(
		initialPage > totalPages || initialPage < 1 ? 1 : Math.round(initialPage)
	);

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

	return {
		currentPage,
		handleChangePage,
	};
}

function usePaginationRenderTool(options: {
	currentPage: number;
	totalPages: PaginationProps['totalPages'];
	MAX_LENGTH: PaginationProps['MAX_LENGTH'];
}) {
	const { currentPage, totalPages, MAX_LENGTH = 7 } = options;
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
	 * 確認目前顯示的按鈕是否可被鎖定
	 * @param content pagination content
	 * @returns
	 */
	const isButtonDisabled = (content: number | ActionType) => {
		switch (content) {
			case Action.FIRST:
			case Action.PREV:
				return currentPage === 1;
			case Action.NEXT:
			case Action.LAST:
				return currentPage === totalPages;
			case Action.NONE:
				return true;
			default:
				return false;
		}
	};

	return { getPageNumbers, isButtonDisabled };
}

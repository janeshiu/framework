import Button from '@/components/base/ButtonSeries/Button';
import { AlignType } from '@/types/style';
import { MouseEvent } from 'react';
import styles from '../../Table.module.scss';
import {
	TiArrowSortedUp,
	TiArrowSortedDown,
	TiArrowUnsorted,
} from 'react-icons/ti';

export interface TheadItemProps {
	align?: AlignType;
	sortable?: boolean;
	/** 升冪 or 降冪 */
	mathPower?: 'raise' | 'decrease' | 'unsorted';
	className?: string;
	children: string;

	onSort?: (event: MouseEvent<HTMLElement>) => void;
}

/**
 * TableHeader
 */
const TheadItem: React.FC<TheadItemProps> = ({
	align = 'left',
	sortable,
	mathPower = 'unsorted',
	className,
	children,
}) => {
	return (
		<div
			role='columnheader'
			className={`Thead__item ${styles[`align--${align}`]} ${className ?? ''}`}>
			<span>{children}</span>
			{sortable && (
				<Button pattern='ghost' icon={getMathPowerIcon(mathPower)} />
			)}
		</div>
	);
};

function getMathPowerIcon(mathPower?: TheadItemProps['mathPower']) {
	switch (mathPower) {
		case 'raise':
			return <TiArrowSortedUp />;
		case 'decrease':
			return <TiArrowSortedDown />;
		default:
			return <TiArrowUnsorted />;
	}
}

export default TheadItem;

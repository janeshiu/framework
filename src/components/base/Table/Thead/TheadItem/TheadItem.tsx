import Button from '@/components/base/ButtonSeries/Button';
import { AlignType, MathPowerType } from '@/types/style';
import styles from '../../Table.module.scss';
import {
	TiArrowSortedUp,
	TiArrowSortedDown,
	TiArrowUnsorted,
} from 'react-icons/ti';
import { MathPower } from '@/enums/tableHeader';

export interface TheadItemProps<> {
	id: string;
	align?: AlignType;
	sortable?: boolean;
	/** 升冪 or 降冪 */
	mathPower?: MathPowerType;
	className?: string;
	children: string;

	onSort?: (id: TheadItemProps['id'], mathPower: MathPowerType) => void;
}

/**
 * TableHeader
 */
const TheadItem: React.FC<TheadItemProps> = ({
	align = 'left',
	sortable,
	mathPower = MathPower.UNSORTED,
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

function getMathPowerIcon(mathPower?: MathPowerType) {
	switch (mathPower) {
		case MathPower.RAISE:
			return <TiArrowSortedUp />;
		case MathPower.DECREASE:
			return <TiArrowSortedDown />;
		default:
			return <TiArrowUnsorted />;
	}
}

export default TheadItem;

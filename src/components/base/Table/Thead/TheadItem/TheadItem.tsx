import Button from '@/components/base/ButtonSeries/Button';
import { AlignType } from '@/types/style';
import styles from '../../Table.module.scss';
import {
	TiArrowSortedUp,
	TiArrowSortedDown,
	TiArrowUnsorted,
} from 'react-icons/ti';
import { MathPower } from '@/enums/tableHeader';

export type ExistMathPower = Exclude<MathPower, MathPower.UNSORTED>;

export interface TheadItemProps {
	id: string;
	align?: AlignType;
	sortable?: boolean;
	/** 升冪 or 降冪 */
	mathPower?: MathPower;
	className?: string;
	children: string;

	onSort?: (id: TheadItemProps['id'], nextPower: ExistMathPower) => void;
}

/**
 * TableHeader
 */
const TheadItem: React.FC<TheadItemProps> = ({
	id,
	align = 'left',
	sortable,
	mathPower = MathPower.UNSORTED,
	className,
	children,

	onSort,
}) => {
	const powerOrder = [MathPower.DECREASE, MathPower.RAISE];

	const handleSort = () => {
		const indexOfPower = powerOrder.indexOf(mathPower);
		const nextPowerIndex = indexOfPower < 0 ? 0 : indexOfPower ^ 1;
		onSort && onSort(id, powerOrder[nextPowerIndex] as ExistMathPower);
	};

	return (
		<div
			role='columnheader'
			className={`Thead__item ${styles[`align--${align}`]} ${className ?? ''}`}>
			<span>{children}</span>
			{sortable && (
				<Button
					pattern='ghost'
					icon={getMathPowerIcon(mathPower)}
					onClick={handleSort}
				/>
			)}
		</div>
	);
};

function getMathPowerIcon(mathPower?: MathPower) {
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

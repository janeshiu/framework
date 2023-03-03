import { AlignType } from '@/types/style';
import { ReactNode } from 'react';
import styles from '../Table.module.scss';

export interface TdataProps {
	className?: string;
	align?: AlignType;
	children: ReactNode;
}

/**
 * Tdata
 */
const Tdata: React.FC<TdataProps> = ({
	className,
	align = 'left',
	children,
}) => {
	return (
		<span
			role='cell'
			className={`${styles[`align--${align}`]} ${className ?? ''}`}>
			{children}
		</span>
	);
};

export default Tdata;

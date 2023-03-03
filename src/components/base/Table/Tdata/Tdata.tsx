import { AlignType } from '@/types/style';
import { ReactNode } from 'react';
import styles from '../Table.module.scss';

export interface TdataProps {
	align?: AlignType;
	children: ReactNode;
}

/**
 * Tdata
 */
const Tdata: React.FC<TdataProps> = ({ align = 'left', children }) => {
	return (
		<span role='cell' className={styles[`align--${align}`]}>
			{children}
		</span>
	);
};

export default Tdata;

import { ReactElement } from 'react';
import { TdataProps } from '../Tdata/Tdata';

export interface TrowProps<T = TdataProps> {
	children: ReactElement<T>;
}

/**
 * Trow
 */
const Trow: React.FC<TrowProps> = ({ children }) => {
	return <div role='row'>{children}</div>;
};

export default Trow;

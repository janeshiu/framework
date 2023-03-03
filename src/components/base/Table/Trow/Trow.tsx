import { ReactElement } from 'react';
import { TdataProps } from '../Tdata/Tdata';

export interface TrowProps<T = TdataProps> {
	children: ReactElement<T> | ReactElement<T>[];
}

/**
 * Trow
 */
const Trow: React.FC<TrowProps> = ({ children }) => {
	return (
		<div role='row' className='Trow'>
			{children}
		</div>
	);
};

export default Trow;

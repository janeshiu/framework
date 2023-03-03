import { ReactElement } from 'react';
import { TdataProps } from '../Tdata/Tdata';

export interface TrowProps<T = TdataProps> {
	className?: string;
	children: ReactElement<T> | ReactElement<T>[];
}

/**
 * Trow
 */
const Trow: React.FC<TrowProps> = ({ className, children }) => {
	return (
		<div role='row' className={`Trow ${className}`}>
			{children}
		</div>
	);
};

export default Trow;

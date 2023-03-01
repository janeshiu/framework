import { ReactElement } from 'react';
import { TrowProps } from '../Trow/Trow';

export interface TfootProps<T = TrowProps> {
	children: ReactElement<T> | ReactElement<T>[];
}

/**
 * Tfoot
 */
const Tfoot: React.FC<TfootProps> = ({ children }) => {
	return <div role='rowgroup'>{children}</div>;
};

export default Tfoot;

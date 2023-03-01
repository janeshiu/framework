import { ReactElement } from 'react';
import { TrowProps } from '../Trow/Trow';

export interface TbodyProps<T = TrowProps> {
	children: ReactElement<T> | ReactElement<T>[];
}

/**
 * Tbody
 */
const Tbody: React.FC<TbodyProps> = ({ children }) => {
	return <div role='rowgroup'>{children}</div>;
};

export default Tbody;

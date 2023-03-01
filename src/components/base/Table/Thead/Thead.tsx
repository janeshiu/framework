import { ReactElement } from 'react';
import styles from '../Table.module.scss';
import { TheadItemProps } from './TheadItem/TheadItem';

export interface TheadProps<T = TheadItemProps> {
	children: ReactElement<T> | ReactElement<T>[];
}

/**
 * Thead
 */
const Thead: React.FC<TheadProps> = ({ children }) => {
	return (
		<div role='rowgroup' className={styles[`thead`]}>
			{children}
		</div>
	);
};

export default Thead;

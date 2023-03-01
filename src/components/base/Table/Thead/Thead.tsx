import { ReactElement } from 'react';
import styles from '../Table.module.scss';

export interface TheadProps {
	children: ReactElement;
}

/**
 * TableHeader
 */
const Thead: React.FC<TheadProps> = ({ children }) => {
	return (
		<div role='rowgroup' className={styles[`thead`]}>
			{children}
		</div>
	);
};

export default Thead;

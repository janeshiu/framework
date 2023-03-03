import { CSSProperties, ReactElement } from 'react';
import styles from '../Table.module.scss';
import { TheadItemProps } from './TheadItem/TheadItem';

export interface TheadProps<T = TheadItemProps> {
	style?: CSSProperties;
	children: ReactElement<T> | ReactElement<T>[];
}

/**
 * Thead
 */
const Thead: React.FC<TheadProps> = ({ style, children }) => {
	return (
		<div role='rowgroup' className={`Thead`} style={style}>
			{children}
		</div>
	);
};

export default Thead;

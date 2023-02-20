import { transformElement } from '@/utils/element';
import { Children, ReactElement } from 'react';
import styles from './Dropdown.module.scss';
import { DropdownItemProps } from './DropdownItem/DropdownItem';

export interface DropdownProps {
	children: ReactElement<DropdownItemProps> | ReactElement<DropdownItemProps>[];
}

/**
 * DropdownItem
 */
const Dropdown: React.FC<DropdownProps> = ({ children }) => {
	return (
		<ul className={`shape--round ${styles.dropdown}`}>
			{Children.map(children, (elem) => transformElement(elem, elem.props))}
		</ul>
	);
};

export default Dropdown;

import styles from './Dropdown.module.scss';
import DropdownItem, { DropdownItemProps } from './DropdownItem/DropdownItem';

export interface DropdownProps {
	isOpen?: boolean;
	list: DropdownItemProps[];
}

/**
 * DropdownItem
 */
const Dropdown: React.FC<DropdownProps> = ({ isOpen, list }) => {
	if (list.length === 0) return null;

	return (
		<ul className={`shape--round ${styles.dropdown}`}>
			{list.map((itemProps) => (
				<DropdownItem {...itemProps} />
			))}
		</ul>
	);
};

export default Dropdown;

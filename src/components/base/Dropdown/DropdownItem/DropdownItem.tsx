import { LinkItem } from '@/types/link';
import LinkTo from '../../LinkTo/LinkTo';
import styles from '../Dropdown.module.scss';

export interface DropdownItemProps extends LinkItem {}

/**
 * DropdownItem
 */
const DropdownItem: React.FC<DropdownItemProps> = ({
	content,
	href,
	onClick,
}) => {
	return (
		<li className={styles.item}>
			<LinkTo href={href || '#'} onClick={onClick}>
				{content}
			</LinkTo>
		</li>
	);
};

export default DropdownItem;

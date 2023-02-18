import { LinkItem } from '@/types/link';
import { MouseEvent, useState } from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs';
import Dropdown from '../../Dropdown/Dropdown';
import LinkTo from '../../LinkTo/LinkTo';
import styles from '../Navbar.module.scss';

export interface NavbarItemProps extends LinkItem {
	extend?: boolean;
	list?: LinkItem[];
}

/**
 * NavbarItem
 */
const NavbarItem: React.FC<NavbarItemProps> = ({
	extend,
	content,
	href,
	list,
	onClick,
}) => {
	const hasDropdown = list && list?.length > 0;

	if (!href && !hasDropdown) {
		throw `<NavbarItem>: Please provide href or list either.`;
	}

	return (
		<li className={styles.item} aria-expanded={extend}>
			<LinkTo
				href={hasDropdown || !href ? '#' : href}
				className={styles[`item--content`]}
				onClick={onClick}>
				<span>{content}</span>
				{hasDropdown && <BsFillCaretDownFill size={14} />}
			</LinkTo>
			{list && <Dropdown list={list} />}
		</li>
	);
};

export default NavbarItem;

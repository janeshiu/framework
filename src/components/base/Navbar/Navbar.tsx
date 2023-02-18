import { MouseEvent, useState } from 'react';
import styles from './Navbar.module.scss';
import NavbarItem, { NavbarItemProps } from './NavbarItem/NavItem';

export interface NavbarProps {
	list: NavbarItemProps[];
}

/**
 * NavItem
 */
const Navbar: React.FC<NavbarProps> = ({ list }) => {
	type TElem = typeof list[number];
	type TElemContent = Extract<TElem, { content: string }>;
	type TContents = TElemContent['content'];
	const [extend, setExtend] = useState<TContents>('');

	if (list.length === 0) return null;

	const handleClick = (
		e: MouseEvent<HTMLElement>,
		itemProps: NavbarItemProps
	) => {
		const { content, onClick } = itemProps;
		setExtend((prev) => {
			if (prev === content) return '';
			return content;
		});

		onClick && onClick(e);
	};

	return (
		<ul className={styles.navbar}>
			{list.map((itemProps) => {
				const { content, list } = itemProps;
				const hasList = list && list.length > 0;
				return (
					<NavbarItem
						{...itemProps}
						extend={extend === content && hasList}
						onClick={(e) => {
							handleClick(e, itemProps);
						}}
					/>
				);
			})}
		</ul>
	);
};

export default Navbar;

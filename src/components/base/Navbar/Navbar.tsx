import {
	Children,
	FocusEvent,
	MouseEvent,
	ReactElement,
	useCallback,
	useState,
} from 'react';
import styles from './Navbar.module.scss';
import { NavbarItemProps } from './NavbarItem/NavbarItem';
import { transformElement } from '@/utils/element';

export interface NavbarProps {
	ariaLabel?: string;
	ariaLabelBy?: string;
	/** please provide NavbarItem(s) as children*/
	children: ReactElement<NavbarItemProps> | ReactElement<NavbarItemProps>[];
}
/**
 * NavItem
 * please provide NavbarItem(s) as children
 */
const Navbar: React.FC<NavbarProps> = ({
	ariaLabel,
	ariaLabelBy,
	children,
}) => {
	const [extend, setExtend] = useState<string>('');
	const memoRenderChildren = useCallback(() => {
		return Children.map(children, (elem) => {
			const { children, href, content, onClick } = elem.props;
			const hasDropdown = children;
			const itemProps = {
				content,
				children,
				href: hasDropdown ? '#' : href,
				extend: hasDropdown && extend === content,
				onClick: (e: MouseEvent<HTMLElement>) => {
					handleClick(e, { content, onClick });
				},
				onBlur: handleCloseExtend,
			};
			return transformElement(elem, itemProps);
		});
	}, [children, extend]);

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

	const handleCloseExtend = (e: FocusEvent<HTMLElement>) => {
		setExtend('');
	};

	return (
		<nav aria-label={ariaLabel} aria-labelledBy={ariaLabelBy}>
			<ul className={styles.navbar}>{memoRenderChildren()}</ul>
		</nav>
	);
};

export default Navbar;

import { LinkItem } from '@/types/link';
import { FocusEvent, ReactElement } from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs';
import Button from '../../ButtonSeries/Button';
import { DropdownProps } from '../../Dropdown/Dropdown';
import LinkTo from '../../LinkTo/LinkTo';
import styles from '../Navbar.module.scss';

export interface NavbarItemProps extends LinkItem {
	extend?: boolean;
	/** Please provide <Dropdown/> component as children */
	children?: ReactElement<DropdownProps>;
	onBlur?: (event: FocusEvent<HTMLElement>) => void;
	pattern?: '' | 'button';
}

/**
 * NavbarItem
 */
const NavbarItem: React.FC<NavbarItemProps> = ({
	extend,
	content,
	href,
	children,

	pattern,
	onClick,
	onBlur,
}) => {
	const hasDropdown = children;

	if (!href && !hasDropdown) {
		throw `<NavbarItem>: Please provide href or <Dropdown></Dropdown> as children either.`;
	}

	const renderItemContent = () => {
		return (
			<>
				<span>{content}</span>
				{hasDropdown && <BsFillCaretDownFill size={14} />}
			</>
		);
	};

	if (pattern === 'button') {
		return (
			<li className={styles.item} aria-expanded={extend} onBlur={onBlur}>
				<LinkTo
					href={hasDropdown || !href ? '#' : href}
					className={styles[`item--content`]}
					onClick={onClick}>
					<Button
						content={renderItemContent()}
						shape='circle'
						color='warning'
						size='large'
					/>
				</LinkTo>
				{children}
			</li>
		);
	}

	return (
		<li className={styles.item} aria-expanded={extend} onBlur={onBlur}>
			<LinkTo
				href={hasDropdown || !href ? '#' : href}
				className={styles[`item--content`]}
				onClick={onClick}>
				{renderItemContent()}
			</LinkTo>
			{children}
		</li>
	);
};

export default NavbarItem;

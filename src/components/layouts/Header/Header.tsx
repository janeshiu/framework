import Dropdown from '@/components/base/Dropdown/Dropdown';
import DropdownItem from '@/components/base/Dropdown/DropdownItem/DropdownItem';
import LinkTo from '@/components/base/LinkTo/LinkTo';
import Logo from '@/components/base/Logo/Logo';
import Navbar from '@/components/base/Navbar/Navbar';
import NavbarItem from '@/components/base/Navbar/NavbarItem/NavbarItem';
import styles from './Header.module.scss';

interface HeaderProps {}

/**
 * Header
 */
const Header: React.FC<HeaderProps> = ({}) => {
	return (
		<header className={styles.header}>
			<LinkTo href='/'>
				<Logo>展碁雲端服務</Logo>
			</LinkTo>
			<Navbar>
				<NavbarItem content='首頁' href='/' />
				<NavbarItem content='用戶列表' href='/' />
				<NavbarItem content='經銷商專區' href='/'>
					<Dropdown>
						<DropdownItem content='訂單管理' href='/' />
						<DropdownItem content='授權品項管理' href='/' />
						<DropdownItem content='帳號管理' href='/' />
					</Dropdown>
				</NavbarItem>
				<NavbarItem content='Jerry' href='/' pattern='button'>
					<Dropdown>
						<DropdownItem content='帳號管理' href='/' />
						<DropdownItem content='登出' href='/' />
					</Dropdown>
				</NavbarItem>
			</Navbar>
		</header>
	);
};

export default Header;

import usePath from '@/hooks/usePath/usePath';
import { LinkItem } from '@/types/link';
import classNames from 'classnames';
import LinkTo from '../../LinkTo/LinkTo';
import styles from '../Tabs.module.scss';

export interface TabItemProps extends LinkItem {
	className?: string;
	href: string;
}

/**
 * TabItem
 * component will detect whether href is as same as window.location.href or not
 */
const TabItem: React.FC<TabItemProps> = ({
	className,
	href,
	content,
	disabled,
	onClick,
}) => {
	const { isCurrentPage } = usePath(href);
	const baseClass = classNames({
		[styles[`tabItem`]]: true,
		[styles[`tabItem--active`]]: isCurrentPage,
		[styles[`tabItem--disabled`]]: disabled,
		[className ?? '']: true,
	});

	return (
		<li className={baseClass}>
			<LinkTo
				href={href}
				className={styles[`item--content`]}
				onClick={onClick}
				disabled={disabled}>
				{content}
			</LinkTo>
		</li>
	);
};

export default TabItem;

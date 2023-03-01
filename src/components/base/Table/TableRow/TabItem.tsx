import usePath from '@/hooks/usePath/usePath';
import { LinkItem } from '@/types/link';
import classNames from 'classnames';
import Button from '../../ButtonSeries/Button';
import LinkTo from '../../LinkTo/LinkTo';
import styles from '../Tabs.module.scss';

export interface TabItemProps extends LinkItem {
	className?: string;
	/** isActive will be set if you use this component with <Tabs></Tabs> correctly */
	isActive?: boolean;
	href?: string;
}

/**
 * TabItem
 * component will detect whether href is as same as window.location.href or not
 */
const TabItem: React.FC<TabItemProps> = ({
	className,
	href,
	content,
	isActive,
	disabled,
	onClick,
}) => {
	const { isCurrentPage } = usePath(href);
	const baseClass = classNames({
		[styles[`tabItem`]]: true,
		[styles[`tabItem--active`]]: isActive ?? isCurrentPage,
		[styles[`tabItem--disabled`]]: disabled,
		[className ?? '']: true,
	});

	return (
		<li className={baseClass}>
			{isActive !== undefined ? (
				<Button
					className={styles[`item--content`]}
					content={content}
					pattern='ghost'
					size='large'
					disabled={disabled}
					onClick={onClick}
				/>
			) : (
				<LinkTo
					className={styles[`item--content`]}
					href={href || '#'}
					onClick={onClick}
					disabled={disabled}>
					{content}
				</LinkTo>
			)}
		</li>
	);
};

export default TabItem;

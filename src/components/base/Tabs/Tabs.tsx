import { Children, Key, MouseEvent, ReactElement } from 'react';
import styles from './Tabs.module.scss';
import { TabItemProps } from './TabItem/TabItem';
import { transformElement } from '@/utils/element';

export interface TabsProp<T = TabItemProps> {
	ariaLabel?: string;
	ariaLabelBy?: string;
	/** please provide TabItem(s) as children */
	children: ReactElement<T> | ReactElement<T>[];

	/** control tab by useState, component will active child which key is as same as tab */
	tab?: ReactElement<T>['key'] | Array<ReactElement<T>>[number]['key'];
	/** this property will set to TabItem onClick automatically if you use tab property */
	onTabItemClick?: (newTab: TabsProp['tab']) => void;
}
/**
 * Tabs
 * please provide TabItem(s) as children
 */
const Tabs: React.FC<TabsProp> = ({
	ariaLabel,
	ariaLabelBy,
	children,

	tab,
	onTabItemClick,
}) => {
	let TabItems = children;

	if (tab !== undefined) {
		TabItems = Children.map(children, (child) => {
			return transformElement(child, {
				...child.props,
				isActive: tab === child.key,
				onClick: (event: MouseEvent<HTMLElement>) => {
					onTabItemClick && onTabItemClick(child.key);
					child.props.onClick && child.props.onClick(event);
				},
			});
		});
	}

	return (
		<nav aria-label={ariaLabel} aria-labelledby={ariaLabelBy}>
			<ul className={styles.tabs}>{TabItems}</ul>
		</nav>
	);
};

export default Tabs;

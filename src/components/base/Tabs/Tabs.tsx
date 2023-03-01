import { ReactElement } from 'react';
import styles from './Tabs.module.scss';
import { TabItemProps } from './TabItem/TabItem';

export interface TabsProp {
	ariaLabel?: string;
	ariaLabelBy?: string;
	/** please provide TabItem(s) as children */
	children: ReactElement<TabItemProps> | ReactElement<TabItemProps>[];
}
/**
 * Tabs
 * please provide TabItem(s) as children
 */
const Tabs: React.FC<TabsProp> = ({ ariaLabel, ariaLabelBy, children }) => {
	return (
		<nav aria-label={ariaLabel} aria-labelledby={ariaLabelBy}>
			<ul className={styles.tabs}>{children}</ul>
		</nav>
	);
};

export default Tabs;

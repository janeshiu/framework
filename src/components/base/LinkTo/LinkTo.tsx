import Link, { LinkProps } from 'next/link';
import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

// LinkProps will conflict with storybook(JSDoc)
export interface LinkToProps extends Omit<typeof Link, 'legacyBehavior'> {
	className?: string;
	target?: HTMLAttributeAnchorTarget;
	children: ReactNode;
	href: string;
}

/**
 * LinkTo 使用方式同 Link(next/link)
 */
const LinkTo: React.FC<LinkToProps> = ({
	className,
	target,
	children,

	...props
}) => {
	return (
		<Link {...props} className={`${className ?? ''}`} legacyBehavior>
			<a target={target}>{children}</a>
		</Link>
	);
};

export default LinkTo;

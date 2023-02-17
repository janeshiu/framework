import Link, { LinkProps } from 'next/link';
import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

export interface LinkToProps extends Omit<LinkProps, 'legacyBehavior'> {
	className?: string;
	target?: HTMLAttributeAnchorTarget;
	children: ReactNode;
}

/**
 * LinkTo 使用方式同 Link(next/link)
 * @param LinkProps - same as next/link
 * @param children - children
 * @param className - className
 * @returns
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

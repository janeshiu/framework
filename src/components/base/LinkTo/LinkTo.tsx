import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

interface LinkToProps extends LinkProps {
	children: ReactNode;
	className?: string;
}

/**
 * LinkTo 使用方式同 Link(next/link)
 * @param LinkProps - same as next/link
 * @param children - children
 * @param className - className
 * @returns
 */
const LinkTo: React.FC<LinkToProps> = ({
	as,
	children,
	href,
	replace,
	scroll,
	shallow,
	passHref,
	...rest
}) => {
	const { className } = rest;

	return (
		<Link
			as={as}
			href={href}
			passHref={passHref}
			replace={replace}
			scroll={scroll}
			shallow={shallow}
			className={`${className ?? ''}`}>
			{children}
		</Link>
	);
};

export default LinkTo;

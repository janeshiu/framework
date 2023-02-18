import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { HTMLAttributeAnchorTarget, MouseEvent, ReactNode } from 'react';

export interface LinkToProps extends Omit<LinkProps, 'legacyBehavior'> {
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
	onClick,

	...props
}) => {
	const { href } = props;
	const router = useRouter();
	const handleClick = (
		e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
		href: string
	) => {
		e.preventDefault();

		onClick && onClick(e);

		if (href && href !== '#') {
			router.push(href);
		}
	};

	return (
		<Link {...props} legacyBehavior>
			<a
				target={target}
				className={`w-full h-full inline-block ${className ?? ''}`}
				onClick={(e) => {
					handleClick(e, href);
				}}>
				{children}
			</a>
		</Link>
	);
};

export default LinkTo;

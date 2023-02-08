import { SizeType } from '@/types/style';
import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';
import styles from './Heading.module.scss';

interface LinkToProps extends LinkProps {
	children: ReactNode;
	className?: string;
}

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

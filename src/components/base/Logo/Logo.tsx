import Image, { ImageProps } from 'next/image';
import { ReactNode } from 'react';

// LinkProps will conflict with storybook(JSDoc)
export interface LogoProps {
	src?: ImageProps['src'];
	children?: ReactNode;
	className?: string;
}

/**
 * Logo
 */
const Logo: React.FC<LogoProps> = ({ src, className, children }) => {
	if (!src && !children) return null;

	return (
		<div className={`space-x-1 ${className ?? ''}`}>
			{src && <Image src={src} alt='logo' />}
			{children}
		</div>
	);
};

export default Logo;

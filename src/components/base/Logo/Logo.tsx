import Image, { ImageProps } from 'next/image';
import { ReactNode } from 'react';
import styles from './Logo.module.scss';

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
		<div className={`${styles.logo} ${className ?? ''}`}>
			{src && <Image src={src} alt='logo' fill />}
			<span>{children}</span>
		</div>
	);
};

export default Logo;

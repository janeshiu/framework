import { SizeType } from '@/types/style';
import React, { ReactNode } from 'react';
import LinkTo from '../../LinkTo/LinkTo';
import styles from './Label.module.scss';

interface LabelTitleProps {
	children: ReactNode;
	size?: SizeType;
	required?: boolean;
	href?: string;
	linkContent?: ReactNode;
}

const LabelTitle: React.FC<LabelTitleProps> = ({
	required = false,
	children,
	size = 'normal',
	href,
	linkContent,
}) => {
	if ((!href && linkContent) || (href && !linkContent))
		throw `<LabelTitle> : Please provide ${!href ? 'href' : 'linkContent'}.`;

	return (
		<div className={`text-normal--${size} ${styles.labelTitle}`}>
			<span>
				{children}
				{required && <sup className='text-error font-bold'>*</sup>}
			</span>
			{href && (
				<LinkTo href={href} className={`text-small--${size}`}>
					{linkContent}
				</LinkTo>
			)}
		</div>
	);
};

export default LabelTitle;

import { SizeType } from '@/types/style';
import React, { ReactNode } from 'react';
import LinkTo from '../../LinkTo/LinkTo';
import styles from './Label.module.scss';

export interface LabelTitleProps {
	content: ReactNode;
	size?: SizeType;
	required?: boolean;
	href?: string;
	linkContent?: ReactNode;
	className?: string;
}

const LabelTitle: React.FC<LabelTitleProps> = ({
	required = false,
	content,
	size = 'normal',
	href,
	linkContent,
	className,
}) => {
	if ((!href && linkContent) || (href && !linkContent))
		throw `<LabelTitle> : Please provide ${!href ? 'href' : 'linkContent'}.`;

	return (
		<div
			className={`text-normal--${size} ${styles.labelTitle} ${
				className ?? ''
			}`}>
			<span>
				{content}
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

import { SizeType } from '@/types/style';
import React, { ReactNode } from 'react';
import LinkTo from '../../../LinkTo/LinkTo';
import styles from '../Label.module.scss';

export interface LabelTitleProps {
	/** text of label title */
	content: ReactNode;
	/** size of label title */
	size?: SizeType;
	/** does label display '*' or not */
	required?: boolean;

	/** does label hide Link or not */
	hideLink?: boolean;
	/** href of link */
	href?: string;
	/** text of link */
	linkContent?: ReactNode;
	className?: string;
}

/**
 * LabelTitle - 使用於 Label 或 在 Form 內要呈現的標題...等
 * @param content - text of label title
 * @param size - size of label title
 * @param required - does label display '*' or not
 * @param href - href of link
 * @param linkContent - text of link
 * @param className - className
 * @returns
 */
const LabelTitle: React.FC<LabelTitleProps> = ({
	required = false,
	content,
	size = 'normal',
	hideLink,
	href,
	linkContent,
	className,
}) => {
	if (!hideLink && ((!href && linkContent) || (href && !linkContent)))
		throw `<LabelTitle> : Please provide ${!href ? 'href' : 'linkContent'}.`;

	return (
		<div
			className={`text-normal--${size} ${styles.labelTitle} ${
				className ?? ''
			}`}>
			<span>
				{content}
				{required && <sup className='text-error'>*</sup>}
			</span>
			{!hideLink && href && (
				<LinkTo href={href} className={`text-small--${size}`}>
					{linkContent}
				</LinkTo>
			)}
		</div>
	);
};

export default LabelTitle;

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

/**
 * LabelTitle - 使用於 Label 或 在 Form 內要呈現的標題...等
 * @param content - label 呈現的文字
 * @param size - 尺寸
 * @param required - 必填
 * @param href - 連結位置
 * @param linkContent - 連結呈現文字
 * @param className - className
 * @returns
 */
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

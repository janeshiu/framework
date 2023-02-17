import { HeadingSize } from '@/enums/style';
import { AlignType, HeadingSizeType } from '@/types/style';
import { ReactNode } from 'react';
import Button, { ButtonProps } from '../ButtonSeries/Button';
import styles from './Heading.module.scss';

interface HeadingProps {
	type?: HeadingSizeType;
	className?: string;
	align?: AlignType;
	buttonProps?: ButtonProps;
	children: ReactNode;
}

/**
 * 主要標題文字
 * @param type - Heading 尺寸類型
 * @param className - className
 * @param align - 標題位置
 * @param buttonProps - buttonProps
 * @param children - children
 * @returns
 */
const Heading: React.FC<HeadingProps> = ({
	type = HeadingSize.SECONDARY,
	className,
	align = type === 'primary' ? 'center' : 'left',
	buttonProps,
	children,
}) => {
	const HeadingTag = getHeadingTag(type);
	const size = buttonProps?.size ?? getDefaultButtonSize(type);
	const isCenter = align === 'center';
	const hasButton = !!buttonProps;

	return (
		<HeadingTag
			className={`heading ${styles.heading} ${styles[align]} ${
				className ?? ''
			}`}>
			{/* 僅供置中對齊用，實際不會顯示在畫面上 */}
			{isCenter && hasButton && (
				<Button {...buttonProps} size={size} className='invisible mr-auto' />
			)}
			<span>{children}</span>
			{hasButton && <Button {...buttonProps} size={size} />}
		</HeadingTag>
	);
};

function getHeadingTag(type: HeadingSizeType) {
	switch (type) {
		case HeadingSize.PRIMARY:
			return 'h1';
		case HeadingSize.SECONDARY:
			return 'h2';
		case HeadingSize.TERTIARY:
			return 'h3';
		case HeadingSize.QUATERNARY:
		default:
			return 'h4';
	}
}

function getDefaultButtonSize(type: HeadingSizeType): ButtonProps['size'] {
	switch (type) {
		case HeadingSize.PRIMARY:
		case HeadingSize.SECONDARY:
			return 'large';
		case HeadingSize.TERTIARY:
			return 'normal';
		case HeadingSize.QUATERNARY:
		default:
			return 'small';
	}
}

export default Heading;

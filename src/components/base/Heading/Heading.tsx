import { Align, TypeSize } from '@/enums/style';
import { SizeType } from '@/types/style';
import { ReactNode } from 'react';
import Button, { ButtonProps } from '../Button/Button';
import styles from './Heading.module.scss';

interface HeadingProps {
	type?: SizeType;
	className?: string;
	align?: `${Align}`;
	buttonProps?: Omit<ButtonProps, 'size' | 'pattern'>;
	buttonSize?: ButtonProps['size'];
	buttonPattern?: ButtonProps['pattern'];
	children: ReactNode;
}

const Heading: React.FC<HeadingProps> = ({
	type = TypeSize.SECONDARY,
	className,
	align = type === 'primary' ? 'center' : 'left',
	buttonProps,
	buttonSize = 'normal',
	buttonPattern = 'primary',
	children,
}) => {
	const HeadingTag = getHeadingTag(type);
	const isCenter = align === 'center';
	const hasButton = !!buttonProps;

	return (
		<HeadingTag
			className={`${styles.heading} ${styles[type]} ${styles[align]} ${
				className ?? ''
			}`}>
			{/* 僅供置中用 */}
			{isCenter && hasButton && (
				<Button
					{...buttonProps}
					size={buttonSize}
					pattern={buttonPattern}
					className='invisible mr-auto'
				/>
			)}
			<span>{children}</span>
			{hasButton && (
				<Button {...buttonProps} size={buttonSize} pattern={buttonPattern} />
			)}
		</HeadingTag>
	);
};

function getHeadingTag(type: SizeType) {
	switch (type) {
		case TypeSize.PRIMARY:
			return 'h1';
		case TypeSize.SECONDARY:
			return 'h2';
		case TypeSize.TERTIARY:
			return 'h3';
		case TypeSize.QUATERNARY:
			return 'h4';
		default:
			return 'h4';
	}
}

export default Heading;

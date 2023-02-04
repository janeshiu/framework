import { Align, HeadingSize } from '@/enums/style';
import { HeadingSizeType } from '@/types/style';
import { ReactNode } from 'react';
import Button, { ButtonProps } from '../Button/Button';
import styles from './Heading.module.scss';

interface HeadingProps {
	type?: HeadingSizeType;
	className?: string;
	align?: `${Align}`;
	buttonProps?: Omit<ButtonProps, 'size' | 'pattern'>;
	buttonSize?: ButtonProps['size'];
	buttonPattern?: ButtonProps['pattern'];
	children: ReactNode;
}

const Heading: React.FC<HeadingProps> = ({
	type = HeadingSize.SECONDARY,
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
		<HeadingTag className={`heading ${styles[align]} ${className ?? ''}`}>
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

export default Heading;

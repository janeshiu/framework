import { Align, TypeSize } from '@/enums/style';
import { ReactNode } from 'react';
import styles from './Heading.module.scss';

type HeadingType = `${TypeSize}`;

interface HeadingProps {
	type?: HeadingType;
	className?: string;
	align?: `${Align}`;
	children: ReactNode;
}

const Heading: React.FC<HeadingProps> = ({
	type = TypeSize.SECONDARY,
	className,
	align = type === 'primary' ? 'center' : 'left',
	children,
}) => {
	const HeadingTag = getHeadingTag(type);

	return (
		<HeadingTag
			className={`${styles.heading} ${styles[type]} ${styles[align]} ${
				className ?? ''
			}`}>
			{children}
		</HeadingTag>
	);
};

function getHeadingTag(type: HeadingType) {
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

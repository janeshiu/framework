import { SizeType } from '@/types/style';
import { transformElement } from '@/utils/element';
import classNames from 'classnames';
import Link from 'next/link';
import React, { MouseEvent, ReactElement, ReactNode } from 'react';
import styles from './Label.module.scss';
import LabelTitle, { LabelTitleProps } from './LabelTitle';

interface LabelProps extends LabelTitleProps {
	children: ReactNode;
	labelStyle?: 'row' | 'column';
	labelTitleClassName?: string;
	className?: string;
	onClick?: (event: MouseEvent<HTMLLabelElement>) => void;
}

const Label: React.FC<LabelProps> = ({
	required = false,
	size = 'normal',
	children,
	className,

	labelStyle = 'column',

	onClick,

	labelTitleClassName,
	...labelTitleProps
}) => {
	const LABEL_TITLE_PROPS = {
		...labelTitleProps,
		required,
		size,
	};

	return (
		<label
			className={`${styles.label} ${styles[`label--${labelStyle}`]} ${
				className ?? ''
			}`}
			onClick={onClick}>
			<LabelTitle
				{...LABEL_TITLE_PROPS}
				className={`px-2 ${labelTitleClassName ?? ''}`}
			/>
			{children}
		</label>
	);
};

export default Label;

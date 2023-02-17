import classNames from 'classnames';
import React, { MouseEvent, ReactNode } from 'react';
import styles from './Label.module.scss';
import LabelTitle, { LabelTitleProps } from './LabelTitle/LabelTitle';

interface LabelProps extends LabelTitleProps {
	children: ReactNode;

	/** does label and children display inline or not */
	row?: boolean;
	/** is label and children reverse or not */
	reverse?: boolean;

	className?: string;
	/** labelTitle className */
	labelTitleClassName?: string;

	onClick?: (event: MouseEvent<HTMLLabelElement>) => void;
}

/**
 * Label - 使用時請包住 input element 或相關元件
 * @param children - Label children
 * @param row - does label and children display inline or not
 * @param reverse - is label and children reverse or not
 * @param labelTitleClassName - labelTitle className
 * @param className - className
 * @param onClick - onClick
 * @returns
 */
const Label: React.FC<LabelProps> = ({
	children,
	className,

	row,
	reverse,

	onClick,

	labelTitleClassName,
	...props
}) => {
	const baseClass = classNames({
		[styles[`label`]]: true,
		[styles[`row`]]: row,
		[styles[`reverse`]]: reverse,
	});

	return (
		<label className={`${baseClass} ${className ?? ''}`} onClick={onClick}>
			<LabelTitle {...props} className={`px-2 ${labelTitleClassName ?? ''}`} />
			{children}
		</label>
	);
};

export default Label;

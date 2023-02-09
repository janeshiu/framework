import classNames from 'classnames';
import React, { MouseEvent, ReactNode } from 'react';
import styles from './Label.module.scss';
import LabelTitle, { LabelTitleProps } from './LabelTitle';

interface LabelProps extends LabelTitleProps {
	children: ReactNode;

	row?: boolean;
	reverse?: boolean;

	labelTitleClassName?: string;
	className?: string;
	onClick?: (event: MouseEvent<HTMLLabelElement>) => void;
}

/**
 * Label - 使用時請包住 input element 或相關元件
 * @param children - Label children
 * @param row - 控制 label & children 是否以一行顯示
 * @param reverse - 控制 label & children 位置是否顛倒
 * @param labelTitleClassName - className for labelTitle
 * @param className - className
 * @param onClick - onClick
 * @returns
 */
const Label: React.FC<LabelProps> = ({
	required = false,
	size = 'normal',
	children,
	className,

	row = false,
	reverse = false,

	onClick,

	labelTitleClassName,
	...labelTitleProps
}) => {
	const LABEL_TITLE_PROPS = {
		...labelTitleProps,
		required,
		size,
	};

	const baseClass = classNames({
		[styles[`label`]]: true,
		[styles[`row`]]: row,
		[styles[`reverse`]]: reverse,
	});

	return (
		<label className={`${baseClass} ${className ?? ''}`} onClick={onClick}>
			<LabelTitle
				{...LABEL_TITLE_PROPS}
				className={`px-2 ${labelTitleClassName ?? ''}`}
			/>
			{children}
		</label>
	);
};

export default Label;

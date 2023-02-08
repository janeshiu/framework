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
 * @param row 控制 label & children 是否以一行顯示
 * @param reverse 控制 label & children 位置是否顛倒
 * @param children 請提供 input 元件
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

import classNames from 'classnames';
import Link from 'next/link';
import React, { MouseEvent, ReactElement, ReactNode } from 'react';
import styles from './Label.module.scss';

interface LabelProps {
	forName: string;
	content?: ReactNode | string;
	required?: boolean;
	children: ReactNode;

	href?: string;
	linkContent?: ReactNode;

	icon?: JSX.Element;
	iconPosition?: 'left' | 'right';

	labelStyle?: 'row' | 'column';
	childLocation?: 'top' | 'bottom';
	className?: string;
	onClick?: (event: MouseEvent<HTMLLabelElement>) => void;
	onClickIcon?: (event: MouseEvent<HTMLLabelElement>) => void;
}

const Label: React.FC<LabelProps> = ({
	forName,
	content,
	required = false,
	children,
	href,
	linkContent,
	icon,
	iconPosition = 'left',
	labelStyle = 'column',
	childLocation = 'bottom',
	className,
	onClick,
	onClickIcon,
}) => {
	if (!icon && !content)
		throw '<Label> : Please provide icon or content either.';

	if ((!href && linkContent) || (href && !linkContent))
		throw `<Label> : Please provide ${!href ? 'href' : 'linkContent'}.`;

	const iconReactObject = icon && React.Children.only(icon);
	const clonedIcon =
		iconReactObject &&
		React.cloneElement(iconReactObject, {
			size: '20',
		});

	const locationClass = classNames({
		'order-last': childLocation !== 'bottom',
		'pr-2': childLocation === 'bottom',
		'pl-2': childLocation !== 'bottom',
	});

	function handleClickIcon(event: MouseEvent<HTMLLabelElement>) {
		event.preventDefault();

		onClickIcon && onClickIcon(event);
	}

	function renderLabel() {
		if (!content) return;

		return (
			<aside>
				<span className={`${styles['label--name']} ${locationClass}`}>
					{content}
					{required && <sup className='text-error font-bold'>*</sup>}
				</span>
				{href && <Link href={href}>{linkContent}</Link>}
			</aside>
		);
	}

	function renderIcon() {
		if (!clonedIcon) return;

		return (
			<span
				className={`${styles.icon} ${locationClass} ${
					onClickIcon && styles['icon--clickable']
				} ${styles[`icon--${iconPosition}`]}`}
				onClick={handleClickIcon}>
				{clonedIcon}
			</span>
		);
	}

	return (
		<div className={styles.wrapper}>
			<label
				id={forName}
				className={`${styles.label} ${styles[`label--${labelStyle}`]} ${
					className ?? ''
				}`}
				onClick={onClick}>
				{icon ? renderIcon() : renderLabel()}
				{children}
			</label>
		</div>
	);
};

export default Label;

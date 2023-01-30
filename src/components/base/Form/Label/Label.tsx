import classNames from 'classnames';
import React, { MouseEvent, ReactElement, ReactNode } from 'react';
import styles from './Label.module.scss';

interface LabelProps {
	content?: ReactNode | string;
	forName: string;
	icon?: JSX.Element;
	iconPosition?: 'left' | 'right';
	required?: boolean;
	labelStyle?: 'row' | 'column';
	childLocation?: 'top' | 'bottom';
	className?: string;
	children: ReactNode;
	onClick?: (event: MouseEvent<HTMLLabelElement>) => void;
	onClickIcon?: (event: MouseEvent<HTMLLabelElement>) => void;
}

const Label: React.FC<LabelProps> = ({
	content,
	forName,
	icon,
	iconPosition = 'left',
	required = false,
	labelStyle = 'column',
	childLocation = 'bottom',
	className,
	children,
	onClick,
	onClickIcon,
}) => {
	if (!icon && !content)
		throw '<Label> : Please provide icon or content either.';

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

	function renderContent() {
		if (!content) return;

		return (
			<span className={`${styles['label--name']} ${locationClass}`}>
				{content}
				{required && <sup className='text-error font-bold'>*</sup>}
			</span>
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
				{renderIcon()}
				{!icon && renderContent()}

				{children}
			</label>
		</div>
	);
};

export default Label;

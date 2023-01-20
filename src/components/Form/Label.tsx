import React, { MouseEvent, ReactElement, ReactNode } from 'react';
import styles from './Form.module.scss';

interface LabelProps {
	content: ReactNode | string;
	forName: string;
	icon?: JSX.Element;
	iconPosition?: 'left' | 'right';
	required?: boolean;
	labelStyle?: 'row' | 'column';
	childPosition?: 'inside' | 'outside';
	childLocation?: 'top' | 'bottom';
	className?: string;
	children: ReactNode;
	onClick?: (event: MouseEvent<HTMLLabelElement>) => void;
}

const Label: React.FC<LabelProps> = ({
	content,
	forName,
	icon,
	iconPosition = 'left',
	required = false,
	labelStyle = 'column',
	childPosition = 'inside',
	childLocation = 'bottom',
	className,
	children,
	onClick,
}) => {
	const iconReactObject = icon && React.Children.only(icon);
	const clonedIcon =
		iconReactObject &&
		React.cloneElement(iconReactObject, {
			size: '20',
		});

	if (childPosition === 'inside') {
		return (
			<div className={styles[`wrapper--${labelStyle}`]}>
				<label
					id={forName}
					className={`w-full ${styles[`label--${labelStyle}`]} ${
						className ?? ''
					}`}
					onClick={onClick}>
					{childLocation === 'top' && children}

					{clonedIcon ? (
						<span
							className={`${styles.icon} ${styles[`icon--${iconPosition}`]}`}>
							{clonedIcon}
						</span>
					) : (
						content
					)}

					{required && !clonedIcon && <sup className='text-error'>*</sup>}
					{childLocation === 'bottom' && children}
				</label>
			</div>
		);
	}

	return (
		<div
			className={`${
				clonedIcon ? styles[`wrapper--icon-${iconPosition}`] : ''
			} ${styles[`wrapper--${labelStyle}`]}`}>
			{childLocation === 'top' && children}
			<label
				id={forName}
				className={`${styles[`label--${labelStyle}`]} ${className ?? ''}`}
				onClick={onClick}>
				{clonedIcon ? (
					<span className={`${styles.icon} ${styles[`icon--${iconPosition}`]}`}>
						{clonedIcon}
					</span>
				) : (
					content
				)}
				{required && !clonedIcon && <sup className='text-error'>*</sup>}
			</label>
			{childLocation === 'bottom' && children}
		</div>
	);
};

export default Label;

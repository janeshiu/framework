import { transformElement } from '@/utils/element';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import Loading from '../../Loading/Loading';
import styles from '../Modal.module.scss';

const SuccessIcon = dynamic(() =>
	import('react-icons/tb').then(
		(bootstrapIcons) => bootstrapIcons.TbCircleCheck
	)
);

const ErrorIcon = dynamic(() =>
	import('react-icons/tb').then((bootstrapIcons) => bootstrapIcons.TbCircleX)
);

const WarningIcon = dynamic(() =>
	import('react-icons/tb').then(
		(bootstrapIcons) => bootstrapIcons.TbAlertCircle
	)
);

const InfoIcon = dynamic(() =>
	import('react-icons/tb').then((bootstrapIcons) => bootstrapIcons.TbInfoCircle)
);

const QuestionIcon = dynamic(() =>
	import('react-icons/ri').then(
		(bootstrapIcons) => bootstrapIcons.RiQuestionLine
	)
);

const icon = {
	success: <SuccessIcon />,
	error: <ErrorIcon />,
	warning: <WarningIcon />,
	info: <InfoIcon />,
	question: <QuestionIcon />,
	undefined: undefined,
};

export type ModalIconType = keyof typeof icon;

export interface ModalBodyProps {
	/** show icon type or not */
	iconType?: ModalIconType;
	/** is loading or not */
	loading?: boolean;
	className?: string;
	children: ReactNode;
}

/**
 * ModalBody - 彈出視窗內容
 */
const ModalBody: React.FC<ModalBodyProps> = ({
	iconType = 'error',
	loading = true,
	className,
	children,
}) => {
	const Icon = transformElement(icon[`${iconType}`], { size: 36 });
	const iconClass = classNames({
		[styles[`modal__icon`]]: true,
		[styles[`${iconType}`]]: true,
	});

	return (
		<div
			className={`${styles[`modal__body`]} text-large--normal ${
				className ?? ''
			}`}>
			{loading ? (
				<Loading />
			) : (
				icon && <span className={iconClass}>{Icon}</span>
			)}
			{children}
		</div>
	);
};

export default ModalBody;

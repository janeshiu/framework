import { transformElement } from '@/utils/element';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
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

export interface ModalIconProps {
	/** show icon type or not */
	iconType?: ModalIconType;
	/** is loading or not */
	loading?: boolean;
}

/**
 * ModalIcon - 彈出視窗內顯示的 Icon
 */
const ModalIcon: React.FC<ModalIconProps> = ({ iconType, loading }) => {
	const Icon = transformElement(icon[`${iconType}`], { size: 36 });
	const iconClass = classNames({
		[styles[`modal__icon`]]: true,
		[styles[`${iconType}`]]: true,
	});

	if (!iconType && !loading) return null;

	return <span className={iconClass}>{loading ? <Loading /> : Icon}</span>;
};

export default ModalIcon;

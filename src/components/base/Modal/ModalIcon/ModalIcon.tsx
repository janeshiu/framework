import { transformElement } from '@/utils/element';
import classNames from 'classnames';
import Loading from '../../Loading/Loading';
import styles from '../Modal.module.scss';
import { RiQuestionLine as QuestionIcon } from 'react-icons/ri';
import {
	TbCircleCheck as SuccessIcon,
	TbCircleX as ErrorIcon,
	TbAlertCircle as WarningIcon,
	TbInfoCircle as InfoIcon,
} from 'react-icons/tb';

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

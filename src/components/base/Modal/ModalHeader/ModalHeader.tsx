import classNames from 'classnames';
import { BsXLg } from 'react-icons/bs';
import Button from '../../ButtonSeries/Button';
import Heading from '../../Heading/Heading';
import styles from '../Modal.module.scss';

export interface ModalHeaderProps {
	title?: string;
	showCloseButton?: boolean;
	onClose: () => void;
}

/**
 * ModalHeader - 彈出視窗 標題
 */
const ModalHeader: React.FC<ModalHeaderProps> = ({
	title,
	showCloseButton = true,
	onClose,
}) => {
	const noContent = !title && !showCloseButton;

	if (noContent) return null;

	const baseClass = classNames({
		[styles[`modal__header`]]: true,
		[styles[`closeOnly`]]: !title && showCloseButton,
	});

	return (
		<div className={`${baseClass}`}>
			{title && <Heading type='quaternary'>{title}</Heading>}
			{showCloseButton && (
				<Button
					icon={<BsXLg />}
					shape='circle'
					pattern='ghost'
					closeHoverEffect={false}
					onClick={onClose}
				/>
			)}
		</div>
	);
};

export default ModalHeader;

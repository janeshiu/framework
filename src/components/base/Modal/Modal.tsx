import useDisableScroll from '@/hooks/useDisableScroll';
import useTimer from '@/hooks/useTimer';
import classNames from 'classnames';
import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';
import ModalBody, { ModalBodyProps } from './ModalBody/ModalBody';
import ModalHeader, { ModalHeaderProps } from './ModalHeader/ModalHeader';

export interface ModalProps
	extends ModalHeaderProps,
		Omit<ModalBodyProps, 'children'> {
	/** does modal open or not */
	isOpen: boolean;

	className?: string;
	headerClassName?: ModalHeaderProps['className'];
	bodyClassName?: ModalBodyProps['className'];
	message?: ModalBodyProps['children'];

	/** can backdrop be click to close modal */
	backdropClickDisabled?: boolean;
	/** close modal automatically by timer */
	autoCloseModal?: boolean;
	/** time before close modal */
	duration?: number;
	/** can user close modal by clicking X button or backdrop */
	manualClose?: boolean;

	/** 請盡量使用 ModalFooter 去組出想要呈現的模樣 */
	children?: ReactNode;
}

/**
 * Modal - 彈出視窗
 * @param isOpen - is modal open or not
 * @param className
 *
 * @param title - title of modal
 * @param showCloseButton - show close button or not
 * @param headerClassName
 *
 * @param iconType - display type of icon
 * @param loading - is loading?
 * @param bodyClassName
 * @param children
 *
 * @param backdropClickDisabled - can backdrop be click to close modal
 * @param autoCloseModal - close modal automatically by timer
 * @param closeCountdown - time before close modal
 */
const Modal: React.FC<ModalProps> = ({
	/** for header */
	title,
	showCloseButton,
	headerClassName,

	/** for body */
	iconType,
	loading,
	align,
	bodyClassName,
	message,

	isOpen,
	backdropClickDisabled,
	autoCloseModal,
	duration = 1500,
	manualClose = true,
	className,
	children,
	onClose,
}) => {
	const [mounted, setMounted] = useState(true);
	const containerClass = classNames({
		[styles[`modal__container`]]: true,
		['shape--round']: true,
	});
	const headerProps = {
		title,
		showCloseButton: !manualClose ? false : showCloseButton,
		className: headerClassName,
		onClose,
	};
	const bodyProps = {
		iconType,
		loading,
		align,
		className: bodyClassName,
		children: message,
	};

	const handleBackdropClick = () => {
		if (backdropClickDisabled || !manualClose) return;

		onClose();
	};

	useDisableScroll(isOpen);

	useEffect(() => {
		let timer: NodeJS.Timeout;

		if (isOpen && autoCloseModal && duration >= 0) {
			timer = setTimeout(
				() => {
					onClose();
				},
				duration >= 0 ? duration : 0
			);
		}

		return () => {
			clearTimeout(timer);
		};
	}, [isOpen, autoCloseModal, duration]);

	useEffect(() => {
		setMounted(true);
		return () => setMounted(false);
	}, []);

	return !mounted || !isOpen
		? null
		: createPortal(
				<div className={`${styles[`modal__wrapper`]} ${className ?? ''}`}>
					<div className={styles.backdrop} onClick={handleBackdropClick} />
					<div className={`${containerClass}`}>
						<ModalHeader {...headerProps} />
						<ModalBody {...bodyProps} />
						{children}
					</div>
				</div>,
				document.getElementById('modalPortal')!
		  );
};

export default Modal;

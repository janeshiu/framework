import Modal, { ModalProps } from '../Modal';

export interface ModalLoadingProps
	extends Pick<
		ModalProps,
		| 'isOpen'
		| 'loading'
		| 'iconType'
		| 'onClose'
		| 'message'
		| 'autoCloseModal'
		| 'duration'
		| 'manualClose'
	> {
	iconType?: 'success' | 'error';
}

/**
 * ModalLoading - 彈出視窗 api
 */
const ModalLoading: React.FC<ModalLoadingProps> = ({ ...props }) => {
	return <Modal {...props} showCloseButton={false} />;
};

export default ModalLoading;

import { ReactNode } from 'react';
import styles from '../Modal.module.scss';

export interface ModalFooterProps {
	children: ReactNode;
	className?: string;
}

/**
 * ModalHeader - 彈出視窗 標題
 */
const ModalFooter: React.FC<ModalFooterProps> = ({ children, className }) => {
	return (
		<div className={`${styles[`modal__footer`]} ${className ?? ''}`}>
			{children}
		</div>
	);
};

export default ModalFooter;

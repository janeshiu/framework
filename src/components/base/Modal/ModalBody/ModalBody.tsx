import { AlignType } from '@/types/style';
import { transformElement } from '@/utils/element';
import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from '../Modal.module.scss';
import ModalIcon, { ModalIconProps } from '../ModalIcon/ModalIcon';

export interface ModalBodyProps extends ModalIconProps {
	className?: string;
	align?: AlignType;
	children: ReactNode;
}

/**
 * ModalBody - 彈出視窗內容
 */
const ModalBody: React.FC<ModalBodyProps> = ({
	className,
	align = 'center',
	children,

	...modalIconProps
}) => {
	return (
		<div
			className={`${styles[`modal__body`]} text-large--normal ${
				className ?? ''
			}`}>
			<ModalIcon {...modalIconProps} />

			<span className={`align--${align}`}>{children}</span>
		</div>
	);
};

export default ModalBody;

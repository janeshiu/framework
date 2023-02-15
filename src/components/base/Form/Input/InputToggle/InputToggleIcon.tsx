import styles from './InputToggle.module.scss';
import React from 'react';
import classNames from 'classnames';
import { ColorType, ShapeType, SizeType } from '@/types/style';
import { upperCaseFirstLetter } from '@/utils/base';
import { IconSize } from '@/enums/style';
import { toIconSizeKey, transformElement } from '@/utils/element';
import { InputBaseProps } from '../InputBase/InputBase';
import dynamic from 'next/dynamic';

const BsSquare = dynamic(() =>
	import('react-icons/bs').then((bootstrapIcons) => bootstrapIcons.BsSquare)
);

const BsCheckSquare = dynamic(() =>
	import('react-icons/bs').then(
		(bootstrapIcons) => bootstrapIcons.BsCheckSquare
	)
);

const BsSquareFill = dynamic(() =>
	import('react-icons/bs').then((bootstrapIcons) => bootstrapIcons.BsSquareFill)
);

const BsCheckSquareFill = dynamic(() =>
	import('react-icons/bs').then(
		(bootstrapIcons) => bootstrapIcons.BsCheckSquareFill
	)
);

const BsCircle = dynamic(() =>
	import('react-icons/bs').then((bootstrapIcons) => bootstrapIcons.BsCircle)
);

const BsCheckCircle = dynamic(() =>
	import('react-icons/bs').then(
		(bootstrapIcons) => bootstrapIcons.BsCheckCircle
	)
);

const BsCircleFill = dynamic(() =>
	import('react-icons/bs').then((bootstrapIcons) => bootstrapIcons.BsCircleFill)
);

const BsCheckCircleFill = dynamic(() =>
	import('react-icons/bs').then(
		(bootstrapIcons) => bootstrapIcons.BsCheckCircleFill
	)
);

const BsCheckRadio = dynamic(() =>
	import('react-icons/bs').then(
		(bootstrapIcons) => bootstrapIcons.BsRecordCircle
	)
);

const BsCheckRadioFill = dynamic(() =>
	import('react-icons/bs').then(
		(bootstrapIcons) => bootstrapIcons.BsRecordCircleFill
	)
);

export const inputIcon = {
	BsSquare: <BsSquare />,
	BsCheckSquare: <BsCheckSquare />,
	BsSquareFill: <BsSquareFill />,
	BsCheckSquareFill: <BsCheckSquareFill />,

	BsCircle: <BsCircle />,
	BsCheckCircle: <BsCheckCircle />,
	BsCircleFill: <BsCircleFill />,
	BsCheckCircleFill: <BsCheckCircleFill />,

	BsRadio: <BsCircle />,
	BsRadioFill: <BsCircleFill />,
	BsCheckRadio: <BsCheckRadio />,
	BsCheckRadioFill: <BsCheckRadioFill />,
};
export type InputIconNameType = keyof typeof inputIcon;

export interface InputToggleIconProps {
	type: Extract<InputBaseProps['type'], 'radio' | 'checkbox'>;
	checked?: boolean;
	disabled?: boolean;

	/** size of component */
	size?: SizeType;

	/** shape of component */
	shape?: Exclude<ShapeType, 'round'>;

	/** fill color of component if it's checked */
	fill?: boolean;

	/** color of component */
	color?: ColorType;

	/** hideIcon or not */
	hideIcon?: boolean;
}

/**
 * InputToggle 顯示之 icon
 * @param type - radio or checkbox
 * @param checked - checked or not
 * @param disabled - disabled or not
 *
 * @param size - size of component
 * @param shape - shape of component, radio will keep circle
 * @param fill - fill color of component if it's checked
 * @param color - color of component
 * @param hideIcon - hideIcon or not
 * @returns
 */
const InputToggleIcon: React.FC<InputToggleIconProps> = ({
	type,
	checked = false,
	disabled = false,

	size = 'normal',
	shape = 'square',
	fill = false,
	color = 'primary',
	hideIcon = false,
}) => {
	const checkStatus = checked ? 'Check' : '';
	const fillStatus = (!checked ? false : fill) ? 'fill' : '';

	const iconName = [
		'Bs',
		upperCaseFirstLetter(checkStatus),
		upperCaseFirstLetter(type === 'radio' ? type : shape),
		upperCaseFirstLetter(fillStatus),
	].join('') as InputIconNameType;

	const iconClass = classNames({
		[`color--${color}`]: true,
		[styles[`icon`]]: true,
		[styles[`icon--check`]]: checked,
		[styles[`icon--disabled`]]: disabled,
	});

	const clonedIcon = transformElement(inputIcon[iconName], {
		size: IconSize[toIconSizeKey(size)] + 2,
	});

	return hideIcon ? <></> : <span className={iconClass}>{clonedIcon}</span>;
};

export default InputToggleIcon;

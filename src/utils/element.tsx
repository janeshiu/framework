import dynamic from 'next/dynamic';
import React from 'react';

const BsSquare = dynamic(() =>
	import('react-icons/bs').then((bootstrapIcons) => bootstrapIcons.BsSquare)
);

const BsCheckSquare = dynamic(() =>
	import('react-icons/bs').then(
		(bootstrapIcons) => bootstrapIcons.BsCheckSquare
	)
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

const BsCheckCircleFill = dynamic(() =>
	import('react-icons/bs').then(
		(bootstrapIcons) => bootstrapIcons.BsCheckCircleFill
	)
);

export const inputIcon = {
	BsSquare: <BsSquare />,
	BsCheckSquare: <BsCheckSquare />,
	BsSquareFill: <BsSquare />,
	BsCheckSquareFill: <BsCheckSquareFill />,

	BsCircle: <BsCircle />,
	BsCheckCircle: <BsCheckCircle />,
	BsCircleFill: <BsCircle />,
	BsCheckCircleFill: <BsCheckCircleFill />,
};

/**
 * 將目標 element 內容調整同 setting
 * @param element 目標 element
 * @param option 要設定的參數內容
 * @returns
 */
export function transformElement(
	element: JSX.Element | undefined,
	setting: { [key: string]: any }
) {
	if (!element) return;

	const elementReactObject = React.Children.only(element);
	const clonedElement = React.cloneElement(elementReactObject, setting);

	return clonedElement;
}

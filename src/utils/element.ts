import { IconSize } from '@/enums/style';
import { SizeType } from '@/types/style';
import React from 'react';

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

/**
 * 將 SizeType 轉換為 enum IconSize key
 * @param {SizeType} size
 * @returns
 */
export function toIconSizeKey(size: SizeType) {
	return size.toUpperCase() as keyof typeof IconSize;
}

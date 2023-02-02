import { Colors, Filling, Shape, HeadingSize, Size } from '@/enums/style';

export type BadgeColor =
	| Colors.PRIMARY
	| Colors.SUCCESS
	| Colors.ERROR
	| Colors.WARNING
	| Colors.INFO
	| Colors.SECONDARY;

export type ShapeType = `${Shape}`;

export type HeadingSizeType = `${HeadingSize}`;

export type FillingType = `${Filling}`;

export type SizeType = `${Size}`;

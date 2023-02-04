import {
	Colors,
	Filling,
	Shape,
	HeadingSize,
	Size,
	Horizontal,
	Vertical,
	Pattern,
} from '@/enums/style';

export type BadgeColor =
	| Colors.PRIMARY
	| Colors.SUCCESS
	| Colors.ERROR
	| Colors.WARNING
	| Colors.INFO
	| Colors.SECONDARY;

export type ColorType = `${Colors}`;

export type ShapeType = `${Shape}`;

export type HeadingSizeType = `${HeadingSize}`;

export type FillingType = `${Filling}`;

export type SizeType = `${Size}`;

export type PatternType = `${Pattern}`;

export type HorizontalType = `${Horizontal}`;

export type VerticalType = `${Vertical}`;

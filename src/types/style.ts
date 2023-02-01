import { Colors, Shape } from '@/enums/style';

export type BadgeColor =
	| Colors.PRIMARY
	| Colors.SUCCESS
	| Colors.ERROR
	| Colors.WARNING
	| Colors.INFO
	| Colors.SECONDARY;

export type ShapeType = `${Shape}`;

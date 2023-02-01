export const enum Colors {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	TERTIARY = 'tertiary',
	QUATERNARY = 'quaternary',

	SUCCESS = 'success',
	ERROR = 'error',
	HELPER = 'helper',
	INFO = 'info',
	WARNING = 'warning',
}

export type BadgeColor =
	| Colors.PRIMARY
	| Colors.SUCCESS
	| Colors.ERROR
	| Colors.WARNING
	| Colors.INFO
	| Colors.SECONDARY;

export const enum TypeSize {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	TERTIARY = 'tertiary',
	QUATERNARY = 'quaternary',
}

export const enum Shape {
	CIRCLE = 'circle',
	ROUND = 'round',
	SQUARE = 'square',
}

export type ShapeType = `${Shape}`;

export const enum Align {
	LEFT = 'left',
	CENTER = 'center',
	RIGHT = 'right',
}

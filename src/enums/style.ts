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
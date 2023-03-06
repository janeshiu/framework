import { CSSProperties, ReactElement } from 'react';
import { TdataProps } from '../Tdata/Tdata';

export interface TrowProps<T = TdataProps> {
	className?: string;
	gridTemplateCols?: string;
	children: ReactElement<T> | ReactElement<T>[];
}

/**
 * Trow
 */
const Trow: React.FC<TrowProps> = ({
	gridTemplateCols,
	className,
	children,
}) => {
	return (
		<div
			role='row'
			className={`Trow ${className ?? ''}`}
			style={
				gridTemplateCols
					? ({ '--grid-cols': gridTemplateCols } as CSSProperties)
					: undefined
			}>
			{children}
		</div>
	);
};

export default Trow;

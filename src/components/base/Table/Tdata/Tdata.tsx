import { ReactNode } from 'react';

export interface TdataProps {
	children: ReactNode;
}

/**
 * Tdata
 */
const Tdata: React.FC<TdataProps> = ({ children }) => {
	return <span role='cell'>{children}</span>;
};

export default Tdata;

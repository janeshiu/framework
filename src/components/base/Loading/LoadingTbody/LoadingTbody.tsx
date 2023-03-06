import { ReactElement } from 'react';
import Tbody from '../../Table/Tbody/Tbody';
import Tdata, { TdataProps } from '../../Table/Tdata/Tdata';
import Trow, { TrowProps } from '../../Table/Trow/Trow';
import styles from '../Loading.module.scss';

export interface LoadingTbodyProps {
	length: number;
}

/**
 * LoadingTbody
 */
const LoadingTbody: React.FC<LoadingTbodyProps> = ({ length }) => {
	function LoadingTdata(props: { row: number }) {
		const { row } = props;
		return (
			<Tdata
				className={`shape--round ${styles.loadingTbody} ${
					styles[`loadingTbody__style${row}`]
				}`}
				children=''
			/>
		);
	}

	return (
		<Tbody>
			<Trow>
				{Array.from({ length }, (v, iTdata) => (
					<LoadingTdata row={0} key={`${0}_${iTdata}`} />
				))}
			</Trow>
			<Trow>
				{Array.from({ length }, (v, iTdata) => (
					<LoadingTdata row={1} key={`${1}_${iTdata}`} />
				))}
			</Trow>
			<Trow>
				{Array.from({ length }, (v, iTdata) => (
					<LoadingTdata row={2} key={`${2}_${iTdata}`} />
				))}
			</Trow>
		</Tbody>
	);
};

export default LoadingTbody;

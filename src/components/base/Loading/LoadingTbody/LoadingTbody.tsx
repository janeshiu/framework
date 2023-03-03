import Tbody from '../../Table/Tbody/Tbody';
import Tdata from '../../Table/Tdata/Tdata';
import Trow from '../../Table/Trow/Trow';
import styles from '../Loading.module.scss';

export interface LoadingTbodyProps {
	length: number;
}

/**
 * LoadingTbody
 */
const LoadingTbody: React.FC<LoadingTbodyProps> = ({ length }) => {
	function LoadingTdata() {
		return (
			<Tdata className={`shape--round ${styles.loadingTbody}`} children='' />
		);
	}

	return (
		<Tbody className='animate-pulse'>
			<Trow className='animate-pulse'>
				{Array(length).fill(<LoadingTdata />)}
			</Trow>
			<Trow className='animate-pulse animation-delay-500'>
				{Array(length).fill(<LoadingTdata />)}
			</Trow>
			<Trow className='animate-pulse '>
				{Array(length).fill(<LoadingTdata />)}
			</Trow>
		</Tbody>
	);
};

export default LoadingTbody;

import styles from './Loading.module.scss';
import { VscLoading } from 'react-icons/vsc';

export interface LoadingProps {}

/**
 * Loading - not complete 暫用
 */
const Loading: React.FC<LoadingProps> = ({}) => {
	return (
		<span className={styles.loading}>
			<VscLoading className='animate-spin' size={50} />
		</span>
	);
};

export default Loading;

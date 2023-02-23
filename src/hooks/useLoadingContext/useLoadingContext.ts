import { LoadingContext } from '@/context/LoadingContext';
import { useContext } from 'react';

// 懶得重複載入 useContext & LoadingContext
const useLoadingContext = () => {
	return useContext(LoadingContext);
};

export default useLoadingContext;

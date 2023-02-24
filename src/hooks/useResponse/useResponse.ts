import { LoadingActions } from '@/reducers/LoadingReducer';
import { LoadingContext, LoadingState } from '@/context/LoadingContext';
import { BaseResponse } from '@/types/service';
import useLoadingContext from '../useLoadingContext/useLoadingContext';
import { useContext } from 'react';

const useResponse = () => {
	const { loadingDispatch } = useLoadingContext();

	/** 執行 API 前開啟資料讀取中彈出視窗 */
	const handleAwaitResponse = () => {
		loadingDispatch({
			type: LoadingActions.LOADING,
		});
	};

	/** api 回傳成功情況下使用 */
	const handleSuccess = (options?: {
		showMessage?: boolean;
		message?: LoadingState['message'];
		destination?: LoadingState['destination'];
	}) => {
		if (options === undefined) {
			loadingDispatch({
				type: LoadingActions.SUCCESS,
			});
			return;
		}

		const { showMessage, message, destination } = options;

		if (showMessage || !!destination) {
			loadingDispatch({
				type: LoadingActions.SUCCESS_WITH_MESSAGE,
				message,
				destination,
			});

			return;
		}

		loadingDispatch({
			type: LoadingActions.SUCCESS,
		});
	};

	/** api 回傳不成功情況下使用 */
	const handleError = (
		apiResponse: BaseResponse,
		options?: { message?: string }
	) => {
		const { error, redirect, destination, message } = apiResponse;
		if (!error) return;

		if (redirect) {
			loadingDispatch({
				type: LoadingActions.AUTH_EXPIRED,
				destination,
			});
			return;
		}

		loadingDispatch({
			type: LoadingActions.ERROR,
			message: options?.message ?? message,
		});
	};

	return { handleAwaitResponse, handleError, handleSuccess };
};

export default useResponse;

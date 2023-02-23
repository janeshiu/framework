import { LoadingState } from '@/context/LoadingContext';
import { ErrorMessage } from '@/enums/message';
import { routes, PathName } from '@/enums/router';

export const enum LoadingActions {
	LOADING = 'LOADING',
	SUCCESS = 'SUCCESS',
	SUCCESS_WITH_MESSAGE = 'SUCCESS_WITH_MESSAGE',
	ERROR = 'ERROR',
	CLOSE = 'CLOSE',
	AUTH_EXPIRED = 'AUTH_EXPIRED',
}

export interface LoadingPayload {
	type: LoadingActions;
	message?: string;
	destination?: string;
	isAutoClose?: boolean;
	clearTimer?: NodeJS.Timeout;
}

const loadingReducer = (
	state: LoadingState,
	action: LoadingPayload
): LoadingState => {
	const { clearTimer } = action;

	if (clearTimer) {
		clearTimeout(clearTimer);
	}

	switch (action.type) {
		case LoadingActions.LOADING:
			return {
				isOpen: true,
				isLoading: true,
				message: '資料傳輸中，請稍候⋯⋯',
			};
		case LoadingActions.SUCCESS_WITH_MESSAGE:
			return {
				isOpen: true,
				isAutoClose: action.isAutoClose ?? true,
				status: 'success',
				message: action.message ?? '執行成功',
				destination: action.destination,
			};
		case LoadingActions.SUCCESS:
		case LoadingActions.CLOSE:
			return {
				isOpen: false,
				isAutoClose: true,
				destination: action.destination,
			};
		case LoadingActions.ERROR:
			return {
				isOpen: true,
				isAutoClose: action.isAutoClose,
				status: 'error',
				message: action.message ?? '執行失敗',
				destination: action.destination,
			};
		case LoadingActions.AUTH_EXPIRED:
			return {
				isOpen: true,
				isAutoClose: true,
				status: 'error',
				message: ErrorMessage.AUTH_EXPIRED,
				destination: action.destination ?? routes[PathName.LOGIN].url,
			};
		default:
			return state;
	}
};

export default loadingReducer;

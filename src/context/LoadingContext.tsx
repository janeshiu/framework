import ModalLoading, {
	ModalLoadingProps,
} from '@/components/base/Modal/ModalLoading/ModalLoading';
import loadingReducer, {
	LoadingActions,
	LoadingPayload,
} from '@/reducers/LoadingReducer';
import { useRouter } from 'next/router';
import { createContext, Dispatch, ReactNode, useReducer } from 'react';

export interface LoadingState {
	isOpen: boolean;
	isLoading?: boolean;
	isAutoClose?: boolean;
	status?: 'success' | 'error';
	message?: string;
	destination?: string | 'reload';
}

const initialLoadingState: LoadingState = {
	isLoading: false,
	isOpen: false,
	isAutoClose: false,
	status: undefined,
	message: undefined,
};

interface LoadingContext {
	loadingState: LoadingState;
	loadingDispatch: Dispatch<LoadingPayload>;
	// handleAuthExpiredRedirect: (options: {
	// 	timerSetter: (timer: NodeJS.Timeout) => void;
	// 	destination: string;
	// }) => void;
}
export const LoadingContext = createContext<LoadingContext>(
	{} as LoadingContext
);

interface LoadingContextProps {
	children?: ReactNode;
}

const LoadingContextProvider: React.FC<LoadingContextProps> = ({
	children,
}) => {
	const router = useRouter();
	const [loadingState, loadingDispatch] = useReducer(
		loadingReducer,
		initialLoadingState
	);
	const { isOpen, isLoading, isAutoClose, status, message, destination } =
		loadingState;

	const hasDestination = !!destination;

	const props: ModalLoadingProps = {
		/** （自動）開關設定 */
		isOpen: hasDestination ? true : isOpen,
		autoCloseModal: hasDestination ? true : isAutoClose, // 是否在倒數計時後自動關閉彈出視窗
		duration: hasDestination ? (!isOpen ? 0 : 2000) : 1500, // 彈出視窗可顯示的持續時間（需配合 autoCloseModal）
		manualClose: !(isLoading || hasDestination), // 是否可點擊 Ｘ or backdrop 關閉彈出視窗

		/** 基本設置 */
		message,
		loading: isLoading,
		iconType: status,
		onClose: handleClose,
	};

	function handleClose() {
		loadingDispatch({ type: LoadingActions.CLOSE });

		if (!hasDestination) return;

		switch (destination) {
			case 'reload':
				router.reload();
				break;
			default:
				router.push(destination);
		}
	}

	return (
		<LoadingContext.Provider value={{ loadingState, loadingDispatch }}>
			{children}
			<ModalLoading {...props} />
		</LoadingContext.Provider>
	);
};

export default LoadingContextProvider;

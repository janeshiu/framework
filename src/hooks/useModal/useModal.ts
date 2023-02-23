import { Dispatch, MouseEvent, SetStateAction, useState } from 'react';

type SingleModal = boolean;

type MultipleModals = {
	[modalName: string]: boolean;
};

/**
 *
 * @param initModal - if you have multiple modals, please provide [modalName]:false firstly
 * @returns
 */
const useModal = <T = SingleModal | MultipleModals>(initModal: T) => {
	type ModalNameType = keyof typeof initModal;
	const [isOpen, setIsOpen] = useState<T>(initModal);
	const isSignalModal = typeof isOpen === 'boolean';
	const setOpenModal = setIsOpen as Dispatch<Partial<SetStateAction<T>>>;

	/** open Modal */
	const openModal = (
		modalName?: T extends SingleModal
			? undefined | MouseEvent<HTMLElement>
			: ModalNameType
	) => {
		if (isSignalModal) {
			setOpenModal(true);
			return;
		}

		if (modalName === undefined || typeof modalName !== 'string') return;
		setOpenModal({ ...initModal, [modalName]: true });
	};

	/** 取得 - 多個 modal 時，關閉所有 modal 的 state 設置 */
	const getMultipleCloseState = () => {
		const modalNames = Object.keys(initModal as MultipleModals);
		const state: MultipleModals = {};

		modalNames.forEach((modalName) => {
			state[modalName] = false;
		});

		return state;
	};

	/** close Modal */
	const closeModal = () => {
		if (isSignalModal) {
			setOpenModal(false);
			return;
		}

		setOpenModal(getMultipleCloseState());
	};

	/** toggle Modal - you can control by passing parameter */
	const toggleModal = (
		openOrName?: T extends SingleModal ? SingleModal : ModalNameType,
		open?: T extends SingleModal ? undefined : boolean
	) => {
		if (isSignalModal) {
			const openValue = openOrName;
			setOpenModal((prev: boolean) => openValue ?? !prev);
			return;
		}

		const modalName = openOrName as keyof MultipleModals;
		if (modalName === undefined) return;

		setOpenModal((prev: MultipleModals) => {
			const prevState = prev[modalName];
			const closeState = getMultipleCloseState();
			return { ...closeState, [modalName]: open ?? !prevState };
		});
	};

	return {
		isOpen,
		openModal,
		closeModal,
		toggleModal,
	};
};

export default useModal;

import { useState } from 'react';

const useModal = () => {
	const [isOpen, setIsOpen] = useState(false);

	/** open Modal */
	const open = () => setIsOpen(true);

	/** close Modal */
	const close = () => setIsOpen(false);

	/** toggle Modal - you can control by passing parameter */
	const toggle = (open?: boolean) => setIsOpen((prev) => open ?? !prev);

	return {
		isOpen,
		open,
		close,
		toggle,
	};
};

export default useModal;

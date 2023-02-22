import { useEffect, useState } from 'react';

interface DisableScrollProps {
	disabled: boolean;
}

const useDisableScroll = (disabled: boolean) => {
	useEffect(() => {
		const element = document.body.parentElement;
		element?.setAttribute('data-scroll', `${!disabled}`);
	}, [disabled]);
};

export default useDisableScroll;

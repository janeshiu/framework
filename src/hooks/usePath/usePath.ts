import { useEffect, useState } from 'react';

const usePath = (href?: string) => {
	const [isCurrentPage, setIsCurrentPage] = useState(false);
	const [isSameOrigin, setIsSameOrigin] = useState(false);

	const handleCurrentPage = () => {
		if (href === undefined) {
			setIsCurrentPage(false);
			return;
		}

		const a = document.createElement('a');
		a.href = href.replace('#', '');
		a.onclick = (event) => {
			event.preventDefault();
			const hrefURL = new URL(a.href);
			const pageURL = new URL(window.location.href);

			setIsCurrentPage(hrefURL.href === pageURL.href);
		};
		a.click();
	};

	const handleSameOrigin = () => {
		if (href === undefined) {
			setIsSameOrigin(false);
			return;
		}

		const a = document.createElement('a');
		a.href = href.replace('#', '');
		a.onclick = (event) => {
			event.preventDefault();
			const hrefURL = new URL(a.href);
			const pageURL = new URL(window.location.href);

			setIsSameOrigin(hrefURL.origin === pageURL.origin);
		};
		a.click();
	};

	useEffect(() => {
		handleCurrentPage();
		handleSameOrigin();
	}, []);

	return {
		isCurrentPage,
		isSameOrigin,
	};
};

export default usePath;

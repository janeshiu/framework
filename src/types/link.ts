import { MouseEvent } from 'react';

export interface LinkItem {
	content: string;
	href?: string;
	disabled?: boolean;
	onClick?: (event: MouseEvent<HTMLElement>) => void;
}

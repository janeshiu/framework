import { MouseEvent } from 'react';

export interface LinkItem {
	content: string;
	href?: string;
	onClick?: (event: MouseEvent<HTMLElement>) => void;
}

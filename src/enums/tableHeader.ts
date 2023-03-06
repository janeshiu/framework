import { TheadItemProps } from '@/components/base/Table/Thead/TheadItem/TheadItem';
import { AlignType } from '@/types/style';

export const enum MathPower {
	RAISE = 'RAISE',
	DECREASE = 'DECREASE',
	UNSORTED = 'UNSORTED',
}

export interface TableHeaderItem<V = string> {
	id: V;
	title: string;
	width: string;
	sortable?: TheadItemProps['sortable'];
	mathPower?: TheadItemProps['mathPower'];
	align?: AlignType;
	// privilege: AuthRole[];
}

export const operatorTableHeader: TableHeaderItem[] = [
	{
		id: 'operator',
		title: '操作', // 詳細資訊
		width: 'minmax(100px, auto)',
		align: 'right',
	},
];

export const exampleTableHeader: TableHeaderItem[] = [
	{
		id: 'name',
		title: '名稱',
		width: '200px',
		sortable: true,
	},
	{ id: 'email', title: '電子信箱', width: '500px', sortable: true },
	{ id: 'a', title: '名稱a', width: 'minmax(200px, auto)' },
	{ id: 'b', title: '名稱b', width: '200px' },
	...operatorTableHeader,
];

import { TheadItemProps } from '@/components/base/Table/Thead/TheadItem/TheadItem';
import { AlignType } from '@/types/style';

export interface TableHeaderItem<V = string> {
	id: V;
	title: string;
	width: string;
	sortable?: TheadItemProps['sortable'];
	mathPower?: TheadItemProps['mathPower'];
	align?: AlignType;
	// privilege: AuthRole[];
}

export const exampleTableHeader: TableHeaderItem[] = [
	{ id: 'name', title: '名稱', width: '200px' },
	{ id: 'email', title: '電子信箱', width: '500px', align: 'right' },
	{ id: 'a', title: '名稱a', width: '200px' },
	{ id: 'b', title: '名稱b', width: '200px' },
	{ id: 'operation', title: '操作', width: 'minmax(100px, auto)' },
];

import { InputProps } from '../Form/InputSeries/Input';
import { ShapeType, SizeType } from '@/types/style';
import InputIcon, {
	InputIconProps,
} from '../Form/InputSeries/InputIcon/InputIcon';
import { BsSearch } from 'react-icons/bs';
import Form, { FormProps } from '../Form/Form';

interface SearchProps {
	size?: SizeType;
	shape?: ShapeType;
	className?: string;

	iconClickable?: boolean;
	iconPosition?: InputProps['buttonPosition'];

	inputProps?: Omit<
		InputIconProps['inputProps'],
		'name' | 'placeholder' | 'onSend'
	>;
	name?: string;
	placeholder?: string;

	messagesProps?: InputIconProps['messagesProps'];

	onSubmit: FormProps['onSubmit'];
}

/**
 * 搜尋欄位
 * @param size - 尺寸
 * @param shape - 形狀
 * @param className - className
 *
 * @param iconClickable - icon 是否可被點擊
 * @param iconPosition - icon 位置
 *
 * @param inputProps - InputBase props，排除 'name' | 'placeholder' | 'onSend' | 'content' | 'size' | 'shape'
 * @param name - input name
 * @param placeholder - input placeholder
 * @param messagesProps - Messages props，控制訊息顯示
 * @param onSubmit - onSubmit
 * @returns
 */
const Search: React.FC<SearchProps> = ({
	size = 'normal',
	shape = 'circle',
	className,

	iconClickable = true,
	iconPosition = 'right',

	inputProps,
	name = 'search',
	placeholder = '請輸入要搜尋的關鍵字',

	messagesProps,

	onSubmit,
}) => {
	return (
		<Form onSubmit={onSubmit} className={className}>
			<InputIcon
				size={size}
				shape={shape}
				icon={<BsSearch />}
				iconType={!iconClickable ? undefined : 'submit'}
				iconClickable={iconClickable}
				iconPosition={iconPosition}
				inputProps={{ ...inputProps, showClearButton: true, name, placeholder }}
				messagesProps={messagesProps}
			/>
		</Form>
	);
};

export default Search;

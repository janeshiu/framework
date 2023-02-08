import { InputProps } from '../Form/Input/Input';
import { ShapeType, SizeType } from '@/types/style';
import InputIcon, { InputIconProps } from '../Form/Input/InputIcon/InputIcon';
import { BsSearch } from 'react-icons/bs';
import Form, { FormProps } from '../Form/Form';

interface SearchProps {
	size?: SizeType;
	shape?: ShapeType;
	className?: string;

	iconClickable?: boolean;
	iconPosition?: InputProps['buttonPosition'];

	inputProps?: Exclude<
		InputIconProps['inputProps'],
		'name' | 'placeholder' | 'onSend'
	>;
	name?: string;
	placeholder?: string;

	messagesProps?: InputIconProps['messagesProps'];

	onSubmit: FormProps['onSubmit'];
}

const Search: React.FC<SearchProps> = ({
	size = 'normal',
	shape = 'circle',
	className,

	iconClickable = true,
	iconPosition = 'right',

	inputProps,
	name = 'search',
	placeholder,

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

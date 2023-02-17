import { BsSearch } from 'react-icons/bs';
import { InputProps } from '../Input';
import InputIcon, { InputIconProps } from '../InputIcon/InputIcon';

export interface InputSearchProps extends Omit<InputProps, 'type' | 'onClick'> {
	showIcon?: boolean;
	showSearchButton?: boolean;
	onClick?: InputIconProps['rightIconOnClick'];
}

/**
 * InputSearch - input[type='search'] 使用，後續 Input component 請以此進行調整
 * @param showIcon - show left search icon or not
 * @param showSearchButton - show right search button or not
 * @returns
 */
const InputSearch: React.FC<InputSearchProps> = ({
	showIcon = false,
	showSearchButton = true,
	onClick,
	...props
}) => {
	const { placeholder = '搜尋' } = props;
	return (
		<InputIcon
			{...props}
			type='search'
			placeholder={placeholder}
			leftIconShow={showIcon}
			leftIcon={<BsSearch />}
			leftIconDisabled
			rightIconShow={showSearchButton}
			rightIcon={<BsSearch />}
			rightIconOnClick={onClick}
		/>
	);
};

export default InputSearch;

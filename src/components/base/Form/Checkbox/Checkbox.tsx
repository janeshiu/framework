import InputToggle, {
	InputToggleProps,
} from '../Input/InputToggle/InputToggle';

export interface CheckboxProps extends Omit<InputToggleProps, 'type'> {}

/**
 * Input Checkbox 基礎元件
 * @param name - input name
 * @param content - label content
 * @param checked - is initial input checked?
 * @param disabled - is disabled?
 * @param value - input value
 *
 * @param className - className for component
 * @param checkedClassName - className for checked component
 * @param disablededClassName - className for disabled component
 *
 * @param size - component size
 * @param shape - input icon shape
 * @param fill - input icon style of checked
 * @param color - input icon color
 * @param hideIcon - hideIcon
 * @param onChange - callback of onChange event
 * @param afterChange - callback after isChecked state is changed(useEffect)
 * @returns
 */
const Checkbox: React.FC<CheckboxProps> = (props) => {
	return <InputToggle {...props} type='checkbox' fill={props.fill || true} />;
};

export default Checkbox;

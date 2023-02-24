import InputToggle, {
	InputToggleProps,
} from '../InputSeries/InputToggle/InputToggle';

export interface CheckboxProps extends Omit<InputToggleProps, 'type'> {}

/**
 * Input Checkbox 基礎元件
 * @param name - input name
 * @param content - label content
 * @param defaultValue - input defaultValue

 * @param checked - input checked
 * @param defaultChecked - input defaultChecked

 * @param className - className
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
	return <InputToggle {...props} type='checkbox' fill={props.fill ?? true} />;
};

export default Checkbox;

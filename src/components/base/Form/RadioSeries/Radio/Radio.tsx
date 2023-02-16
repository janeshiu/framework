import InputToggle, {
	InputToggleProps,
} from '../../InputSeries/InputToggle/InputToggle';

export interface RadioProps extends Omit<InputToggleProps, 'type' | 'shape'> {}

/**
 * Input Radio 基礎元件
 * @param name - input name
 * @param content - label content
 * @param defaultValue - input defaultValue

 * @param checked - input checked
 * @param defaultChecked - input defaultChecked

 * @param className - className
 * @param checkedClassName - className for checked component
 * @param disablededClassName - className for disabled component
 *
 * @param size - component size
 * @param fill - input icon style of checked
 * @param color - input icon color
 * @param hideIcon - hideIcon

 * @param onChange - callback of onChange event
 * @param afterChange - callback after isChecked state is changed(useEffect)
 * @returns
 */
const Radio: React.FC<RadioProps> = (props) => {
	return <InputToggle {...props} type='radio' />;
};

export default Radio;

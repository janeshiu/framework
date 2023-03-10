import styles from '../Radio.module.scss';
import Radio, { RadioProps } from '../Radio/Radio';

interface RadioButtonProps extends Omit<RadioProps, 'hideIcon' | 'fill'> {}

/**
 * RadioButton, 自訂 Input Radio 樣式
 * @param name - input name
 * @param content - label content
 * @param defaultValue - input defaultValue

 * @param checked - input checked
 * @param defaultChecked - input defaultChecked

 * @param className - className
 * @param disablededClassName - className for disabled component
 *
 * @param size - component size
 * @param color - input icon color
 * @param hideIcon - hideIcon

 * @param onChange - callback of onChange event
 * @param afterChange - callback after isChecked state is changed(useEffect)
 * @returns
 */
const RadioButton: React.FC<RadioButtonProps> = (props) => {
	const { className } = props;

	return (
		<Radio
			{...props}
			hideIcon
			className={`color--warning pattern--outline shape--round ${
				styles.radioButton
			} ${className ?? ''}`}
			disablededClassName={`pattern--disabled`}
		/>
	);
};

export default RadioButton;

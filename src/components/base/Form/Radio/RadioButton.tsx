import styles from './Radio.module.scss';
import Radio, { RadioProps } from './Radio';

interface RadioButtonProps extends Omit<RadioProps, 'hideIcon'> {}

/**
 * RadioButton, 自訂 Input Radio 樣式
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
 * @param color - input icon color
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
			checkedClassName={styles[`radioButton--checked`]}
			disablededClassName={`pattern--disabled ${
				styles[`radioButton--disabled`]
			}`}
		/>
	);
};

export default RadioButton;

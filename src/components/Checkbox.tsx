import styles from './Checkbox.module.css';
import { TaskInterface } from './Task';

interface CheckboxProps {
	task: TaskInterface;
	onClickCheckbox: () => void;
}

export function Checkbox({ task, onClickCheckbox }: CheckboxProps) {
	return (
		<div className={styles.round}>
			<input type='checkbox' id={`checkbox-${task.id}`} />
			<label htmlFor={`checkbox-${task.id}`}></label>
		</div>
	);
}

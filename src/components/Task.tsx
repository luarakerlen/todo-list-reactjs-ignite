import { Trash } from 'phosphor-react';
import { Checkbox } from './Checkbox';
import styles from './Task.module.css';

export interface TaskInterface {
	id: number;
	done: boolean;
	description: string;
}

interface TaskProps {
	task: TaskInterface;
}

export function Task({ task }: TaskProps) {
	function handleClickCheckbox() {
		task.done = !task.done;
	}

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<Checkbox task={task} onClickCheckbox={handleClickCheckbox} />
				{task.description}
			</div>
			<button className={styles.buttonDelete}>
				<Trash size={24} />
			</button>
		</div>
	);
}

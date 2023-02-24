import { Trash } from 'phosphor-react';
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
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<input type='checkbox' name='' id='' />
				{task.description}
			</div>
			<button className={styles.buttonDelete}>
				<Trash size={24} />
			</button>
		</div>
	);
}

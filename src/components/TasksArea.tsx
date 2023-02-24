import { EmptyArea } from './EmptyArea';
import { Task } from './Task';
import styles from './TasksArea.module.css';

export function TasksArea() {
	const hasSomeTask = true;

	return (
		<div className={styles.container}>
			<header>
				<div>
					<span className={styles.createdTasks}>Tarefas criadas</span>
					<span className={styles.numberOfTasks}>0</span>
				</div>
				<div>
					<span className={styles.finishedTasks}>Concluídas</span>
					<span className={styles.numberOfTasks}>0</span>
				</div>
			</header>
			<div>
				{hasSomeTask ? (
					<div>
						<Task />
						<Task />
						<Task />
					</div>
				) : (
					<EmptyArea />
				)}
			</div>
		</div>
	);
}

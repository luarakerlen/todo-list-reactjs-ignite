import { EmptyArea } from './EmptyArea';
import { Task, TaskInterface } from './Task';
import styles from './MainTasksArea.module.css';

interface TasksAreaProps {
	tasks: TaskInterface[];
	handleDeleteTask: (id: string) => void;
}

export function MainTasksArea({ tasks, handleDeleteTask }: TasksAreaProps) {
	const hasSomeTask = tasks.length !== 0;

	return (
		<div className={styles.container}>
			<header>
				<div>
					<span className={styles.createdTasks}>Tarefas criadas</span>
					<span className={styles.numberOfTasks}>{tasks.length}</span>
				</div>
				<div>
					<span className={styles.finishedTasks}>Concluídas</span>
					<span className={styles.numberOfTasks}>0 de {tasks.length}</span>
				</div>
			</header>
			<div>
				{hasSomeTask ? (
					<div>
						{tasks.map((task) => {
							return (
								<Task
									key={task.id}
									task={task}
									deleteTask={handleDeleteTask}
								/>
							);
						})}
					</div>
				) : (
					<EmptyArea />
				)}
			</div>
		</div>
	);
}

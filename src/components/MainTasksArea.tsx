import { EmptyArea } from './EmptyArea';
import { Task, TaskInterface } from './Task';
import styles from './MainTasksArea.module.css';

interface TasksAreaProps {
	tasks: TaskInterface[];
	handleDeleteTask: (id: string) => void;
	handleClickCheckbox: (id: string) => void;
}

export function MainTasksArea({
	tasks,
	handleDeleteTask,
	handleClickCheckbox,
}: TasksAreaProps) {
	const hasSomeTask = tasks.length !== 0;
	const doneTasks = tasks.filter((task) => task.done === true).length;

	return (
		<div className={styles.container}>
			<header>
				<div>
					<span className={styles.createdTasks}>Tarefas criadas</span>
					<span className={styles.numberOfTasks}>{tasks.length}</span>
				</div>
				<div>
					<span className={styles.finishedTasks}>Concluídas</span>
					<span className={styles.numberOfTasks}>
						{doneTasks} de {tasks.length}
					</span>
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
									handleClickCheckbox={handleClickCheckbox}
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

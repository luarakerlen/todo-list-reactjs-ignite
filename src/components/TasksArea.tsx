import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import uuid from 'react-uuid';

import { TaskInterface } from './Task';
import { MainTasksArea } from './MainTasksArea';
import styles from './TasksArea.module.css';

export function TasksArea() {
	const [newTaskText, setNewTaskText] = useState('');
	const [tasks, setTasks] = useState<TaskInterface[]>([]);

	const isInputEmpty = newTaskText === '';

	function handleCreateNewTask(event: FormEvent) {
		event.preventDefault();
		const newTask: TaskInterface = {
			id: uuid(),
			done: false,
			description: newTaskText,
		};

		setTasks([...tasks, newTask]);
		setNewTaskText('');
	}

	function handleChangeTaskText(event: ChangeEvent<HTMLInputElement>) {
		setNewTaskText(event.target.value);
	}

	function handleDeleteTask(idToBeRemoved: string) {
		const tasksWithoutDeletedOne = tasks.filter((task) => {
			return task.id !== idToBeRemoved;
		});

		setTasks(tasksWithoutDeletedOne);
	}

	function handleClickCheckbox(idToBeChecked: string) {
		const tasksEdited = tasks.map((task) => {
			if (task.id === idToBeChecked) {
				return {
					...task,
					done: !task.done,
				};
			} else return task;
		});

		setTasks(tasksEdited);
	}

	return (
		<>
			<form className={styles.form} onSubmit={handleCreateNewTask}>
				<input
					className={styles.input}
					type='text'
					placeholder='Adicione uma nova tarefa'
					value={newTaskText}
					onChange={handleChangeTaskText}
				/>
				<button className={styles.button} type='submit' disabled={isInputEmpty}>
					Criar
					<PlusCircle size={16} weight='bold' />
				</button>
			</form>
			<MainTasksArea
				tasks={tasks}
				handleDeleteTask={handleDeleteTask}
				handleClickCheckbox={handleClickCheckbox}
			/>
		</>
	);
}

import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import uuid from 'react-uuid';

import { TaskInterface } from './Task';
import { TasksArea } from './TasksArea';
import styles from './NewTaskArea.module.css';

export function NewTaskArea() {
	const [newTaskText, setNewTaskText] = useState('');
	const [tasks, setTasks] = useState<TaskInterface[]>([
		{ id: '1', done: false, description: 'Tarefa 1' },
		{ id: '2', done: false, description: 'Tarefa 2' },
	]);

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
				<button className={styles.button} type='submit'>
					Criar
					<PlusCircle size={16} weight='bold' />
				</button>
			</form>
			<TasksArea tasks={tasks} />
		</>
	);
}

import { PlusCircle } from 'phosphor-react';
import { FormEvent } from 'react';
import styles from './NewTaskArea.module.css';

export function NewTaskArea() {
	function handleCreateNewTask(event: FormEvent) {
		event.preventDefault();
	}

	return (
		<form className={styles.form} onSubmit={handleCreateNewTask}>
			<input
				className={styles.input}
				type='text'
				placeholder='Adicione uma nova tarefa'
			/>
			<button className={styles.button} type='submit'>
				Criar
				<PlusCircle size={16} weight='bold' />
			</button>
		</form>
	);
}

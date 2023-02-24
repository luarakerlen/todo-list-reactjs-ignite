import { PlusCircle } from 'phosphor-react';
import styles from './NewTaskArea.module.css';

export function NewTaskArea() {
	return (
		<form className={styles.form}>
			<input
				className={styles.input}
				type='text'
				placeholder='Adicione uma nova tarefa'
			/>
			<button className={styles.button} type='submit'>
				Criar
				<PlusCircle size={16} weight="bold" />
			</button>
		</form>
	);
}

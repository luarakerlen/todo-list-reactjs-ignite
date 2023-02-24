import { CheckCircle, Circle, Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from './Task.module.css';

interface TaskProps {
	id?: number;
	done?: boolean;
	description?: string;
}

export function Task({ id, done = false, description }: TaskProps) {
	const [checked, setChecked] = useState(done);

	function handleWithClick() {
		setChecked(!checked);
	}

	const CheckedButton = (
		<button className={styles.buttonChecked} onClick={handleWithClick}>
			<CheckCircle size={24} />
		</button>
	);

	const UnCheckedButton = (
		<button className={styles.buttonUnchecked} onClick={handleWithClick}>
			<Circle size={24} />
		</button>
	);

	return (
		<div className={styles.container}>
			{checked ? CheckedButton : UnCheckedButton}
			Tarefa blablabla tarefa
			<button className={styles.buttonDelete}>
				<Trash size={24} />
			</button>
		</div>
	);
}

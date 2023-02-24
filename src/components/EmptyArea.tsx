import { ClipboardText } from 'phosphor-react';
import styles from './EmptyArea.module.css';

export function EmptyArea() {
	return (
		<div className={styles.emptyArea}>
			<ClipboardText size={56} color='#808080' opacity={0.5} weight='light' />
			<span className={styles.firstText}>
				Você ainda não tem tarefas cadastradas
			</span>
			<span>Crie tarefas e organize seus itens a fazer</span>
		</div>
	);
}

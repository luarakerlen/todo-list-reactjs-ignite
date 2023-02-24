import { Header } from './components/Header';
import { NewTaskArea } from './components/NewTaskArea';
import { TasksArea } from './components/TasksArea';
import './global.css';

export function App() {
	return (
		<div>
			<Header />
			<NewTaskArea />
			<TasksArea />
		</div>
	);
}

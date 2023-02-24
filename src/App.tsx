import { Header } from './components/Header';
import { TasksArea } from './components/TasksArea';
import './global.css';

export function App() {
	return (
		<div>
			<Header />
			<TasksArea />
		</div>
	);
}

import { Header } from './components/Header';
import { NewTaskArea } from './components/NewTaskArea';
import './global.css';

export function App() {
	return (
		<div>
			<Header />
			<NewTaskArea />
		</div>
	);
}

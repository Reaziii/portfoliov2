import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import About from './Route/About/About';
import Home from './Route/Home/Home';
import Menu from './Component/Menu/Menu';
import Skills from './Route/Skills/Skills';
import Projects from './Route/Projects/Projects';
import EmailButton from './Component/EmailButton/EmailButton';
function App() {
	return (
		<div className="App">
			<Menu />
			<EmailButton />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/about" exact component={About} />
				<Route path="/skills" exact component={Skills} />
				<Route path="/projects" exact component={Projects} />
			</Switch>
		</div>
	);
}

export default App;

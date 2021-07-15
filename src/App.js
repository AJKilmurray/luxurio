import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/Home";
import Menu from './routes/Menu';
import About from "./routes/About";

function App() {
	return (
		<Router>
			<Route path="/" exact component={Home} />
			<Route path="/menu" exact component={Menu} />
			<Route path="/bookings" exact />
			<Route path="/about" exact component={About}/>
		</Router>
	);
}

export default App;

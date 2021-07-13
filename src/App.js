import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";

function App() {
	return (
		<Router>
			<Route path="/" exact component={Home} />
			<Route path="/menu" exact component={Menu} />
			<Route path="/bookings" exact />
			<Route path="/about" exact />
		</Router>
	);
}

export default App;

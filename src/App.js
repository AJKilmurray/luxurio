import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/Home";
import Menu from "./routes/Menu";
import About from "./routes/About";
import Beans from "./images/beans.svg";
import BackToTop from "./components/BackToTop";
import ScrollToTop from "./routes/ScrollToTop";

function App() {
  return (
    <Router>
      <img src={Beans} className="beans" alt="" />
      <ScrollToTop />
      <Route path="/" exact component={Home} />
      <Route path="/menu" exact component={Menu} />
      <Route path="/bookings" exact />
      <Route path="/about" exact component={About} />
      <Route path="/menu/category" component={Menu} />
      <BackToTop />
    </Router>
  );
}

export default App;

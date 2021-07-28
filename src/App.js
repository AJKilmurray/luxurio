import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/Home";
import Menu from "./routes/Menu";
import Beans from "./images/beans.svg";
import BackToTop from "./components/BackToTop";
import ScrollToTop from "./routes/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <img src={Beans} className="beans" alt="" />
        <ScrollToTop />
        <Route path="/" exact component={Home} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/menu/category" component={Menu} />
      </Router>
      <BackToTop />
    </>
  );
}

export default App;

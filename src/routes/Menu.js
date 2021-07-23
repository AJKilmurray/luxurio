import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import MenuNav from "../components/MenuNav";
import DisplayCategory from "../components/MenuCategoryDisplay";
import ItemDisplay from "../components/MenuItemDisplay";
import Footer from "../components/Footer";

// Utils
import { footerAccordians, menuCategories, menuNavHeader } from "../utils/utils";

function Menu() {
  return (
    <Router>
      <section id="menu-landing">
        <Navbar navLinks={["/", "bookings", "about"]} />
        <MenuNav heading={menuNavHeader} navCategories={menuCategories} />
        <Switch>
          <Route path="/menu/category/:category" exact children={<DisplayCategory menuCategories={menuCategories} />} />
          <Route path="/menu/category/:category/:item" exact children={<ItemDisplay menuCategories={menuCategories} />} />
        </Switch>
      </section>
      <Footer accordians={footerAccordians} />
    </Router>
  );
}

export default Menu;

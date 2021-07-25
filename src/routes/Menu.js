import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import MenuNav from "../components/MenuNav";
import MenuOverview from "../components/MenuOverview";
import DisplayCategory from "../components/MenuCategoryDisplay";
import ItemDisplay from "../components/MenuItemDisplay";
import Footer from "../components/Footer";

// Utils
import { footerAccordians, menuCategories, menuNavHeader } from "../utils/utils";

// Menu Page (/menu)
function Menu() {
  return (
    <>
      <section id="menu-landing">
        <Navbar navLinks={["/", "bookings", "about"]} />
        <Router>
          {/* Navigation between menu categories */}
          <MenuNav heading={menuNavHeader} navCategories={menuCategories} />
          <Switch>
            {/* Default /menu page */}
            <Route path="/menu" exact>
              <MenuOverview menuCategories={menuCategories} />
            </Route>
            {/* View menu category (/menu/category/dinner) */}
            <Route path="/menu/category/:category" exact>
              <DisplayCategory menuCategories={menuCategories} />
            </Route>
            {/* View menu category item (/menu/category/lunch/1) */}
            <Route path="/menu/category/:category/:item" exact>
              <ItemDisplay menuCategories={menuCategories} />
            </Route>
          </Switch>
        </Router>
      </section>
      <Footer accordians={footerAccordians} />
    </>
  );
}

export default Menu;

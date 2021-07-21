import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar";
import MenuNav from "../components/MenuNav";
import Footer from "../components/Footer";

// Utils
import { footerAccordians, menuNavCategories, menuNavHeader } from "../utils/utils";

function Menu() {
  return (
    <Router>
      <section id="menu-landing">
        <Navbar navLinks={["/", "bookings", "about"]} />
        <MenuNav heading={menuNavHeader} navCategories={menuNavCategories} />
      </section>
      <Footer accordians={footerAccordians} />
    </Router>
  );
}

export default Menu;

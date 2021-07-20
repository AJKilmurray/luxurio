import Navbar from "../components/Navbar";
import MenuNav from "../components/MenuNav";
import Footer from "../components/Footer";

// Utils
import {
  footerAccordians,
  menuNavCategories,
  menuNavHeader,
} from "../utils/utils";

function Menu() {
  return (
    <>
      <section className="landing-section" id="menu-landing">
        <Navbar navLinks={["/", "bookings", "about"]} />
        <MenuNav heading={menuNavHeader} navCategories={menuNavCategories} />
      </section>
      <Footer accordians={footerAccordians} />
    </>
  );
}

export default Menu;

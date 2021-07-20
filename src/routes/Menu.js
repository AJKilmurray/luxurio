import Navbar from "../components/Navbar";
import MenuNav from "../components/MenuNav";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

// Utils
import { footerAccordians, menuNavCategories, menuNavHeader } from "../utils/utils";

function Menu() {
	return (
		<>
			<section className="landing-section" id="menu-landing">
				<Navbar navLinks={["/", "bookings", "about"]} />
				<MenuNav heading={menuNavHeader} navCategories={menuNavCategories} />
			</section>
			<BackToTop />
			<Footer accordians={footerAccordians} />
		</>
	);
}

export default Menu;

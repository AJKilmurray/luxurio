import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Schedule from "../components/Schedule";
import Separator from "../components/Separator";
import stockMenu from "../images/stock-menu.png";
import PhotoGrid from "../components/PhotoGrid";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Beans from "../images/beans.svg";

// Utils
import { footerAccordians, photoGridItems, scheduleHeader, scheduleDays, homeHeroText, homeHeroTitle, homeSepText, homeSepTitle } from "../utils/utils";

function Home() {
	return (
		<>
			<img src={Beans} className="beans" alt="" />
			<main>
				<BackToTop top="#welcome" />
				<section id="welcome" className="landing-section">
					<Navbar navLinks={["menu", "bookings", "about"]} />
					<Hero title={homeHeroTitle} text={homeHeroText} buttonLink="bookings" buttonText="Book Now" />
				</section>
				<Schedule headers={scheduleHeader} days={scheduleDays} />
				<Separator textSide="left" title={homeSepTitle} text={homeSepText} btnLink="menu" btnText="Take a Look" imgSrc={stockMenu} />
				<PhotoGrid items={photoGridItems} />
				<Footer accordians={footerAccordians} />
			</main>
		</>
	);
}

export default Home;

import Navbar from "./Navbar";
import Hero from "./Hero";
import Separator from "./Separator";
import stockMenu from '../images/stock-menu.png';

function Home() {

	// Hero Title & Text
	const heroText =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae posuere augue. Nunc maximus eros eget elit iaculis, et facilisis metus porta. In hac habitasse platea dictumst. Phasellus varius tempus ipsum a egestas. Phasellus ornare, dolor sed molestie euismod, felis diam consequat sapien, sit amet rutrum justo tellus nec velit. Nulla vitae ornare dolor. Morbi imperdiet tellus ex.";
	const heroTitle = "Exceptional Tastes";

	// Separator Title & Text
	const sepText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae posuere augue. Nunc maximus eros eget elit iaculis, et facilisis metus porta. In hac habitasse platea dictumst. Phasellus varius tempus ipsum a egestas. Phasellus ornare, dolor sed molestie euismod, felis diam consequat sapien, sit amet rutrum justo tellus nec velit. Nulla vitae ornare dolor. Morbi imperdiet tellus ex.';
	const sepTitle = 'Extravagant Menus';

	return (
		<main>
			<section id="welcome" className="landing-section">
				<Navbar navLinks={["menu", "bookings", "about"]} />
				<Hero
					title={heroTitle}
					text={heroText}
					buttonLink="bookings"
					buttonText="Book Now"
				/>
			</section>
			<Separator textSide="left" title={sepTitle} text={sepText} btnLink="menu" btnText="Menu" imgSrc={stockMenu} />
		</main>
	);
}

export default Home;

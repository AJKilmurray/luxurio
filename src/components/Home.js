import Navbar from "./Navbar";
import Hero from "./Hero";

function Home() {
	const heroText =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae posuere augue. Nunc maximus eros eget elit iaculis, et facilisis metus porta. In hac habitasse platea dictumst. Phasellus varius tempus ipsum a egestas. Phasellus ornare, dolor sed molestie euismod, felis diam consequat sapien, sit amet rutrum justo tellus nec velit. Nulla vitae ornare dolor. Morbi imperdiet tellus ex.";
	const heroTitle = "Exceptional Tastes";
	return (
		<section id="welcome" className="landing-section">
			<Navbar navLinks={["menu", "bookings", "about"]} />
			<Hero
				title={heroTitle}
				text={heroText}
				buttonLink="bookings"
				buttonText="Book Now"
			/>
		</section>
	);
}

export default Home;

import Navbar from "../components/Navbar";
import Separator from "../components/Hero";

function About() {
	const heroText =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae posuere augue. Nunc maximus eros eget elit iaculis, et facilisis metus porta. In hac habitasse platea dictumst. Phasellus varius tempus ipsum a egestas. Phasellus ornare, dolor sed molestie euismod, felis diam consequat sapien, sit amet rutrum justo tellus nec velit. Nulla vitae ornare dolor. Morbi imperdiet tellus ex.";

	return (
		<section id="menu" className="landing-section">
			<Navbar navLinks={["/", "menu", "bookings"]} />
			<Separator />
		</section>
	);
}

export default About;

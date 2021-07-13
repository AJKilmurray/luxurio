import Navbar from "./Navbar";

function Menu() {
	return (
		<section id="menu" className="landing-section">
			<Navbar navLinks={["/", "bookings", "about"]} />
		</section>
	);
}

export default Menu;

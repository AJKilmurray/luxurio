import Navbar from "../components/Navbar";

function Menu() {
	return (
		<section className="landing-section">
			<Navbar navLinks={["/", "bookings", "about"]} />
		</section>
	);
}

export default Menu;

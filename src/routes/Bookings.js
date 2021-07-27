import Navbar from "../components/Navbar";
import Separator from "../components/Separator";

function Bookings() {
	return (
		<>
			<section className="landing-section">
				<Navbar navLinks={["/", "menu", "about"]} />
				<Separator textSide="left" />
			</section>
		</>
	);
}

export default Bookings;

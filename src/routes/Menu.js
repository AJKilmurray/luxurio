import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Menu() {
  return (
    <section className="landing-section">
      <Navbar navLinks={["/", "bookings", "about"]} />
    </section>
  );
}

export default Menu;

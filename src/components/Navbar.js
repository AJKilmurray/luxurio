import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import logo from "../logo.png";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

function Navbar({ navLinks }) {
	return (
		<header className="navbar">
			<div className="container nav-content">
				<div className="branding">
					<img src={logo} alt="Logo" className="logo" />
					<Link to="/" className="branding-title">
						Luxurio
					</Link>
				</div>
				<div className="socials">
					<a
						href="https://twitter.com/home"
						target="social"
						className="social-link"
					>
						<FaTwitter className="socials-icon" size={30} />
					</a>
					<a
						href="https://www.facebook.com/"
						target="social"
						className="social-link"
					>
						<FaFacebook className="socials-icon" size={30} />
					</a>
					<a
						href="https://www.linkedin.com/"
						target="social"
						className="social-link"
					>
						<FaLinkedin className="socials-icon" size={30} />
					</a>
					<a
						href="https://www.instagram.com/"
						target="social"
						className="social-link"
					>
						<FaInstagram className="socials-icon" size={30} />
					</a>
				</div>
				<nav className="nav-links flex-center">
					<ul className="nav-links-ul">
						<NavLinks links={navLinks} />
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Navbar;

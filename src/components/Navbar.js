import { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import logo from "../logo.png";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function Navbar({ navLinks }) {
	const [navState, setNavState] = useState(false);

	function toggleNavLinks() {
		setNavState(!navState);
		navState ? closeNavLinks() : openNavLinks();
	}

	function openNavLinks() {
		const navUl = document.querySelector(".nav-links-ul");
		const container = document.querySelector(".nav-links");
		container.style.height = `${navUl.offsetHeight}px`;
	}

	function closeNavLinks() {
		const container = document.querySelector(".nav-links");
		container.style.height = `0px`;
	}

	return (
		<header className="navbar" id="top">
			<div className="container nav-content">
				<div className="branding">
					<div className="brand">
						<img src={logo} alt="Logo" className="logo" />
						<Link to="/" className="branding-title">
							Luxurio
						</Link>
					</div>
					{navState ? (
						<IoClose className="nav-toggle" size={30} onClick={toggleNavLinks} />
					) : (
						<FaBars className="nav-toggle" size={24} onClick={toggleNavLinks} />
					)}
				</div>
				<div className="socials">
					<a href="https://twitter.com/home" target="social" className="social-link">
						<FaTwitter className="socials-icon" size={30} />
					</a>
					<a href="https://www.facebook.com/" target="social" className="social-link">
						<FaFacebook className="socials-icon" size={30} />
					</a>
					<a href="https://www.linkedin.com/" target="social" className="social-link">
						<FaLinkedin className="socials-icon" size={30} />
					</a>
					<a href="https://www.instagram.com/" target="social" className="social-link">
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
